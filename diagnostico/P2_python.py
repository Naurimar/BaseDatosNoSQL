iniciativas = [
    {"codigo": "INI-001", "sector": "tecnologia", "pendiente": True},
    {"codigo": "INI-002", "sector": "alimentos", "pendiente": True},
    {"codigo": "INI-003", "sector": "tecnologia", "pendiente": False},
    {"codigo": "INI-004", "sector": "tecnologia"}
]


def seleccionar_pendientes(registros, sector):
    """Retorna códigos del sector indicado con pendiente exactamente True.

    No modifica la lista recibida. Si falta pendiente, no se selecciona.
    """
    return [
        registro["codigo"]
        for registro in registros
        if registro.get("sector") == sector
        and registro.get("pendiente") is True
    ]


print("Prueba con resultados:", seleccionar_pendientes(iniciativas, "tecnologia"))
print("Prueba sin resultados:", seleccionar_pendientes(iniciativas, "salud"))
print("Campo pendiente ausente: no se selecciona.")
print("Se usa 'is True' para no confundir True con la cadena 'True' u otros valores equivalentes por conversión.")
