import type { Lang } from "../translations";

export type BlogPost = {
  slug: string;
  title: string;
  italicWord: string;
  excerpt: string;
  img: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  content: { type: "h2" | "p" | "ul" | "quote"; text?: string; items?: string[] }[];
};

const blogPostsEn: BlogPost[] = [
  {
    slug: "real-reason-your-business-isnt-growing",
    title: "The Real Reason Your Business Isn't Growing (And How AI Fixes It)",
    italicWord: "Growing",
    excerpt:
      "Most businesses don't have a growth problem — they have a leverage problem. Here's how AI changes the math.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=72&auto=format",
    readTime: "5 min read",
    date: "May 2026",
    author: "autom8X Team",
    tags: ["AI", "Growth", "Strategy"],
    content: [
      {
        type: "p",
        text: "You're working twelve-hour days. Your inbox is full. Your team is busy. And yet revenue is flat. Sound familiar? Here's the uncomfortable truth: it's almost never a marketing problem, a hiring problem, or a pricing problem. It's a leverage problem.",
      },
      { type: "h2", text: "Effort doesn't scale. Systems do." },
      {
        type: "p",
        text: "Every hour you spend on repetitive work is an hour you can't spend on the things only you can do — strategy, relationships, product. The businesses that grow fastest are the ones that ruthlessly convert recurring tasks into systems, and they're now doing it with AI at the core.",
      },
      {
        type: "p",
        text: "We work with founders who tell us, \"I just need more time.\" What they actually need is a stack that gives them their time back. A lead-qualifying assistant. An onboarding flow that runs itself. A content engine that doesn't require their attention every morning.",
      },
      { type: "h2", text: "Where AI actually moves the needle" },
      {
        type: "ul",
        items: [
          "Replacing manual data entry with smart extraction — typically saves 10-20 hours/week per team",
          "Qualifying inbound leads before they hit a human — 3-5x faster response times",
          "Generating first drafts of proposals, emails, and reports — 70% less time on writing",
          "Surfacing insights from customer conversations you'd otherwise miss",
        ],
      },
      {
        type: "quote",
        text: "The companies winning right now aren't working harder. They've just built better leverage.",
      },
      { type: "h2", text: "What this looks like in practice" },
      {
        type: "p",
        text: "One of our recent clients — a B2B services firm — was capped at around 40 client meetings a month because their founder was hand-writing every proposal. We built them a proposal generator trained on their voice and past wins. Three weeks later, they were quoting 4x the deals with the same headcount and closing at a higher rate, because every proposal got the founder's attention to the parts that actually mattered.",
      },
      {
        type: "p",
        text: "That's the difference. AI doesn't replace your judgment. It just stops your judgment from being the bottleneck on everything else.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "Pick the one task you do every week that you secretly hate. The one that takes two hours and produces something repetitive. That's almost always the first thing worth automating. Once you feel what it's like to get that time back, the rest follows naturally.",
      },
    ],
  },
  {
    slug: "automated-sales-pipeline-in-3-days",
    title: "We Automated a Sales Pipeline in 3 Days — Here's Exactly How",
    italicWord: "Pipeline",
    excerpt:
      "A real case study: turning a chaotic spreadsheet-and-Slack sales process into an automated machine in under a week.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=72&auto=format",
    readTime: "8 min read",
    date: "Apr 2026",
    author: "autom8X Team",
    tags: ["Automation", "Case Study", "Sales"],
    content: [
      {
        type: "p",
        text: "Last month a SaaS company came to us with a familiar story. Leads were leaking. Reps were complaining the CRM was \"out of date the moment they updated it.\" Their founder was spending Sunday nights stitching together spreadsheet exports to figure out where deals actually stood.",
      },
      {
        type: "p",
        text: "Three days later they had a sales pipeline that updated itself, flagged stalled deals automatically, and sent the founder a clean Monday-morning summary. Here's the exact build.",
      },
      { type: "h2", text: "Day 1 — Mapping the mess" },
      {
        type: "p",
        text: "We sat down with the team and traced one deal from first touch to closed-won. We weren't looking for what they thought should happen — we wanted what actually did. Predictably, the real flow had 11 tools, 4 spreadsheets, and 6 unwritten rules.",
      },
      {
        type: "ul",
        items: [
          "Leads arrived from 3 sources: webform, LinkedIn DMs, and referrals via email",
          "Reps would manually add them to HubSpot — sometimes",
          "Follow-ups lived in personal task lists, not the CRM",
          "Win/loss reasons were rarely captured",
        ],
      },
      { type: "h2", text: "Day 2 — Wiring it together" },
      {
        type: "p",
        text: "We built a single intake automation in n8n. Every lead — regardless of source — gets parsed, enriched with company data, scored against an ideal-customer profile, and routed to the right rep with a Slack ping and a pre-filled HubSpot record. No manual entry.",
      },
      {
        type: "p",
        text: "Then we layered in a follow-up engine: if a deal hasn't moved in 5 days, it goes to a \"stalled\" view and the rep gets a nudge with the last conversation summarized by AI. If it stays stalled 5 more days, it pings the founder.",
      },
      { type: "h2", text: "Day 3 — Reporting and polish" },
      {
        type: "p",
        text: "The final piece was the weekly digest. Every Monday at 7 AM, the founder gets one email: pipeline by stage, deals at risk, top 3 opportunities, and one paragraph of AI-generated commentary on what changed since last week.",
      },
      {
        type: "quote",
        text: "The first Monday after launch the founder messaged us: \"I got my Sundays back.\"",
      },
      { type: "h2", text: "What we'd do differently" },
      {
        type: "p",
        text: "We over-engineered the lead scoring on day 1. The first version had eight criteria and confused everyone. We replaced it with three: company size, signal strength, and budget. Reps trusted it immediately. Lesson learned — start dumb, get smart.",
      },
      { type: "h2", text: "The tools" },
      {
        type: "ul",
        items: [
          "n8n for orchestration (self-hosted, ~$20/mo)",
          "HubSpot as the system of record",
          "Clearbit for enrichment",
          "OpenAI for conversation summaries and the weekly digest",
          "Slack as the notification layer",
        ],
      },
      {
        type: "p",
        text: "Total monthly cost: under $200. Founder hours saved: roughly 12 per week. That's the math that makes automation a no-brainer.",
      },
    ],
  },
  {
    slug: "why-most-ai-chatbots-fail",
    title: "Why Most AI Chatbots Fail (And What Actually Makes Them Work)",
    italicWord: "Work",
    excerpt:
      "The dirty secret of \"AI chatbots\": 90% are useless. The 10% that work all do the same five things right.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=72&auto=format",
    readTime: "7 min read",
    date: "Mar 2026",
    author: "autom8X Team",
    tags: ["AI", "Chatbots", "Product"],
    content: [
      {
        type: "p",
        text: "Every business owner we talk to has tried a chatbot. Almost none of them are still using it. Why? Because most chatbots are built like 2018 chatbots — decision trees pretending to be intelligent — and customers can smell it from a mile away.",
      },
      {
        type: "p",
        text: "Here's what separates the chatbots that actually work from the ones that get unplugged after a month.",
      },
      { type: "h2", text: "1. They know what they don't know" },
      {
        type: "p",
        text: "Bad chatbots try to answer everything. Good ones know when to hand off to a human, and they do it gracefully — with the full conversation context attached. The hand-off feels like an escalation, not a failure.",
      },
      { type: "h2", text: "2. They're grounded in your actual data" },
      {
        type: "p",
        text: "A chatbot powered by a generic LLM with no knowledge of your business will confidently make things up. The fix is retrieval — pulling answers from your real documentation, product info, and past tickets before the model speaks. That's the difference between \"I think your refund window is 30 days\" and \"Your refund window is 14 days for digital products, per your account terms.\"",
      },
      { type: "h2", text: "3. They have memory" },
      {
        type: "p",
        text: "The fastest way to make a chatbot feel useless is to make a returning customer re-explain everything. Even basic conversation memory — remembering the user's last order, last question, last preference — instantly upgrades the experience.",
      },
      {
        type: "quote",
        text: "A chatbot that forgets you feels like a tool. A chatbot that remembers feels like a team member.",
      },
      { type: "h2", text: "4. They have a job, not a vibe" },
      {
        type: "p",
        text: "\"Help customers\" is not a job. \"Qualify inbound leads, capture name, company, and pain point, then book a call on the rep's calendar\" is a job. The chatbots that work have crisp objectives. The ones that fail were built to be \"smart\" without anyone asking what success looks like.",
      },
      { type: "h2", text: "5. They get better every week" },
      {
        type: "p",
        text: "The best chatbots have a feedback loop. Every conversation that goes sideways becomes a test case. Every new product or policy update flows into the knowledge base. The teams that treat their chatbot like a product — with a backlog, a release cycle, and metrics — get compounding gains. The teams that treat it as a one-time install plateau immediately.",
      },
      { type: "h2", text: "The honest test" },
      {
        type: "p",
        text: "Ask yourself: if your chatbot disappeared tomorrow, would anyone complain? If the answer is no, it's not pulling its weight. The fix isn't more AI — it's clearer scope, better data, and the willingness to iterate.",
      },
    ],
  },
  {
    slug: "idea-to-live-product-in-2-weeks",
    title: "From Idea to Live Product in 2 Weeks — Our Exact Process",
    italicWord: "Process",
    excerpt:
      "How we ship real, paying-customer-ready products in 14 days. No magic — just ruthless scope and the right stack.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=72&auto=format",
    readTime: "6 min read",
    date: "Feb 2026",
    author: "autom8X Team",
    tags: ["Product", "Process", "Shipping"],
    content: [
      {
        type: "p",
        text: "We get asked all the time: \"Can you really ship a product in two weeks?\" Yes — but only because we cut the right things. Here's the actual playbook.",
      },
      { type: "h2", text: "Day 1-2 — Cut the scope in half. Then in half again." },
      {
        type: "p",
        text: "Every founder shows up with a feature list. Our first job is to delete most of it. Not because the ideas are bad, but because v1 has exactly one job: prove that the core thing people will pay for actually works. Everything else is a distraction.",
      },
      {
        type: "p",
        text: "We use a simple test: if a feature isn't required for the first paying customer to get value, it doesn't ship in v1.",
      },
      { type: "h2", text: "Day 3-4 — Design the seams, not the screens" },
      {
        type: "p",
        text: "Most people start with mockups. We start with the data model and the API contracts. If the underlying shape is right, the UI is cheap to change. If it's wrong, nothing else matters.",
      },
      { type: "h2", text: "Day 5-10 — Build in tight loops" },
      {
        type: "p",
        text: "We ship a usable build to the client at the end of every day. Not a demo — a real, clickable build they can poke at. The feedback loop is the product.",
      },
      {
        type: "ul",
        items: [
          "Stack: Next.js + Supabase + Vercel — fast, batteries-included, no infra babysitting",
          "Auth, payments, and storage are never custom — use what exists",
          "AI features go through one well-tested wrapper, not five inline calls",
          "Every PR ships behind a flag, so nothing is permanent",
        ],
      },
      { type: "h2", text: "Day 11-12 — Real users, real money" },
      {
        type: "p",
        text: "Before we polish anything, we get five real users in. Not friends. Not the team. People who fit the target customer. We watch them use it, in silence. Every place they pause, every place they squint — that's a fix list.",
      },
      {
        type: "quote",
        text: "The biggest mistake we see in 2-week launches is polishing what nobody noticed and leaving broken what everybody hit.",
      },
      { type: "h2", text: "Day 13-14 — Launch, then listen" },
      {
        type: "p",
        text: "We do a soft launch on day 13 — usually to an email list, a small community, or a warm Twitter audience. Day 14 is for fixing what breaks under real traffic. Then we keep shipping. The first 30 days post-launch usually matter more than the 14 leading up to it.",
      },
      { type: "h2", text: "What this isn't" },
      {
        type: "p",
        text: "Two-week launches aren't right for everything. They work great for tools, internal apps, AI-powered SaaS, and content products. They're a bad fit for hardware, regulated industries, and anything where v1 needs to be perfect from day one. Know which side of that line you're on before you start.",
      },
    ],
  },
];

const blogPostsEs: BlogPost[] = [
  {
    slug: "real-reason-your-business-isnt-growing",
    title: "La Verdadera Razón por la que Tu Negocio No Crece (Y Cómo la IA lo Soluciona)",
    italicWord: "Crece",
    excerpt:
      "La mayoría de los negocios no tienen un problema de crecimiento — tienen un problema de apalancamiento. Así es como la IA cambia el juego.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=72&auto=format",
    readTime: "5 min de lectura",
    date: "Mayo 2026",
    author: "autom8X Team",
    tags: ["IA", "Crecimiento", "Estrategia"],
    content: [
      {
        type: "p",
        text: "Trabajas doce horas al día. Tu bandeja de entrada está llena. Tu equipo está ocupado. Y aun así los ingresos no suben. ¿Te suena familiar? Aquí está la verdad incómoda: casi nunca es un problema de marketing, de contratación o de precios. Es un problema de apalancamiento.",
      },
      { type: "h2", text: "El esfuerzo no escala. Los sistemas sí." },
      {
        type: "p",
        text: "Cada hora que pasas en trabajo repetitivo es una hora que no puedes dedicar a lo que solo tú puedes hacer — estrategia, relaciones, producto. Los negocios que crecen más rápido son los que convierten sin piedad las tareas recurrentes en sistemas, y ahora lo hacen con la IA como núcleo.",
      },
      {
        type: "p",
        text: "Trabajamos con fundadores que nos dicen: «Solo necesito más tiempo.» Lo que realmente necesitan es un stack que les devuelva ese tiempo. Un asistente que califica leads. Un flujo de incorporación que se ejecuta solo. Un motor de contenido que no requiere su atención cada mañana.",
      },
      { type: "h2", text: "Dónde la IA mueve realmente la aguja" },
      {
        type: "ul",
        items: [
          "Reemplazar la entrada de datos manual con extracción inteligente — típicamente ahorra 10-20 horas/semana por equipo",
          "Calificar leads entrantes antes de llegar a un humano — tiempos de respuesta 3-5x más rápidos",
          "Generar primeros borradores de propuestas, correos e informes — 70% menos tiempo en escritura",
          "Detectar insights de conversaciones con clientes que de otro modo perderías",
        ],
      },
      {
        type: "quote",
        text: "Las empresas que ganan ahora no trabajan más duro. Simplemente han construido mejor apalancamiento.",
      },
      { type: "h2", text: "Cómo se ve esto en la práctica" },
      {
        type: "p",
        text: "Uno de nuestros clientes recientes — una empresa de servicios B2B — estaba limitada a unas 40 reuniones con clientes al mes porque su fundador escribía cada propuesta a mano. Le construimos un generador de propuestas entrenado con su voz y sus victorias pasadas. Tres semanas después, cotizaban 4 veces más deals con el mismo personal y cerraban a mayor tasa, porque cada propuesta recibía la atención del fundador en las partes que realmente importaban.",
      },
      {
        type: "p",
        text: "Esa es la diferencia. La IA no reemplaza tu criterio. Simplemente deja que tu criterio deje de ser el cuello de botella en todo lo demás.",
      },
      { type: "h2", text: "Por dónde empezar" },
      {
        type: "p",
        text: "Elige la tarea que haces cada semana y que en secreto odias. La que tarda dos horas y produce algo repetitivo. Eso es casi siempre lo primero que vale la pena automatizar. Una vez que sientas lo que es recuperar ese tiempo, el resto llega solo.",
      },
    ],
  },
  {
    slug: "automated-sales-pipeline-in-3-days",
    title: "Automatizamos un Pipeline de Ventas en 3 Días — Así lo Hicimos",
    italicWord: "Pipeline",
    excerpt:
      "Un caso real: convertir un proceso de ventas caótico en una máquina automatizada en menos de una semana.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=72&auto=format",
    readTime: "8 min de lectura",
    date: "Abr 2026",
    author: "autom8X Team",
    tags: ["Automatización", "Caso de Estudio", "Ventas"],
    content: [
      {
        type: "p",
        text: "El mes pasado una empresa SaaS llegó con una historia familiar. Los leads se perdían. Los representantes se quejaban de que el CRM estaba «obsoleto en el momento en que lo actualizaban.» Su fundador pasaba los domingos por la noche uniendo exportaciones de hojas de cálculo para entender dónde estaban los deals realmente.",
      },
      {
        type: "p",
        text: "Tres días después tenían un pipeline de ventas que se actualizaba solo, marcaba deals estancados automáticamente y le enviaba al fundador un resumen limpio los lunes por la mañana. Aquí está la construcción exacta.",
      },
      { type: "h2", text: "Día 1 — Mapeando el caos" },
      {
        type: "p",
        text: "Nos sentamos con el equipo y rastreamos un deal desde el primer contacto hasta el cierre. No buscábamos lo que creían que debería pasar — queríamos lo que realmente ocurría. Predeciblemente, el flujo real tenía 11 herramientas, 4 hojas de cálculo y 6 reglas no escritas.",
      },
      {
        type: "ul",
        items: [
          "Los leads llegaban de 3 fuentes: formulario web, DMs de LinkedIn y referidos por correo",
          "Los representantes los añadían manualmente a HubSpot — a veces",
          "Los seguimientos vivían en listas de tareas personales, no en el CRM",
          "Las razones de éxito/fracaso rara vez se registraban",
        ],
      },
      { type: "h2", text: "Día 2 — Conectando todo" },
      {
        type: "p",
        text: "Construimos una automatización de entrada única en n8n. Cada lead — sin importar la fuente — se analiza, se enriquece con datos de la empresa, se puntúa contra un perfil de cliente ideal y se asigna al representante correcto con una notificación en Slack y un registro prellenado en HubSpot. Sin entrada manual.",
      },
      {
        type: "p",
        text: "Luego añadimos un motor de seguimiento: si un deal no avanza en 5 días, pasa a una vista de «estancado» y el representante recibe un recordatorio con el resumen de la última conversación generado por IA. Si sigue estancado 5 días más, notifica al fundador.",
      },
      { type: "h2", text: "Día 3 — Informes y pulido" },
      {
        type: "p",
        text: "La pieza final fue el resumen semanal. Cada lunes a las 7 AM, el fundador recibe un correo: pipeline por etapa, deals en riesgo, las 3 mejores oportunidades y un párrafo de comentario generado por IA sobre qué cambió desde la semana anterior.",
      },
      {
        type: "quote",
        text: "El primer lunes tras el lanzamiento el fundador nos escribió: «Recuperé mis domingos.»",
      },
      { type: "h2", text: "Qué haríamos diferente" },
      {
        type: "p",
        text: "Sobreingeniamos la puntuación de leads el día 1. La primera versión tenía ocho criterios y confundía a todos. La reemplazamos con tres: tamaño de empresa, fuerza de señal y presupuesto. Los representantes la adoptaron de inmediato. Lección aprendida — empieza simple, vuélvete inteligente.",
      },
      { type: "h2", text: "Las herramientas" },
      {
        type: "ul",
        items: [
          "n8n para orquestación (auto-hospedado, ~$20/mes)",
          "HubSpot como sistema de registro",
          "Clearbit para enriquecimiento",
          "OpenAI para resúmenes de conversaciones y el resumen semanal",
          "Slack como capa de notificaciones",
        ],
      },
      {
        type: "p",
        text: "Costo mensual total: menos de $200. Horas del fundador ahorradas: aproximadamente 12 por semana. Esa es la matemática que hace que la automatización sea una decisión obvia.",
      },
    ],
  },
  {
    slug: "why-most-ai-chatbots-fail",
    title: "Por Qué la Mayoría de los Chatbots de IA Fallan (Y Qué los Hace Funcionar)",
    italicWord: "Funcionar",
    excerpt:
      "El secreto a voces de los «chatbots de IA»: el 90% son inútiles. El 10% que funciona hace las mismas cinco cosas bien.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=72&auto=format",
    readTime: "7 min de lectura",
    date: "Mar 2026",
    author: "autom8X Team",
    tags: ["IA", "Chatbots", "Producto"],
    content: [
      {
        type: "p",
        text: "Cada dueño de negocio con el que hablamos ha probado un chatbot. Casi ninguno lo sigue usando. ¿Por qué? Porque la mayoría de los chatbots están construidos como los de 2018 — árboles de decisión que fingen ser inteligentes — y los clientes lo detectan desde lejos.",
      },
      {
        type: "p",
        text: "Esto es lo que separa los chatbots que realmente funcionan de los que se desconectan al mes.",
      },
      { type: "h2", text: "1. Saben lo que no saben" },
      {
        type: "p",
        text: "Los malos chatbots intentan responder todo. Los buenos saben cuándo transferir a un humano, y lo hacen con gracia — con el contexto completo de la conversación adjunto. La transferencia se siente como una escalada, no como un fracaso.",
      },
      { type: "h2", text: "2. Están basados en tus datos reales" },
      {
        type: "p",
        text: "Un chatbot impulsado por un LLM genérico sin conocimiento de tu negocio inventará cosas con confianza. La solución es la recuperación — obtener respuestas de tu documentación real, información de producto y tickets pasados antes de que el modelo hable. Esa es la diferencia entre «Creo que tu período de reembolso es 30 días» y «Tu período de reembolso es de 14 días para productos digitales, según los términos de tu cuenta.»",
      },
      { type: "h2", text: "3. Tienen memoria" },
      {
        type: "p",
        text: "La forma más rápida de hacer que un chatbot parezca inútil es hacer que un cliente que regresa tenga que explicar todo de nuevo. Incluso una memoria básica de conversación — recordar el último pedido, última pregunta, última preferencia del usuario — mejora instantáneamente la experiencia.",
      },
      {
        type: "quote",
        text: "Un chatbot que te olvida se siente como una herramienta. Un chatbot que te recuerda se siente como un compañero de equipo.",
      },
      { type: "h2", text: "4. Tienen un trabajo, no una vibra" },
      {
        type: "p",
        text: "«Ayudar a los clientes» no es un trabajo. «Calificar leads entrantes, capturar nombre, empresa y problema, luego agendar una llamada en el calendario del representante» es un trabajo. Los chatbots que funcionan tienen objetivos claros. Los que fallan fueron construidos para ser «inteligentes» sin que nadie preguntara cómo se ve el éxito.",
      },
      { type: "h2", text: "5. Mejoran cada semana" },
      {
        type: "p",
        text: "Los mejores chatbots tienen un ciclo de retroalimentación. Cada conversación que sale mal se convierte en un caso de prueba. Cada actualización de producto o política fluye hacia la base de conocimiento. Los equipos que tratan su chatbot como un producto — con un backlog, un ciclo de lanzamiento y métricas — obtienen ganancias compuestas. Los que lo tratan como una instalación única se estancan de inmediato.",
      },
      { type: "h2", text: "La prueba honesta" },
      {
        type: "p",
        text: "Pregúntate: si tu chatbot desapareciera mañana, ¿alguien se quejaría? Si la respuesta es no, no está cumpliendo su función. La solución no es más IA — es un alcance más claro, mejores datos y la voluntad de iterar.",
      },
    ],
  },
  {
    slug: "idea-to-live-product-in-2-weeks",
    title: "De la Idea al Producto en 2 Semanas — Nuestro Proceso Exacto",
    italicWord: "Proceso",
    excerpt:
      "Cómo lanzamos productos reales, listos para clientes de pago, en 14 días. Sin magia — solo alcance despiadado y el stack correcto.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=72&auto=format",
    readTime: "6 min de lectura",
    date: "Feb 2026",
    author: "autom8X Team",
    tags: ["Producto", "Proceso", "Lanzamiento"],
    content: [
      {
        type: "p",
        text: "Nos preguntan todo el tiempo: «¿Realmente pueden lanzar un producto en dos semanas?» Sí — pero solo porque cortamos las cosas correctas. Aquí está el playbook real.",
      },
      { type: "h2", text: "Días 1-2 — Recorta el alcance a la mitad. Luego a la mitad de nuevo." },
      {
        type: "p",
        text: "Cada fundador llega con una lista de funciones. Nuestro primer trabajo es eliminar la mayoría. No porque las ideas sean malas, sino porque la v1 tiene exactamente un trabajo: demostrar que la cosa central por la que la gente pagará realmente funciona. Todo lo demás es una distracción.",
      },
      {
        type: "p",
        text: "Usamos una prueba simple: si una función no es necesaria para que el primer cliente de pago obtenga valor, no se lanza en la v1.",
      },
      { type: "h2", text: "Días 3-4 — Diseña las costuras, no las pantallas" },
      {
        type: "p",
        text: "La mayoría empieza con mockups. Nosotros empezamos con el modelo de datos y los contratos de API. Si la estructura subyacente es correcta, la interfaz es barata de cambiar. Si está mal, nada más importa.",
      },
      { type: "h2", text: "Días 5-10 — Construye en ciclos cortos" },
      {
        type: "p",
        text: "Enviamos una versión usable al cliente al final de cada día. No una demo — una versión real y clickeable que pueden explorar. El ciclo de retroalimentación es el producto.",
      },
      {
        type: "ul",
        items: [
          "Stack: Next.js + Supabase + Vercel — rápido, con todo incluido, sin gestión de infraestructura",
          "Auth, pagos y almacenamiento nunca son personalizados — usa lo que existe",
          "Las funciones de IA pasan por un wrapper bien probado, no cinco llamadas en línea",
          "Cada PR se lanza detrás de un flag, así nada es permanente",
        ],
      },
      { type: "h2", text: "Días 11-12 — Usuarios reales, dinero real" },
      {
        type: "p",
        text: "Antes de pulir nada, incorporamos cinco usuarios reales. No amigos. No el equipo. Personas que encajan con el cliente objetivo. Los observamos usarlo en silencio. Cada lugar donde se detienen, cada lugar donde fruncen el ceño — eso es la lista de correcciones.",
      },
      {
        type: "quote",
        text: "El mayor error que vemos en lanzamientos de 2 semanas es pulir lo que nadie notó y dejar roto lo que todos encontraron.",
      },
      { type: "h2", text: "Días 13-14 — Lanzar y escuchar" },
      {
        type: "p",
        text: "Hacemos un lanzamiento suave el día 13 — generalmente a una lista de correo, una pequeña comunidad o una audiencia en Twitter. El día 14 es para corregir lo que falla con tráfico real. Luego seguimos lanzando. Los primeros 30 días post-lanzamiento suelen importar más que los 14 previos.",
      },
      { type: "h2", text: "Lo que esto no es" },
      {
        type: "p",
        text: "Los lanzamientos de dos semanas no son correctos para todo. Funcionan muy bien para herramientas, aplicaciones internas, SaaS con IA y productos de contenido. Son una mala opción para hardware, industrias reguladas y cualquier cosa donde la v1 necesite ser perfecta desde el primer día. Sabe de qué lado de esa línea estás antes de comenzar.",
      },
    ],
  },
];

const allPosts: Record<Lang, BlogPost[]> = {
  en: blogPostsEn,
  es: blogPostsEs,
};

export const blogPosts = blogPostsEn;

export function getBlogPosts(lang: Lang): BlogPost[] {
  return allPosts[lang];
}

export function getPostBySlug(slug: string, lang: Lang = "en"): BlogPost | undefined {
  return allPosts[lang].find((p) => p.slug === slug);
}
