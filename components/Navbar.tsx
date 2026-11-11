import {focusStyle,  linkStyle } from "@/components/Template";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Links", href: "/links" },
  { label: "CV", href: "/CV" },
];


const Navbar = () => {
  return (
    <nav
        aria-label="Main"
        className="flex justify-center fixed w-full sm:rounded-t-3xl sm:border-2 sm:w-[calc(100%-5rem)] md:flex-wrap  md:h-full md:relative md:w-fit  md:border-2 md:rounded-l-none md:border-l-0 border-cgrey-100 bg-csage-200 p-4 md:col-start-2 md:row-span-2 md:row-start-1 md:flex-col md:justify-start md:gap-1 md:rounded-r-3xl md:p-6"
        
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-0 md:py-4 text-base hover:text-csage-200 hover:bg-ccharcoal-900 ${focusStyle}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
  )
}

export default Navbar
