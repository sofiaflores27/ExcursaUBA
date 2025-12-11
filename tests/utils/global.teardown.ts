import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

async function globalTeardown() {
  console.log("Ejecutando globalTeardown: Limpiando entorno de pruebas...");
  await eliminarSalidas();
}

export async function eliminarSalidas() {
  const salidas = await pb.collection("Salidas").getFullList({
    filter:
      "Titulo_Salida = 'Excursion 2' || Titulo_Salida = 'Teatro'",
  });

  for (const salida of salidas) {
    await pb.collection("Salidas").delete(salida.id);
    console.log(`Registro con ID ${salida.id} eliminado.`);
  }

  console.log("Datos de prueba eliminados correctamente.");
}

export default globalTeardown;
