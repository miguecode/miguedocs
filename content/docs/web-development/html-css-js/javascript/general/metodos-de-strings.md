---
title: "Métodos de Strings"
---

> Métodos de los strings en JavaScript

- toString() → En realidad este no es un método propio de los strings, pero lo vamos a ver acá. Se usa en otro tipo de datos, y sirve para pasarlos a string. Devuele un string en valores como números, booleanos, fechas, arrays, y demás, a string. Por ejemplo, pasamos un 125 a un "125" o un true en un "true". Y así con todos.

- concat(string1, string2, stringN) → Junta dos o más strings. Hoy en día ya no es tan usando porque se usa el operador " + " para concatenar más fácilmente.

- toLowerCase() → Devuelve una copia del string en minúsculas.

- toUpperCase() → Devuelve una copia del string en mayúsculas.

- trim() → Elimina los espacios al inicio y al final del string (muy útil al validar inputs de usuario).

- trimStart() / trimEnd() → Eliminan espacios solo al inicio o final respectivamente.

- split(separator, limit) → Divide el string en un ARRAY según el separador. Separator va a ser el string separador a tomar en cuenta, y el limit (opcional) define cuántas partes cortar como máximo.

- includes(substring) → Devuelve true si el string contiene el texto que le pasamos.

- startsWith(substring) → Devuelve true si el string comienza con ese texto.

- endsWith(substring) → Devuelve true si el string termina con ese texto.

- indexOf(substring, fromIndex) → Devuelve el índice de la primera aparición del texto pasado, o -1 si no existe.

- lastIndexOf(substring) → Devuelve el índice de la última aparición del texto pasado por parámetro.

- replace(searchValue, newValue) → Reemplaza la primera coincidencia por newValue.

- replaceAll(searchValue, newValue) → Reemplaza todas las coincidencias por newValue.

- charAt(index) → Devuelve el carácter en la posición indicada (index) del string. Si el índice no existe, devuelve una cadena vacía.

- at(index) → Devuelve el carácter en la posición indicada. Acepta índices negativos (desde el final). Es más moderno que charAt().

- charCodeAt(index) → Devuelve el código Unicode del carácter en la posición indicada.

- slice(start, end) → Devuelve una parte del string desde start hasta antes de end. No modifica el original. Si start es negativo, cuenta desde el final.

- substring(start, end) → Similar a slice, pero no acepta índices negativos.

- substr(start, length) → Devuelve una parte del string desde start, con una longitud dada. Está obsoleto, hay que evitar usarlo.

- match(regex) → Devuelve las coincidencias con una expresión regular. Si no hay, devuelve null.

- matchAll(regex) → Devuelve un iterador con todas las coincidencias (útil con for...of). El regex debe tener el flag g (global).

- search(regex) → Devuelve el índice de la coincidencia con una RegExp, o -1.

- repeat(count) → Repite el string la cantidad de veces indicada.

- localeCompare(otherString) → Compara dos strings según el orden local (útil para ordenamientos alfabéticos).

- normalize() → Normaliza el string para comparar caracteres Unicode (por ejemplo, letras con tilde).