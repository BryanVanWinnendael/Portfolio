import { Box} from '@chakra-ui/react'
import { Canvas,useThree,useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import ComputerGlow from './ComputerGlow'
import * as THREE from 'three'
import React, { useState, Suspense ,useRef} from 'react'

extend({ OrbitControls });

function ComputerLoader() {
  const [loaded,setLoaded] = useState(false)
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
     10 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const CameraControls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    if(!loaded){  
      camera.position.copy(initialCameraPosition)
      setLoaded(true)
    }

    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
  };

      return (
        <Box 
        m="auto"
        mt={['50px', '-20px', '-50px']}
        mb={['-150px', '-190px', '-250px']}
        w={[400, 480, 640]}
        h={[400, 480, 640]}
    
        position="relative">
          <Canvas>
          <CameraControls />
            <ambientLight intensity={0.8} color="#cccccc"/>
            <Suspense fallback={null}>
              <ComputerGlow/>
            </Suspense>
          </Canvas>
        </Box>
      )
}

export default ComputerLoader



  
