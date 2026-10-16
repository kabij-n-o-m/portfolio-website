
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Weather Dashboard",
    description: "Live forecasts for any city, built with a public weather API.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    tone: "bg-cgreen-200",
  },
  {
    title: "Task Tracker",
    description: "A to-do app with filters, drag and drop, and saved lists.",
    tech: ["React", "Node.js"],
    href: "#",
    tone: "bg-cgreen-200",
  },
  {
    title: "Recipe Finder",
    description: "Search recipes by ingredient and save your favourites.",
    tech: ["Next.js", "REST API"],
    href: "#",
    tone: "bg-cgreen-200",
  },
];

const focusStyle =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cgreen-900";
const linkStyle = `underline decoration-cpink-500 decoration-2 underline-offset-4 rounded-sm hover:bg-cgreen-900 hover:text-cgreen-50 ${focusStyle}`;

export default function Home() {
  return (
    <div className="h-dvh bg-cgreen-200 text-cgreen-900 sm:p-6 justify-center flex">
      {/* The frame: a 2-column, 3-row grid on md+ */}
      


      <div className="grid h-full grid-cols-1 overflow-y-auto rounded-l-3xl border-2 border-cgreen-600 bg-cpink-150 md:grid-cols-[1fr_13rem] md:grid-rows-[auto_auto_minmax(0,1fr)] md:overflow-hidden
      md:w-3/5">
        {/* Title: top left */}
        <header className="px-6 pb-4 pt-8 text-center md:col-start-1 md:row-start-1">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Your Name
          </h1>
          <p className="mt-2 text-base text-cgreen-600 sm:text-lg">
            Aspiring software engineer building for the web
          </p>
        </header>

        

        <main className="contents">
          {/* Content: left, under the title */}
          <section
            id="about"
            aria-labelledby="about-heading"
            className="px-6 pb-6 pt-4 md:col-start-1 md:row-start-2"
          >
            <h2 id="about-heading" className="text-2xl font-bold">
              About me
            </h2>
            <p className="mt-2 max-w-prose text-base leading-relaxed">
              I&apos;m learning to build fast, accessible websites with React
              and Next.js. I like turning a rough idea into something people
              can actually use, and I&apos;m looking for my first engineering
              role.
            </p>
          </section>

          {/* Content: full width, below the nav bar. Scrolls inside if long. */}
          <div className="px-6 pb-8 pt-2 md:col-span-2 md:row-start-3 md:overflow-y-auto">
            <section id="projects" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="text-2xl font-bold">
                Projects
              </h2>
              <ul className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((p) => (
                  <li key={p.title} className={`rounded-2xl p-4 ${p.tone}`}>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{p.description}</p>
                    <p className="mt-2 text-sm font-medium">{p.tech.join(", ")}</p>
                    <a
                      href={p.href}
                      className={`mt-2 inline-block text-sm font-semibold ${linkStyle}`}
                    >
                      View project
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="contact" aria-labelledby="contact-heading" className="mt-8">
              <h2 id="contact-heading" className="text-2xl font-bold">
                Contact
              </h2>
              <p className="mt-2 text-base leading-relaxed">
                Email me at{" "}
                <a href="mailto:you@example.com" className={`font-semibold ${linkStyle}`}>
                  you@example.com
                </a>{" "}
                or find my code on{" "}
                <a
                  href="https://github.com/your-username"
                  className={`font-semibold ${linkStyle}`}
                >
                  GitHub
                </a>
                .
              </p>
            </section>
          </div>
        </main>
      </div>


      <nav
        aria-label="Main"
        className="flex flex-wrap justify-center gap-2 border-2 border-cgreen-600 bg-cgreen-50 p-4 md:col-start-2 md:row-span-2 md:row-start-1 md:flex-col md:justify-start md:gap-1 md:rounded-r-3xl md:border-2 md:p-6"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-base font-semibold hover:text-cgreen-50 hover:bg-cgreen-600 ${focusStyle}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

    </div>
  );
}