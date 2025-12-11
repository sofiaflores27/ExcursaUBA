/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3570303696",
    "max": 3,
    "min": 0,
    "name": "Responsable",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select841843860",
    "maxSelect": 5,
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3570303696",
    "max": 0,
    "min": 0,
    "name": "Responsable",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
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

  return app.save(collection)
})
