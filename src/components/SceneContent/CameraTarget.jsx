import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

function CameraTarget({ currentPos }) {
    const targetRef = useRef()

    const camPos = {
        home: window.innerWidth >= 550 ? [8, 10, 2.9] : [11.5, 13.3, 2.2],
        newspaper:window.innerWidth >= 550 ? [5, 1.2, -5] : [7.8, 3.8, -6.9]
    }

    const targetPos = {
        home: [0, 0, 0],
        newspaper: [2, 0.5, -3.5]
    }

    const camVec = new THREE.Vector3(...camPos.home)
    const targetVec = new THREE.Vector3(...camPos.home)

    useFrame(({ camera }) => {
        switch (currentPos) {
            case null:
                targetVec.set(...targetPos.home)
                targetRef.current.position.lerp(targetVec, .01)
                camera.position.lerp(camVec.set(...camPos.home), .01)
                camera.updateProjectionMatrix()
                break;
        
            default:
                targetVec.set(...targetPos[currentPos])
                targetRef.current.position.lerp(targetVec, .025)
                camera.position.lerp(camVec.set(...camPos[currentPos]), .03)
                camera.updateProjectionMatrix()
                break;
        }

        camera.lookAt(targetRef.current.position)

        return null
    })

    return (
        <mesh ref={targetRef}>
            {/* <coneBufferGeometry attach='geometry' args={[1, 5, 5]} />
            <meshLambertMaterial attach='material' color='pink' /> */}
        </mesh>
    )
}

export default CameraTarget