import { Box } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

import NewspaperVending from "./NewspaperVending"

function NewspaperStand() {
    const [hovered, setHovered] = useState(false)

    useFrame(() => {

        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    })

    const handleClick = () => {
        const newspaper = document.querySelector('#newspaper')

        newspaper.classList.remove('slide-down')
        newspaper.classList.add('slide-up')
    }

    return (
        <>
            <NewspaperVending 
                scale={0.07}
                position={[1.8, 0.5, -4]} 
                onClick={e => handleClick(e)} 
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}    
            >
                <meshPhongMaterial color={'#e7e7e7'} />
            </NewspaperVending>
        </>
    )
}

export default NewspaperStand