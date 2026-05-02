---
title: "Comandos para PowerShell parte 1"
description: "Windows PowerShell es una interfaz de línea de comandos (CLI) y un lenguaje de scripts diseñado principalmente para la administración de sistemas y la automatización de tareas."
---


## 📜 Comandos para PowerShell (parte 1)

### ⚡ PowerShell ⚡

Windows PowerShell es una interfaz de línea de comandos (CLI) y un lenguaje de scripts diseñado principalmente para la administración de sistemas y la automatización de tareas. Fue desarrollado por Microsoft y se basa en el framework .NET.

### 🔧 Comandos Básicos 🔧
(Sirven para cualquier otra terminal, además de PowerShell)

**💡 Aclaración:** El primer nombre de cada comando (el corto y en minúsculas), se refiere al ALIAS del comando. Y lo que está a la derecha en mayúsculas, es su nombre real. Ambos funcionan igual.


```bash
📘 man / Get-Help
man ls o Get-Help ls 
Muestra información sobre el comando.
```

```bash
🖨️ echo / Write-Output (Imprimir en Pantalla)
echo "Hola Mundo" o Write-Output "Hola Mundo" 
Imprime un mensaje en la consola.
```

```bash
📂 cd / Set-Location (cd = Change Directory, Cambiar Directorio)
cd C:\Users\TuUsuario\Documentos 
Cambia el directorio de trabajo actual.
```

**✍️ Aclaración sobre la tecla 'tab' para autocompletar rutas:** 
Si bien no es un comando, esto es muy útil para agilizar la escritura de un comando. Al tocar la tecla 'Tab', el texto se autocompleta con la primer coincidencia que encuentre. Es decir, supongamos que estoy escribiendo el comando cd porque me quiero mover a alguna carpeta. Bueno, si quiero ir a mi carpeta llamada "Juegos de PS2", yo tendría que escribir ese nombre exacto sin errores. Entonces para hacerlo más rápido, puedo escribir "Jue" y después pulso TAB. Al hacerlo, se va a autocompletar con la primer carpeta o ruta que empiece con "Jue". Y así lo hago más rápido y exacto.

```bash
📋 ls / Get-ChildItem (Listar Elementos)
ls o Get-ChildItem // ls carpeta1
Lista los archivos y directorios en el directorio actual.
```


```bash
🔼 .. (Subir un Nivel)
cd ..
Cambia al directorio padre.
```


```bash
🌳 tree (Árbol de Directorios)
tree // tree carpeta2
Muestra una estructura jerárquica de directorios y archivos.
Este comando no es nativo de PowerShell, requiere una instalación en el sistema.
```


```bash
🧼 cls / Clear-Host / clear (Limpiar Pantalla)
cls o Clear-Host o clear
Limpia la pantalla de la terminal.
```


```bash
📍 pwd / Get-Location (Directorio Actual)
pwd o Get-Location
Muestra el directorio de trabajo actual.
```


```bash
🗂️ mkdir / New-Item -Type Directory (Crear Directorio)
mkdir NuevoDirectorio o New-Item -Path . -Name "NuevoDirectorio" -ItemType "Directory"
Crea un nuevo directorio.
```


```bash
🗑️ rm / Remove-Item (Eliminar Archivos/Directorios)
rm archivo.txt o Remove-Item archivo.txt
Elimina archivos o directorios.
```


```bash
📖 cat / Get-Content (Concatenar y Mostrar Contenido)
cat archivo.txt o Get-Content archivo.txt
Muestra el contenido de un archivo.
```


```bash
📄 cp / Copy-Item (Copiar Archivos/Directorios)
cp archivo.txt copia.txt o Copy-Item -Path archivo.txt -Destination copia.txt
Copia archivos o directorios de un lugar a otro.
```


```bash
🚚 mv / Move-Item (Mover/Renombrar Archivos/Directorios)
mv archivo.txt nuevoNombre.txt o Move-Item -Path archivo.txt -Destination nuevoNombre.txt
Mueve o renombra archivos o directorios.
```


**💡 Notas adicionales 💡**
- cat = Lo usamos para concatenar y mostrar contenido.
- more = Lo usamos para mostrar contenido.
- less = Similar al more, pero permite hacer consultas y resaltar resultados.
- history = Muestra el historial de comandos (en orden y enumerado).


**📝 Recomendaciones 📝**
- cat es solo para concatenar.
- more es para ver un archivo.
- less es para ver un archivo grande (o buscar algo en él).

Podemos guardar lo que devuelve 'history' en un archivo .txt así:

```bash
history > historial.txt
```

Y podemos usar more o less para mostrar el contenido:

```bash
more historial.txt o less historial.txt
```

La diferencia entre more y less es que more tiene un puntero de lectura, consumiendo menos recursos. Es más efectivo para solo ver contenido. Si necesitamos editar, es mejor usar otros comandos.


**🌟 Ejemplos adicionales 🌟**

**'echo' también sirve para algo así:**

```bash
echo "Hola Mundo!" > saludar.txt
```
Esto crea un archivo (si es que no existe) llamado saludar.txt con el contenido "Hola Mundo!".

Y para verlo:
```bash
more saludar.txt   // Esto mostrará: "Hola Mundo!"
```

**Crear archivo con listado de ls**: 

```bash
ls padre > clase5/hermano/joven/hola.txt
```
Esto crea un archivo hola.txt con el listado de archivos dentro de la carpeta padre.

**- tail y head**

- `tail historial.txt` muestra las últimas 10 líneas.
- `head historial.txt` muestra las primeras 10 líneas.
Ambos son como el 'more', pero con un límite.

Para cambiar el número de líneas, por ejemplo, 20:

```bash
tail -20 historial.txt
```