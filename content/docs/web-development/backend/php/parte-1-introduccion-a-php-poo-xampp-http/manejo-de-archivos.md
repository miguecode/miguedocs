---
title: "Manejo de archivos"
description: "Todo el manejo de archivos en PHP es muy parecido a C."
---


Archivos
Todo el manejo de archivos en PHP es muy parecido a C.

El manejo de archivos (de texto o binarios) es imporante en una aplicación web. PHP tiene muchas funciones para ésto: fopen (abrir), fclose (cerrar), fread / fgets (leer), fwrite / fputs (escribir), copy (copia) y unlink (elimina).

$archivo = fopen("archivo.txt", "r");
El primer parámetro es la dirección del archivo (local o externo), y el segundo, el modo de abrir el archivo. Devuelve un int. Si hubo error, devuelve 'false'.

fclose($archivo);
Cerramos el archivo que estaba abierto. Si tuvo éxito retorna TRUE, y sino, FALSE.

$archivo = fopen("archivo.txt", "r");
echo fread($archivo, filesize("archivo.txt"));

El primer parámetro del fread es el archivo a leer. El segundo parámetro es cuántos bytes queremos leer. Si no sabemos, le pasamos directamente la dirección. Retorna un string con todo el contenido leído.

$archivo = fopen("archivo.txt", "r");
echo fgets($archivo);
Leemos una línea del archivo abierto. Retorna un string que va a ser la línea leída. Después de cada llamada a fgets, el cursor se mueve a la siguiente línea.

feof([archivo]) (End of File) Retorna TRUE o FALSE si llegó o no llegó al final del archivo.
$archivo = fopen("archivo.txt", "r");

while (!feof($archivo))
{
```typescript
echo fgets($archivo) . "</br>";
```
}

fclose($archivo);

De esa forma leemos línea por línea el archivo y lo mostramos con el 'echo'. El while va a finalizar cuando llegue al final del archivo. Y después, lo cerramos.


$archivo = fopen("archivo.txt", "w");   //Abrimos el archivo en modo 'W' (write)
echo fwrite($archivo, "Prueba de guardado");
fclose($archivo);

fwrite() y fputs() hacen exactamente lo mismo. No tienen diferencia alguna. Nos permite escribir en un archivo abierto y va a parar hasta que llegue al final del archivo, o hasta donde nosotros le indiquemos. El primer parámetro va a ser el archivo a escribir, y el segundo, un string con lo que queremos escribir. El tercer parámetro opcional es la cantidad de bytes a ser escritos. Retorna la cantidad de bytes que se escribieron o FALSE si hubo un error.

echo copy("archivoACopiar.txt", "archivoCopiado.txt");
Retorna TRUE o FALSE dependiendo de si se pudo o no copiar.

echo unlink("archivo.txt");
Borra el archivo. Retorna TRUE o FALSE si hubo algún error o no.

El tema de los permisos, generalmente en Windows, puede ser un problema.
