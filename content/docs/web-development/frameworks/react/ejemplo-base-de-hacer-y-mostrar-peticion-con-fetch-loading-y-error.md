---
title: "Ejemplo base completo de Petición Fetch con Loading y Error"
description: "Ejemplo clásico en React sobre cómo manejar un flujo completo asíncrono con fetch, estados de carga, manejo de excepciones y renderizado condicional."
---

En el siguiente ejemplo se ilustra el patrón convencional y básico que todo desarrollador de React suele utilizar para manejar el ciclo de vida de conexión asíncrona dentro de un componente antes de abstraerlo a un `Custom Hook`.

En este código controlamos de forma segura la petición a la API manejando visualmente a través del estado los escenarios en los que los datos se encuentran cargando (`loading`) y las comprobaciones de fallos tanto de la API como de la red de conexión (`error`). Todo esto mediante manejadores `try`-`catch`-`finally`.

```tsx
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Manejo general de los tres diferentes estados UI 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    // 1. Iniciamos explícitamente el ciclo de carga visual
    setLoading(true);

    try {
      // 2. Realizamos la llamada de red a la API (Asíncrono)
      const response = await fetch("https://api.example.com/data");

      // 3. Verificamos que el código HTTP sea exitoso (ej. 200 OK)
      if (!response.ok) {
        throw new Error("Error al obtener o recuperar los datos.");
      }

      // 4. Parseamos el cuerpo de la petición a formato legible JSON
      const jsonData = await response.json();

      // 5. Aplicamos en el estado final a nuestra UI con la data pura ya procesada
      setData(jsonData);
      
    } catch (error) {
      // Si todo lo anterior revienta por errores de código HTTP o no hay conexión web
      setError(error as string);
    } finally {
      // Ocurra lo que ocurra arriba (Error o Éxito), el ciclo de carga visual debe finalizar obligatoriamente aquí
      setLoading(false);
    }
  }

  // Despachamos solo una vez la ejecución de la función fetch en el momento de montura
  useEffect(() => {
    fetchData();
  }, []);


  // --- Renderizado Condicional Defensivo --- 

  if (loading) {
    return <div>Cargando y consultando información al servidor...</div>
  }

  if (error) {
    return <div>Ocurrió un error grave durante la operación: {error}</div>
  }

  // --- Renderizado Real Exitoso --- 

  return (
    <div>
      <h3>Data recibida con gran éxito:</h3> 
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App;
```