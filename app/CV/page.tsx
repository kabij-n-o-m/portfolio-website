import React from 'react'
import Navbar from '../../components/Navbar'

const focusStyle =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccharcoal-900";
const linkStyle = `font-medium underline decoration-cpink-500 decoration-2 underline-offset-4 rounded-sm hover:bg-ccharcoal-900 hover:text-cgreen-50 ${focusStyle}`;


const CV = () => {
  return (
    <div className="h-dvh bg-cwhite-50 text-ccharcoal-900 sm:p-6 justify-center flex">
      
      <div className="px-10 py-5 grid grid-cols-1 h-full overflow-y-auto rounded-l-4xl border-2 border-r-0 border-cgrey-100 bg-cblush-200  md:grid-rows-[auto_minmax(0,1fr)_auto] md:overflow-hidden
      md:w-3/5">
        <header className="px-6 pb-4 pt-4 text-center md:col-start-1 md:row-start-1">
          <h1 className="text-xl font-medium tracking-tight md:text-3xl">
            My CV
          </h1>
        </header>
        <main className="contents">
            <div>
            <iframe
        src="/Ivan_CV_for_website.pdf"
        title="My CV"
        className="mx-auto w-full h-full"
            ></iframe>
            </div>
            <div className="mx-5 my-3 w-1/4 rounded-4xl p-4 bg-csage-200">
                <a href="/Ivan_CV_for_website.pdf" download="Ivan_Murphy_CV.pdf"
                className = {linkStyle} >
                    Download my CV
                </a>
            </div>
        </main>
      </div>
      <Navbar />

    </div>
  )
}

export default CV
