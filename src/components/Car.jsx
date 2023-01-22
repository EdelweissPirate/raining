/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import * as THREE from 'three'
import { Object3D } from "three"

function Car(props) {
  const { nodes, materials } = useGLTF('/models/car-transformed.glb')
  
  const ref = useRef()
  const lightRef1 = useRef()
  const lightRef2 = useRef()
  const targetRef1 = useRef(new Object3D)
  const targetRef2 = useRef(new Object3D)

  useFrame((state) => {
    if(ref.current.position.x < 10){
      ref.current.position.x += 0.15
    } else {
      ref.current.position.x = -80
    }

    // if(Math.random() > .9){
    //   ref.current.position.z = -2 + (1 * Math.cos(state.clock.elapsedTime * 8))
    //   ref.current.rotation.y = 90*Math.PI/180 + (.5 * Math.cos(state.clock.elapsedTime * 8))
    // }

    const lightPos = new THREE.Vector3(...ref.current.position)
    lightRef1.current.target = targetRef1.current

    lightPos.z = ref.current.position.z + 0.2
    lightPos.x = ref.current.position.x + 5

    lightRef1.current.target.position.set(...lightPos)
    lightRef1.current.target.updateMatrixWorld()

    const lightPos2 = new THREE.Vector3(...ref.current.position)
    
    lightRef2.current.target = targetRef2.current

    lightPos2.z = ref.current.position.z - 0.2
    lightPos2.x = ref.current.position.x + 5

    lightRef2.current.target.position.set(...lightPos2)
    lightRef2.current.target.updateMatrixWorld()
  })
  
  //material={materials.MAIN} />
  return (
    <group {...props} position={[-20, 0, -2]} ref={ref} dispose={null} scale={0.7} rotation={[0, 90*Math.PI/180, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Circle072.geometry}>
        <meshPhongMaterial color={'#222222'} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle072_1.geometry}>
        <meshStandardMaterial color={'#fff'} emissive={'yellow'} emissiveIntensity={10} toneMapped={false} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Circle072_2.geometry}>
        <meshStandardMaterial color={'#e7e7e7'} transparent opacity={0.05} />
      </mesh>

      <spotLight ref={lightRef1} castShadow penumbra={0} distance={10} angle={0.2} attenuation={5} anglePower={4} intensity={20}  position={[-0.7, 0.4, .2]} color={'yellow'} />
      <spotLight ref={lightRef2} castShadow penumbra={0} distance={10} angle={0.2} attenuation={5} anglePower={4} intensity={20}  position={[0.9, 0.4, .2]} color={'yellow'} />
    </group>
  )
}

// useGLTF.preload('/models/car-transformed.glb')

export default Car