---
title: "Aclaración sobre mi terminal"
---

Yo instalé la aplicación "Terminal de Windows", y la uso con PowerShell. Para personalizarla, usé oh-my-posh. En mi perfil JUNIOR tengo la configuración con su tema. Pero de momento, decidí sacarla. Entonces lo uso sin ese tema. Pero el archivo sigue existiendo.

Para poder ir al archivo que lo configura, hay que escribir el comando

notepad $PROFILE

Eso va a abrir el bloc de notas, y ahí es donde hay que escribir los comandos que va a ejecutar la terminal apenas se inicialice. Básicamente lo que busca es cargar los datos de configuración que son los que terminan personalizando la terminal.

De momento, dejé el bloc vacío. Yo originalmente tengo 2 configuraciones importantes: la del tema, y otra que es un paquete de íconos. Como no sé sacar el mensaje de "Loading personal and system profiles took 781ms.", preferí sacarle todo.

Así sería el texto completo:

(@(& 'C:/Users/JUNIOR/AppData/Local/Programs/oh-my-posh/bin/oh-my-posh.exe' init pwsh --config='C:\Users\JUNIOR\AppData\Local\Programs\oh-my-posh\themes\pure.omp.json' --print) -join "`n") | Invoke-Expression
Import-Module Terminal-Icons
