---
title: "Métodos de Strings"
description: "Guía rápida de los métodos de strings en JavaScript."
---


## Métodos de los strings en JavaScript

A continuación, se detallan los métodos más comunes para manipular cadenas de texto en JavaScript:

*   **`toString()`**: Aunque no es exclusivo de los strings, sirve para convertir otros tipos de datos (números, booleanos, fechas, arrays) a su representación en cadena de texto. Por ejemplo, convierte el número `125` en el string `"125"`.
*   **`concat(string1, ..., stringN)`**: Junta dos o más strings. Hoy en día es menos frecuente debido al uso del operador `+` o los *template literals*.
*   **`toLowerCase()`**: Devuelve una copia del string convertida a minúsculas.
*   **`toUpperCase()`**: Devuelve una copia del string convertida a mayúsculas.
*   **`trim()`**: Elimina los espacios en blanco al inicio y al final del string. Muy útil para validar entradas de usuario.
*   **`trimStart()` / `trimEnd()`**: Eliminan espacios solo al inicio o solo al final, respectivamente.
*   **`split(separator, limit)`**: Divide el string en un **array** según el separador indicado. El parámetro `limit` es opcional y define el máximo de partes a obtener.
*   **`includes(substring)`**: Devuelve `true` si el string contiene el texto buscado.
*   **`startsWith(substring)`**: Devuelve `true` si el string comienza con ese texto.
*   **`endsWith(substring)`**: Devuelve `true` si el string termina con ese texto.
*   **`indexOf(substring, fromIndex)`**: Devuelve el índice de la primera aparición del texto buscado, o `-1` si no existe.
*   **`lastIndexOf(substring)`**: Devuelve el índice de la última aparición del texto buscado.
*   **`replace(searchValue, newValue)`**: Reemplaza la **primera** coincidencia de un término por el nuevo valor.
*   **`replaceAll(searchValue, newValue)`**: Reemplaza **todas** las coincidencias halladas por el nuevo valor.
*   **`charAt(index)`**: Devuelve el carácter en la posición indicada. Si el índice no existe, devuelve una cadena vacía.
*   **`at(index)`**: Devuelve el carácter en la posición indicada. Acepta índices negativos para contar desde el final (ej: `-1` es el último carácter). Es más moderno que `charAt()`.
*   **`charCodeAt(index)`**: Devuelve el código Unicode (un número) del carácter en la posición indicada.
*   **`slice(start, end)`**: Devuelve una parte del string desde la posición `start` hasta justo antes de `end`. Si `start` es negativo, cuenta desde el final. No modifica el string original.
*   **`substring(start, end)`**: Similar a `slice`, pero no acepta índices negativos.
*   **`substr(start, length)`**: Devuelve una parte del string desde `start` con una longitud determinada. **Nota**: Está obsoleto y se recomienda evitar su uso.
*   **`match(regex)`**: Devuelve un array con las coincidencias halladas mediante una expresión regular.
*   **`matchAll(regex)`**: Devuelve un iterador con todas las coincidencias. Requiere que la expresión regular tenga el flag `/g` (global).
*   **`search(regex)`**: Devuelve el índice de la coincidencia con una expresión regular, o `-1`.
*   **`repeat(count)`**: Repite el string la cantidad de veces indicada.
*   **`localeCompare(otherString)`**: Compara dos strings según el orden local (alfabéticamente), muy útil para ordenamientos.
*   **`normalize()`**: Normaliza el string para comparar caracteres Unicode (como letras con tildes o caracteres compuestos).