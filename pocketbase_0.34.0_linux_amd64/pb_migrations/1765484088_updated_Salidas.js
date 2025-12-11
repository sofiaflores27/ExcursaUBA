/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number3347969547",
    "max": null,
    "min": null,
    "name": "Cantidad_Alumnos",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // remove field
  collection.fields.removeById("number3347969547")

  return app.save(collection)
})
