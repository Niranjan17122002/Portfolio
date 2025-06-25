import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {

  const [toggle, setToggle] =useState(false);

    return (
        <header className="flex justify-between px-5 py-2 bg-primary ">
            <a className="font-bold text-black" href="">Portfolio project</a>
            <nav className="hidden md:block">
                <ul className="flex text-white ">
                    <li className='hover:border-b-2'>
                        <a href="/">Home</a>
                    </li>
                    <li className='hover:border-b-2'>
                        <a href="#about">About</a></li>
                    <li>
                        <a href="#projects">Project</a>
                    </li >
                    <li className='hover:border-b-2'>
                        <a href="#resume">Resume</a>
                    </li>
                    <li className='hover:border-b-2'>
                        <a href="#contact">Contacts</a>
                    </li >
                </ul>
            </nav>
           { toggle && <nav className="block md:hidden">
                <ul onClick={()=>setToggle()} className="flex flex-col text-white mobile-nav">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a></li>
                    <li>
                        <a href="#projects">Project</a>
                    </li>
                    <li>
                        <a href="#contact">Contacts</a>
                    </li>
                </ul>
            </nav>
}
            <button onClick={()=>setToggle(!toggle)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
    )
}