import { Line } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"

function Raindrop() {
    const ref = useRef(null)

    const [x, y, z] = [
        Math.random() * 50 - 25,
        Math.random() * 75 - 37.5,
        Math.random() * 50 - 25
    ]

    useFrame(() => {
        const drop = ref.current
        
        if(!drop.velocity) drop.velocity = 0

        drop.velocity -= 3 * Math.random() * 1;
        drop.position.y += drop.velocity;

        if(drop.position.y < -100){
            drop.position.y = 100;
            drop.velocity = 0;
        }
    })

    return (
        <>
            <Line
                ref={ref}
                points={[[x, y, z], [x, y+2, z]]}       // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
                color="#fff"                   // Default
                lineWidth={1}                   // In pixels (default)
                dashed={false}                  // Default
            />
        </>
    )
}

function Rain({ count }) {
    const genDrops = () => {
        const drops = Array(count).fill(0).map((item, i) => {
            return <Raindrop  key={`raindrop-${i}`} />
        })

        return [...drops]
    }
    
    const _raindrops = useMemo(() => genDrops(count), [count])
    
    return (
        <>
            {_raindrops}
        </>
    )
}

export default Rain