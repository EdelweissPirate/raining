import { useState, useEffect } from "react"

import Wrapper from "../Wrapper/Wrapper"
import NewspaperArticle from "./NewspaperArticle"

import projects from '../../assets/data/projects.js'

import './newspaperMain.css'

function NewspaperMain() {
    const [today, setToday] = useState(null)
    
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
    
    return (
        <section id="newspaper" className='container' style={{backgroundColor: '#f1eee5', color: '#222'}}>

            <div className='h-fill w-90 m-auto'>
                <Wrapper>
                    <div className="grid newspaper-grid h-fill w-fill">

                        <div className="newspaper-title flex row space-around flex-centre">
                            <div>
                                <h1>Night City Express</h1>
                            </div>
                        </div>

                        <div className="newspaper-date textCenter">
                            <h4>{today}</h4>
                        </div>

                        <div className="newspaper-navbar">
                            <div className="w-fill">
                                <ul className="flex row space-around ">
                                    <li>
                                        <button className="btn-small">
                                            github
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn-small">
                                            contact
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn-small">
                                            empty
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btn-small" onClick={e => handleClose(e)}>
                                            close
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="newspaper-articles w-fill h-fill">
                            
                            <div className="articles-projects">
                                <div className="title py-1">
                                    <h2>
                                        PROJECTS
                                    </h2>
                                </div>
                                {projects.map((item, i) => {
                                    return <NewspaperArticle key={`article-${i}`} data={item} inverted={i % 2 != 0} /> 
                                }
                                )}
                            </div>

                            <div className="articles-about">
                                <div className="title py-1">
                                    <h3 className="textCenter">
                                        About Me
                                    </h3>
                                </div>  
                                <div className="my-1">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Wrapper>
            </div>

        </section>
    )
}

export default NewspaperMain