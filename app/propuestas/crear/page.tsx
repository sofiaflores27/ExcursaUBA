"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function CrearSalida() {
  const router = useRouter();
  const pb = new PocketBase("http://10.56.13.24:8090");

  const [form, setForm] = useState({
    Titulo_Salida: "",
    Como_Llegar: "",
    Que_Llevar: [] as string[],
    Cuanto_Dura: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleMultipleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setForm({
      ...form,
      Que_Llevar: values,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await pb.collection("Salidas_Alumnos").create(form);

router.push("/?created=true");      
router.refresh();
    } catch (error: any) {
      console.error(error);
      setErrorMsg("Error al guardar.");
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

        {errorMsg && (
          <p className="text-red-500 mb-3 text-sm">{errorMsg}</p>
        )}

        {/* Titulo */}
        <input
          type="text"
          name="Titulo_Salida"
          placeholder="Título de la salida"
          value={form.Titulo_Salida}
          onChange={handleChange}
          className="border w-full mb-3 p-2 rounded"
          required
        />

        {/* Como Llegar (Single) */}
        <select
          name="Como_Llegar"
          value={form.Como_Llegar}
          onChange={handleChange}
          className="border w-full mb-3 p-2 rounded"
          required
        >
          <option value="">Seleccionar cómo llegar</option>
          <option value="Independiente">Independiente</option>
          <option value="Colectivo (Todos Juntos))">
            Colectivo (Todos Juntos)
          </option>
          <option value="Contratar Micro">Contratar Micro</option>
        </select>

        {/* Que Llevar (Multiple con checkboxes) */}
<div className="mb-4">
  <label className="block mb-2 font-semibold">
    ¿Qué llevar?
  </label>

  {[
    "Mochila",
    "Comida",
    "Agua",
    "Abrigo",
    "Gorra",
    "Repelente",
  ].map((item) => (
    <label key={item} className="flex items-center gap-2 mb-1">
      <input
        type="checkbox"
        value={item}
        checked={form.Que_Llevar.includes(item)}
        onChange={(e) => {
          if (e.target.checked) {
            setForm({
              ...form,
              Que_Llevar: [...form.Que_Llevar, item],
            });
          } else {
            setForm({
              ...form,
              Que_Llevar: form.Que_Llevar.filter(
                (i) => i !== item
              ),
            });
          }
        }}
      />
      {item}
    </label>
  ))}
</div>

        {/* Cuanto Dura (Single) */}
        <select
          name="Cuanto_Dura"
          value={form.Cuanto_Dura}
          onChange={handleChange}
          className="border w-full mb-4 p-2 rounded"
          required
        >
          <option value="">Seleccionar duración</option>
          <option value="1 Hora">1 Hora</option>
          <option value="2 Horas">2 Horas</option>
          <option value="3 Horas">3 Horas</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </div>
  );
}