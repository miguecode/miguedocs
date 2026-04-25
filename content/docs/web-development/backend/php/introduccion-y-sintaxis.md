---
title: "Introducción y sintaxis"
description: "💻 PHP (Hypertext Pre Processor)"
---

## 💻 PHP (Hypertext Pre Processor)

PHP es un lenguaje de código abierto muy popular en el ámbito del desarrollo web el cual se puede incrustar fácilmente en código HTML. Es muy popular, el 77% de los sitios web incluyen PHP.

### 📌 Características principales
- **Multiplataforma**: Puede correr en más de un sistema operativo (Windows, Linux, Mac).
- **Código invisible**: El código PHP es 'invisible' para el navegador.
- **Conexión a bases de datos**: Tiene capacidad para conectarse a bases de datos y puede expandir su potencial con plugins.

PHP, a diferencia de otros lenguajes, necesita un intérprete el cual devuelva en tiempo de ejecución una 'salida' (una respuesta).

✍️Sintaxis básica de PHP
- La extensión del archivo fuente debe ser .php, es decir, vamos a trabajar con archivos .php.
- Todo código va entre etiquetas de apertura y cierre. Todo lo que esté fuera de eso, el intérprete lo va a ignorar. Ojo, no es obligatoria la etiqueta de cierre.

### Ejemplos: 

```php
  <?php     // Etiqueta de apertura
  ?>        // Etiqueta de cierre (no es obligatoria)
```

```php
  <?php
    echo "Hola Mundo";
  ?>
```

- 'echo' devuelve el string que le pasemos. 
- Como en muchos otros lenguajes, cada instrucción debe finalizar con ' ; ' (caso contrario, va a romper). 
- A diferencia de C o C#, PHP no es un lenguaje compilado, sino que es un lenguaje interpretado. Por lo tanto, no hay validación previa para detectar errores como la falta de un ' ; '.
- PHP se parece bastante a JavaScript, aunque PHP es un poco más estricto.
- Las variables son case sensitivity (discrimina mayuscula de minúscula).
- La regla de estilo es usar lower camelCase.

### 📝 Comentarios en PHP:
//Holaaa  o  #Holaaa  y también bloques de comentarios entre: */   ....   /*

### 🛠 Tipos primitivos en PHP:
4 escalares: boolean, integer, float, string
2 compuestos: array, object
2 especiales: resource, null

### 💡 Variables:

Las variables se declaran con un signo $ adelante:

```php
$nombre = "Juan";
$edad = 25;
$sueldo = 8500.33;
$numeros = array(1, 2, 3);  // Array indexado, el típico de cualquier lenguaje
$nombres = array("hola" => "pepe", 350 => "Juan")  // Array asociativo (Key:Value)
```

El tipo de dato de las variables es inferido por el intérprete, al momento en el que se les da un valor. Ejemplos:

- $nombre será de tipo string
- $edad será de tipo int
- $sueldo será de tipo float

Esto quiere decir que es un lenguaje debilmente tipado, igual que JavaScript.
Esa diferencia se nota por ejemplo en C#, que ahí estamos obligados a especificar el tipo de dato que vamos a usar a la hora de declarar una variable, sea cual sea.

### 🔄 Conversión de Tipos
Las conversiones las realiza automáticamente PHP dependiendo del contenido de la variable, esto es porque como dijimos, es de tipado dinámico.

(int)$edad

```php
<?php
  print("nombre: $nombre");
  echo "edad:", $edad;
  printf("sueldo: %f", $sueldo);
?>
```

### 🔗 Operadores:
Los operadores son iguales a los de C, C# y Java.

###💻 Estructuras de control:
Las estructuras como IF, SWITCH, FOR, WHILE funcionan igual que en otros lenguajes.
El ForEach también es muy similar.

### ℹ️ Aclaraciones
En PHP, para concatenar no se usa el operador " + ", sino que se usa el " . "

```php
echo $nombre . " " . $apellido;
```

- No hay que hacer operaciones aritméticas en los echo. Es decir: echo 2+4;
- El \n sólo sirve en la consola. No en la página web del navegador.
- Para que funcione el breakline en el navegador, hay que usar " `<br/>` "

## 📚 Funciones en PHP

PHP tiene similitudes con C puesto que hereda de él, o implementa muchas funciones de él.
Funciones de cadenas: strlen(), strcmp(), strtolower(), strtoupper(), substr(), ucfirst(), ucwords()

Los nombres no son case-sensitive. Las funciones pueden recibir parámetros, retornar valores, y los parámetros pueden tener valores por default. Obviamente se leen de izquierda a derecha.

```php
  function NombreFuncion() {    
    // Código
  }
```

- 'var_dump' es una función MUY ÚTIL de PHP, ya que muestra el contenido detallado de cualquier elemento que le pasemos, sea del tipo que sea.

### 📋 Arrays en PHP

En PHP existen 3 tipos de arrays:
1. Arrays indexados (índices numéricos).
2. Arrays asociativos (índices nombrados).
3. Arrays multidimensionales (arrays que contienen otros arrays).

Tenemos que saber que en PHP casi todo es un array. Un objeto, por ejemplo, nosotros lo vamos a ver como que es un objeto. Pero invisiblemente, es decir, a un nivel más bajo, en realidad, un objeto es simplemente un array multidimensional (un array que contiene otros arrays).

### Declarar y mostrar un Array Indexado (índice numérico)

```php
$vec = array(1, 2, 3);  // Declaro un array de 3 elementos que va a contener 1, 2 y 3
var_dump($vec);   // Muestra: array(3) { [0]=>int(1) [1] =>int(2) [2] =>int(3) }
```

#### Otra forma: 

```php
$vec[0] = 1;
$vec[1] = 2;
$vec[2] = 3;
var_dump($vec);   //Muestra lo mismo que antes
```

### Declarar y mostrar un Array Asociativo (índice nombrado)

```php
$vec = array("Juan"=> 22, "Romina"=> 12, "Uriel"=> 8);
```

Funciona como si fuera un Dictionary, o como si fuera un simple array con valores keyValuePar. Es decir: cada 'key' tiene su 'value'. "Juan" va a ser la primera clave, y el 22, su valor.

```php
var_dump($vec);   //Muestra:   array(3) { ["Juan"]=>int(22) .... etc }
```

Otra forma:

```php
$vec ["Hugo"] =15;
$vec ["Juana"] = 36;
$vec ["Uriel"] = 8;
var_dump($vec);  //Muestra:  array(3) { ["Hugo"]=>int(15) .... etc }
```

### Funciones de Arrays

sort(), rsort(), asort(), ksort(), arsort(), krsort()
