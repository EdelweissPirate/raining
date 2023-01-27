function NewspaperNavbar({ handleChange, handleClose }) {
    return (
        <div className="newspaper-navbar">
            <div className="w-fill">
                <ul className="flex row space-around ">
                    <li>
                        <button className="btn-small" onClick={() => {handleChange('projects')}}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button className="btn-small" onClick={() => {handleChange('about')}}>
                            About
                        </button>
                    </li>
                    <li>
                        <button className="btn-small">
                            <a href={'https://github.com/EdelweissPirate'} target={'_blank'}>
                                Github
                            </a>
                        </button>
                    </li>
                    <li>
                        <button id={'newspaper-close'} className="btn-small" onClick={e => handleClose(e)}>
                            Close
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NewspaperNavbar