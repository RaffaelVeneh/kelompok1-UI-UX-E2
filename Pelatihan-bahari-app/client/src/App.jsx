import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import './App.css'; // Kita akan edit file CSS ini juga

// Komponen untuk adegan 360°
function Scene() {
  // Muat tekstur/gambar dari folder public
  const texture = useTexture('/Pemandangan-Pantai.jpg'); // Ganti nama file jika perlu

  return (
    <>
      {/* Geometri bola raksasa */}
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        {/* Material dengan tekstur gambar kita, ditampilkan di sisi DALAM bola */}
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <Canvas>
      {/* Kontrol untuk bisa melihat sekeliling dengan mouse */}
      <OrbitControls />
      <Scene />
    </Canvas>
  );
}

export default App;