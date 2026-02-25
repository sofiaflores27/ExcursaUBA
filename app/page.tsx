"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon, Calendar, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

interface Excursion {
  id: string;
  title: string;
  numStudents: number;
  responsibleAdults: { name: string; role: string }[];
  date: string;
  time: string;
}

export default function ExcursaUBAPage() {
  const router = useRouter();

  const [excursiones, setExcursiones] = useState<Excursion[]>([]);
  const [salidasAlumnos, setSalidasAlumnos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 EXCURSIONES (colección Salidas)
        const resSalidas = await fetch(
          "http://127.0.0.1:8090/api/collections/Salidas/records?page=1&perPage=30"
        );
        const dataSalidas = await resSalidas.json();

        const salidasParseadas = dataSalidas.items.map((item: any) => ({
          id: item.id,
          title: item.Titulo_Salida,
          numStudents: item.Cantidad_Alumnos || 0,
          responsibleAdults: item.Responsable
            ? item.Responsable.split(", ").map((entry: string) => {
                const match = entry.match(/^(.*) \((.*)\)$/);
                return { name: match?.[1] || "", role: match?.[2] || "" };
              })
            : [],
          date: item.Fecha_Salida || "Sin fecha",
          time: item.Horario_Salida || "Sin horario",
        }));

        setExcursiones(salidasParseadas);

        // 🔹 SALIDAS PROPUESTAS (Salidas_Alumnos)
        const resAlumnos = await fetch(
          "http://127.0.0.1:8090/api/collections/Salidas_Alumnos/records?page=1&perPage=30"
        );
        const dataAlumnos = await resAlumnos.json();

        setSalidasAlumnos(dataAlumnos.items);

      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    fetchData();
  }, []);

  const cardColors = [
    "bg-[oklch(0.35_0.12_255)]",
    "bg-[oklch(0.75_0.08_220)]",
    "bg-[oklch(0.65_0.15_210)]",
    "bg-[oklch(0.50_0.10_240)]",
  ];


  const notify = () => toast("Wow so easy!");
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <header className="mb-10 text-center">
          <h1 className="font-bold tracking-tight text-[oklch(0.27_0.12_255)] text-5xl md:text-6xl">
            ExcursaUBA
          </h1>
          <p className="text-lg text-foreground/80">
            Sistema de organización de viajes y salidas grupales
          </p>
        </header>

        {/* ================= EXCURSIONES ================= */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          Excursiones
        </h2>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {excursiones.map((excursion, index) => (
            <Card
              key={excursion.id}
              className={`border-4 border-white shadow-lg transition-all hover:shadow-2xl ${
                cardColors[index % cardColors.length]
              }`}
            >
              <CardHeader className="border-b-2 border-white/30 bg-white/10">
                <CardTitle className="text-center text-2xl font-bold text-white">
                  {excursion.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 pt-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-1 flex-col items-center">
                    <Users className="h-6 w-6 text-white" />
                    <p className="text-sm font-bold text-white/80">
                      N° Alumnos:
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {excursion.numStudents}
                    </p>
                  </div>

                  <div className="h-24 w-[2px] bg-white/30" />

                  <div className="flex-1 text-center">
                    <p className="mb-2 text-sm font-bold text-white/80">
                      Adultos Responsables:
                    </p>

                    {excursion.responsibleAdults.length === 0 ? (
                      <p className="text-sm text-white/70">
                        No asignados
                      </p>
                    ) : (
                      excursion.responsibleAdults.map((adult, i) => (
                        <p key={i} className="text-sm font-medium text-white">
                          {adult.name} ({adult.role})
                        </p>
                      ))
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t-2 border-white/30 pt-4">
                  <div className="flex flex-1 flex-col items-center">
                    <Calendar className="h-5 w-5 text-white" />
                    <p className="text-xs font-bold text-white/80">Fecha:</p>
                    <p className="text-lg font-bold text-white">
                      {excursion.date}
                    </p>
                  </div>

                  <div className="h-16 w-[2px] bg-white/30" />

                  <div className="flex flex-1 flex-col items-center">
                    <Clock className="h-5 w-5 text-white" />
                    <p className="text-xs font-bold text-white/80">Horario:</p>
                    <p className="text-lg font-bold text-white">
                      {excursion.time}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ================= SALIDAS PROPUESTAS ================= */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          Salidas Propuestas
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {salidasAlumnos.map((salida: any, index) => (
            <Card
              key={salida.id}
              className={`border-4 border-white shadow-lg transition-all hover:shadow-2xl ${
                cardColors[index % cardColors.length]
              }`}
            >
              <CardHeader className="border-b-2 border-white/30 bg-white/10">
                <CardTitle className="text-center text-2xl font-bold text-white">
                  {salida.Titulo_Salida}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 pt-6 text-white text-center">
                <p>
                  <strong>Cómo llegar:</strong> {salida.Como_Llegar}
                </p>

                <p>
                  <strong>Cuánto dura:</strong> {salida.Cuanto_Dura}
                </p>

                <p>
                  <strong>Qué llevar:</strong>{" "}
                  {salida.Que_Llevar?.join(", ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* BOTÓN */}
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="w-full border-4 border-white bg-[oklch(0.65_0.15_210)] py-8 text-lg font-bold text-white shadow-lg"
            onClick={() => router.push("/propuestas/crear")}
          >
            <PlusIcon className="mr-2 h-6 w-6" />
            Agregar Nueva Propuesta...
          </Button>
        </div>

         <button onClick={notify}>Notify!</button>
        <ToastContainer />

      </div>
    </div>
  );
}