import PocketBase from "pocketbase";
import { eliminarSalidas } from "./global.teardown";

const pb = new PocketBase("http://10.56.13.24:8090");

async function globalSetup() {
  console.log("Ejecutando globalSetup: Limpiando entorno de pruebas...");
  await eliminarSalidas();
}



export default globalSetup;
