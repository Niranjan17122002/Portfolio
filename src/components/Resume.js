
import react from "react"
import reumeImg from '../assets/resume.jpg'
import resume from '../assets/Niranjan Resume.pdf'
export default function Resume() {

    const config = {
        link: resume
    }

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 ">
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img className="w-[300px] " src={reumeImg} />
            </div >
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[135px] font-bold">Resume</h1>
                    <p className="pb-5 text-white">You can view My Resume <a className="button" href={config.link}>Download</a></p>
                </div>
            </div>
        </section>
    )
}