---
title: "Operadores. Op. aritméticos, lógicos, concatenación"
description: "Guía completa sobre los operadores aritméticos, lógicos, de comparación y asignación en JavaScript."
---


## Operadores en JavaScript

### Operadores Aritméticos

Son los que usamos para realizar operaciones matemáticas básicas:

| Operador | Nombre | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `+` | Suma | `5 + 2` | `7` |
| `-` | Resta | `5 - 2` | `3` |
| `*` | Multiplicación | `5 * 2` | `10` |
| `/` | División | `10 / 2` | `5` |
| `%` | Módulo (resto) | `10 % 3` | `1` |
| `**` | Exponente | `2 ** 3` | `8` |
| `++` | Incremento | `x = 1; x++` | `2` |
| `--` | Decremento | `x = 1; x--` | `0` |

> [!NOTE]
> Tanto `++` como `--` pueden ser pre o post, y actúan distinto en la asignación:
> 
> ```javascript
> let a = 5;
> let b = a++; // b es 5 y a es 6 (primero asigna, luego incrementa)
> let c = ++a; // c es 7 y a es 7 (primero incrementa, luego asigna)
> ```

### La Concatenación

In JavaScript, el operador `+` también se utiliza para concatenar strings. Si uno de los operandos es un string, JavaScript convierte automáticamente el otro operando a string (coerción):

```javascript
const nombre = "Juan";
const saludo = "Hola, " + nombre + "!";  // "Hola, Juan!"

"Hola" + 5;   // "Hola5"
"2" + 2;      // "22"
2 + 2 + "2";  // "42" (Primero suma 2+2=4, luego concatena "4" + "2")
"2" + 2 + 2;  // "222" (Convierte todo a string desde el principio)
```

### Operadores de Asignación

| Operador | Significado | Ejemplo |
| :--- | :--- | :--- |
| `=` | Asignación | `x = 10` |
| `+=` | Suma y asigna | `x += 2` (equivale a `x = x + 2`) |
| `-=` | Resta y asigna | `x -= 2` (equivale a `x = x - 2`) |
| `*=` | Multiplica y asigna | `x *= 2` (equivale a `x = x * 2`) |
| `/=` | Divide y asigna | `x /= 2` (equivale a `x = x / 2`) |
| `%=` | Módulo y asigna | `x %= 3` (equivale a `x = x % 3`) |

### Operadores de Comparación

| Operador | Ejemplo | Significado | Resultado |
| :--- | :--- | :--- | :--- |
| `==` | `5 == "5"` | Igualdad (con coerción) | `true` |
| `===` | `5 === "5"` | Igualdad estricta (valor y tipo) | `false` |
| `!=` | `5 != "5"` | Distinto (con coerción) | `false` |
| `!==` | `5 !== "5"` | Distinto estricto | `true` |
| `>` | `5 > 3` | Mayor que | `true` |
| `<` | `5 < 3` | Menor que | `false` |
| `> =` | `5 >= 5` | Mayor o igual que | `true` |
| `<= ` | `3 <= 2` | Menor o igual que | `false` |

### Operadores Lógicos

| Operador | Nombre | Ejemplo | Resultado |
| :--- | :--- | :--- | :--- |
| `&&` | AND | `true && false` | `false` |
| `||` | OR | `false || true` | `true` |
| `!` | NOT | `!true` | `false` |

> [!TIP]
> Los operadores `&&` y `||` no siempre devuelven booleanos; pueden retornar el último valor evaluado, lo cual es muy útil para asignaciones condicionales o valores por defecto.

### Concatenación vs Aritmética

```javascript
2 + 2;        // 4
"2" + 2;      // "22"
2 + "2";      // "22"
"2" - 1;      // 1 (resta forzada, convierte el string a número)
"Hola" - 1;   // NaN (no se puede convertir "Hola" a número)
```

### Template Strings

Para evitar la concatenación compleja con `+`, se recomienda usar **Template Strings** con backticks (`` ` ``):

```javascript
const nombre = "Pedro";
const edad = 30;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
```