import { useFrame } from "@react-three/fiber"
import { useEffect } from "react"
import { useRef } from "react"
import * as THREE from 'three'
import { Object3D } from "three"

import Streetlight_Model from "./Streetlight_Model"

function StreetLight({ pos, rotation, ...props }) {
    const ref = useRef()
    const targetRef = useRef(new Object3D)

    const lightPos = new THREE.Vector3(...pos)

    useFrame(() => {

        if(props.faulty){
            if(Math.random() * 2 > 1.8){
                ref.current.power = Math.random() * 157
            } else {
                ref.current.power = 157
            }
        }

        // ref.current.updateMatrixWorld()
    })

    const setTarget = () => {
        ref.current.target = targetRef.current

        const targetPos = lightPos
        
        targetPos.y = 1

        ref.current.target.position.set(...targetPos)
        ref.current.target.updateMatrixWorld()
    }

    useEffect(() => {
        setTarget()
    }, [])
    


    return (
        <>
            <Streetlight_Model position={lightPos} rotation={rotation ? rotation : [0, 0, 0]} />
            <spotLight castShadow ref={ref} penumbra={0} distance={6} angle={0.7} attenuation={5} anglePower={4} intensity={50}  position={lightPos} color={'yellow'} {...props} />
        </>
    )
}

export default StreetLight