import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto px-6 py-20 mt-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-fd-foreground">
          miguedocs
        </h1>
        <p className="text-xl text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          Un repositorio personal de conocimientos y apuntes sobre desarrollo web, arquitectura, backend y diseño.
        </p>
        <Link 
          href="/docs" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Explorar Documentación
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className="flex flex-col p-6 rounded-xl border border-fd-border bg-fd-card text-fd-card-foreground hover:border-fd-primary transition-colors hover:shadow-lg">
            <h2 className="text-lg font-bold mb-2">{cat.name}</h2>
            <p className="text-sm text-fd-muted-foreground">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

const categories = [
  { name: 'General', href: '/docs/web-development/general', desc: 'Conceptos generales como código limpio y estructuras de datos.' },
  { name: 'La Web', href: '/docs/web-development/web-fundamentals', desc: 'Arquitectura, APIs, JSON, Endpoints y bases de la web.' },
  { name: 'HTML, CSS y JS', href: '/docs/web-development/html-css-js', desc: 'Las tecnologías base del desarrollo Frontend moderno.' },
  { name: 'TypeScript', href: '/docs/web-development/typescript', desc: 'Implementando tipado estático robusto en JavaScript.' },
  { name: 'Frameworks', href: '/docs/web-development/frameworks', desc: 'Apuntes de Angular, Astro, Tailwind CSS, y reactividad.' },
  { name: 'Backend', href: '/docs/web-development/backend', desc: 'Desarrollo del lado del servidor: PHP, Bases de Datos, y Node.js.' },
  { name: 'Diseño', href: '/docs/web-development/design', desc: 'Apuntes sobre diseño web, accesibilidad, y maquetado.' },
  { name: 'Nuevos Apuntes', href: '/docs/new-notes', desc: 'Apuntes recientes sueltos sin clasificar.' },
];

