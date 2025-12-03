import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
async function globalTeardown() {
  console.log("Ejecutando globalTeardown: Limpiando entorno de pruebas...");
  const resultList = await pb.collection("Salidas").getFullList({
    filter:
      "Titulo_Salida = 'Excursion 2' || Titulo_Salida = 'Museo De Ciencias'",
  });

  await pb.collection("Salidas").delete("RECORD_ID");

  console.log("Datos de prueba eliminados correctamente.");
}

export default globalTeardown;
