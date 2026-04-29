---
title: "Recorrer Arrays u Objetos (For, Foreach, Forof, Forin)"
description: "Diferentes formas de iterar estructuras de datos en JavaScript"
---

## 🔁 Métodos para recorrer datos

En JavaScript, existen varias formas de iterar sobre arrays y objetos. Dependiendo de la estructura y de lo que necesitemos obtener (índices, llaves o valores), elegiremos una u otra.

### Herramientas de extracción (`Object`)
Antes de recorrer un objeto, a menudo usamos estos métodos para convertir sus partes en arrays:
- **`Object.keys(obj)`**: Devuelve un array con los nombres de las propiedades.
- **`Object.values(obj)`**: Devuelve un array con los valores.
- **`Object.entries(obj)`**: Devuelve un array de pares `[llave, valor]`.

```javascript
const user = { name: "Migue", age: 25 };
console.log(Object.entries(user)); // [["name", "Migue"], ["age", 25]]
```

---

## 📊 Comparativa de Bucles

| Bucle | Uso principal | ¿Qué obtiene? | ¿Usa Callback? |
| :--- | :--- | :--- | :--- |
| **`for` clásica** | Arrays / General | Índice (`i`) | No |
| **`forEach()`** | Arrays | Elemento y opcionalmente Índice | **Sí** |
| **`for...of`** | Colecciones (Arrays) | **Valor** de cada elemento | No |
| **`for...in`** | Objetos | **Llave/Propiedad** (string) | No |

---

## 🚀 Ejemplos de Implementación

### 1. `for` clásica
Es la más flexible pero la más prolija de escribir.
```javascript
const numeros = [10, 20, 30];
for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice ${i}: ${numeros[i]}`);
}
```

### 2. `forEach()`
Específico para arrays. Automáticamente pasa el elemento y el índice al callback.
```javascript
const nombres = ["Ana", "Luis"];
nombres.forEach((nombre, index) => {
  console.log(`${index}: ${nombre}`);
});
```

### 3. `for...of` (Valores)
La forma más limpia de recorrer los **valores** de un array u objetos convertidos con `entries()`.
```javascript
const colores = ["Rojo", "Verde"];
for (const color of colores) {
  console.log(color);
}
```

### 4. `for...in` (Llaves)
Diseñado para recorrer las propiedades de un **objeto**.
```javascript
const auto = { marca: "Tesla", modelo: "S" };
for (const propiedad in auto) {
  console.log(`${propiedad}: ${auto[propiedad]}`); // auto[propiedad] accede al valor
}
```

---

> [!CAUTION]
> Evita usar **`for...in`** para recorrer arrays. Aunque funciona, itera sobre todas las propiedades heredadas y puede ser mucho más lento o devolver resultados inesperados si el prototipo fue modificado. Para arrays, usa siempre **`for...of`** or **`forEach()`**.

---

> [!TIP]
> Si necesitas recorrer un objeto y usar `await` dentro del bucle, usa **`for...of`** junto con `Object.entries()`. `forEach()` no funciona correctamente con funciones asíncronas de esa manera.