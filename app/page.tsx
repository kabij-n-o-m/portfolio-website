import Navbar from "@/components/Navbar";


const projects = [
  {
    title: "Gardening Task Tracker",
    description: "(in development) \n A to-do app for gardening tasks. Search for plants, add them to your garden, and get tasks depending on the time of year and weather.",
    tech: ["React", "Next.js", "TypeScript", "Supabase", "TailwindCSS"],
    href: "https://github.com/kabij-n-o-m/website_plants",
    tone: "bg-csage-200",
  },
  {
    title: "Can I have another coffee?",
    description: "(in development) A web app to track your caffeine intake and check if you can have another coffee and still fall asleep on time.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS"],
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
      
      <div className="px-15 py-5 grid grid-cols-1 h-full overflow-y-auto rounded-l-4xl border-2 border-r-0 border-cgrey-100 bg-cblush-200  md:grid-rows-[auto_auto_minmax(0,1fr)] md:overflow-hidden
      md:w-3/5">
        <header className="pt-4 text-center md:col-start-1 md:row-start-1">
          <h1 className="text-xl font-medium tracking-tight md:text-3xl">
            Ivan Murphy
          </h1>
          <p className="mt-2 text-base sm:text-lg">
            Computer Science student
          </p>
        </header>

        

        <main className="md:overflow-y-auto">
          <section
            id="about"
            aria-labelledby="about-heading"
            className="px-6 pb-6 pt-4 md:col-start-1 md:row-start-2"
          >
            <h2 id="about-heading" className="text-2xl font-medium">
              About me
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Hi I'm Ivan! I'm a third year computer science student at the University of Southampton. I like making cute, easy to use websites to solve problems I encounter in my daily life.
              Outside of lectures you can find me in the Annex with the Stage Technicians Society setting up for a show, in the garden tending to my plants, or sat in bed watching video essays about maths or philosophy. 
              I don't have LinkedIn but I do have an email so don't hesitate to get in touch!
              
            </p>
          </section>

          <div className="px-6 pb-8 pt-2 md:col-span-2 md:row-start-3 ">
            <section id="projects" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="text-2xl font-medium">
                Projects
              </h2>
              <ul className="mt-3 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {projects.map((p) => (
                  <li key={p.title} className={`rounded-4xl p-4 ${p.tone}`}>
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