import React from 'react'
import Navbar from '../../components/Navbar'

const links = [
  { label: "GitHub", href: "https://github.com/kabij-n-o-m", tone: "bg-csage-200", linkWriting: "Have a look" },
  { label: "Email", href: "mailto:ivanmurphy1005@gmail.com", tone: "bg-csage-200", linkWriting: "Email me!!" },
  { label: "Instagram", href: "https://instagram.com/iva_n_o_rmous", tone: "bg-csage-200", linkWriting: "The account is private so..." },
];

const focusStyle =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccharcoal-900";
const linkStyle = `underline decoration-cpink-500 decoration-2 underline-offset-4 rounded-sm hover:bg-ccharcoal-900 hover:text-cgreen-50 ${focusStyle}`;


const Links = () => {
  return (
    <div className="h-dvh bg-cwhite-50 text-ccharcoal-900 sm:p-6 justify-center flex">
      
      <div className=" px-10 grid grid-cols-1 h-full overflow-y-auto rounded-l-3xl border-2 border-r-0 border-cgreen-600 bg-cblush-200  md:grid-rows-[auto_auto_minmax(0,1fr)] md:overflow-hidden
      md:w-3/5">
        <header className="px-6 pb-4 pt-8 text-center md:col-start-1 md:row-start-1">
          <h1 className="text-xl font-medium tracking-tight md:text-3xl">
            Links
          </h1>
        </header>

        <main className="contents">
            <div className="px-6 pb-8 pt-2 md:col-span-2 md:row-start-3 md:overflow-y-auto">
            <section id="projects" aria-labelledby="projects-heading">
              <ul className="mt-3 grid gap-4 mx-10 sm:grid-cols-1 md:grid-cols-2">
                {links.map((p) => (
                  <li key={p.label} className={`mx-5 my-3 rounded-2xl p-4 ${p.tone}`}>
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
