---
title: "Diferencia entre == y ==="
---

> Diferencia entre "==" y "===" en JavaScript

- Como sabemos, en C# usabamos siempre '==', y estaba bien porque era un lenguaje fuertemente tipado en el cual el '==' infería en el tipo de los datos a comparar. Es decir, si comparabamos dos valores de distinto tipo, automaticamente eso devolvía false.

	En C#:   5 == "5" ---> false

- Sin embargo, en JavaScript (tipado dinámico/debilmente tipado) existe el "==" y el "===". 

- En este lenguaje, el "==" NO infiere en el tipo. Es decir, no le importa si los dos valores a comparar son del mismo tipo o si no lo son. Lo único que le importa es que coincidan en el propio valor.

	En JS:   5 == "5" ---> true


- En cambio, el "===" (también llamada comparación estricta) de JavaScript funciona igual que como lo haría el "==" de C#. Ya que a este SÍ le importa el tipo. Por lo tanto, si los elementos a comparar son de distinto tipo, devuelve false.

	En JS:   5 === "5" ---> false

- En JS, lo ideal es SIEMPRE usar "===" y "!==" en vez de "==" y "!=" para evitar posibles errores.


> Resumen

	== comparar sólo por valor
	=== comparar por valor y tipo

	En JS:   5 == "5" ---> true
	En JS:   5 === "5" ---> false