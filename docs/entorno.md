# A4 — Registro del entorno

## Sistema operativo

- Windows
- Entorno utilizado: PowerShell y Visual Studio Code

## Versiones verificadas

- Python: `3.14.6`
- Git: `2.45.1.windows.1`
- mongosh: `2.13.0`
- MongoDB: entorno de laboratorio en MongoDB Atlas

## Base y usuario

- Base de laboratorio: `emprendimiento_sena_lab`
- Usuario de práctica: `aprendiz_nosql`
- Contraseña: **NO REGISTRAR**

## Entorno utilizado

La práctica se realizó utilizando MongoDB Atlas mediante una conexión
autenticada con `mongosh`.

No se registra ninguna contraseña ni URI que contenga credenciales.

## Verificación dentro de mongosh

Se seleccionó la base de laboratorio:

```javascript
db = db.getSiblingDB("emprendimiento_sena_lab");