import Navbar from '../../components/Navbar'
import {focusStyle,  linkStyle, whiteBackgroundStyle, pinkContainerStyle, headingStyle, headerStyle } from "@/components/Template";


const links = [
  { label: "GitHub", href: "https://github.com/kabij-n-o-m", tone: "bg-csage-200", linkWriting: "Have a look" },
  { label: "Email", href: "mailto:ivanmurphy1005@gmail.com", tone: "bg-csage-200", linkWriting: "Email me!!" },
  { label: "Instagram", href: "https://instagram.com/iva_n_o_rmous", tone: "bg-csage-200", linkWriting: "The account is private so..." },
];


const Links = () => {
  return (
    <div className={whiteBackgroundStyle}>      
      <div className={pinkContainerStyle}>
        <header className={headerStyle}>
          <h1 className={headingStyle}>
            Links
          </h1>
        </header>

        <main className="contents">
            <div className="px-6 md:pb-8 md:overflow-y-auto">
            <section id="projects" aria-labelledby="projects-heading">
              <ul className="mt-3 grid gap-4 mx-10 sm:grid-cols-1 md:grid-cols-2">
                {links.map((p) => (
                  <li key={p.label} className={`mx-5 my-3 rounded-4xl p-4 text-center sm:text-left ${p.tone}`}>
                    <h3 className="text-lg font-medium">{p.label}</h3>
                    {p.href==="#" ? '' : (
                      <a
                        href={p.href}
                        className={`mt-2 inline-block text-sm font-medium ${linkStyle}`}
                      >
                        {p.linkWriting}
                      </a>
                    )}
                    
                  </li>
                ))}
              </ul>
            </section>
            </div>
        </main>

      </div>
      <Navbar />
    </div>
  )
}

export default Links
