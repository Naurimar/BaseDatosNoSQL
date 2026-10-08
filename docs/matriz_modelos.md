# A2 — Matriz de selección de modelos

| Caso | Modelo propuesto | Razón vinculada a una consulta | Límite o costo | Alternativa |
|---|---|---|---|---|
| Iniciativas de varios sectores | Documental / MongoDB | Permite documentos con atributos específicos por sector y consultas por sector, etapa o estado | La flexibilidad exige reglas de validación y diseño | SQL si la estructura y relaciones son estables |
| Sesiones temporales | Clave-valor / Redis | Recuperación directa por clave y vencimiento mediante TTL | No es la opción principal para relaciones complejas o historial rico | Documento con mecanismo de expiración |
| Recorridos de relaciones | Grafo / Neo4j | Facilita recorrer relaciones entre emprendedores, mentores y habilidades | Introduce un motor y modelo adicional | Documentos con referencias |
| Lecturas por dispositivo/periodo | Familias de columnas / Cassandra | Diseñado para grandes volúmenes distribuidos y consultas previstas por partición/tiempo | El modelo debe diseñarse alrededor de los patrones de acceso | Base de series temporales u otro modelo distribuido |
| Datos fuertemente transaccionales | Relacional / SQL | Integridad referencial, JOIN y transacciones son centrales | Menor flexibilidad para estructuras muy variables | Documental cuando las consultas y consistencia lo permitan |

## Situación en la que conservaría SQL
Conservaría SQL si el problema exige relaciones fuertes, integridad referencial, transacciones complejas y consultas con múltiples relaciones estables. La elección no debe hacerse por moda, sino por los patrones de acceso y requisitos de consistencia.
