---
title: "Ejemplo base de hacer y mostrar petición con fetch, loading y error"
---

import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	
	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch("https://api.example.com/data");

			if (!response.ok) {
				throw new Error("Error al obtener datos");
			}

			const jsonData = await response.json();
			
			setData(jsonData);
		} catch (error) {
			setError(error as string);
		} finally {
			setLoading(false);
		}
	}
	
	useEffect(() => {
		fetchData()
	}, []);
	
	if (loading) {
		return <div>Cargando...</div>
	}

	if (error) {
		return <div>Ocurrió un error: { error }</div>
	}
	
	return <div>Data recibida: { JSON.stringify(data) }</div>
}