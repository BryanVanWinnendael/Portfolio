import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from "@react-three/fiber"
import {Howl} from 'howler'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/computer.gltf')
  const [pageLoaded,setPageloaded] = useState(false)

  function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec)
    })
  }

  async function spin(clock){
    for (let i = 0; i < 10; ++i) {
      const elapsedTime = clock.getElapsedTime()
      group.current.rotation.y = elapsedTime / 0.05
      await waitforme(20)
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

  const click = () => {
    const sound = new Howl({
      src: "/click.mp3",
      volume: 0.3,
    })        
    sound.play()
    props.showSecret()
    props.setLoaded(true)
    setTimeout(() => {
      props.setLoaded(false)
    }, 2000);
  }


  return (
    <group ref={group} dispose={null} scale={3}>
      <group rotation={[Math.PI / 2, 0, 4.36]}>
        <mesh geometry={nodes.untitled_1.geometry} material={materials.palette} />
        <mesh geometry={nodes.untitled_2.geometry} material={materials.glowBlue} />
        <mesh geometry={nodes.untitled_3.geometry} material={materials.glowGreen} />
        <mesh geometry={nodes.untitled_4.geometry} material={materials.mouseButton} onClick={click} onPointerEnter={() => {}}/>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']}/>
    </group>
  )
}

useGLTF.preload('/test.gltf')
