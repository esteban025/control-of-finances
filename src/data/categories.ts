import {type Category } from "@/types/categories";

export const categories: Category[] = [
  {
    id: "alimentacion",
    name: "Alimentación",
    colors: "bg-red-50 text-red-800 dark:bg-red-600/20 dark:text-red-50",
    spentLimit: 0,
    subcategories: [
      "Supermercado",
      "Mercado/Feria",
      "Carnicería/Pescadería",
      "Panadería",
      "Restaurantes",
      "Comida rápida",
      "Delivery",
      "Café/Snacks",
      "Despensa/Alimentos básicos"
    ]
  },
  {
    id: "transporte",
    name: "Transporte",
    colors: "bg-blue-50 text-blue-800 dark:bg-blue-600/20 dark:text-blue-50",
    spentLimit: 0,
    subcategories: [
      "Gasolina/Combustible",
      "Transporte público",
      "Uber/Taxi",
      "Mantenimiento vehículo",
      "Estacionamiento",
      "Peajes",
      "Viajes/Pasajes",
      "Repuestos vehículo",
      "Seguro vehículo"
    ]
  },
  {
    id: "vivienda",
    name: "Vivienda",
    colors: "bg-yellow-50 text-yellow-800 dark:bg-yellow-600/20 dark:text-yellow-50",
    spentLimit: 0,
    subcategories: [
      "Alquiler/Hipoteca",
      "Electricidad",
      "Agua",
      "Gas",
      "Internet",
      "Teléfono/Celular",
      "Seguro hogar",
      "Condominio/Administración",
      "Reparaciones hogar",
      "Productos de limpieza"
    ]
  },
  {
    id: "salud",
    name: "Salud",
    colors: "bg-green-50 text-green-800 dark:bg-green-600/20 dark:text-green-50",
    spentLimit: 0,
    subcategories: [
      "Consultas médicas",
      "Medicamentos",
      "Farmacia",
      "Emergencias médicas",
      "Seguro médico",
      "Exámenes/Análisis",
      "Odontología",
      "Terapias",
      "Vitaminas/Suplementos",
      "Psicología/Psiquiatría"
    ]
  },
  {
    id: "entretenimiento",
    name: "Entretenimiento",
    colors: "bg-purple-50 text-purple-800 dark:bg-purple-600/20 dark:text-purple-50",
    spentLimit: 0,
    subcategories: [
      "Cine/Teatro",
      "Conciertos/Eventos",
      "Bares/Discotecas",
      "Videojuegos",
      "Netflix/Streaming",
      "Spotify/Música",
      "Libros/Revistas",
      "Actividades recreativas",
      "Parques/Diversiones",
      "Deportes/Espectáculos"
    ]
  },
  {
    id: "compras",
    name: "Compras",
    colors: "bg-pink-50 text-pink-800 dark:bg-pink-600/20 dark:text-pink-50",
    spentLimit: 0,
    subcategories: [
      "Ropa",
      "Calzado",
      "Electrónicos/Gadgets",
      "Electrodomésticos",
      "Hogar/Decoración",
      "Regalos",
      "Cosméticos/Maquillaje",
      "Accesorios",
      "Artículos deportivos",
      "Juguetes"
    ]
  },
  {
    id: "cuidado-personal",
    name: "Cuidado Personal",
    colors: "bg-rose-50 text-rose-800 dark:bg-rose-600/20 dark:text-rose-50",
    spentLimit: 0,
    subcategories: [
      "Peluquería/Barbería",
      "Manicure/Pedicure",
      "Spa/Masajes",
      "Productos de belleza",
      "Perfumes",
      "Tratamientos faciales",
      "Depilación",
      "Dentista estético",
      "Productos de higiene",
      "Gimnasio/Membresías"
    ]
  },
  {
    id: "educacion",
    name: "Educación",
    colors: "bg-indigo-50 text-indigo-800 dark:bg-indigo-600/20 dark:text-indigo-50",
    spentLimit: 0,
    subcategories: [
      "Colegiatura",
      "Cursos online",
      "Capacitaciones",
      "Libros/Material educativo",
      "Útiles escolares",
      "Seminarios/Talleres",
      "Certificaciones",
      "Idiomas",
      "Universidad/Instituto"
    ]
  },
  {
    id: "deudas-prestamos",
    name: "Deudas y Préstamos",
    colors: "bg-red-100 text-red-900 dark:bg-red-700/20 dark:text-red-100",
    spentLimit: 0,
    subcategories: [
      "Tarjeta de crédito",
      "Préstamo personal",
      "Préstamo estudiantil",
      "Préstamo vehículo",
      "Crédito hipotecario",
      "Deuda familiar/amigos",
      "Financiamientos",
      "Intereses y comisiones"
    ]
  },
  {
    id: "ahorros-inversiones",
    name: "Ahorros e Inversiones",
    colors: "bg-teal-50 text-teal-800 dark:bg-teal-600/20 dark:text-teal-50",
    spentLimit: 0,
    subcategories: [
      "Ahorro programado",
      "Fondo de emergencia",
      "Inversiones",
      "Fondos de pensión",
      "Seguros de vida",
      "Ahorro para objetivos",
      "Criptomonedas",
      "Bienes raíces"
    ]
  },
  {
    id: "mascotas",
    name: "Mascotas",
    colors: "bg-orange-50 text-orange-800 dark:bg-orange-600/20 dark:text-orange-50",
    spentLimit: 0,
    subcategories: [
      "Comida para mascotas",
      "Veterinario",
      "Medicamentos veterinarios",
      "Grooming/Peluquería",
      "Juguetes/Accesorios",
      "Seguro mascotas",
      "Entrenamiento",
      "Hospedaje/Guardería"
    ]
  },
  {
    id: "trabajo-profesional",
    name: "Trabajo y Profesional",
    colors: "bg-slate-50 text-slate-800 dark:bg-slate-600/20 dark:text-slate-50",
    spentLimit: 0,
    subcategories: [
      "Herramientas de trabajo",
      "Ropa de trabajo",
      "Gastos de oficina",
      "Desarrollo profesional",
      "Networking/Eventos",
      "Software/Licencias",
      "Equipos tecnológicos",
      "Transporte laboral"
    ]
  },
  {
    id: "familia-hijos",
    name: "Familia e Hijos",
    colors: "bg-emerald-50 text-emerald-800 dark:bg-emerald-600/20 dark:text-emerald-50",
    spentLimit: 0,
    subcategories: [
      "Pañales/Productos bebé",
      "Ropa infantil",
      "Juguetes educativos",
      "Guardería/Niñera",
      "Actividades extraescolares",
      "Cumpleaños/Celebraciones",
      "Salud infantil",
      "Transporte escolar"
    ]
  },
  {
    id: "otros",
    name: "Otros",
    colors: "bg-gray-50 text-gray-800 dark:bg-gray-600/20 dark:text-gray-50",
    spentLimit: 0,
    subcategories: [
      "Donaciones/Caridad",
      "Imprevistos",
      "Multas/Penalidades",
      "Trámites/Documentos",
      "Gastos legales",
      "Reparaciones diversas",
      "Eventos sociales",
      "Gastos varios"
    ]
  }
]

export const chartColors = [
  "#ef4444", 
  "#3b82f6", 
  "#8b5cf6", 
  "#10b981", 
  "#f59e0b", 
  "#ec4899", 
  "#f43f5e", 
  "#6366f1", 
  "#6b7280"
]