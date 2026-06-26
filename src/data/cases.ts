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
  {
    sector: 'Productores de seguros',
    company: 'Estar Seguro — en construcción',
    problem: 'Como productores asesores de seguros con matrícula vigente, no contaban con un canal digital propio para presentar su oferta, mostrar el abanico de aseguradoras con las que trabajan y captar consultas de forma ordenada. Toda la atención pasaba por WhatsApp sin un punto de entrada profesional.',
    solution: 'Sitio institucional construido en Astro: portada con carrusel de imágenes y propuesta de valor, catálogo de cinco tipos de seguros (ART, Sepelio, Autos, Empresas y Otros), sección de diferenciales con llamada a la acción por WhatsApp, y formulario de cotización integrado con WhatsApp para enviar la consulta con un mensaje prearmado.',
    result: 'Sitio en desarrollo al momento de publicación. Estructura, componentes y formulario de cotización ya implementados; pendiente la carga final de contenidos y salida a producción.',
  },
];
