import json

texto = '{"codigo":"INI-001", "activa":True, "intereses":["Validar mercado",]}'

print("1. Intento inicial:")
try:
    json.loads(texto)
except json.JSONDecodeError as error:
    print("Error registrado:", error)

# Corrección: JSON usa true/false en minúscula y no admite coma final.
texto_corregido = '{"codigo":"INI-001", "activa":true, "intereses":["Validar mercado"]}'

print("\n2. JSON corregido:")
registro = json.loads(texto_corregido)
print("codigo:", registro["codigo"])
print("activa:", registro["activa"])
print("tipo de codigo:", type(registro["codigo"]).__name__)
print("tipo de activa:", type(registro["activa"]).__name__)

print("\n3. Correcciones realizadas:")
print("- True se cambió por true porque JSON usa booleanos en minúscula.")
print("- Se eliminó la coma final del arreglo porque JSON no admite trailing comma.")
