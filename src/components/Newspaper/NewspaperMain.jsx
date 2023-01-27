import { useState, useEffect } from "react"

import Wrapper from "../Wrapper/Wrapper"

import NewspaperNavbar from "./NewspaperNavbar/NewspaperNavbar"
import NewspaperProject from "./NewspaperProject/NewspaperProject"
import NewspaperAbout from "./NewspaperAbout/NewspaperAbout"

import projects from '../../assets/data/projects.js'

import './newspaperMain.css'

function NewspaperMain() {
    const [today, setToday] = useState(null)
    const [currentPage, setCurrentPage] = useState('projects')
    
    useEffect(() => {
        const date = new Date()

        setToday(
            date.toLocaleDateString('en-uk', { weekday: 'long' }) + ', ' +
            date.getDate() + ' ' +
            date.toLocaleDateString('en-uk', { month: 'long' }) + ', ' + 
            date.getFullYear()
        )
    }, [])

    const handleClose = (e) => {
        const newspaper = document.querySelector('#newspaper')

        newspaper.classList.remove('slide-up')
        newspaper.classList.add('slide-down')
    }

    const handleChange = (arg) => {
        if(arg == currentPage) return

        const newspaper = document.querySelector('#newspaper')

        newspaper.classList.remove('slide-up')
        newspaper.classList.add('slide-down')

        setTimeout(() => {
            setCurrentPage(arg)

            newspaper.classList.remove('slide-down')
            newspaper.classList.add('slide-up')
        }, 1000)
    }
    
    return (
        <section id="newspaper" className='container' style={{backgroundColor: '#f1eee5', color: '#222'}}>

            <div className='h-fill w-90 m-auto'>
                <Wrapper>
                    <div className="grid newspaper-grid h-fill w-fill">

                        <div className="newspaper-title flex row space-around flex-centre">
                                <h1>Night City Express</h1>
                        </div>

                        <div className="newspaper-date textCenter">
                            <h4>{today}</h4>
                        </div>

                        <NewspaperNavbar handleChange={handleChange} handleClose={handleClose} />

                        {currentPage === 'about' && 
                            <div className="newspaper-articles-about w-fill h-fill">
                                <div className="articles-about">
                                    <NewspaperAbout />
                                </div>
                            </div>
                        }

                        {currentPage === 'projects' &&
                            <div className="newspaper-articles-projects w-fill h-fill">
                                <div className="articles-projects">
                                    <div className="title py-1">
                                        <h2>
                                            PROJECTS
                                        </h2>
                                    </div>
                                    {projects.map((item, i) => {
                                        return <NewspaperProject key={`article-${i}`} data={item} inverted={i % 2 != 0} /> 
                                    }
                                    )}
                                </div>

                                <div className="projects-side">
                                    <div className="title py-1">
                                        <h3 className="textCenter">
                                            Bonus Article
                                        </h3>
                                    </div>  
                                    <div className="my-1">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </Wrapper>
            </div>

        </section>
    )
}

export default NewspaperMain