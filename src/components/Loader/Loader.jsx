import { Html, useProgress } from "@react-three/drei"

import SilentMovieFrame from '../../assets/silentFrame.png'
import SilentMovieFrameMobile from '../../assets/silentFrame_mobile_iPhone.png'

function Loader() {
    const {
        progress
    } = useProgress()

    const styleProgressBarHolder = {
        height: '100vh',
        width: '100vw',
        backgroundImage: window.innerWidth >= 550 ? `url(${SilentMovieFrame})` : `url(${SilentMovieFrameMobile})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#222222'
    }

    const styleProgressBarOuter = {
        backgroundColor: '#666', 
        width: window.innerWidth >= 550 ? '40%' : '70%',
        margin: 'auto'
    }

    const styleProgressBarInner = {
        height: '30px', 
        backgroundColor: '#f1eee5', 
        width: `${progress}%`
    }
    
    return (
        <>
            <Html center>
                <div className="flex flex-centre col w-fill h-fill fade-in" style={styleProgressBarHolder}>
                    <div style={{textAlign: 'center', padding: '1rem'}}>
                        <h1>LOADING</h1>
                    </div>
                    <div className="w-fill">
                        <div style={styleProgressBarOuter}>
                            <div 
                                style={styleProgressBarInner}
                            ></div>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    )
}

export default Loader