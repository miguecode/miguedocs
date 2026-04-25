---
title: "POO en PHP"
description: "Programación Orientada a Objetos en PHP"
---


Programación Orientada a Objetos en PHP
Esto lo hace un poco más parecido a C#. Aún así, se sigue pareciendo más a JS. Es decir, el lenguaje originalmente no tenía estas funcionalidades, pero como con el tiempo existían muchos programadores acostumbrados a la POO, se agregaron todos estos conceptos al lenguaje. En JavaScript pasó lo mismo con la aparición de las clases y demás, y más adelante con el superset de JS llamado TypeScript, el cual explota mucho más el concepto de la POO.


Clases en PHP
Ejemplos de clases en PHP:

class NombreClase
{
```php
// Atributos (private - protected- public/var - static)
[Modificadores] $nombreAtributo;

// Métodos (private - protected- public/var - static)
{ ... }
```
}

class NombreClase
{
```php
// Atributos
private $_attr1;
protected $_attr2;

// Constructor
public function __construct() { ... }

// Métodos
private function Func1($param) { ... }
protected function Func2() { ... }
public function Func3() { ... }
```
}

Aclaración con el constructor
El constructor siempre debe ser __construct. Es un método especial. Y es el único posible. Cuando instanciamos una clase, el que va a trabajar es ese constructor. Después, en el constructor podemos codear lo que sea. En PHP NO existe la sobrecarga de constructores.

Aclaración con el $
Cuando creamos un atributo en una clase, obviamente tenemos que ponerle $ adelante. Pero después, con las instancias existe una excepción: cuando creamos una instancia de una clase, y queremos acceder a unos de sus atributos, ahí no hay que ponerle el $. Es decir, si tengo el atributo $_nombre y creo un objeto Persona llamado '$persona1', accedo a su nombre así:
$persona1->_nombre;   (donde a nombre no le pongo el $).

Objetos en PHP
El operador ' -> ' se usa para acceder a los miembros de instancia de la clase. El operador ' :: ' es para acceder a los miembros estáticos de la clase.

// Creo el objeto
$nombreObj = new NombreClase();

// Métodos de instancia
$nombreObj->Func3();

// Atributos de instancia
$nombreObj->attr3;   //Al ser de instancia el atributo, (es decir, de un objeto), 'attr3' no lleva el '$'

// Métodos de clase (métodos estáticos)
NombreClase::Func4();

// Atributos estáticos
NombreClase::$attr4;

Clases - $this
En los scopes de las clases, podemos usar la palabra reservada $this. Para los estáticos, en vez de usar $this vamos a usar self.

Herencia
Usamos 'extends' para indicar a la clase padre de una clase. Obviamente, esta clase derivada (hija) va a tener su propio constructor, y además, tiene que hacer uso del constructor de la clase base (padre). Asi que hay que pasarle los parámetros necesarios para el constructor del padre, y del hijo.

class ClaseBase {
```php
public function __construct($id, $nombre) {
	// Inicializar variables acá
	if ($this->validar($id)){
		$this->id = $id;
		$this->nombre = $nombre;
	}
}
public function validar($id){
	// Reliza una validación
}
```
}

class ClaseDerivada extends ClaseBase{
```typescript
public function __construct(){
    parent::__construct(); //Llamamos al constructor de la clase padre

    //Inicializamos las variables propias de esta clase
}
```
}

// Parent sería el base de C#. Se refiere a la clase padre. Siempre se accede a él con ' :: ', como si fuera estático. 

En PHP no existe la herencia múltiple. No existe tampoco la sobrecarga de constructores.

Polimorfismo
En PHP cualquier método puede ser modificado en sus clases derivadas.
Supongamos que en la clase base tenemos una función Saludar(). Bueno, nosotros en la clase derivada a esa clase base podemos hacer:

public function Saludar(){
```text
return parent::Saludar(). " " . "mundo";
```
}

Interfaces
Se crean con la palabra reservada 'interface'. Se implementan con la palabra reservada 'implements'. Sólo pueden contener declaraciones de métodos. Se pueden hacer múltiples implementaciones de interfaces. 
interface IInterfaz{
```typescript
function Metodo();
```
}

Clases Abstractas
Son las clases que pueden contener atributos y métodos pero no se pueden instanciar. Sólo estas clases pueden tener métodos con el modificador de visibilidad 'abstract'. Para que una clase sea abstracta, debe llamarse 'abstract class NombreDeLaClase'

Borré todo lo que tiene la carpeta htdocs excepto mis carpetas, como recomendó Lippi. Así está mejor porque ahora puedo navegar entre las carpetas y los archivos.

Ahora, mandaron a hacer ejercicios. Y así terminó la clase. Simplemente hubo preguntas de los que iban haciendo los ejercicios y los profesores respondían. No se enseñó ningún tema nuevo más.
