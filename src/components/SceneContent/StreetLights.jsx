import { useDepthBuffer } from "@react-three/drei"

import StreetLight from "./StreetLight"

function StreetLights() {
    const depthBuffer = useDepthBuffer({ frames: 1 })

    return (
        <>
            <StreetLight pos={[-15, 2.8, -5]} depthBuffer={depthBuffer} />
            <StreetLight pos={[-15, 2.8, -10]} rotation={[0, 90*Math.PI/180, 0]} depthBuffer={depthBuffer} />
            <StreetLight pos={[-20, 2.8, -5]} depthBuffer={depthBuffer} />
            <StreetLight pos={[-25, 2.8, -5]} depthBuffer={depthBuffer} />

            <StreetLight pos={[-15, 2.8, 5]} rotation={[0, 180*Math.PI/180, 0]} depthBuffer={depthBuffer} />
            <StreetLight pos={[-20, 2.8, 5]} rotation={[0, 180*Math.PI/180, 0]} depthBuffer={depthBuffer} />

            <StreetLight pos={[-5, 2.8, -5]} depthBuffer={depthBuffer} />
            <StreetLight pos={[0, 2.8, -5]} faulty depthBuffer={depthBuffer} />
            <StreetLight pos={[5, 2.8, -5]} depthBuffer={depthBuffer} />

            <StreetLight pos={[-5, 2.8, 5]} rotation={[0, 180*Math.PI/180, 0]} depthBuffer={depthBuffer} />
            <StreetLight pos={[0, 2.8, 5]} rotation={[0, 180*Math.PI/180, 0]} depthBuffer={depthBuffer} />
            <StreetLight pos={[5, 2.8, 5]} rotation={[0, 180*Math.PI/180, 0]} depthBuffer={depthBuffer} />

        </>
    )
}

export default StreetLights