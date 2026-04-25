---
title: "Clean Architecture"
description: "Creada por el famoso Uncle Bob, la Clean Architecture es una arquitectura basada en capas, las cuales se encargan de organizar y separar las distintas responsab..."
---

## ¿Qué es la Clean Architecture?

- Creada por el famoso Uncle Bob, la Clean Architecture es una arquitectura basada en capas, las cuales se encargan de organizar y separar las distintas responsabilidades de nuestra aplicación.

- Gráficamente lo podemos dividir en 4 capas, donde cada una recubre a la otra:

```typescript
E > A > U > D
```
| D -> | Domain: Lógica de negocios + Entidades |
| --- | --- |
| U -> | Use cases: Lógica de aplicación |
| A -> | Adapters |
| E -> | Extern |
- La idea es que cada capa "ve hacia dentro", es decir, es capaz de ver a lo que está recubriendo. Pero no pueden ver hacia afuera, es decir, no ven lo que pasa por fuera de ellas.
- **Domain (dominio)**: Toda lógica de la aplicación que NO DEPENDE de la tecnología, entonces es una lógica de negocio.  El dominio es intocable nada ni nadie lo tiene que afectar. Gráficamente hablando, el dominio NO SABE lo que pasa fuera de él. Es decir, al dominio no le importa y lo que pasa en los Use cases, en los Adapters ni en Extern. El dominio es una capa que no depende de las demás, y todos dependen de ella. Pero no la tocan. Dato: Cuando una misma lógica de negocio se aplica a más de un proyecto, se la puede llamar "Lógica de Organización".
 
- **Use cases (casos de uso)**: Son los requerimientos que nos pide la lógica de negocios. Se la llama, entonces, Lógica de Aplicación. Esta lógica es la que tiene que hacer que se cumpla la lógica de negocios. Además, también hace que las "Entidades" se acerquen o interactúen con la "Lógica de Negocios".

- **Extern (externa)**: Son recursos, elementos del proyecto que pueden cambiar tranquilamente. Son cosas intercambiables. Tienen que ser fácil de intercambiar, y dicho intercambio no tiene que afectar a ninguna de las demás capas (ni Adapters, Use Cases, ni Domain). Un elemento de la capa Extern podría ser una API, o el mismo Frontend, ya que ese último puede hacerse de mil maneras distintas (es decir, con la librería, framework que sea), pero siempre por el mismo objetivo: que se cumpla la Lógica de Negocios.

- **Adapters (adaptadores)**: Así como dijimos antes que Domain solo ve hacia afuera, aca hay una diferencia: La capa adapters mira hacia afuera y también hacia adentro, por eso muchos la asemejan con un middleware. Es decir, un intermediario que ADAPTA de afuera hacia adentro, y de adentro hacia afuera. Por ejemplo, si en mi aplicación yo tengo la interfaz llamada "usuario", pero la API con la que me voy a comunicar tiene un objeto "user", entonces mi adaptador tiene que mapear usuario -> user, y viceversa. 


## ¿De qué sirve separar las responsabilidades así?

- Si nosotros tenemos nuestro proyecto hecho con Clean Architecture, podría pasar que tengamos que hacer cambios ya que el cliente lo requiere o simplemente porque queremos implementar un cambio/mejora en la aplicación. Y ahí va a depender de cuál sea el cambio, qué capas tenemos que modificar.

- Si el cambio es que vamos a usar otra API u otra base de datos, tendríamos que tocar la capa Adapters, y las demás no deberíamos tocarlas.

- Si tenemos que agregar una entidad nueva al sistema, ahí empezaríamos por Domain agregando la entidad nueva. Y a partir de ahí, tocaríamos las demás capas hacia fuera, en orden.

- Si tenemos que hacer cambios en el frontend, es decir, en la presentación, la única capa que tocaríamos seria Extern.

- Si tenemos que agregar una función nueva, pero sin necesidad de agregar o modificar entidades, entonces tocaríamos simplemente la capa de Use Cases (y las demás, yendo en orden hacia afuera).


## ¿Cuándo sí y cuándo no usar esta arquitectura?

- Clean Architecture es una arquitectura robusta, por ende tiene sentido usarla cuando el proyecto es grande y promete que va a escalar en el tiempo, o que puede sufrir cambios considerables en el tiempo. 

- Pero muchos proyectos no cumplen con esas características, y en ellos la verdad es que no tiene sentido usar Clean Architecture, ya que puede hacer el proyecto más pesado innecesariamente. Esto suele pasar con, por ejemplo, los Adapters. A veces, simplemente no es necesario adaptar nada o la adaptación es mínima entre la API y nuestra app.

- Hay que ser pragmático, no hay que decir "la Clean Architecture es lo mejor que existe, así que la voy a aplicar en todo lo que haga". Hay que saber cuándo sí y cuándo no. 

- Hay que ser consciente de qué cosas son más propensas a sufrir cambios en nuestro proyecto, y cuáles menos. Y también hay que saber qué tan profundo pueda llegar a ser ese cambio.