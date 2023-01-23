import { Suspense, useEffect, useState } from "react"
import { Plane } from "@react-three/drei"

import Loader from '../Loader/Loader'

import Buildings from './Buildings'
import StreetLights from './StreetLights'
import Shelter from './Shelter'
import NewspaperStand from './NewspaperStand'
import NewsSign from "./NewsSign"
import Car from './Car'

import Titles from './Titles'

import Rain from './Rain'
import Ripples from './Ripples'
import Lightning from './Lightning'
import CameraTarget from "./CameraTarget"

function SceneContent({ audio }) {
    const [newspaperActive, setNewspaperActive] = useState(false)
    const [currentView, setCurrentView] = useState(null)
    
    const handleNewspaperActive = () => {
        const newVal = !newspaperActive
        setNewspaperActive(newVal)
        if(newVal){
            setCurrentView('newspaper')
        } else {
            setCurrentView(null)
        }
    }

    useEffect(() => {
        const newspaperCloseButton = document.querySelector('#newspaper-close')

        newspaperCloseButton.addEventListener('click', () => {
            setTimeout(() => {
                setNewspaperActive(false)
                setCurrentView(null)
            }, 1000)
        })
    }, [])
    

    return (
        <>
            <Suspense fallback={<Loader />}>
                <CameraTarget currentPos={currentView} />
                
                <Plane args={[100, 100]} rotation={[-90*Math.PI/180,0,0]}>
                    <meshPhongMaterial color={'#222222'} />
                </Plane>
                
                <Buildings />
                <StreetLights />
                <Shelter />
                <NewspaperStand newspaperActive={handleNewspaperActive} />
                <NewsSign />

                <Suspense>
                    <Car audio={audio} parked={newspaperActive} />
                </Suspense>

                <Ripples />
                <Rain />
                <Lightning />

                <Titles />
            </Suspense>
        </>
    )
}

export default SceneContent