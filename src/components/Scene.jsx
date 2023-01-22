import * as THREE from 'three'
import { Billboard, Environment, Html, OrbitControls, Plane, Text, Text3D } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { RGBELoader } from 'three-stdlib'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'

import Loader from "./Loader/Loader"
import Ripples from './Ripples'
import Rain from "./Rain"
import Lightning from "./Lightning"
import Buildings from "./Buildings"
import StreetLights from './StreetLights'
import Car from './Car'
import Shelter from './Shelter'
import Titles from './Titles'
import NewspaperStand from './NewspaperStand'

function SceneContent() {
    return (
        <>
            <Plane args={[100, 100]} rotation={[-90*Math.PI/180,0,0]}>
                <meshPhongMaterial color={'#222222'} />
            </Plane>

            <Suspense fallback={<Loader />}>
                <Buildings />
                <StreetLights />
                <Shelter />
                <NewspaperStand />

                <Car />

                <Titles />

                <Lightning />
                <Ripples />
                <Rain count={3000} color={'blue'} />

                <EffectComposer>
                    <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
                    <Noise opacity={0.1} />
                </EffectComposer>
            </Suspense>
        </>
    )
}

function Scene() {
    const glConfig = {
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        depth: false
    }

    const camConfig = {
        // position: [10, 7, 5],
        position: window.innerWidth >= 550 ? [8, 10, 2.9] : [10.4, 12, 2],
        fov: 50, 
        near: 1, 
        far: 60,
        zoom: window.innerWidth >= 550 ? 1 : .7
    }

    const texture = useLoader(RGBELoader, './moonless_golf_1k.hdr') //'src/assets/the_sky_is_on_fire_1k.hdr'
    texture.mapping = THREE.EquirectangularReflectionMapping

    return (
        <section id='scene'>
            <Suspense fallback={<Loader />}>
                <Canvas gl={glConfig} camera={camConfig} shadows dpr={[1, 2]}>

                    <Environment  near={1} far={85} resolution={256} map={texture} />
                    <fog attach="fog" color="#222222" args={['#202020', 5, window.innerWidth >= 550 ? 30 : 45]} />

                    <OrbitControls />
                    <ambientLight intensity={0.03} />

                    <SceneContent />
                </Canvas>
            </Suspense>
        </section>
    )
}

export default Scene