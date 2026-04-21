---
title: "Charla con Gemini sobre proceso de optimización de imágenes"
---

Muy bien. Ahora tengo una duda, en qué resolución me recomendás que cree las imagenes mobile? Yo las desktop ya las tengo, y son 1920x1080px


Gemini
stat_minus_1
Thinking
Buena pregunta. Es un punto clave para que la optimización sea efectiva.

Dado que tus imágenes de escritorio son de 1920x1080px (una relación de aspecto 16:9) y el cambio de imagen ocurre en 768px, mi recomendación es que crees las imágenes para móvil con una resolución de 960x540px.

¿Por qué esta resolución?
Calidad en pantallas Retina: Muchos móviles modernos tienen pantallas de alta densidad de píxeles (Retina, AMOLED, etc.). Una imagen de 960px de ancho se verá muy nítida en la mayoría de los teléfonos, ya que es más del doble del ancho de la pantalla de un iPhone o un Pixel promedio (que suelen rondar los 375-414px lógicos).
Cobertura del breakpoint: La imagen se mostrará en pantallas de hasta 767px de ancho. 960px es un ancho más que suficiente para cubrir este espacio sin perder calidad, incluso en tablets pequeñas en modo vertical.
Rendimiento: Una imagen de 960x540px tiene un 75% menos de píxeles que la de 1920x1080px. Esto reducirá drásticamente el peso del archivo (en KB), resultando en una carga mucho más rápida para los usuarios en conexiones móviles.
Consistencia: Al usar 960x540px, mantienes la misma relación de aspecto de 16:9, lo que asegura que la imagen no se deforme ni se recorte de manera extraña.
En resumen: 960x540px te da el balance perfecto entre una excelente calidad visual en todos los dispositivos móviles y un rendimiento de carga óptimo.


Gil Miguel Ángel
Okey. Pero ahora que lo pienso: 1920x1080 quizá no sea la mejor resolución posible para mis imagenes desktop. Te explico cómo se ve en mi pantalla:

Yo, viendo mi monitor, tengo una resolución de 1920x1080px

Y visto, así, en mi navegador con 100% de zoom, las imagenes ocupan una resolución aproximada de 407x262

O sea, es es lo máximo de cómo se ven en tamaño. Dicho esto, que las imagenes sean 1920x1080... es demasiado, ¿No? ¿Qué opinás? ¿Esto está muy mal y debería bajarles la resolución a las desktop o qué me dirías?


Gemini
stat_minus_1
Thinking
Tu observación es excelente y muy acertada. Tienes toda la razón, usar una imagen de 1920x1080px para un área que como máximo mide 407px de ancho es excesivo y afecta negativamente el rendimiento de tu web.

Esto que notas es uno de los puntos de optimización más importantes y que a menudo se pasa por alto. ¡Muy bien por darte cuenta!

¿Entonces, qué resolución usar?
Aquí entra en juego la "regla del 2x" para las pantallas de alta resolución (Retina). Para que una imagen se vea nítida en estas pantallas, lo ideal es que su tamaño sea el doble del tamaño al que se muestra.

Si el tamaño máximo en que se ve tu imagen es ~407px de ancho.
Aplicando la regla del 2x: 407px * 2 = 814px.
Por lo tanto, una imagen con un ancho de ~814px sería teóricamente suficiente.

Mi recomendación:

Para tener un margen de seguridad (por si en el futuro ajustas el diseño o para pantallas un poco más grandes) y asegurar una calidad impecable, te recomendaría usar un ancho de 1200px para tus imágenes de escritorio.

Manteniendo la relación de aspecto 16:9, la nueva resolución para tus imágenes de escritorio sería: 1200x675px.

Resumen de las nuevas resoluciones ideales:
Desktop: 1200x675px (en lugar de 1920x1080px).
Mobile: 960x540px (la que te recomendé antes, que sigue siendo perfecta).
Con este cambio, tus imágenes de escritorio seguirán viéndose perfectas en todos los monitores, pero pesarán muchísimo menos. Mejorarás la velocidad de carga de tu sitio y la experiencia de usuario, especialmente para quienes no tengan una conexión a internet muy rápida.

