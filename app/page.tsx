import Navbar from "@/components/Navbar";
import {focusStyle,  linkStyle, whiteBackgroundStyle, pinkContainerStyle, headingStyle, headerStyle } from "@/components/Template";

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


export default function Home() {
  return (
    <div className={whiteBackgroundStyle}>      
      <div className={pinkContainerStyle}>
        <header className={headerStyle}>
          <h1 className={headingStyle}>
            Ivan Murphy
          </h1>
          <p className="mt-2 text-lg">
            Computer Science student
          </p>
        </header>

        

        <main className="md:overflow-y-auto">
          <section
            id="about"
            aria-labelledby="about-heading"
            className="px-6 pb-6 md:col-start-1 md:row-start-2"
          >
            <h2 id="about-heading" className="text-xl font-medium">
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
              <h2 id="projects-heading" className="text-xl font-medium">
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
              <h2 id="contact-heading" className="text-xl font-medium">
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