import Navbar from "@/components/Navbar";


const projects = [
  {
    title: "Gardening Task Tracker",
    description: "(in development) \n A to-do app for gardening tasks. Search for plants, add them to your garden, and get tasks depending on the time of year and weather.",
    tech: ["React", "Node.js", "TypeScript", "Supabase"],
    href: "#",
    tone: "bg-csage-200",
  },
  {
    title: "Can I have another coffee?",
    description: "A web app to track your caffeine intake and check if you can have another coffee and still fall asleep on time.",
    tech: ["idk yet"],
    href: "#",
    tone: "bg-csage-200",
  },
];

const focusStyle =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccharcoal-900";
const linkStyle = `underline decoration-cpink-500 decoration-2 underline-offset-4 rounded-sm hover:bg-ccharcoal-900 hover:text-csage-200 ${focusStyle}`;

export default function Home() {
  return (
    <div className="h-dvh bg-cwhite-50 text-ccharcoal-900 sm:p-6 justify-center flex">
      
      <div className="px-10 grid grid-cols-1 h-full overflow-y-auto rounded-l-3xl border-2 border-r-0 border-cgreen-600 bg-ccblush-200  md:grid-rows-[auto_auto_minmax(0,1fr)] md:overflow-hidden
      md:w-3/5">
        {/* Title: top left */}
        <header className="pt-6 text-center md:col-start-1 md:row-start-1">
          <h1 className="text-xl font-medium tracking-tight md:text-3xl">
            Ivan Murphy
          </h1>
          <p className="mt-2 text-base sm:text-lg">
            Computer Science student
          </p>
        </header>

        

        <main className="contents">
          <section
            id="about"
            aria-labelledby="about-heading"
            className="px-6 pb-6 pt-4 md:col-start-1 md:row-start-2"
          >
            <h2 id="about-heading" className="text-2xl font-medium">
              About me
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Hi I'm Ivan! I'm a third year computer science student at the University of Southampton. aaaaaaaaaaaaaaaaa
              [fill later]
            </p>
          </section>

          {/* Content: full width, below the nav bar. Scrolls inside if long. */}
          <div className="px-6 pb-8 pt-2 md:col-span-2 md:row-start-3 md:overflow-y-auto">
            <section id="projects" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="text-2xl font-medium">
                Projects
              </h2>
              <ul className="mt-3 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {projects.map((p) => (
                  <li key={p.title} className={`rounded-2xl p-4 ${p.tone}`}>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{p.description}</p>
                    <p className="mt-2 text-sm font-medium">{p.tech.join(", ")}</p>
                    {p.href==="#" ? '' : (
                      <a
                        href={p.href}
                        className={`mt-2 inline-block text-sm font-medium ${linkStyle}`}
                      >
                        View project
                      </a>
                    )}
                    
                  </li>
                ))}
              </ul>
            </section>

            <section id="contact" aria-labelledby="contact-heading" className="mt-8">
              <h2 id="contact-heading" className="text-2xl font-medium">
                Contact
              </h2>
              <p className="mt-2 text-base leading-relaxed">
                Email me at{" "}
                <a href="mailto:ivanmurphy1005@gmail.com" className={`font-medium ${linkStyle}`}>
                  ivanmurphy1005@gmail.com
                </a>{" "}
                
              </p>
            </section>
          </div>
        </main>
      </div>


      <Navbar />

    </div>
  );
}