import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/computerGlow.gltf')
  const [pageLoaded,setPageloaded] = useState(false)


  function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
  }

  async function spin(clock){
    for (let i = 0; i < 10; ++i) {
      const elapsedTime = clock.getElapsedTime()
      group.current.rotation.y = elapsedTime / 0.05
      group.current.rotation.y = elapsedTime / 0.05
      await waitforme(20);
    }
    setPageloaded(true)
  }
   
  
  useFrame(({ clock }) => {
    spin(clock)
    const elapsedTime = clock.getElapsedTime()
    if(pageLoaded){
      group.current.rotation.y = elapsedTime / 6
      group.current.rotation.y = elapsedTime / 6
    }
  })


  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <group rotation={[Math.PI / 2, 0, 4.36]}>
        <mesh geometry={nodes.untitled_1.geometry} material={materials.palette} />
        <mesh geometry={nodes.untitled_2.geometry} material={materials.glowBlue} />
        <mesh geometry={nodes.untitled_3.geometry} material={materials.glowGreen} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']}  />
    </group>
  )
}

useGLTF.preload('/computerGlow.gltf')
