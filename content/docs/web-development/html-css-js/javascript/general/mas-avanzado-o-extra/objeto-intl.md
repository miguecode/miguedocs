---
title: "Objeto Intl"
description: "Aprende a usar la API Intl de JavaScript para formatear números, fechas, monedas y listas de forma nativa según el idioma y región del usuario."
---

El objeto **Intl** (*Internationalization*) es una API nativa de JavaScript que permite formatear números, textos, fechas, monedas y más, de manera sensible al idioma y la región del usuario. Es la herramienta estándar para garantizar que nuestras aplicaciones sean amigables en cualquier parte del mundo.

## 1. Intl.NumberFormat (Números y Monedas)

Permite convertir números crudos en formatos legibles según la cultura local, incluyendo el símbolo de moneda correcto.

```javascript
const numero = 1234567.89;

const formatoUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

console.log(formatoUSD.format(numero)); // "$1,234,567.89"
```

También es útil para porcentajes o separadores de miles específicos por país:

```javascript
const porcentaje = new Intl.NumberFormat('es-AR', {
  style: 'percent',
  maximumFractionDigits: 2,
});

console.log(porcentaje.format(0.7532)); // "75,32 %"
```

## 2. Intl.ListFormat (Listas)

Da formato a arrays de strings para que se lean como lenguaje natural (añadiendo comas y conjunciones como "y" o "o" según el idioma).

```javascript
const frutas = ['manzana', 'banana', 'naranja'];

const lista = new Intl.ListFormat('es', {
  style: 'long',
  type: 'conjunction', // Usa "y"
});

console.log(lista.format(frutas)); // "manzana, banana y naranja"
```

## 3. Intl.DateTimeFormat (Fechas y Horas)

Es la mejor alternativa nativa para formatear fechas sin recurrir a librerías externas pesadas como Moment.js.

```javascript
const fecha = new Date();

const formatoAR = new Intl.DateTimeFormat('es-AR', {
  dateStyle: 'full',
  timeStyle: 'short',
});

console.log(formatoAR.format(fecha)); // Ej: "martes, 9 de abril de 2024, 21:36"
```

Además de `full` y `short`, podemos usar `long` y `medium`, o incluso obtener las partes de la fecha de forma individual con `formatToParts()`.

## 4. Intl.RelativeTimeFormat (Tiempos Relativos)

Formatea frases que indican cuánto tiempo falta o ha pasado respecto a un punto.

```javascript
const tiempoRelativo = new Intl.RelativeTimeFormat('es', {
  numeric: 'auto', // Usa palabras como "ayer" en lugar de "hace 1 día"
});

console.log(tiempoRelativo.format(-3, 'day'));   // "hace 3 días"
console.log(tiempoRelativo.format(1, 'month'));   // "el próximo mes"
console.log(tiempoRelativo.format(-1, 'day'));   // "ayer"
```

## 5. Intl.Collator (Comparación de Strings)

Sirve para ordenar palabras alfabéticamente respetando las reglas de cada idioma (como el orden de la "ñ" o tildes).

```javascript
const palabras = ['ñandú', 'árbol', 'zapato', 'avión'];

// Ordenación alfabética correcta en español
const ordenadas = palabras.sort(new Intl.Collator('es').compare);

console.log(ordenadas); // ["árbol", "avión", "ñandú", "zapato"]
```

## 6. Intl.PluralRules (Reglas de Pluralización)

Ayuda a determinar qué forma gramatical del plural corresponde a una cantidad, lo cual varía enormemente entre idiomas.

```javascript
const plural = new Intl.PluralRules('en-US');

console.log(plural.select(1)); // "one"
console.log(plural.select(2)); // "other"
```