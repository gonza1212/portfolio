export interface Case {
  sector: string;
  company: string;
  problem: string;
  solution: string;
  result: string;
  url?: string;
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
    company: 'Estar Seguro - online',
    problem: 'Como productores asesores de seguros, no contaban con un canal digital propio para presentar su oferta, portfolio de aseguradoras, forma de trabajo y atención al usuario. Sin un punto de entrada profesional.',
    solution: 'Sitio institucional con diseño profesional: portada con carrusel de imágenes y propuesta de valor, catálogo de tipos de seguros, sección de diferenciales con CTA vía WhatsApp y formulario de cotización integrado para enviar consultas con mensajes prearmados.',
    result: 'Sitio optimizado para carga rápida, SEO y AEO (optimización para agentes de IA), aportando mayor visibilidad y una presencia online profesional, apegándose fielmente al diseño provisto, con full-responsive y mobile-first como máximas del desarrollo.',
    url: 'https://estarseguro.com.ar',
  },
];
