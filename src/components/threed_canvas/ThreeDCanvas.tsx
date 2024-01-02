import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
// import Price from "../price/Price";
import { Text } from "@react-three/drei";

const Experience = lazy(() => import("./Experience"));

const ThreeDCanvas = () => {
  return (
    <div style={{ position: "relative" }}>
      <Canvas
        shadows
        frameloop="demand"
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight color={"#fff"} intensity={0.1} />

        <color attach="background" args={["#FFF"]} />
        <Suspense fallback={<Text>Loading...</Text>}>
          <Experience />
        </Suspense>
        {/* <pointLight position={ [10, 10, 10] } /> */}
      </Canvas>
      {/* <Price /> */}
    </div>
  );
};

export default ThreeDCanvas;
