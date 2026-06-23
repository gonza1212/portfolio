export interface Demo {
  icon: string;
  scenario: string;
  problem: string;
  cta: string;
  href: string;
}

export const demos: Demo[] = [
  {
    icon: '📡',
    scenario: 'Imaginá que...',
    problem: 'tus operarios trabajan en un galpón sin señal de internet ni WiFi. Necesitás que registren la producción en tiempo real, pero no hay forma de tener conexión estable.',
    cta: 'Probar demo offline',
    href: '#',
  },
  {
    icon: '🧤',
    scenario: 'Imaginá que...',
    problem: 'tus empleados usan guantes de trabajo y no pueden usar pantallas táctiles con precisión. Necesitás una interfaz que se opere con pocos toques, botones grandes y sin arrastrar ni hacer gestos.',
    cta: 'Probar demo industrial UI',
    href: '#',
  },
  {
    icon: '☀️',
    scenario: 'Imaginá que...',
    problem: 'el operario usa el teléfono al sol para cargar datos en la obra. La pantalla se ve poco y los campos chicos son imposibles de leer. Necesitás una app con alto contraste y tipografía grande.',
    cta: 'Probar demo high contrast',
    href: '#',
  },
];
