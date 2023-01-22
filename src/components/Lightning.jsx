import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Lightning() {
    const ref = useRef()

    useFrame(() => {
        const flash = ref.current

        if(Math.random() > 0.96 || flash.power > 100) {
            if(flash.power<100) {
                flash.position.set(
                    0, //Math.random()*400,
                    300+Math.random()*200,
                    0, //100
                );
            }

            flash.power = 50 + Math.random() * 900;
        }
    })
    // #062d89
    return (
        <>
            <pointLight
            ref={ref}
                color={'#415686'} 
                intensity={30} 
                distance={500} 
                decay={1.7}
                position={[0,100,0]}
            />
        </>
    )
}

export default Lightning