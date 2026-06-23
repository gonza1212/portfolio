export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: '¿Vamos a perder nuestros datos de Excel?',
    answer: 'No. Migramos toda la información existente al nuevo sistema y podés seguir exportando a Excel en cualquier momento como respaldo. El cambio no implica pérdida de historial.',
  },
  {
    question: '¿Qué pasa si no tenemos internet en la fábrica o en el campo?',
    answer: 'Las apps móviles funcionan sin conexión. Registran toda la información localmente y sincronizan automáticamente en cuanto hay internet disponible.',
  },
  {
    question: '¿Necesitamos contratar un técnico o armar un departamento de sistemas?',
    answer: 'No. Nos ocupamos del hosting, mantenimiento, actualizaciones de seguridad y soporte técnico. Tu empresa solo necesita usar el sistema.',
  },
  {
    question: '¿Los tiempos de desarrollo son largos y caros como con otras consultoras?',
    answer: 'No. Entregamos software funcionando cada 15 días y los precios son significativamente menores porque trabajamos ágil y construimos solo lo que pedís, sin funcionalidades infladas que nadie usa.',
  },
  {
    question: '¿Los datos están seguros y son solo nuestros?',
    answer: 'Sí. Cada cliente tiene su propia base de datos dedicada, sin datos compartidos entre empresas. Además firmamos un acuerdo de confidencialidad antes de empezar.',
  },
  {
    question: '¿Podemos probar el sistema antes de comprometer todo el presupuesto?',
    answer: 'Sí. Se puede arrancar con un MVP piloto de costo reducido para validar el sistema con usuarios reales antes de escalar al resto de la empresa.',
  },
  {
    question: '¿El servicio incluye hardware especializado como lectores RFID o sensores?',
    answer: 'No. El servicio es puramente de software alojado en la nube. Si necesitás hardware especializado (RFID, lectores de huella, reconocimiento facial, sensores industriales, etc.) se puede conversar un acuerdo puntual para ese requerimiento.',
  },
];
