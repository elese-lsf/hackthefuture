// ─────────────────────────────────────────────
//  HACK THE FUTURE · Lista de episodios
//  Para agregar un episodio nuevo:
//  1. Copiá un bloque { ... } existente
//  2. Pegalo al inicio del array (el más nuevo primero)
//  3. Completá id, num, title, description
// ─────────────────────────────────────────────

const EPISODES = [
  {
    id: "f-4R_wy0Usg",           // ID de YouTube (lo que va después de ?v=)
    num: "Ep. 08",
    title: "IA y Recursos Humanos: El Valor de las Personas con Martina Pailhe",
    description: "Porque en un mundo donde gran parte del trabajo más manual empieza a automatizarse, las personas pasan a ser todavía más importantes. Esto cambia muchisimo mas que solo la forma de contatar."
  },
  {
    id: "HfjHRKJFzis",           // ID de YouTube (lo que va después de ?v=)
    num: "Ep. 07",
    title: "Liderar Tecnología en la Era de la IA con María Caraballo",
    description: "Desde herramientas que “alucinan” o generan outputs incorrectos, hasta una necesidad cada vez más fuerte de líderes técnicos que realmente entiendan lo que están viendo y puedan cuestionarlo."
  },
  {
    id: "HfjHRKJFzis",           // ID de YouTube (lo que va después de ?v=)
    num: "Ep. 06",
    title: "Emprender en la era del IA: Seguros, Ideas y Fracasos con Guillermo Beilinson",
    description: "Después de pasar por el mundo corporativo, Guillermo tenía claro que quería construir algo distinto. Pero encontrar qué hacer (y cómo hacerlo) no fue inmediato."
  },
  {
    id: "ugHxrLu3u3s",
    num: "Ep. 05",
    title: "Mastercard: datos, seguridad y el futuro financiero con Fede Martínez Tato",
    description: "Es Mastercard solo una empresa de pagos? O se está convirtiendo en una compañía de datos e infraestructura digital? Qué rol juega la tecnología en la seguridad financiera hoy?"
  },
  {
    id: "Znrpc4n1UAo",
    num: "Ep. 04",
    title: "IA y Alto Rendimiento: Cómo la Tecnología Está Cambiando el Deporte con Roberto",
    description: "¿Qué pasa cuando el entrenamiento deja de ser solo físico y empieza a ser también data-driven? ¿Cómo cambia la preparación de un deportista cuando puede medir reflejos, tiempos de reacción y toma de decisiones en tiempo real?"
  },
  {
    id: "vOmSuKgUO6o",
    num: "Ep. 03",
    title: "Datos, IA y Marketing Analytics con Demian Matarazzo",
    description: "En un momento donde la inteligencia artificial empieza a automatizar cada vez más análisis y procesos dentro del marketing digital, surge una pregunta clave: ¿cómo cambia la forma en que entendemos y medimos el impacto del marketing?"
  },
  {
    id: "nc9g5TUolHg",
    num: "Ep. 02",
    title: "IA en la Industria de Viajes: Reinventar el Travel desde Cero con Marcelo Morales Rins",
    description: "¿Qué pasa cuando aplicás una mentalidad fintech a una industria tradicional como el turismo?¿Puede la IA rediseñar la experiencia completa de planificar y vivir un viaje?"
  },
  {
    id: "4UpLiB1LuoI",
    num: "Ep. 01",
    title: "IA en la Moda y el Arte: Aliada o Competencia? con Lucía Rabey",
    description: "Puede una máquina tener estilo? Cómo están usando los diseñadores la IA para optimizar sus procesos sin perder la esencia artística? Lucía nos cuenta su experiencia de primera mano combinando el pincel y el diseño con las herramientas digitales más avanzadas."
  },
  {
    id: "UYLVX2rAWXQ",
    num: "Intro",
    title: "Bienvenidos a Hack The Future",
    description: "¿De qué se trata este podcast? Jhu y Lau presentan el proyecto, su visión sobre tecnología, IA y negocios, y todo lo que viene."
  }
];
