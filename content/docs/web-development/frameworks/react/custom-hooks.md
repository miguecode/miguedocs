---
title: "Custom Hooks"
---

> Custom Hooks

- Como vimos en apuntes pasados, en React podemos crear nuestros propios hooks. La idea de crear hooks es hacer nuestro código más simple y reutilizable. 

- Vamos a hacer un ejemplo basado en FETCH. Es decir, cuando queremos hacer una petición a una API para obtener datos mediante fetch. Como vimos en el archivo del ejemplo base, siempre solemos hacer esto. Crear un useState de loading y otro de error, el useEffect para actualizar la data dinámicamente, y después los if() para determinar qué renderizar en el componente. Esto es un clásico. Con este hook que vamos a crear ahora, la idea es hacer esto más automático.

- Nuestro hook, entonces, se va a llamar useFetch (el 'use' adelante, para respetar el standard de hooks en React'). Y lo vamos a colocar dentro de una carpeta llamada hooks.


> useFetch

- Como dijimos recién, vamos a hacer nuestro propio hook llamado useFetch. Entonces, creamos un archivo llamado useFetch.ts y lo colocamos dentro de una carpeta llamada 'hooks'.

- Primero, vamos a colocarle su receptor de props/params:

	interface Props<T> {
		data: T | null;
		loading: boolean;
		error: Error | null;
	}

- Ahora sí, creamos el hook: 

	const useFetch<T>(url: string): Props<T> {
		const [data, setData] = useState<T | null>(null);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState<Error | null>(null);
	}

- Incluso podemos crear dos types para no tener que andar siempre escribiendo "<algo | null>", así:

	type Data<T> = T | null;
	type ErrorType = Error | null;

	const useFetch<T>(url: string): Props<T> {
		const [data, setData] = useState<Data<T>>(null);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState<ErrorType>(null);
	}


- Siempre que nosotros usemos un custom hook, vamos a manejar un useEffect. En este caos, lo vamos a usar para hacer el fetch. A continuación, voy a pegar el código entero de este archivo useFetch.ts:

	// Importamos los hooks que vamos a usar
	import { useEffect, useState } from "react";
	
	// Creamos Types específicos para usar en este hook
	type Data<T> = T | null;
	type ErrorType = Error | null;
	
	// Creamos una interfaz genérica para controlar lo que va a devolver el hook
	interface Params<T> {
	  data: Data<T>;
	  loading: boolean;
	  error: ErrorType;
	}
	
	// Creamos nuestro custom hook llamado 'useFetch'.
	// Va a recibir un tipo genérico T, y como prop recibe una url (string).
	// Va a retornar un valor de tipo Params<T>, la interfaz que creamos al principio
	export const useFetch = <T>(url: string): Params<T> => {
	
	  // Creamos los estados a usar y devolver: data, loading y error
	  const [data, setData] = useState<Data<T>>(null);
	  const [loading, setLoading] = useState(true);
	  const [error, setError] = useState<ErrorType>(null);
	
	  useEffect(() => {
	    const controller = new AbortController();
	    // No es obligatorio, pero es buena práctica.
	    // Sirve para cancelar la petición una vez que el componente se destruye
	
	    // Seteamos en true el estado del loading
	    setLoading(true);
	
	    // Creamos una función que va a obtener la data mediante el método fetch()
	    const fetchData = async () => {
	
	      // Hacemos un try-catch-finally para manejar la petición 
	      try {
	        // Obtenemos la respuesta del método fetch (el cual es async), pasándole la url y el controller creado
	        const response = await fetch(url, controller);
	
	        // Si la respuesta no es OK, lanzamos un error
	        if (!response.ok) {
	          throw new Error("Error en la petición");
	        }
	
	        // Creamos una variable jsonData de tipo T (el tipo recibido en el hook), el cual va a ser la data recibida en JSON
	        const jsonData: T = await response.json();
	
	        // Una vez que tenemos la data y además en JSON, la vamos a setear en el estado de la data que vamos a devolver
	        setData(jsonData);
	
	        // Si todo lo anterior funcionó, seteamos el estado de error en null
	        setError(null);
	      } catch (err) {
	        // Si algo falló, seteamos el error con el valor capturado
	        setError(err as Error);
	      } finally {
	        // Finalmente, seteamos en false el estado loading
	        setLoading(false);
	      }
	    }
	
	    // Ejecutamos la función que acabamos de crear
	    fetchData();
	
	    // Ponemos un return que se va a ejecutar una vez que el componente se destruya
	    return () => {
	      // Abortamos (cancelamos) la petición fetch, gracias al controller que creamos
	      controller.abort();
	    }
	  }, [url]) // La dependencia va a ser la URL recibida. Cada vez que cambia, se ejecuta el hook
	
	  // Retornamos un objeto que respeta la interfaz Params<T>
	  return { data, loading, error };
	}


- La idea es muy clara: el hook nos va a devolver 3 valores: data, loading y error. Estos tres valores los obtiene en base al resultado de la petición fetch que realiza a la URL recibida por prop. O sea que el componente que invoque a este hook, tiene que pasarle dicha URL, y recibir esas 3 variables. Veamos cómo quedaría el componente:

	import './App.css';
	import { useFetch } from './hooks';
	
	const url = "https://api.example.com/data";
	
	interface Data {
	  name: string;
	  lastName: string;
	  age: number;
	}
	
	function App() {
	  const { data, loading, error } = useFetch<Data>(url);
	
	  if (loading) {
	    return <div>Cargando...</div>
	  }
	
	  if (error) {
	    return <div>UPS! Hay un error: {error.message}</div>
	  }
	
	  return (
	    <div>{JSON.stringify(data)}</div>
	  )
	}
	
	export default App;