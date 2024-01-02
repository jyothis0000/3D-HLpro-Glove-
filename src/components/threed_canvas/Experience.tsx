import { Environment, OrbitControls, Stage } from "@react-three/drei";
// import { useEffect } from 'react';
// import Glove from '../../Glove';
// import { useThree } from '@react-three/fiber';
import { Glovemodel } from "../Glovemodel";

const Experience = () => {
  // const { gl, scene, camera } = useThree();
  // useEffect(() => {
  // document.addEventListener('screenshot', () => {
  //     gl.render(scene, camera);
  //     const link = document.createElement('a');
  //     link.setAttribute('download', 'canvas.png');
  //     link.setAttribute('href', gl.domElement.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
  //     link.click();
  // });
  // }, []);

  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableDamping={false}
        makeDefault
      />
      <Stage
        environment={null}
        receiveShadow={false}
        castShadow={false}
        intensity={0.5}
        adjustCamera={1}
        shadows={false}
      >
        <Glovemodel />
      </Stage>
    </>
  );
};

export default Experience;
