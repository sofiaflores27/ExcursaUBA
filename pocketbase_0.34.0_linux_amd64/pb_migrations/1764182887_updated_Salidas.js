/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2988779628",
    "max": 0,
    "min": 0,
    "name": "Fecha_Salida",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select841843860",
    "maxSelect": 1,
    "name": "Rol_Reponsable",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Profesor",
      "Profesora",
      "Preceptor",
      "Preceptora",
      "Coordinador"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text776201014",
    "max": 0,
    "min": 0,
    "name": "Horario_Salida",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // remove field
  collection.fields.removeById("text2988779628")

  // remove field
  collection.fields.removeById("select841843860")

  // remove field
  collection.fields.removeById("text776201014")

  return app.save(collection)
})
