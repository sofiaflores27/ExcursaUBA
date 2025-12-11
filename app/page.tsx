"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon, Calendar, Clock, Users, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Excursion {
  id: string;
  title: string;
  numStudents: number;
  responsibleAdults: { name: string; role: string }[];
  date: string;
  time: string;
}

export default function ExcursaUBAPage() {
  const [excursions, setExcursions] = useState<Excursion[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newExcursion, setNewExcursion] = useState({
    title: "",
    numStudents: 0,
    date: "",
    time: "",
  });

  const [responsibleAdults, setResponsibleAdults] = useState<
    { name: string; role: string }[]
  >([]);
  const [currentAdult, setCurrentAdult] = useState({ name: "", role: "" });

  useEffect(() => {
    fetch(
      "http://127.0.0.1:8090/api/collections/Salidas/records?page=1&perPage=30"
    )
      .then((res) => res.json())
      .then((data) => {
        const parsed = data.items.map((item: any) => ({
          id: item.id,
          title: item.Titulo_Salida,
          numStudents: item.Cantidad_Alumnos || 0,
          responsibleAdults: item.Responsable
            ? item.Responsable.split(", ").map((entry: string) => {
                const match = entry.match(/^(.*) \((.*)\)$/);
                return { name: match?.[1] || "", role: match?.[2] || "" };
              })
            : [],
          date: item.Fecha_Salida,
          time: item.Horario_Salida,
        }));
        setExcursions(parsed);
      })
      .catch(console.error);
  }, []);

  const handleAddAdult = () => {
    if (currentAdult.name && currentAdult.role) {
      setResponsibleAdults([...responsibleAdults, currentAdult]);
      setCurrentAdult({ name: "", role: "" });
    }
  };

  const handleRemoveAdult = (index: number) => {
    setResponsibleAdults(responsibleAdults.filter((_, i) => i !== index));
  };

  const handleAddExcursion = () => {
    if (
      newExcursion.title &&
      newExcursion.numStudents >= 0 &&
      newExcursion.date &&
      newExcursion.time
    ) {
      fetch("http://127.0.0.1:8090/api/collections/Salidas/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fecha_Salida: newExcursion.date,
          Horario_Salida: newExcursion.time,
          Responsable: responsibleAdults
            .map((adult) => `${adult.name} (${adult.role})`)
            .join(", "),
          Titulo_Salida: newExcursion.title,
          Cantidad_Alumnos: Number(newExcursion.numStudents),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const newItem: Excursion = {
            id: data.id,
            title: data.Titulo_Salida,
            numStudents: data.Cantidad_Alumnos,
            responsibleAdults: data.Responsable
              ? data.Responsable.split(", ").map((entry: string) => {
                  const match = entry.match(/^(.*) \((.*)\)$/);
                  return { name: match?.[1] || "", role: match?.[2] || "" };
                })
              : [],
            date: data.Fecha_Salida,
            time: data.Horario_Salida,
          };
          setExcursions([...excursions, newItem]);
          setNewExcursion({ title: "", numStudents: 0, date: "", time: "" });
          setResponsibleAdults([]);
          setIsDialogOpen(false);
        })
        .catch(console.error);
    }
  };

  // NUEVO MÉTODO PARA LA NUEVA PROPOSICIÓN
  const handleAddPropuesta = () => {
    // Validación de la nueva propuesta (si es necesario)
    if (
      newExcursion.title &&
      newExcursion.numStudents >= 0 &&
      newExcursion.date &&
      newExcursion.time
    ) {
      fetch("http://127.0.0.1:8090/api/collections/Salidas_Alumnos/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fecha_Salida: newExcursion.date,
          Horario_Salida: newExcursion.time,
          Responsable: responsibleAdults
            .map((adult) => `${adult.name} (${adult.role})`)
            .join(", "),
          Titulo_Salida: newExcursion.title,
          Cantidad_Alumnos: Number(newExcursion.numStudents),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Aquí puedes hacer algo con la respuesta, como actualizar la lista
          alert("Nueva propuesta agregada exitosamente.");
          setNewExcursion({ title: "", numStudents: 0, date: "", time: "" });
          setResponsibleAdults([]);
        })
        .catch(console.error);
    }
  };

  const cardColors = [
    "bg-[oklch(0.35_0.12_255)]",
    "bg-[oklch(0.75_0.08_220)]",
    "bg-[oklch(0.65_0.15_210)]",
    "bg-[oklch(0.50_0.10_240)]",
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-OlQUL6sPmlnGOi07AcEqtFxPWo5KND.png"
              alt="Logo UBA"
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <h1 className="font-bold tracking-tight text-[oklch(0.27_0.12_255)] text-5xl md:text-6xl">
              ExcursaUBA
            </h1>
          </div>

          <p className="text-balance text-foreground/80 text-lg">
            Sistema de organización de viajes y salidas grupales - Escuela
            Técnica UBA
          </p>
        </header>

        {/* Imagen divisoria arriba */}
        <header className="mb-12 text-center">
          <div className="mx-auto mt-15 flex w-full max-w-4xl justify-center overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-NrxjocI9WvSeQrSG8capWhWf5TNVFf.png"
              alt="Decorative divider"
              className="h-1 w-full object-cover object-center"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </header>

        {/* TARJETAS */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {excursions.map((excursion, index) => (
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

              <CardContent className="space-y-5 pt-6">
                <div className="flex items-start justify-between gap-4">
                  {/* Students */}
                  <div className="flex flex-1 flex-col items-center">
                    <Users className="h-6 w-6 text-white" />
                    <p className="text-sm font-bold text-white/80">
                      N° Alumnos:
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {excursion.numStudents}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-24 w-[2px] bg-white/30" />

                  {/* Adults */}
                  <div className="flex-1 text-center">
                    <p className="mb-2 text-sm font-bold text-white/80">
                      Adultos Responsables:
                    </p>
                    {excursion.responsibleAdults.map((adult, i) => (
                      <p key={i} className="text-sm font-medium text-white">
                        {adult.name} ({adult.role})
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t-2 border-white/30 pt-4">
                  {/* Fecha */}
                  <div className="flex flex-1 flex-col items-center">
                    <Calendar className="h-5 w-5 text-white" />
                    <p className="text-xs font-bold text-white/80">Fecha:</p>
                    <p className="text-lg font-bold text-white">
                      {excursion.date}
                    </p>
                  </div>

                  <div className="h-16 w-[2px] bg-white/30" />

                  {/* Horario */}
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

        {/* Imagen divisoria abajo */}
        <div className="mx-auto mt-8 flex w-full max-w-4xl justify-center overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-NrxjocI9WvSeQrSG8capWhWf5TNVFf.png"
            alt="Decorative divider"
            className="h-1 w-full object-cover object-center"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>

        {/* Botón "Agregar Nueva Propuesta..." */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="w-full border-4 border-white bg-[oklch(0.65_0.15_210)] py-8 text-lg font-bold text-white shadow-lg"
            onClick={handleAddPropuesta}
          >
            <PlusIcon className="mr-2 h-6 w-6" />
            Agregar Nueva Propuesta...
          </Button>
        </div>
      </div>
    </div>
  );
}
