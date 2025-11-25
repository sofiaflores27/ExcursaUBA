'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusIcon, Calendar, Clock, Users, X } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Excursion {
  id: string
  title: string
  numStudents: number
  responsibleAdults: { name: string; role: string }[]
  date: string
  time: string
}

export default function ExcursaUBAPage() {
  const [excursions, setExcursions] = useState<Excursion[]>([
    {
      id: '1',
      title: 'Parque de la Memoria',
      numStudents: 34,
      responsibleAdults: [
        { name: 'Mariela', role: 'Profesora' },
        { name: 'Juan', role: 'Preceptor' },
        { name: 'Lucas', role: 'Profesor' },
        { name: 'Carlos', role: 'Preceptor' },
      ],
      date: '11/07',
      time: '11:00hs',
    },
    {
      id: '2',
      title: 'Laboratorio Cassara',
      numStudents: 45,
      responsibleAdults: [
        { name: 'Belen', role: 'Profesora' },
        { name: 'Diana', role: 'Preceptora' },
        { name: 'Emanuel', role: 'Profesor' },
        { name: 'Esteban', role: 'Preceptor' },
      ],
      date: '01/05',
      time: '12:00hs',
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newExcursion, setNewExcursion] = useState({
    title: '',
    numStudents: '',
    date: '',
    time: '',
  })

  const [responsibleAdults, setResponsibleAdults] = useState<{ name: string; role: string }[]>([])
  const [currentAdult, setCurrentAdult] = useState({ name: '', role: '' })

  const handleAddAdult = () => {
    if (currentAdult.name && currentAdult.role) {
      setResponsibleAdults([...responsibleAdults, currentAdult])
      setCurrentAdult({ name: '', role: '' })
    }
  }

  const handleRemoveAdult = (index: number) => {
    setResponsibleAdults(responsibleAdults.filter((_, i) => i !== index))
  }

  const handleAddExcursion = () => {
    if (newExcursion.title && newExcursion.numStudents && newExcursion.date && newExcursion.time) {
      const excursion: Excursion = {
        id: Date.now().toString(),
        title: newExcursion.title,
        numStudents: parseInt(newExcursion.numStudents),
        responsibleAdults: responsibleAdults,
        date: newExcursion.date,
        time: newExcursion.time,
      }
      setExcursions([...excursions, excursion])
      setNewExcursion({ title: '', numStudents: '', date: '', time: '' })
      setResponsibleAdults([])
      setIsDialogOpen(false)
    }
  }

  const cardColors = [
    'bg-[oklch(0.35_0.12_255)]', // Dark navy blue
    'bg-[oklch(0.75_0.08_220)]', // Light cyan
    'bg-[oklch(0.65_0.15_210)]', // Medium turquoise
    'bg-[oklch(0.50_0.10_240)]', // Medium blue
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 text-center">
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
            Sistema de organización de viajes y salidas grupales - Escuela Técnica UBA
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-4xl justify-center overflow-hidden">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-NrxjocI9WvSeQrSG8capWhWf5TNVFf.png" 
              alt="Decorative divider" 
              className="h-1 w-full object-cover object-center"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </header>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {excursions.map((excursion, index) => (
            <Card 
              key={excursion.id} 
              className={`border-4 border-white shadow-lg transition-all hover:shadow-2xl ${cardColors[index % cardColors.length]}`}
            >
              <CardHeader className="border-b-2 border-white/30 bg-white/10">
                <CardTitle className="text-balance text-center text-2xl font-bold text-white">
                  {excursion.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 pt-6">
                <div className="flex items-start justify-between gap-4">
                  {/* Number of Students */}
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <Users className="h-6 w-6 text-white" />
                    <div className="text-center">
                      <p className="text-sm font-bold text-white/80">N° Alumnos:</p>
                      <p className="text-3xl font-bold text-white">{excursion.numStudents}</p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-24 w-[2px] bg-white/30" />

                  {/* Responsible Adults */}
                  <div className="flex-1">
                    <p className="mb-2 text-center text-sm font-bold text-white/80">
                      Adultos Responsables:
                    </p>
                    <div className="space-y-1 text-center">
                      {excursion.responsibleAdults.map((adult, index) => (
                        <p key={index} className="text-sm font-medium text-white">
                          {adult.name} ({adult.role})
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t-2 border-white/30 pt-4">
                  <div className="flex flex-1 flex-col items-center gap-2">
                    <Calendar className="h-5 w-5 text-white" />
                    <div className="text-center">
                      <p className="text-xs font-bold text-white/80">Fecha:</p>
                      <p className="text-lg font-bold text-white">{excursion.date}</p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-16 w-[2px] bg-white/30" />

                  <div className="flex flex-1 flex-col items-center gap-2">
                    <Clock className="h-5 w-5 text-white" />
                    <div className="text-center">
                      <p className="text-xs font-bold text-white/80">Horario:</p>
                      <p className="text-lg font-bold text-white">{excursion.time}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="w-full border-4 border-white bg-[oklch(0.65_0.15_210)] py-8 text-lg font-bold text-white shadow-lg hover:bg-[oklch(0.60_0.15_210)] hover:shadow-2xl"
            >
              <PlusIcon className="mr-2 h-6 w-6" />
              Añadir Nueva Excursión...
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Nueva Excursión</DialogTitle>
              <DialogDescription>
                Ingresa los detalles de la nueva excursión para los estudiantes de la Escuela
                Técnica UBA.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Nombre de la Excursión</Label>
                <Input
                  id="title"
                  placeholder="Ej: Museo de Ciencias Naturales"
                  value={newExcursion.title}
                  onChange={(e) =>
                    setNewExcursion({ ...newExcursion, title: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="students">Número de Alumnos</Label>
                <Input
                  id="students"
                  type="number"
                  placeholder="Ej: 30"
                  value={newExcursion.numStudents}
                  onChange={(e) =>
                    setNewExcursion({ ...newExcursion, numStudents: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-3 rounded-lg border p-4">
                <Label className="text-base font-semibold">Adultos Responsables</Label>
                
                {/* List of added adults */}
                {responsibleAdults.length > 0 && (
                  <div className="space-y-2">
                    {responsibleAdults.map((adult, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded bg-muted p-2"
                      >
                        <span className="text-sm">
                          {adult.name} - {adult.role}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveAdult(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Form to add new adult */}
                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="adult-name">Nombre</Label>
                    <Input
                      id="adult-name"
                      placeholder="Ej: María González"
                      value={currentAdult.name}
                      onChange={(e) =>
                        setCurrentAdult({ ...currentAdult, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="adult-role">Rol</Label>
                    <Select
                      value={currentAdult.role}
                      onValueChange={(value) =>
                        setCurrentAdult({ ...currentAdult, role: value })
                      }
                    >
                      <SelectTrigger id="adult-role">
                        <SelectValue placeholder="Selecciona un rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Profesor">Profesor</SelectItem>
                        <SelectItem value="Profesora">Profesora</SelectItem>
                        <SelectItem value="Preceptor">Preceptor</SelectItem>
                        <SelectItem value="Preceptora">Preceptora</SelectItem>
                        <SelectItem value="Coordinador">Coordinador</SelectItem>
                        <SelectItem value="Coordinadora">Coordinadora</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={handleAddAdult}
                    disabled={!currentAdult.name || !currentAdult.role}
                  >
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Agregar Adulto
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    placeholder="DD/MM"
                    value={newExcursion.date}
                    onChange={(e) =>
                      setNewExcursion({ ...newExcursion, date: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Horario</Label>
                  <Input
                    id="time"
                    placeholder="HH:MMhs"
                    value={newExcursion.time}
                    onChange={(e) =>
                      setNewExcursion({ ...newExcursion, time: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddExcursion}>Agregar Excursión</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
