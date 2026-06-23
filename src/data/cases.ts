export interface Case {
  sector: string;
  company: string;
  problem: string;
  solution: string;
  result: string;
}

export const cases: Case[] = [
  {
    sector: 'Gestión de producción',
    company: 'Zona Gráfica — en uso desde 2019',
    problem: 'La cotización dependía de un solo empleado con fórmulas de Excel que nadie más entendía. Sin trazabilidad de materiales ni un flujo ordenado entre el presupuesto aprobado y la orden de producción.',
    solution: 'Sistema web de gestión del ciclo de producción: módulo de cotización con interfaz reactiva y exportación a PDF, registro centralizado de materiales y procesos para reducir desperdicios, y órdenes de trabajo vinculadas a presupuestos con carga de estado en tiempo real.',
    result: 'En producción ininterrumpida desde 2019. La cotización pasó de ser un cuello de botella a estar disponible para todo el equipo. Visibilidad total del flujo de producción, del presupuesto a la entrega.',
  },
];
