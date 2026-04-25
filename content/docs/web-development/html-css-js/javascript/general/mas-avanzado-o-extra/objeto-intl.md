---
title: "Objeto Intl"
description: "El objeto Intl (Internationalization) es una API nativa de JavaScript que permite formatear números, textos, fechas, monedas, y más, según el idioma y la región..."
---



- El objeto Intl (Internationalization) es una API nativa de JavaScript que permite formatear números, textos, fechas, monedas, y más, según el idioma y la región del usuario. 


1. Intl.NumberFormat (Para formatear números y monedas)

```typescript
const numero = 1234567.89;

const formatoUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

console.log(formatoUSD.format(numero)); // Muestra $1,234,567.89
```
- También sirve para formatear como porcentaje o con separadores de miles:

```typescript
const porcentaje = new Intl.NumberFormat('es-AR', {
  style: 'percent',
  maximumFractionDigits: 2,
});

console.log(porcentaje.format(0.7532)); // Muestra '75,32 %'
```
2. Intl.ListFormat – Para formatear listas

```typescript
const frutas = ['manzana', 'banana', 'naranja'];

const lista = new Intl.ListFormat('es', {
  style: 'long',
  type: 'conjunction',
});

console.log(lista.format(frutas)); // Muestra 'manzana, banana y naranja'
```
- Se adapta automáticamente a las reglas del idioma.


3. Intl.DateTimeFormat – Para formatear fechas y horas

```typescript
const fecha = new Date();

const formatoAR = new Intl.DateTimeFormat('es-AR', {
  dateStyle: 'full',
  timeStyle: 'short',
});

console.log(formatoAR.format(fecha)); // Muestra 'martes, 9 de abril de 2025 21:36' (por ejemplo)
```
- Así como usamos full y short, también existen long y medium.

- También podemos formatear con más precisión, parte por parte:

```typescript
const partes = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
}).formatToParts(new Date());

console.log(partes); [{ type: 'month', value: 'April' }, { type: 'literal', value: ' ' }, { type: 'day', value: '09' }]
```
4. Intl.RelativeTimeFormat – Para tiempos relativos

```typescript
const tiempoRelativo = new Intl.RelativeTimeFormat('es', {
  numeric: 'auto',
});

console.log(tiempoRelativo.format(-3, 'day')); // Muestra 'hace 3 días'
console.log(tiempoRelativo.format(1, 'month')); // Muestra 'el próximo mes'
```
- Útil para frases relativas al tiempo.


5. Intl.Collator – Para comparar strings de forma sensible al idioma

- Sirve para ordenar palabras alfabéticamente según el idioma

```typescript
const palabras = ['ñandú', 'árbol', 'zapato', 'avión'];
const ordenadas = palabras.sort(new Intl.Collator('es').compare);
console.log(ordenadas); // Muestra ['árbol', 'avión', 'ñandú', 'zapato']
```
- **También sirve para comparar**: 

```typescript
const comparador = new Intl.Collator('es', { sensitivity: 'base' });
console.log(comparador.compare('hola', 'HOLA')); // 0 (considera iguales)
```
6. Intl.PluralRules – Para saber el plural correcto

```sql
const plural = new Intl.PluralRules('en-US');

console.log(plural.select(1)); // 'one'
console.log(plural.select(3)); // 'other'
```
- Útil para la interpolación de strings en diferentes idiomas.