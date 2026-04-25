---
title: "StrictMode"
description: "StrictMode controla la manera de funcionar de los componentes. Lo que hace es crear un componente, lo renderiza, y lo destruye. Y después, lo vuelve a construir..."
---


## ¿Qué es esa etiqueta `<StrictMode>` que atrapa a `<App />`?

- StrictMode controla la manera de funcionar de los componentes. Lo que hace es crear un componente, lo renderiza, y lo destruye. Y después, lo vuelve a construir. Y ahora, va a ver si el estado del componente que se renderizó por segunda vez, es el mismo que el que destruyó anteriormente. 

- En producción se quita.