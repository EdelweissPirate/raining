import SilentMovieFrame from '../assets/silentFrame.png'
import SilentMovieFrameMobile from '../assets/silentFrame_mobile_iPhone.png'

function AudioSelector({ id, handleSetAudio }) {
    const styleBG = {
        backgroundImage: window.innerWidth >= 550 ? `url(${SilentMovieFrame})` : `url(${SilentMovieFrameMobile})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#222222'
    }

    return (
        <div id={id} className='fade-in h-100 w-100 flex col flex-centre' style={styleBG}>
            <div className='w-80'>
                <h1 className='textCenter'>Would you like audio?</h1>
            </div>
            <div>
                <button className='btn-audio' onClick={() => handleSetAudio(true)}>
                    Yes
                </button>
                <button className='btn-audio' onClick={() => handleSetAudio(false)}>
                    No
                </button>
            </div>
        </div>
    )
}

export default AudioSelector