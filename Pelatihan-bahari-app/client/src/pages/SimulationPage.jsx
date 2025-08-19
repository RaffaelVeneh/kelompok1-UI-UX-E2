// src/pages/SimulationPage.jsx

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PemandanganLaut from '../simulations/PemandanganLaut'; // Impor komponen 3D kita

export default function SimulationPage() {
  return (
    <div style={{ width: '100%', height: '80vh' }}> {/* Wadah agar kanvas punya ukuran */}
      <h2>Simulasi Navigasi Perahu</h2>
      <p>Gunakan mouse untuk melihat sekeliling.</p>
      
      <Canvas>
        <OrbitControls />
        <PemandanganLaut />
      </Canvas>
    </div>
  );
}