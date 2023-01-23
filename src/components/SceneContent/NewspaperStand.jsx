import { useFrame } from "@react-three/fiber"
import { useState } from "react"

import NewspaperStand_Model from "./NewspaperStand_Model"

function NewspaperStand({ newspaperActive }) {
    const [hovered, setHovered] = useState(false)

    useFrame(() => {

        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    })

    const handleClick = () => {
        const newspaper = document.querySelector('#newspaper')

        setTimeout(() => {
            newspaper.classList.remove('slide-down')
            newspaper.classList.add('slide-up')
        }, 3000)

        newspaperActive(true)
    }

    return (
        <>
            <NewspaperStand_Model 
                scale={0.07}
                position={[1.8, 0.2, -4]} 
                onClick={e => handleClick(e)} 
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}    
            >
                <meshPhongMaterial color={'#e7e7e7'} />
            </NewspaperStand_Model>
        </>
    )
}

export default NewspaperStand