---
title: "Operadores. Op. aritméticos, lógicos, concatenación"
description: "Operadores en JavaScript"
---


## Operadores en JavaScript

### Operadores Aritméticos

- Son los que usamos para hacer operaciones matemáticas:

Operador		Nombre			Ejemplo		Resultado
___________________________________________________________________
+			Suma			5 + 2			7
-			Resta			5 - 2				3
| * | Multiplicación | 5 * 2 | 10 |
| --- | --- | --- | --- |
| / | División | 10 / 2 | 5 |
%			Módulo (resto)		10 % 3			1
| ** | Exponente | 2 ** 3 | 8 |  |
| --- | --- | --- | --- | --- |
| ++ | Incremento | x = 1; | x++ | 2 |
--			Decremento		x = 1;  x--			0

- **Ojo**: tanto ++ como -- pueden ser pre o post, y actúan distinto:

```typescript
let a = 5;
```
| let b = a++; | // A este punto, "b" es 5 y "a" es 6 |
| --- | --- |
| let c = ++a; | // A este punto, "c" es 7 y "a" es 7 |


### La Concatenación

- En JavaScript, el operador + también concatena strings:

```typescript
const nombre = "Juan";
const saludo = "Hola, " + nombre + "!";  // Ahora, saludo es "Hola, Juan!"
```
- Si uno de los operandos es string, JavaScript convierte el otro a string:

| "Hola" + 5 | // "Hola5" |  |
| --- | --- | --- |
| "2" + 2 | // "22" |  |
| 2 + 2 + "2" | // "42" | ← primero suma 2+2, después concatena con "2" |
| "2" + 2 + 2 | // "222" ← convierte todo en string desde el principio |  |

- Hay que tener cuidado con esto, ya que, como vimos, el orden sí importa.


## Otros Operadores Relacionados

### Operadores de Asignación

Operador		Significado			Ejemplo
________________________________________________________________
| = | Asignación | x = 10 |
| --- | --- | --- |
| += | Suma y asigna | x += 2 → x = x + 2 |
-=			Resta y asigna			x -= 2  → x = x - 2
| *= | Multiplica y asigna | x *= 2 | → x = x * 2 |
| --- | --- | --- | --- |
| /= | Divide y asigna | x /= 2 | → x = x / 2 |
| %= | Módulo y asigna | x %= 3 → x = x % 3 |  |


### Operadores de Comparación

Operador		Ejemplo		Significado			Resultado
______________________________________________________________________
| == | 5 == "5" | Igualdad con coerción | true |
| --- | --- | --- | --- |
| === | 5 === "5" | Igualdad estricta | false |
| != | 5 != "5" | Distinto con coerción | false |
| !== | 5 !== "5" | Distinto estricto | true |
| > | 5 > 3 | Mayor que | true |
| < | 5 < 3 | Menor que | false |
| >= | 5 >= 5 | Mayor o igual que | true |
| <= | 3 <= 2 | Menor o igual que | false |


### Operadores Lógicos

Operador		Nombre	Ejemplo			Resultado
___________________________________________________________
&&			AND		true && false		false
||			OR		false || true		true
!			NOT		!true				false

- **Ojo**: && y || no devuelven siempre booleanos, sino que a veces pueden devolver último valor evaluado. Esto se usa mucho para asignaciones condicionales.


## Concatenación vs Aritmética

| 2 + 2 | // 4 |  |
| --- | --- | --- |
| "2" + 2 | // "22" |  |
| 2 + "2" | // "22" |  |
| "2" - 1 | // 1 | ← resta forzada, lo convierte a number |
| "Hola" - 1 | // NaN | ← no logra forzar la resta, ya que "Hola" no se puede pasar a número |


### Template Strings

- Para evitar la concatenación con +, podemos usar template strings con backticks (alt + 96):

```typescript
const nombre = "Pedro";
const edad = 30;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
```