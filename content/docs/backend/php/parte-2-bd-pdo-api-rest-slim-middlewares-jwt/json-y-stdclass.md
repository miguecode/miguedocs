---
title: "JSON y StdClass"
description: "Función json_encode(); transforma un objeto o un array de objetos en un string formato JSON."
---


## 📄 JSON en PHP

PHP proporciona funciones nativas para convertir estructuras de datos (como arrays u objetos) a formato JSON y viceversa.

### Funciones Principales

- **`json_encode($data)`**: Transforma un objeto o un array de objetos en un **string** con formato JSON.
- **`json_decode($jsonString, $assoc)`**: Transforma un **string** JSON en un objeto o un array de objetos. 
    - Si `$assoc` es `false` (por defecto), devuelve objetos de tipo `stdClass`.
    - Si `$assoc` es `true`, devuelve arrays asociativos.

---

### 📦 stdClass (Standard Class)

`stdClass` es la clase genérica y vacía de PHP. Se utiliza principalmente para crear objetos dinámicos "al vuelo" sin tener que definir una clase formal.

```php
$persona = new stdClass();
$persona->nombre = "Juan";
$persona->edad = 30;

echo json_encode($persona); // {"nombre":"Juan","edad":30}
```

> [!IMPORTANT]
> Cuando decodificamos un JSON con `json_decode`, PHP no sabe a qué clase específica pertenecen los datos (ej: `Animal`, `Auto`, etc.). Por lo tanto, crea instancias de `stdClass`. Si necesitas que sean de una clase específica, deberás mapear manualmente los datos del `stdClass` a tu objeto destino.

---

### 🛠️ Interfaz JsonSerializable

Si queremos tener control total sobre cómo se serializa un objeto de una clase propia al usar `json_encode`, podemos implementar la interfaz `JsonSerializable`. 

Esta interfaz nos obliga a definir el método `jsonSerialize()`, el cual debe retornar los datos que queremos que se incluyan en el JSON final.

```php
class Usuario implements JsonSerializable {
    private $nombre;
    private $email;
    private $password; // No queremos que se vea en el JSON

    public function jsonSerialize() {
        return [
            'nombre' => $this->nombre,
            'email'  => $this->email
        ];
    }
}
```