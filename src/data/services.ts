export interface Service {
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

export const services: Service[] = [
  {
    icon: '📋',
    title: 'Gestión de operaciones',
    description: 'Automatización de procesos: reemplazamos planillas y tareas manuales por sistemas web que centralizan la información de tu empresa en tiempo real.',
  },
    {
      icon: '📱',
      title: 'Apps móviles con modo offline',
      description: 'Tu equipo trabaja sin internet. La app registra todo y sincroniza automáticamente cuando hay conexión.',
      highlight: 'Funciona sin internet',
    },
  {
    icon: '📊',
    title: 'Exportación a Excel siempre disponible',
    description: 'El sistema es tu fuente de verdad, pero podés exportar cualquier dato a Excel cuando quieras. Sin dependencias ni bloqueos.',
    highlight: 'Compatible con Excel',
  },
  {
    icon: '🔗',
    title: 'Integración con sistemas existentes',
    description: 'Si ya tenés software de facturación, ERP o sistemas legados, los conectamos para evitar la doble carga de datos.',
  },
  {
    icon: '🔒',
    title: 'Datos seguros y exclusivos',
    description: 'Base de datos dedicada por cliente. Tus datos nunca se mezclan con los de otras empresas. Firmamos acuerdo de confidencialidad.',
  },
  {
    icon: '🛠️',
    title: 'Mantenimiento y soporte incluido',
    description: 'Hosting, actualizaciones, backups y soporte técnico. No necesitás contratar un departamento de sistemas.',
  },
];
