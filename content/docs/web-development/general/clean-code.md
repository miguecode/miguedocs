---
title: "Clean Code"
description: "El Clean Code no es solo una metodología; es una filosofía de trabajo. Adoptar estos principios ayuda a escribir código que no solo funcione, sino que sea fácil..."
---


## Clean Code

El Clean Code no es solo una metodología; es una filosofía de trabajo. Adoptar estos principios ayuda a escribir código que no solo funcione, sino que sea fácil de mantener, escalar y entender por otros desarrolladores (y por uno mismo en el futuro). Manténer el código limpio, organizado y optimizado es crucial y hace a un buen programador. Es algo que mi yo del futuro va a agradecer.

### Un Clean Code sigue estas reglas: 

- **Los nombres importan**: "Deben ser precisos, coherentes y centrales." Elegir nombres claros y descriptivos para variables, funciones y clases es crucial. Un buen nombre elimina la necesidad de comentarios y facilita la comprensión del código.

- Por ejemplo, si yo tengo la variable 'prom', me quedo pensando... ¿Qué es prom? Y claro, es sencillo pararme a pensar y sacar la conclusión de que 'prom' es 'promedio' abreviado... pero, si yo le hubiese puesto 'promedio' en vez de 'prom', no tengo que perder tiempo en pensar ¿Qué es prom? Porque ya me lo dice literalmente el nombre de la variable. Entonces, de eso se trata: de que los nombres de las variables, funciones, clases, y cualquier elemento de mi proyecto sea 100% CLARO y SIGNIFICATIVO. No importa que el nombre quede más largo de escribir, cuanto más se entienda y más autodescriptivo sea, mejor.

- **Autor del código**: "El código limpio se lee como prosa bien escrita." Un código bien escrito debe ser fácil de leer y entender. Como programadores, nuestro trabajo no es solo escribir código que funcione, sino también asegurarnos de que otros programadores puedan leerlo y mantenerlo fácilmente. La idea es que cuando estoy leyendo el desarrollo de una función, todo sea lo más humanizado posible. Lógicamente esto no es sencillo porque un lenguaje de programación no es un lenguaje con el que los humanos nos comunicamos, pero cuanto más nos acerquemos a eso, mucho mejor.

- **Regla del Boy Scout**: "Dejar el campamento más limpio de lo que estaba." Esta regla nos recuerda que siempre debemos mejorar el código que tocamos, incluso si solo hacemos pequeños ajustes. Si veo algo que puedo optimizar o limpiar, es una buena práctica hacerlo. No hay que dejar código en un estado peor del que lo encontramos, ya sea mío o de otro desarrollador.

- **DRY**: Don’t Repeat Yourself: "No te repitas a ti mismo." Este principio significa que cada parte de la funcionalidad del código debe estar implementada en un solo lugar. Hay que evitar la duplicación de código, ya que puede llevar a inconsistencias y errores difíciles de rastrear.

- **Funcionalidad única**: Cada pieza de lógica debe tener un único lugar donde se define. Esto evita confusiones y asegura que cualquier cambio futuro solo necesite hacerse en un lugar.
- **Funcionalidad inequívoca**: El código debe ser claro y permitir una única interpretación. Esto significa que cualquier desarrollador debería poder entender lo que hace sin ambigüedades.
- **Funcionalidad fidedigna**: Confiamos en que el código hace lo que debe hacer, de manera correcta y eficiente.

- **Los comentarios mienten**: "Comentar solo lo necesario." Los comentarios deben usarse con moderación. Si un comentario es necesario, hay que asegurarse de que esté actualizado y refleje exactamente lo que hace el código. Sin embargo, el mejor código es aquel que se explica por sí mismo, sin necesidad de comentarios.


## Documentación XML

La documentación se encarga de explicar las intenciones y las formas de funcionar de las distintas porciones de código o elementos de nuestros proyectos. Por ejemplo, qué recibe, qué retorna, qué hace, cómo lo hace, y por qué existe una función.

### Aclaraciones: 

- **Hay que documentar con criterio**: No es necesario documentar todo. Hay que hacerlo solo cuando un método no es claro. Un buen código se explica por sí mismo. Los constructores y las propiedades generalmente no necesitan documentación, a menos que hagan algo complejo o inesperado.

- **La mejor documentación es un código bien escrito**: Si el código es claro y representa bien su intención, no es necesario comentarlo. La claridad en la escritura del código es más importante que una documentación.


## Atomización

Atomizar significa descomponer el código en partes más pequeñas y manejables. Esto se aplica cuando una función puede dividirse en subfunciones más específicas, cada una con una única responsabilidad. Sin embargo, es importante encontrar un balance: si atomizamos demasiado, podríamos complicar innecesariamente la estructura del código.

- **Veamos un ejemplo**: 

```typescript
ValidarNumerico(string datoIngresado, int valorMin, int valorMax)
{
  // Para validar, necesito comprobar que el dato ingresado esté dentro del rango.

  if (datoIngresado > valorMin && datoIngresado < valorMax)

  // Pero para atomizar, creo otro método llamado ComprobarRangoValido.

  if (ComprobarRangoValido(datoIngresado, valorMin, valorMax))
  {   ...   }
}

ComprobarRangoValido(string dato, int min, int max)
{
  return dato > min && dato < max;
}
```

**Simplicidad ante todo**: El objetivo es que el código sea fácil de leer. No hay que atomizar de más, ya que podría hacer que el código sea más difícil de seguir.


## Getters y Setters en las clases 

El uso de Getters y Setters en las clases ayuda a mantener un código limpio y organizado. Además, encapsulan la lógica de acceso a las propiedades de un objeto, lo que permite mantener un control sobre cómo se accede y modifica el estado interno de un objeto. Esto contribuye a la coherencia y robustez del código.


## Early return (retorno temprano)

El early return hace referencia a poner un "return" al inicio de la función, para descartar situaciones donde no queremos que se ejecute nada. Entonces, ponemos los puntos de salida de la función al principio, evitando posibles errores. Si pasa de estos retornos, se ejecuta correctamente la función.

```typescript
function procesarPago(monto) {
  if (monto <= 0) return "Monto inválido";
  if (monto > 10000) return "Excede el límite";

  // Si todo está bien:
  return "Pago procesado";
}
```

## ¿Cuántos return poner en una función?

| Estilo | ¿Cuándo usarlo? |
| --- | --- |
| Varios return | Funciones cortas, condiciones claras, early exit |
| Un solo return | Funciones largas, debug centralizado, estilo FP |

Cuando la función es muy clara y sencilla, no queda mal usar más de un return, porque se puede entender fácil. El problema es cuando la función es un poco más larga o compleja y el retorno puede variar más. En ese caso, puede ser mejor que el punto de salida sea uno solo y esté al final.
