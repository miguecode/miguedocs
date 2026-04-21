---
title: "Rutas Absolutas y Relativas"
---

> Rutas Absolutas

- Las rutas absolutas son siempre iguales, ya que no lo importa desde dónde las accedamos. Es decir, no importa en dónde estemos parados, la ruta absoluta siempre se escribe igual, y siempre nos hace llegar correctamente a ella. Siempre comienzan desde un punto fijo, como el dominio en una URL o la raíz de un sistema de archivos.

- Las rutas absolutas se usan siempre para las URL, por una cuestión lógica. Entonces, una ruta absoluta puede ser la URL a Google:

	https://www.google.com

- Otro ejemplo de ruta absoluta puede ser una ruta de nuestro sistema, así:

	C:/Users/JUNIOR/Desktop/Carpeta1/

- Eso sería una ruta absoluta. Ya que, accedamos desde donde accedamos, siempre nos va a llevar al mismo lugar. Eso es así porque la ruta es explícita de inicio a fin. Pero manejarnos así con las rutas de nuestro sistema no es lo ideal, se vuelve engorroso. Para esto vamos a usar las rutas relativas.


> Rutas Relativas

- Estas son las que más se usan. De hecho, cuando estamos programando o moviéndonos por los archivos de nuestro proyecto o de nuestro sistema, SIEMPRE vamos a estar manipulando rutas RELATIVAS. 

- Las rutas relativas, son a las que SÍ les importa en dónde estamos parados. Estas rutas indican la ubicación de un archivo o carpeta en relación con la posición actual. Es decir, dependen de la carpeta en la que estemos ubicados, y por eso a veces las escribimos de una forma u otra.

> Ejemplo considerando esta jerarquía de archivos:

Desktop
	|----  Carpeta1
	|	          |----  MiniCarpeta1  ----  OtraCarpeta  ----  Carpetita
	|	          |----  MiniCarpeta2  ----  Hola.txt
	|
	|----  Carpeta2  ----  MiniCarpeta3
	|
	|----  Carpeta3  ----  Chau.txt

- Supongamos que estamos parados dentro de "MiniCarpeta3", y queremos acceder al archivo "Hola.txt", el cual está dentro de MiniCarpeta 2. Para eso, vamos a usar la ruta relativa:

	../Carpeta1/MiniCarpeta2/Hola.txt
	
- Ese   "  ../  "  es un paso hacia atrás, o hacia afuera, o hacia arriba. Como queramos verlo. Si nosotros estábamos dentro de MiniCarpeta3, al hacer  "  ../  "  nos movimos hacia Carpeta2. Después, a partir de ahí, nos vamos acercando a donde queremos con   /   .

- Supongamos que estamos parados dentro de "Carpetita", y queremos acceder al archivo "Chau.txt", el cual está dentro de Carpeta3. Para eso, vamos a usar la ruta relativa:

	../../../Carpeta3/Chau.txt
	

- También podemos aclarar que  "  ./  "  , es decir, con un solo puntito, significa "El directorio actual". Es decir, el lugar en el que estamos parados. En VSCode puede escribirse para que nos muestre los otros archivos o carpetas disponibles del lugar en el que estamos parados.