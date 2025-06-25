import websiteImg1 from '../assets/portfolio.jpg';
import websiteImg2 from '../assets/todo.jpg';
import websiteImg3 from '../assets/website-blog.jpg';
export default function Projects() {

    const config = {
        project: [
            {
                image: websiteImg1,
                description: 'Portfolio',
                link: 'https://github.com/Niranjan17122002/Portfolio.git',
            },
            {
                image: websiteImg2,
                description: 'Todo List',
                link: 'https://github.com/Niranjan17122002/Todo-list.git',
            },
            {
                image: websiteImg3,
                description: 'lorem10',
                link:'https://github.com/Niranjan17122002/Portfolio.git',
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
            <div className="w-full ">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-white text-4xl mb-5 font-bold border-b-4 w-[140px] border-secondary">Projects</h1>
                    <p></p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.project.map((project) => (
                        <a href={project.link} >
                            <div className='relative'>
                                <img className='h-[200px] w-[500px]' src={project.image} />
                                <div className='project-des'>
                                    <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                   <a className='button '  target='_blank' href={project.link}>View project</a>
                                </div>
                                </div>
                            </div>
                        </a>
                    ))}

                </div>
            </div>
        </section>

    )

}