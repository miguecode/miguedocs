---
title: "Álgebra Relacional"
---

Álgebra Relacional

Esto también forma parte del diseño. Hoy en día no se usa tanto, pero es parte del temario.

La Álgebra Relacional es un conjunto de operaciones de alto nivel que sirven para manipular relaciones. Permite, por ejemplo, seleccionar tuplas de relaciones individuales. El resultado de cada operación es una nueva relación.

El AG es como un momento PREVIO al momento de usar el motor de la BD. Como en la programación cuando antes de programar escribimos en 'pseudocódigo' el qué es lo que vamos a programar.
Lo que escribamos en AG no es SQL, después tenemos que trasladarlo a sentencias para el motor de BD. La idea es que, lo que escribimos en AG, después podamos bajarlo a cualquier motor de BD, independientemente de cómo sean las sentencias del motor que elijamos.

Operaciones de la Álgebra Relacional
- Unión, intersección, diferencia, producto cartesiano (como operadores tradicionales)
- Restricción (o selección), proyección, reunión y división (como operadores relacionales específicos para BD relacionales).


- Funciones de cada Operación
(Cada operación trabaja sobre 2 tablas, y da como resultado una tercer tabla).

OPERADORES TRADICIONALES
1) Unión: En una relación, se suman las tuplas de una tabla con otra. Se unen.
2) Intersección: En una relación, se suman las tuplas que aparezcan en ambas tablas.
3) Diferencia: En una relación, se mantienen sólo las tuplas que estén en la tabla A y no en la tabla B.
4) Producto cartesiano: En una relación, se combinan todas las combinaciónes posibles de filas.
(a, b, c) - (d, e)    --> Producto Cartesiano: (a-d, a-e, b-d, b-e, c-d, c-c) (en 2 tablas juntitas)



OPERADORES ESPECÍFICOS PARA BD RELACIONALES
5) Restricción (o selección): Extrae filas de una relación según una condición especificada. (WHERE)
6) Proyección: Extrae columnas de una relación dada, es como si le hiciera un SELECT a una tabla.
7) Reunión (o JOIN): Hace lo mismo que el Producto cartesiano, pero en base a una condición.
8) División: Quiere decir ¿Qué cosas de una tabla involucra a todas las de la segunda tabla?
La primer tabla sería el 'dividendo' y la segunda el 'divisor'.



En la Álgebra Relacional no podemos tener atributos de igual nombre. Por eso vamos a usar el operador RENAME.

PROVEEDORES RENAME LOCALIDAD AS PLOC
Esto es como el alias.



Aclaraciones (Considerando primer tabla = X y la segunda tabla = Z).
1) En la Unión el operador se llama UNION. Los repetidos se muestran una sola vez. Es conmutativa.
	Expresión Algebraica:   X UNION Z

2) En la intersección el operador se llama INTERSECT.
	Expresión Algebraica:   X INTERSECT Z

3) En la diferencia el operador se llama MINUS. No es conmutativa: si la invierto, cambia el resultado. Esto se lee: "Lo que esté en X y que no esté en Z"
	Expresión Algebraica:   X MINUS Z         (Que no sería lo mismo que Z MINUS X)

4) En el producto cartesiano, el operador se llama TIMES.
	Expresión Algebraica: X TIMES Z

Aca se hace una tercer tabla que va a ser más larga obviamente, ya que se hace como si fuera una propiedad distributiva. Es decir, el primero de aca < con todos los de aca >, después, el segundo de aca < con todos los de aca >. Después, el tercero de aca < con todos los de aca >. Y así con todos.

En esta operación, cuando lo pasamos a SQL no usamos TIMES. Hacemos esto:
FROM TABLA1, TABLA2. Aca no usamos ninguna palabra reservada. Esto mismo es el producto car.

5) En la restricción (o selección), el operador es WHERE, igual que cuando bajamos al motor.
	Expresión Algebraica: PROVEEDORES WHERE LOCALIDAD = 'Capital';

6) En la proyección pasa como en la restricción, no tiene un operador específico.
	Expresión Algebraica: PROVEEDORES ¨[LOCALIDAD]
					   o...  PROVEEDORES [LOCALIDAD, CLIENTES, ETC...]
Los [ ] indican proyección. Si hago PROVEEDORES [] o PROVEEDORES [*], proyecto TODO.

DATO:
Restricción y Proyección se pueden combinar.
Ejemplo: Obtener los números de proveedores (proyección) que viven en Avellaneda (restricción).

	Expresión Algebraica:
	(PROVEEDORES WHERE LOCALIDAD = 'Avellaneda') [NUMERO];


7) 1. En la reunión natural (o JOIN) el operador es el JOIN. Es conmutativo. Es natural porque la condición es una igualdad ( = ).

	Expresión Algebraica:
PROVEEDORES JOIN PRODUCTOS (que es lo mismo que: PRODUCTOS JOIN PROVEEDORES)

2. En la reunión theta es como la natural, pero cuando la condición es DISTINTA de igualdad. O sea, no es un =, sino que es un > <, etc.

	Expresión Algebraica:
	PROVEEDORES RENAME LOCALIDAD AS PLOCALIDAD
	
	PROVEEDORES TIMES PRODUCTOS WHERE...
	
Ahí lo que hicimos es hacer una expresión algebraica previa, y después la definitiva. Esto es válido.
Se usó el RENAME, y en otra sentencia se usó el TIMES y el WHERE

8) En la División el operador es el DIVIDEBY (dividir entre). Es útil para las consultas donde está implicada la palabra "todos" (Por ej.: 'Obtener los proveedores que suministran TODOS los productos').

La división quiere decir ¿Qué cosas de una tabla involucra a todas las de la segunda tabla?
La primer tabla sería el 'dividendo' y la segunda el 'divisor'.

Ejemplo:
Si el dividendo es una tabla con algunas combinaciones de NUMERO con PNRO:

Supongamos que en la tabla DIVIDENDO tenemos que el NUMERO 101 se repite 3 veces, con un PNRO de 01, 02 y 03.

Y supongamos que la tabla DIVISOR tiene como PNRO 01, 02 y 03. Eso quiere decir que NUMERO 101 involucra a TODAS las tuplas de la tabla DIVISOR. Por lo tanto, el 101 va a aparecer en la tabla resultado. Ya que involucra a todas de la otra tabla. En cambio si en la DIVISOR hay un NUMERO 102 que se repite 2 veces, una vez con un PNRO de 01 y otra vez con un PNRO de 03, el NUMERO 102 no va a mantenerse, ya que no involucra a todos, le faltó el PNRO 02 de la otra tabla.



También existe la operación 'Asignación relacional', que también es previa, como el RENAME.
R1 <-  PRODUCTOS WHERE PNRO = 001 [PNOMBRE]

Esa es una expresión algebraica de una asignación relacional. En R1 estoy guardando lo que devuelve la derecha. Sólo puedo guardar un valor en ese R1. No un vector de resultados, uno sólo. 

Generalmente el resultado se resuelve en una expresión algebraica. O quizá en dos, contando el RENAME. O como máximo 3: El RENAME, la asignación relacional, y por último la expresión algebraica definitiva.