import { Box} from '@chakra-ui/react'
import { Canvas,useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Computer from './Computer'
import * as THREE from 'three'
import React, { useState, Suspense,useEffect } from 'react'


function ComputerLoader() {

  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      13 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const CameraController = () => {
    const {camera,gl } = useThree();

    camera.position.copy(initialCameraPosition)

    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.minDistance = 10;
          controls.maxDistance = 20;
          return () => {
            controls.dispose();
          };
       },
       [camera, gl]
    );
    return null;
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
            <CameraController />
            <ambientLight intensity={0.8} color="#cccccc" />
            <Suspense fallback={null}>
              <Computer/>
            </Suspense>
          </Canvas>
        </Box>
      )
}

export default ComputerLoader



  
