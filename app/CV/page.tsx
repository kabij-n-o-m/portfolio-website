import React from 'react'
import Navbar from '../../components/Navbar'
import { focusStyle,  headingStyle,  linkStyle, pinkContainerStyle, whiteBackgroundStyle, headerStyle } from "@/components/Template";


const CV = () => {
  return (
    <div className={whiteBackgroundStyle}>      
      <div className={pinkContainerStyle} >
        <header className={headerStyle}>
          <h1 className={headingStyle}>
            My CV
          </h1>
        </header>
        <main className="contents">
            <div className="h-full">
            <iframe
        src="/Ivan_CV_for_website.pdf"
        title="My CV"
        className="mx-auto w-full h-full"
            ></iframe>
            </div>
            <div className="mx-5 my-3 w-fit rounded-4xl p-4 bg-csage-200">
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
