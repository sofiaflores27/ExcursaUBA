/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2165305242")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select4174331237",
    "maxSelect": 6,
    "name": "Que_Llevar",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Mochila",
      "Comida",
      "Agua",
      "Abrigo",
      "Gorra",
      "Repelente"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2165305242")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select4174331237",
    "maxSelect": 1,
    "name": "Que_Llevar",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Mochila",
      "Comida",
      "Agua",
      "Abrigo",
      "Gorra",
      "Repelente"
    ]
  }))

  return app.save(collection)
})
