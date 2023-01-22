import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useEffect } from 'react';
import { lerp } from 'three/src/math/MathUtils';

function Titles() {
    const textMesh1 = useRef()
    const textMesh2 = useRef()
    const textMesh3 = useRef()

    useEffect( () => {
        // textMesh.current.geometry.computeBoundingBox();
        // const boundingBox = textMesh.current.geometry.boundingBox;
        // const center = new THREE.Vector3();
        // boundingBox.getCenter(center);
        // textMesh.current.geometry.translate(-center.x,-center.y,-center.z);
        
        // textMesh.current.rotation.x = -90 * (Math.PI / 180)
        // textMesh.current.rotation.z = 90 * (Math.PI / 180)
    }, [])

    useFrame(() => {
        if(!textMesh1.current.opacityMag) textMesh1.current.opacityMag = 0.001

        if(textMesh1.current.opacityMag < 4){
            textMesh1.current.opacityMag += 0.01

            textMesh1.current.fillOpacity = lerp(0, 1, textMesh1.current.opacityMag)

            textMesh2.current.fillOpacity = lerp(0, 1, textMesh1.current.opacityMag)
            textMesh3.current.fillOpacity = lerp(0, 1, textMesh1.current.opacityMag)
        }
    })

    return (
        <group>
            <Text fillOpacity={0} font={'./Oldenburg-Regular.ttf'} ref={textMesh1} position={[-1, 0.151, 0]} rotation={[270*Math.PI/180, 0, 90*Math.PI/180]}  fontSize={.95}>
                Joshua Evans
            </Text>

            <Text fillOpacity={0} font={'./JacquesFrancois-Regular.ttf'} ref={textMesh2} position={[0, 0.151, 0]} rotation={[270*Math.PI/180, 0, 90*Math.PI/180]}  fontSize={.6}>
                Web Development
            </Text>

            <Text fillOpacity={0} font={'./Yellowtail-Regular.ttf'} ref={textMesh3} position={[1, 0.151, 0]} rotation={[270*Math.PI/180, 0, 90*Math.PI/180]}  fontSize={.4}>
                React - ThreeJS - Electron
            </Text>
        </group>
    )
}

export default Titles