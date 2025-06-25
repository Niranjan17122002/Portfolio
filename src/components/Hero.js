import Heroimg from '../assets/hero.png'
import {  AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa"

function Hero() {

    const config = {
        subtitle :"I'm a Front-end developer",

        social:{
            twitter: 'https://x.com/Niranja83256586?t=QNhz3WB7cbE8kiOvtnzwHg&s=09',
            facebook:'https://www.facebook.com/',
            linkedin:'https://www.linkedin.com/in/n-s-niranjan-832784284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi,
                    <br />
                    Im <span className='text-black'> Niranjan</span>
                    <p className='text-2xl'>{config.subtitle}</p>

                </h1>
                <div className='flex py-10 '>
                    <a href={config.social.twitter} className='pr-5 hover:text-white'><FaSquareXTwitter  size={40} /></a>
                    <a href= {config.social.facebook} className='pr-5 hover:text-white' ><AiOutlineFacebook  size={40}/></a>
                    <a href= {config.social.linkedin} className='hover:text-white' ><FaLinkedin size={40}/></a>
                </div>
            </div>
            <img className='md:w-1/3' src={Heroimg} />
        </section>
    )
}

export default Hero