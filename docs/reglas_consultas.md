# A3 — Reglas y seis consultas del caso

## Q01 — Iniciativas activas por sector y etapa
- Actor: asesor o responsable de seguimiento.
- Filtros: `estado = activa`, sector y etapa didáctica.
- Salida: código, nombre, sector, etapa y estado.
- Orden: sector y código.
- Frecuencia estimada: alta (hipótesis).

## Q02 — Detalle de una iniciativa
- Actor: asesor.
- Filtro: código de iniciativa.
- Salida: código, nombre, propuesta de valor, sector y atributos específicos.
- Orden: no aplica al consultar una iniciativa individual.
- Frecuencia estimada: media (hipótesis).

## Q03 — Iniciativas de un emprendedor por estado
- Actor: responsable de seguimiento.
- Filtros: código del emprendedor responsable y estado.
- Salida: código de iniciativa, nombre, estado y responsable.
- Orden: código de iniciativa ascendente.
- Frecuencia estimada: media (hipótesis).

## Q04 — Asesorías programadas pendientes por rango y modalidad
- Actor: asesor o coordinador.
- Filtros: fecha programada dentro de un rango, estado `programada` y modalidad cuando se requiera.
- Salida: código de asesoría, iniciativa, asesor, fecha programada y modalidad.
- Orden: fecha programada ascendente.
- Frecuencia estimada: alta (hipótesis).

## Q05 — Historial de asesorías de una iniciativa
- Actor: asesor o responsable de seguimiento.
- Filtro: código de iniciativa.
- Salida: asesorías, estado, fecha programada, fecha de realización, modalidad y temas.
- Orden: fecha programada ascendente.
- Frecuencia estimada: media (hipótesis).

## Q06 — Cantidad de asesorías realizadas por sector y mes
- Actor: coordinación.
- Filtros: asesorías realizadas y rango/mes.
- Salida: sector y cantidad de asesorías realizadas.
- Orden: sector y/o cantidad descendente.
- Frecuencia estimada: mensual (hipótesis).
- Decisión: para la primera versión se usa el sector actual de la iniciativa. Si se exige preservar el sector histórico al momento de la asesoría, se deberá almacenar un valor histórico/snapshot.

# Reglas funcionales

1. Los códigos de emprendedores, iniciativas y asesorías son únicos dentro de su colección/conjunto.
2. Cada iniciativa tiene un emprendedor responsable existente. Una persona puede ser responsable de varias iniciativas.
3. Cada asesoría se vincula con una iniciativa existente y registra el código ficticio del asesor que la atiende.
4. Sectores de ejemplo: `tecnologia`, `alimentos`, `economia_circular`.
5. Etapas didácticas: `idea`, `validacion`, `puesta_en_marcha`.
6. Estado de iniciativa: `activa` o `archivada`.
7. Estado de asesoría: `programada`, `realizada` o `cancelada`.
8. Se registra `fecha_programada` y, cuando se realiza, `fecha_realizacion`.
9. La fecha real puede diferir de la programada; no se modifica la fecha programada para ocultar una reprogramación.
10. No se debe programar al mismo asesor en la misma franja definida por el laboratorio. Esta es una regla funcional; una garantía formal ante solicitudes simultáneas requiere mecanismos técnicos que se estudiarán posteriormente.
11. Archivar una iniciativa no elimina automáticamente su historial de asesorías.

# Preguntas para la persona responsable de la unidad

1. ¿Qué rol o unidad es responsable de aprobar cambios en los catálogos y reglas del sistema?
2. ¿Quién autoriza correcciones o cambios sobre información histórica de asesorías ya realizadas?

# Riesgo

Si cambia el sector actual de una iniciativa, los reportes históricos podrían cambiar si las asesorías consultan únicamente el valor actual. Si el negocio requiere conservar la historia, debe guardarse el sector histórico correspondiente al momento de la asesoría.
