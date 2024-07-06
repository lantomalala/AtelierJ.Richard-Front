import './globals.css'
import './css/bootstrap.css'
import './css/styleBaner.css'
import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import './css/style.css'
import wave1 from './svg/wave-1.svg'
import wave2 from './svg/wave-2.svg'
import wave3 from './svg/wave-3.svg'
import wave4 from './svg/wave-4.svg'
import wave5 from './svg/wave-5.svg'
import Image from 'next/image'
import axios from "axios"




export function MyComponentHeader() {
  return (
    <>
      <header>
        <Image src={wave1} />
        <Image src={wave2} />
        <Image src={wave3} />
        <Image src={wave4} />
        <Image src={wave5} id="shape" />
        <h1>Bonjour</h1>
      </header>
    </>

  );
}
export function MyComponentFooter() {
  return (
    <>
          
      <div className="container-fluid p-3 footerblock text-white text-left">     
        <div className="row">
          <div className="col-md-2">
            <h3>MAIN</h3> <br />
            <ul>
              <li><a href="/..">Home</a></li>
              <li><a href="/about">Projet Library</a></li>
              <li><a href="/about">Pricing</a></li>
              <li><a href="/about">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>ABOUT</h3> <br />
            <ul>
              <li><a href="/about">About TVC</a></li>
              <li><a href="/about" >Better People</a></li>
              <li><a href="/about" >Our Arrangers</a></li>
              <li><a href="/about" >Carrers</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>SERVICES</h3> <br />
            <ul>
              <li><a href="/about" >Recording</a></li>
              <li><a href="/about" >Live production</a></li>
              <li><a href="/about" >Video</a></li>
              <li><a href="/about" >Arraging</a></li>
              <li><a href="/about" >Songwriting</a></li>
              <li><a href="/about" >Education</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3 className="">CONTACT</h3><br />
            <ul>
              <li ><a href="/about" >Contact Us</a> </li>
              <li><a href="/about" >Talk with Us</a></li>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <a href="https://www.facebook.com/profile.php?id=100009970740046"><div className="facebook p-1"><i className="ri-facebook-circle-fill fontSize">Facebook</i></div></a>
            <a href="https://www.linkedin.com/hp/"><div className="linkedin p-1"><i className="ri-linkedin-box-line fontSize">Linkedin</i></div></a>
            <a href="https://github.com/Lanraybel/Api"><div className="github p-1"><i className="ri-github-line fontSize">Github</i></div></a>
            <a href="https://www.pinterest.com/pin/573927546249124716/" ><div className="pinterest p-1"><i className="ri-pinterest-line fontSize">Pinterest</i></div></a>
          </div>
        </div>
      </div>
    </>

  );
}


// import Image from 'next/image'
export const metadata = {
  title: 'Portfolio',
  description: 'Porfolio creer',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>Portfolio</title></head>
      <body>
        {/*---------- Header ----------*/}

        {MyComponentHeader()}

        {/*---------- banner -----------*/}

        {children}

        {/*---------- footer -----------*/}

        {MyComponentFooter()}

      </body>
    </html>
  )
}