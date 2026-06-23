export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Diagnóstico gratuito',
    description: 'Reunión para entender tu flujo actual, los dolores reales y qué información necesitás centralizar.',
  },
  {
    number: 2,
    title: 'MVP en 30 días',
    description: 'Primera versión funcional del módulo principal. Algo real que podés usar y mostrar a tu equipo.',
  },
  {
    number: 3,
    title: 'Entregas quincenales',
    description: 'Iteramos cada 15 días con feedback directo. Construimos solo lo que pedís, sin funcionalidades infladas.',
  },
  {
    number: 4,
    title: 'Migración de datos',
    description: 'Importamos tus Excel, Access, o lo que tengas. Tus datos históricos no se pierden.',
  },
  {
    number: 5,
    title: 'Capacitación y soporte',
    description: 'Acompañamos al equipo hasta que domine el sistema. Soporte continuo post-lanzamiento.',
  },
];
