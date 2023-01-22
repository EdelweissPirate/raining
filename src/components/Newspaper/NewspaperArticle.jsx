import Badges from "../Badges/Badges"

function NewspaperArticle({ inverted, data }) {
    const { name, tech, description, caption, url, repo, image } = data

    return (
        <a href={url} target='_blank'>
            <div className={`grid article-grid ${inverted && 'article-grid-inverted'}`}>
            
                <div className="article-image flex flex-center">
                    <figure>
                        <img src={image} />
                        <figcaption style={{fontSize: '0.8rem'}}>
                            {caption}
                        </figcaption>
                    </figure>
                </div>

                <div className="article-title flex flex-centre">
                    <h3>{name}</h3>
                </div>

                <div className="article-subtitle flex flex-center">
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

                <div className="article-description">
                    <p>{description}</p>
                </div>

            </div>
        </a>
    )
}

export default NewspaperArticle