import { Plane, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Ripple() {
    const ref = useRef()
    const texture = useTexture('src/assets/ripple.png')

    let [x, y, z] = [
        Math.random() * 25 - 12.5,
        Math.random() * 37.5 - (37.5 /2),
        Math.random() * 25 - 12.5
    ]

    useFrame(() => {
        const rip = ref.current

        if(rip.scale.x > 0){
            rip.scale.x = rip.scale.y = rip.scale.z -= (0.02 + 0.08 * Math.random())
        } else {
            [x, y, z] = [
                Math.random() * 50 - 25,
                Math.random() * 75 - 37.5,
                Math.random() * 50 - 25
            ]
    
            rip.position.x = x
            rip.position.z = z

            rip.scale.x = rip.scale.y = rip.scale.z = 1// 0.8 + 0.3 * Math.random()

            if(rip.position.x <= 0 && rip.position.x >= -2.1){
                if(rip.position.z <= -3 && rip.position.z >= -4){
                    rip.position.y = 3
                }
            }
        }
    })

    return (
        <Plane ref={ref} args={[.5, .5]} position={[x, 0.15, z]} rotation={[-90*Math.PI/180,0,0]}>
            <meshStandardMaterial map={texture} attach="material" transparent />
        </Plane>
    )
}

function Ripples({ count = 1000 }) {
    const genRipples = () => {
        const rips = Array(count).fill(0).map((item, i) => {
            return <Ripple key={`ripple-${i}`} />
        })

        return [...rips]
    }


    const _ripples = genRipples(count)
    
    return (
        _ripples
    )
}

export default Ripples