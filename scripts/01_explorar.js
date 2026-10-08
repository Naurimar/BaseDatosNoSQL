db = db.getSiblingDB("emprendimiento_sena_lab");

if (db.asesorias_demo.countDocuments({_id: "ASE-DEMO-001"}) === 0) {
  db.asesorias_demo.insertOne({
    _id: "ASE-DEMO-001",
    emprendedor_alias: "Emprendedor ficticio 01",
    iniciativa: {
      codigo: "INI-DEMO-001",
      nombre: "EcoEmpaque",
      sector: "economia_circular"
    },
    temas: ["propuesta de valor", "validacion de clientes"],
    modalidad: "virtual",
    estado: "programada",
    requiere_seguimiento: true,
    fecha_programada: new Date("2026-10-08T13:00:00Z"),
    fecha_realizacion: null
  });
}

printjson(db.asesorias_demo.findOne({_id: "ASE-DEMO-001"}));
print("Conteo ASE-DEMO-001:", db.asesorias_demo.countDocuments({_id: "ASE-DEMO-001"}));

const asesoria = db.asesorias_demo.findOne({_id: "ASE-DEMO-001"});
print("fecha_programada es Date:", asesoria.fecha_programada instanceof Date);
print("tipo de fecha:", typeof asesoria.fecha_programada);

if (db.asesorias_demo.countDocuments({_id: "ASE-DEMO-002"}) === 0) {
  db.asesorias_demo.insertOne({
    _id: "ASE-DEMO-002",
    emprendedor_alias: "Emprendedor ficticio 02",
    iniciativa: {
      codigo: "INI-DEMO-002",
      nombre: "Sabores Locales",
      sector: "alimentos"
    },
    temas: ["propuesta de valor"],
    modalidad: "presencial",
    estado: "programada",
    requiere_seguimiento: false,
    fecha_programada: new Date("2026-10-09T13:00:00Z"),
    fecha_realizacion: null
  });
}

printjson(db.asesorias_demo.findOne({_id: "ASE-DEMO-002"}));
print("Conteo ASE-DEMO-002:", db.asesorias_demo.countDocuments({_id: "ASE-DEMO-002"}));
