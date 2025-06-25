

import aboutImg from '../assets/about.png'
export default function About() {

    const config ={
        line1:'Hi, My name is Niranjan. I am a Front-end developer. I built a beautiful website with React.js and Tailwind CSS',
        line2:'I am also have a knowledge in Flutter. I have done a 10 weeks internship',
        line3:''
    }

    return (
        <section id="about" className="flex flex-col md:flex-row bg-secondary px-5 ">
            <div className="md:w-1/2 ">
                <img src={aboutImg} />
            </div >
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
                    <p className="text-white py-5">{config.line1}</p>
                    <p className="text-white">{config.line2}</p>
                    
                </div>
            </div>
        </section>
    )
}