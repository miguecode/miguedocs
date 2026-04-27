---
title: "Custom Hooks"
description: "Aprende a crear tus propios hooks en React. Desarrollamos paso a paso un custom hook 'useFetch' reutilizable con manejo de estados, errores y AbortController."
---

En React podemos crear nuestros propios hooks (Custom Hooks). La idea principal de crear hooks es abstraer la lógica compleja de los componentes para hacer nuestro código más simple, limpio y, sobre todo, reutilizable. 

Vamos a desarrollar un ejemplo completo basado en realizar peticiones HTTP (Fetch). Normalmente, cuando queremos hacer una petición a una API para obtener datos mediante fetch, siempre solemos hacer lo mismo: creamos un `useState` para la *data*, otro para el *loading* y otro para el *error*; luego un `useEffect` para actualizar la data dinámicamente y, por último, los `if()` correspondientes en la interfaz para determinar qué renderizar. Esto es un clásico.

Con este hook que vamos a crear ahora, la idea es hacer todo este proceso mucho más automático. Nuestro hook se va a llamar `useFetch` (agregando la palabra `use` adelante, para respetar el estándar obligatorio de hooks en React) y lo vamos a colocar dentro de una carpeta llamada `hooks`.

---

## Creando useFetch

Primero, creamos un archivo llamado `useFetch.ts` y lo colocamos dentro de la carpeta `hooks`. Para que el entorno sea robusto usando TypeScript, vamos a colocarle su interfaz receptora de props/params:

```typescript
interface Props<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
```

Ahora sí, maquetamos nuestro hook base:

```typescript
const useFetch<T>(url: string): Props<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
}
```

Incluso podemos refactorizar esto creando dos `types` personalizados arriba para no tener que andar siempre escribiendo `algo | null` consecutivamente:

```typescript
type Data<T> = T | null;
type ErrorType = Error | null;

const useFetch<T>(url: string): Props<T> {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);
}
```

Siempre que nosotros construyamos un custom hook que realice operaciones, vamos a manejar un `useEffect`. En este caso, lo vamos a usar explícitamente para abstraer toda la ejecución técnica del fetch. 

A continuación, voy a dejar el código entero bien comentado de este archivo `useFetch.ts`:

```typescript
// Importamos los hooks básicos que vamos a usar
import { useEffect, useState } from "react";

// Creamos Types específicos para usar en este hook y mejorar legibilidad
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

  // Creamos los estados principales a usar y a devolver
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    // No es obligatorio, pero SÍ es una excelente práctica.
    // Sirve para cancelar la petición de red abierta en caso de que 
    // el componente se destruya antes de recibir respuesta.
    const controller = new AbortController();

    // Seteamos en true el estado del loading inicial
    setLoading(true);

    // Creamos una función asíncrona que va a obtener la data mediante fetch()
    const fetchData = async () => {

      // Try-Catch-Finally para poder manejar la petición correcta y los errores
      try {
        // Ejecutamos fetch, pasándole la url y nuestro Abort Controller
        const response = await fetch(url, { signal: controller.signal });

        // Si la respuesta no es OK en su status HTTP, forzamos un error manual
        if (!response.ok) {
          throw new Error("Error en la petición a la API");
        }

        // Si es ok, parseamos a JSON estableciendo nuestra data en formato tipo T
        const jsonData: T = await response.json();

        // Actualizamos estado exitoso de la Data
        setData(jsonData);
        setError(null);
        
      } catch (err) {
        // Si algo en el flujo principal falló (ej: error 500, o se cortó internet), seteamos el error
        // Omitimos setear el error si el mismo fue provocado por el abort (desmontaje del componente)
        if ((err as Error).name !== 'AbortError') {
             setError(err as Error);
        }
      } finally {
        // Finalmente, independientemente del éxito o el fracaso, desactivamos el loading
        setLoading(false);
      }
    }

    // Ejecutamos la función interna que acabamos de crear
    fetchData();

    // El return en useEffect se ejecuta una vez que el componente actualiza o se destruye
    return () => {
      // Abortamos preventivamente la petición fetch abierta
      controller.abort();
    }
  }, [url]) // La dependencia es la URL. Si la URL cambia en tiempo real, se re-ejecuta el hook automáticamente.

  // Por último, retornamos nuestro clásico objeto que respeta la interfaz Params<T>
  return { data, loading, error };
}
```

---

## Cómo usar el Custom Hook
La idea fundamental y el propósito de todo este desarrollo es sumamente clara: el hook nos va a devolver dinámicamente 3 valores empaquetados (`data`, `loading` y `error`) en base al resultado de su petición HTTP con `fetch` a la URL que decidamos mandarle por propiedad. 

O sea que el componente o la página que invoque a este hook, únicamente tiene que concentrarse en pasarle dicha URL y enfocarse netamente en construir los elementos visuales (*UI*) consumiendo esas tres variables devueltas.

Veamos cómo de limpio quedaría un componente (`App.tsx`):

```tsx
import './App.css';
import { useFetch } from './hooks/useFetch';

const url = "https://api.example.com/data";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, loading, error } = useFetch<Data>(url);

  if (loading) {
    return <div>Cargando la información...</div>
  }

  if (error) {
    return <div>¡UPS! Se detectó un problema en la carga: {error.message}</div>
  }

  // Si no está cargando ni hay error, significa que la Data es segura:
  return (
    <div>
      <h2>Usuario Recibido:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App;
```