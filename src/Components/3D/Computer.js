import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/computer.gltf')
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
    <group ref={group} {...props} dispose={null} position={[0, 0, -1]} rotation={[0,0,0]} scale={3}>
      <mesh geometry={nodes.untitled.geometry} material={materials.palette} rotation={[Math.PI / 2, 0, 4.6]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']}  />
    </group>
  )
}

useGLTF.preload('/computer.gltf')
