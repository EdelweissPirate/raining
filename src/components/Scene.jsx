import * as THREE from 'three'
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { RGBELoader } from 'three-stdlib'
import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'

import Loader from "./Loader/Loader"
import AudioSelector from './AudioSelector'
import SceneContent from './SceneContent/SceneContent'

function Scene() {
    const [audio, setAudio] = useState(null)

    const handleSetAudio = (arg) => {
        const audioSelector = document.querySelector('#audio-selector')
        audioSelector.classList.remove('fade-in')
        audioSelector.classList.add('fade-out')

        setTimeout(() => {
            setAudio(arg)
        }, 1000)
    }

    useEffect(() => {
        if(window.innerWidth < 800){
            setAudio(false)
        }
    }, [])
    

    const glConfig = {
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        depth: false
    }

    const camConfig = {
        position: window.innerWidth >= 550 ? [8, 10, 2.9] : [11.5, 13.3, 2.2],//[10.4, 12, 2],
        fov: 50, 
        near: 1, 
        far: 60,
        zoom: window.innerWidth >= 550 ? 1 : .7
    }

    const texture = useLoader(RGBELoader, './hdri/moonless_golf_1k.hdr') //'src/assets/the_sky_is_on_fire_1k.hdr'
    texture.mapping = THREE.EquirectangularReflectionMapping

    return (
        <section id='scene'>
            {audio === null ? 
            <AudioSelector id={'audio-selector'} handleSetAudio={handleSetAudio} />
            :
            <Suspense fallback={<Loader />}>
                <Canvas gl={glConfig} camera={camConfig} shadows dpr={[1, 2]}>
                    
                    {/* <OrbitControls /> */}

                    <Environment  near={1} far={85} resolution={256} map={texture} />
                    <fog attach="fog" color="#222222" args={['#202020', 5, window.innerWidth >= 550 ? 30 : 45]} />

                    <ambientLight intensity={0.03} />

                    <SceneContent audio={audio} />

                    <EffectComposer>
                        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
                        <Noise opacity={0.1} />
                    </EffectComposer>
                </Canvas>
            </Suspense>
            }
        </section>
    )
}

export default Scene