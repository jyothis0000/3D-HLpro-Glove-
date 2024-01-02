/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 glove.glb -t 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: {
    lace067: THREE.Mesh;
    lace069: THREE.Mesh;
    lace078: THREE.Mesh;
    lace079: THREE.Mesh;
    lace080: THREE.Mesh;
    BezierCurve: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    BezierCurve001: THREE.Mesh;
    BezierCircle: THREE.Mesh;
    BezierCircle001: THREE.Mesh;
    BezierCircle002: THREE.Mesh;
    BezierCircle003: THREE.Mesh;
    BezierCircle004: THREE.Mesh;
    BezierCircle005: THREE.Mesh;
    BezierCircle006: THREE.Mesh;
    BezierCircle007: THREE.Mesh;
    BezierCircle008: THREE.Mesh;
    BezierCircle009: THREE.Mesh;
    BezierCircle010: THREE.Mesh;
    BezierCircle011: THREE.Mesh;
    BezierCurve003: THREE.Mesh;
    BezierCurve004: THREE.Mesh;
    BezierCurve005: THREE.Mesh;
    BezierCurve006: THREE.Mesh;
    BezierCurve007: THREE.Mesh;
    BezierCurve008: THREE.Mesh;
    BezierCurve002: THREE.Mesh;
    BezierCurve009: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane005: THREE.Mesh;
    CURVE_HIDE002: THREE.Mesh;
    glove_back13: THREE.Mesh;
    glove_front2: THREE.Mesh;
    glove_front026: THREE.Mesh;
    polySurface2: THREE.Mesh;
    number_plate: THREE.Mesh;
    polySurface2001: THREE.Mesh;
    polySurface2002: THREE.Mesh;
    polySurface2003: THREE.Mesh;
    polySurface2004: THREE.Mesh;
    polySurface2005: THREE.Mesh;
    polySurface2006: THREE.Mesh;
    polySurface2007: THREE.Mesh;
    polySurface2008: THREE.Mesh;
    polySurface2009: THREE.Mesh;
    polySurface2010: THREE.Mesh;
    polySurface2011: THREE.Mesh;
    polySurface2012: THREE.Mesh;
    Mesh5136: THREE.Mesh;
    Mesh5136_1: THREE.Mesh;
    outer_lace: THREE.Mesh;
    outer_lace001: THREE.Mesh;
    outer_lace002: THREE.Mesh;
    outer_lace003: THREE.Mesh;
    outer_lace004: THREE.Mesh;
    outer_lace005: THREE.Mesh;
    outer_lace006: THREE.Mesh;
    outer_lace007: THREE.Mesh;
    outer_lace009: THREE.Mesh;
    outer_lace010: THREE.Mesh;
    lace001: THREE.Mesh;
    lace002: THREE.Mesh;
    lace004: THREE.Mesh;
    lace015: THREE.Mesh;
    lace023: THREE.Mesh;
    lace026: THREE.Mesh;
    lace027: THREE.Mesh;
    lace028: THREE.Mesh;
    lace029: THREE.Mesh;
    lace033: THREE.Mesh;
    lace042: THREE.Mesh;
    lace053: THREE.Mesh;
    lace054: THREE.Mesh;
    lace055: THREE.Mesh;
    sweep1: THREE.Mesh;
  };
  materials: {
    // lasess: THREE.MeshStandardMaterial;
    lasess: THREE.MeshStandardMaterial;
    ["outer_lace1.001"]: THREE.MeshStandardMaterial;
    strip: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    lace: THREE.MeshStandardMaterial;
    // edge: THREE.MeshStandardMaterial;
    tie: THREE.MeshStandardMaterial;
    edge: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Glovemodel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/model/glove.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.lace067.geometry}
        material={materials.lasess}
        position={[0.01, 0.038, 0.082]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace069.geometry}
        material={materials.lasess}
        position={[-0.736, 2.388, -0.341]}
        rotation={[0.652, -0.096, 0.093]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.lace078.geometry}
        material={materials.lasess}
        position={[-0.707, 2.384, -0.332]}
        rotation={[0.652, -0.096, 0.093]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.lace079.geometry}
        material={materials.lasess}
        position={[-0.718, 2.414, -0.392]}
        rotation={[0.362, -0.259, -0.562]}
        scale={0.006}
      />
      <mesh
        geometry={nodes.lace080.geometry}
        material={materials.lasess}
        position={[-0.736, 2.439, -0.352]}
        rotation={[2.922, 1.025, -0.062]}
        scale={0.006}
      />
      <mesh
        geometry={nodes.BezierCurve.geometry}
        material={materials.lasess}
        position={[-0.651, 4.21, 0.392]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["outer_lace1.001"]}
        position={[-0.355, 4.289, 0.002]}
        rotation={[0.355, 0.757, -0.163]}
        scale={[0.2, 0.233, 0.089]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["outer_lace1.001"]}
        position={[-0.497, 3.533, -0.163]}
        rotation={[0.315, 0.729, -0.041]}
        scale={[0.161, 0.315, 0.093]}
      />
      <mesh
        geometry={nodes.BezierCurve001.geometry}
        material={materials.lasess}
        position={[-0.239, 4.366, -0.242]}
        rotation={[0.259, 0.012, 0.017]}
      />
      <mesh
        geometry={nodes.BezierCircle.geometry}
        material={materials.lasess}
        position={[-0.193, 4.672, 0.055]}
        rotation={[-0.072, 0.772, -1.617]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle001.geometry}
        material={materials.lasess}
        position={[-0.265, 4.651, 0.105]}
        rotation={[-0.083, 0.642, -1.227]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle002.geometry}
        material={materials.lasess}
        position={[-0.356, 4.614, 0.198]}
        rotation={[-0.072, 0.772, -1.395]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle003.geometry}
        material={materials.lasess}
        position={[-0.428, 4.576, 0.288]}
        rotation={[-0.072, 0.772, -1.395]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle004.geometry}
        material={materials.lasess}
        position={[-0.498, 4.531, 0.366]}
        rotation={[-0.072, 0.772, -1.395]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle005.geometry}
        material={materials.lasess}
        position={[-0.565, 4.488, 0.44]}
        rotation={[-0.08, 0.803, -1.389]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle006.geometry}
        material={materials.lasess}
        position={[-0.613, 4.441, 0.519]}
        rotation={[-0.117, 0.924, -1.289]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle007.geometry}
        material={materials.lasess}
        position={[-0.671, 4.39, 0.599]}
        rotation={[-0.124, 0.945, -1.283]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle008.geometry}
        material={materials.lasess}
        position={[-0.73, 4.335, 0.684]}
        rotation={[-0.124, 0.945, -1.283]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle009.geometry}
        material={materials.lasess}
        position={[-0.787, 4.276, 0.774]}
        rotation={[-0.124, 0.945, -1.283]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle010.geometry}
        material={materials.lasess}
        position={[-0.849, 4.216, 0.872]}
        rotation={[-0.124, 0.945, -1.283]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCircle011.geometry}
        material={materials.lasess}
        position={[-0.91, 4.146, 0.985]}
        rotation={[-0.124, 0.945, -1.283]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.BezierCurve003.geometry}
        material={materials.lasess}
        position={[-0.362, 3.81, -0.369]}
        rotation={[0.259, 0.012, 0.017]}
      />
      <mesh
        geometry={nodes.BezierCurve004.geometry}
        material={materials.lasess}
        position={[-0.342, 3.439, -0.493]}
        rotation={[0.259, 0.012, 0.017]}
      />
      <mesh
        geometry={nodes.BezierCurve005.geometry}
        material={materials.lasess}
        position={[-1.051, 3.299, 0.477]}
        rotation={[0.259, 0.012, 0.017]}
      />
      <mesh
        geometry={nodes.BezierCurve006.geometry}
        material={materials.lasess}
        position={[-0.933, 2.938, 0.376]}
        rotation={[0.259, 0.012, 0.017]}
      />
      <mesh
        geometry={nodes.BezierCurve007.geometry}
        material={materials.lasess}
        position={[-0.424, 2.879, -0.586]}
        rotation={[-0.027, 0.414, 0.061]}
      />
      <mesh
        geometry={nodes.BezierCurve008.geometry}
        material={materials.lasess}
        position={[-0.967, 2.56, 0.241]}
        rotation={[-2.898, 1.203, 0.028]}
      />
      <mesh
        geometry={nodes.BezierCurve002.geometry}
        material={materials.lasess}
        position={[-0.489, 2.512, -0.375]}
        rotation={[-2.363, -0.705, -0.562]}
        scale={-0.17}
      />
      <mesh
        geometry={nodes.BezierCurve009.geometry}
        material={materials.lasess}
        position={[-0.706, 2.347, -0.093]}
        rotation={[2.821, -1.523, 2.679]}
        scale={-0.17}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.strip}
        position={[-0.504, 4.077, 0.018]}
        rotation={[0.513, -0.591, -1.521]}
        scale={[0.123, 0.064, 0.109]}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials.strip}
        position={[-0.854, 3.821, 0.472]}
        rotation={[0.636, -0.242, -1.519]}
        scale={[0.123, 0.069, 0.094]}
      />
      <mesh
        geometry={nodes.CURVE_HIDE002.geometry}
        material={materials["outer_lace1.001"]}
        position={[-0.519, 2.327, -0.026]}
        rotation={[1.99, 0, -0.97]}
        scale={0.603}
      />
      <mesh
        geometry={nodes.glove_back13.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.glove_front2.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.glove_front026.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.number_plate.geometry}
        material={materials.Material}
        position={[-0.719, 1.485, 0.236]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.011}
      />
      <mesh
        geometry={nodes.polySurface2001.geometry}
        material={nodes.polySurface2001.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2002.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2003.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2004.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2005.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2006.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2007.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2008.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2009.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2010.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2011.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.polySurface2012.geometry}
        material={materials.Material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh5136.geometry} material={materials.lace} />
        <mesh
          geometry={nodes.Mesh5136_1.geometry}
          material={nodes.Mesh5136_1.material}
        />
      </group>
      <mesh
        geometry={nodes.outer_lace.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace001.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace002.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace003.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace004.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace005.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace006.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace007.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace009.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.outer_lace010.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace001.geometry}
        material={materials.tie}
        position={[1.171, 0.49, 0.718]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace002.geometry}
        material={materials.tie}
        position={[0.194, 0.812, 1.061]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace004.geometry}
        material={materials.tie}
        position={[2.226, 1.783, 0.077]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace015.geometry}
        material={materials.tie}
        position={[1.507, 0.681, 0.508]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace023.geometry}
        material={materials.tie}
        position={[2.136, 1.504, 0.085]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace026.geometry}
        material={materials.tie}
        position={[-0.527, 1.48, 1.146]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace027.geometry}
        material={materials.tie}
        position={[1.745, 0.861, 0.333]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace028.geometry}
        material={materials.tie}
        position={[-0.211, 1.092, 1.076]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace029.geometry}
        material={materials.tie}
        position={[-0.344, 1.286, 1.103]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace033.geometry}
        material={materials.tie}
        position={[2.076, 1.295, 0.141]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace042.geometry}
        material={materials.tie}
        position={[0.547, 0.601, 1.016]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace053.geometry}
        material={materials.tie}
        position={[1.993, 1.108, 0.197]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace054.geometry}
        material={materials.tie}
        position={[-0.679, 1.669, 1.188]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.lace055.geometry}
        material={materials.tie}
        position={[0.85, 0.513, 0.877]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.sweep1.geometry}
        material={materials.edge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/model/glove.glb");
