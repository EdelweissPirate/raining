import Badges from "../../Badges/Badges"

import './newspaperProject.css'

function NewspaperProject({ inverted, data }) {
    const { name, tech, description, caption, url, repo, image } = data

    return (
        <a href={url} target='_blank'>
            <div className={`grid project-grid ${inverted && 'project-grid-inverted'}`}>
            
                <div className="project-image flex flex-center">
                    <figure>
                        <img src={image} />
                        <figcaption style={{fontSize: '0.8rem'}}>
                            {caption}
                        </figcaption>
                    </figure>
                </div>

                <div className="project-title flex flex-centre">
                    <h3>{name}</h3>
                </div>

                <div className="project-subtitle flex flex-center">
                    <Badges 
                        solidity={tech.includes('solidity')}
                        react={tech.includes('react')}
                        tailwind={tech.includes('tailwind')}
                        electron={tech.includes('electron')}
                        mongo={tech.includes('mongo')}
                        three={tech.includes('three')}
                        blender={tech.includes('blender')}
                    />
                </div>

                <div className="project-description">
                    <p>{description}</p>
                </div>

            </div>
        </a>
    )
}

export default NewspaperProject