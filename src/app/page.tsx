import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#121417]">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#5b4fc7]">Kalivur</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
          Empleados Digitales que trabajan alrededor de tu negocio.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f6570]">
          Sitio corporativo en desarrollo. Esta base también aloja demostraciones privadas de proyectos comerciales.
        </p>
        <div className="mt-9">
          <Link
            href="/metalmecanica-echegaray"
            className="inline-flex rounded-xl bg-[#121417] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Ver demo Metalmecánica Echegaray
          </Link>
        </div>
      </section>
    </main>
  );
}
