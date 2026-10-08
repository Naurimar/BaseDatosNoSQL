# DGN-01 — Parte teórica

## 1. ¿Qué representan una tabla, una fila y una clave primaria?
Una tabla organiza información relacionada. Una fila representa un registro individual y una clave primaria identifica de forma única cada registro. En el caso de emprendimiento, una tabla `iniciativas` podría tener una fila por iniciativa y un campo `id` como clave primaria.

## 2. ¿Para qué sirve una clave foránea? ¿Qué problema genera una iniciativa que referencia a un emprendedor inexistente?
Una clave foránea relaciona un registro con otro y ayuda a mantener la integridad referencial. Si una iniciativa referencia a un emprendedor inexistente, queda una relación inválida y la información pierde consistencia.

## 3. ¿Qué devuelve `SELECT codigo FROM iniciativas WHERE sector = 'tecnologia';`? ¿Modifica registros?
Devuelve los valores del campo `codigo` de las iniciativas cuyo sector sea `tecnologia`. Es una consulta de lectura y no modifica los registros.

## 4. Diferencia una lista y un diccionario en Python.
Una lista almacena varios elementos en un orden. Un diccionario almacena pares clave-valor. Una iniciativa puede representarse con un diccionario y varias iniciativas con una lista de diccionarios.

## 5. ¿Son equivalentes `false` y `"false"` en JSON?
No. `false` es un valor booleano; `"false"` es una cadena de texto.

## 6. Diferencia un campo ausente, `null` y una cadena vacía.
Un campo ausente no existe en el documento. `null` indica explícitamente ausencia de valor. `""` es una cadena existente con longitud cero. No deben tratarse automáticamente como equivalentes.

## 7. ¿Qué ventaja tiene una función que retorna datos frente a otra que únicamente los imprime?
Retornar datos permite reutilizarlos, probarlos y procesarlos desde otras partes del programa. Una función que solo imprime deja el resultado en la salida de pantalla y dificulta su reutilización.

## 8. Si falla la lectura de un archivo JSON, ¿qué revisarías antes de cambiar el programa?
Revisaría el mensaje y tipo de error, la ruta del archivo, el contenido, las comillas, booleanos, `null`, comas, llaves, corchetes y codificación. Primero identificaría la causa antes de modificar el programa.

## 9. ¿Qué información reconoces en `2026-10-06T13:00:00Z`?
Es una fecha y hora en formato ISO 8601: 6 de octubre de 2026 a las 13:00 UTC. La `Z` indica UTC. Este formato evita ambigüedades de orden de día/mes y de zona horaria que puede presentar `06/10/26 8:00`.

## 10. Se publicó por error una contraseña en Git. ¿Qué acciones propondrías?
Cambiar o revocar inmediatamente la contraseña, retirar el secreto del código y revisar el historial del repositorio si estuvo versionado. Borrarlo solamente del archivo actual no es suficiente porque puede permanecer en commits anteriores. También debe avisarse al responsable correspondiente.
