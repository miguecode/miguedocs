---
title: "Estructuras de Datos"
---

> Estructuras de Datos

- Las estructuras de datos son formas de organizar y almacenar información para poder acceder a ella de forma eficiente. Dependiendo del uso que le vayamos a dar (acceder, insertar, eliminar, buscar, ordenar), vamos a preferir una u otra. En este apunte vamos a ver varias de ellas.


> Arrays (o Arreglos)

- Son una colección ordenada e indexada de datos. Cada elemento tiene una posición (índice) numérica que empieza desde 0. Es decir, su indexación basada en 0.

✔️ Rápidos para acceder a un valor
❌ Lentos para agregar/eliminar elementos en posiciones intermedias (pueden requerir copiar el array en otra parte de la memoria)

- Y... ¿Por qué son lentos para agregar o eliminar? Porque como sabemos, el array ocupa huequitos en la memoria, uno al lado del otro. Si nosotros nos ponemos a modificar el array, ya sea agregándole elementos nuevos al final o en el medio, tranquilamente puede ocurrir que intente usar un huequito que ya estaba ocupado por otro elemento. y si eso pasa, de forma automática, lo que va a hacer el SO es crear una copia de ese array en otro lugar. Es decir, se va a buscar otros huequitos libres donde ahí sí pueda poner cada dato. Esto, lógicamente, no es lo ideal.


> Linked Lists (Listas Enlazadas)

- Son una colección de nodos, donde cada nodo apunta al nodo siguiente. A diferencia de los arrays, sus elementos no necesitan estar uno al lado del otro en memoria.

✔️ Rápidas para insertar/eliminar
❌ Lentas para acceder (no hay índice, hay que recorrer)

- ¿Cuál es la diferencia en la memoria respecto a los arrays? En estas listas, los elementos apuntan siempre al elemento siguiente a ese, no son una colección indexada. Esto quiere decir que no es necesario que los elementos de una Linked List estén uno al lado del otro. Sino que en este caso, los elementos pueden estar distribuidos por cualquier parte del SO. Y como cada nodo (elemento) tiene un puntero, este último va a apuntar a su elemento consiguiente. Entonces, nunca va a pasar lo que pasaba con los arrays, de que, a veces, había que copiar el array entero en memoria. Ya que ahora, nunca va a pasar que un huequito en la memoria intente ocupar uno ya ocupado.

- Las Linked List tienen variantes:
- Singly Linked List (simple, cada nodo apunta al siguiente)
- Doubly Linked List (doble, cada nodo apunta al anterior y al siguiente)
- Circular Linked List (circular, el último nodo apunta al primero)


> Hash Tables (o Hash Maps)

- Es una estructura basada en key-value pairs (pares clave-valor). Cada key se transforma (hashea) en una posición para guardar su valor.

✔️ Súper rápidas para buscar por clave
✔️ Rápidas para insertar/eliminar
❌ Pueden generar colisiones (varias claves que terminan en el mismo índice)

- En JavaScript, Object y Map pueden funcionar como Hash Tables.

- Cada elemento está asociado a una key, entonces, a la hora de realizar una búsqueda, se hace por dicha key. Y no por su índice, eso los hace más rápidos en la obtenci´n de elementos.

	key "rojo" -> value 32
	key "verde "-> value 10
	key "azul" -> value 80


> Stack (Pila) – LIFO

- Son colecciones de estructura LIFO (Last In, First Out). El último en entrar es el primero en salir, como en una pila de platos sucios que nos vamos a poner a lavar. 

- Sus métodos más comunes de manipulación son push, pop, y peek.

- Son ideales para mantener historial, deshacer acciones, pilas de llamadas, etc.


> Queue (Cola) – FIFO

- Son colecciones de estructura FIFO (First In, First Out). El primero en entrar es el primero en salir, como en una fila de personas yendo a comprar el pan.

- Sus métodos más comunes son enqueue, dequeue y front.

- Usadas en colas de impresión, procesos, animaciones, etc.


> Binary Search Tree (BST)

- Es un árbol donde cada nodo tiene máximo dos hijos:

	       10
	      /  \
	     5   15
	    / \    \
	   2   7    20

✔️ Permite búsqueda, inserción y eliminación eficientes si está balanceado
❌ Si se desbalancea, puede volverse una lista


> Heap (Montículo)

- Es un árbol donde el nodo padre es mayor (Max-Heap) o menor (Min-Heap) que sus hijos. Usado en Priority Queue, Heap Sort, etc.


> Trie (Árbol de Prefijos)

- Eficiente para búsquedas de palabras, autocompletado.


> Graph (Grafo)

- Nodos (vértices) conectados entre sí por aristas.

- Útil en mapas, redes sociales, algoritmos como Dijkstra, etc.