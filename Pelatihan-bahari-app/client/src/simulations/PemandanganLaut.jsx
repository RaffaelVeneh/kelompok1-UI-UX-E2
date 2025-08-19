import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

export default function PemandanganLaut() {
    const texture = useTexture('/Pemandangan-Pantai.jpg')

    return (
        <mesh>
            <sphereGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
    )
}