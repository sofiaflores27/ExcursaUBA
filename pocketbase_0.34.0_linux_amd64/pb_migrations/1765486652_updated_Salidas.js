/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // remove field
  collection.fields.removeById("relation2634666845")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1030927384")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1030927384",
    "hidden": false,
    "id": "relation2634666845",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Responsables",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
