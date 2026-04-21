---
title: "JSON y StdClass"
---

JSON

Función json_encode(); transforma un objeto o un array de objetos en un string formato JSON.
Función json_decode(); transforma un string formato JSON en un objeto o un array de objetos.

Dato
StdClass es una clase que nos permite usar una clase dinámica vacía, para probar cosas.

$clase = new StdClass();
$clase va a ser una instancia de StdClass y le podemos crear y setear variables de forma dinámica:
$clase->nombre = "Juan";

El decode devuelve un StdClass. La idea es que nosotros, al leer de un JSON, ya que nos va a devolver todos objetos de tipo StdClass, lo pasemos al tipo de objeto que debe ser. Es decir, si yo leo un JSON de animales, no voy a obtener objetos de tipo Animal, sino que van a ser de tipo StdClass. Por ende, soy yo quien debe crear una función para pasarlos a que sean de tipo Animal.

Interfaz JSON Serializable