import React from 'react'

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Links", href: "/links" },
  { label: "CV", href: "/CV" },
];

const focusStyle =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccharcoal-900";
const linkStyle = `underline decoration-cpink-500 decoration-2 underline-offset-4 rounded-sm hover:bg-ccharcoal-900 hover:text-csage-200 ${focusStyle}`;


const Navbar = () => {
  return (
    <nav
        aria-label="Main"
        className="flex flex-wrap justify-center gap-2 border-2 border-cgreen-600 bg-csage-200 p-4 md:col-start-2 md:row-span-2 md:row-start-1 md:flex-col md:justify-start md:gap-1 md:rounded-r-3xl md:border-2 md:p-6"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-base hover:text-csage-200 hover:bg-ccharcoal-900 ${focusStyle}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
  )
}

export default Navbar
