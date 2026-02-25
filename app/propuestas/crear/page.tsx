"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import { Button } from "@/components/ui/button";

export default function CrearSalida() {
  const router = useRouter();
  const pb = new PocketBase("http://127.0.0.1:8090"); // URL de tu PocketBase

  const [titulo, setTitulo] = useState("");
  const [comoLlegar, setComoLlegar] = useState("");
  const [queLlevar, setQueLlevar] = useState("");
  const [cuantoDura, setCuantoDura] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const record = await pb.collection("Salidas_Alumnos").create({
        Titulo_Salida: titulo,
        Como_Llegar: comoLlegar,
        Que_Llevar: queLlevar,
        Cuanto_Dura: cuantoDura,
      });

      console.log("Registro creado:", record);

      // Redirigir solo si se creó correctamente
      if (record && record.id) {
        router.push("/"); // tu página principal
      } else {
        setErrorMsg("No se pudo crear el registro.");
      }
    } catch (error: any) {
      console.error("Error al guardar la salida:", error);
      setErrorMsg("Error al guardar: " + (error.message || error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-xl font-bold mb-4">Nueva Salida</h1>

        {errorMsg && <p className="text-red-500 mb-2">{errorMsg}</p>}

        <label className="block mb-2">
          Título de la salida
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            required
          />
        </label>

        <label className="block mb-2">
          Cómo llegar
          <textarea
            value={comoLlegar}
            onChange={(e) => setComoLlegar(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            required
          />
        </label>

        <label className="block mb-2">
          Qué llevar
          <textarea
            value={queLlevar}
            onChange={(e) => setQueLlevar(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            required
          />
        </label>

        <label className="block mb-4">
          Cuánto dura
          <input
            type="text"
            value={cuantoDura}
            onChange={(e) => setCuantoDura(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            required
          />
        </label>

        <Button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </Button>
      </form>
    </div>
  );
}