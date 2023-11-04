/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 public/covermodels/football.gltf -t -r public 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Icosphere002: THREE.Mesh
    Icosphere002_1: THREE.Mesh
    Icosphere002_2: THREE.Mesh
    Cube007: THREE.Mesh
    Cube007_1: THREE.Mesh
    Cube007_2: THREE.Mesh
    Cube008: THREE.Mesh
    Cube009: THREE.Mesh
    Cube010: THREE.Mesh
    NurbsPath004: THREE.Mesh
    NurbsPath005: THREE.Mesh
    NurbsPath006: THREE.Mesh
    NurbsPath007: THREE.Mesh
    Torus008: THREE.Mesh
    Torus009: THREE.Mesh
    Torus010: THREE.Mesh
    Torus011: THREE.Mesh
    Torus012: THREE.Mesh
    Torus013: THREE.Mesh
    Torus014: THREE.Mesh
    Torus015: THREE.Mesh
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
    Cube005: THREE.Mesh
    NurbsPath001: THREE.Mesh
    NurbsPath002: THREE.Mesh
    NurbsPath003: THREE.Mesh
    NurbsPath008: THREE.Mesh
    Torus001: THREE.Mesh
    Torus002: THREE.Mesh
    Torus003: THREE.Mesh
    Torus004: THREE.Mesh
    Torus005: THREE.Mesh
    Torus006: THREE.Mesh
    Torus007: THREE.Mesh
    Torus016: THREE.Mesh
  }
  materials: {
    ['White.001']: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    ['Black 2']: THREE.MeshStandardMaterial
    ['Red.001']: THREE.MeshStandardMaterial
    ['Yellow.001']: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Football(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/covermodels/football.gltf') as GLTFResult
  return (
    <group {...props} dispose={null} scale={0.8}>
      <group position={[-0.431, 0.916, -0.019]} scale={1.146}>
        <mesh geometry={nodes.Icosphere002.geometry} material={materials['White.001']} />
        <mesh geometry={nodes.Icosphere002_1.geometry} material={materials['Black.001']} />
        <mesh geometry={nodes.Icosphere002_2.geometry} material={materials['Black 2']} />
      </group>
      <group position={[0.895, 1.189, -0.162]} rotation={[0.324, 0.007, 0.113]} scale={0.442}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['Red.001']} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['Yellow.001']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['Red.001']} />
        <mesh geometry={nodes.Cube008.geometry} material={materials['White.001']} />
        <mesh geometry={nodes.Cube009.geometry} material={materials['Yellow.001']} />
        <mesh geometry={nodes.Cube010.geometry} material={materials['Red.001']} position={[0, -0.04, -0.02]} />
        <mesh geometry={nodes.NurbsPath004.geometry} material={materials.Blue} />
        <mesh geometry={nodes.NurbsPath005.geometry} material={materials.Blue} position={[0, -0.047, 0]} />
        <mesh geometry={nodes.NurbsPath006.geometry} material={materials.Blue} position={[0, -0.102, 0]} />
        <mesh geometry={nodes.NurbsPath007.geometry} material={materials.Blue} position={[0, -0.144, 0]} />
        <mesh geometry={nodes.Torus008.geometry} material={materials['Red.001']} position={[0.46, 0.187, 0.864]} />
        <mesh geometry={nodes.Torus009.geometry} material={materials['Red.001']} position={[0.468, 0.047, 1.112]} rotation={[0.14, -0.052, -0.002]} />
        <mesh geometry={nodes.Torus010.geometry} material={materials['Red.001']} position={[0.458, -0.057, 1.367]} rotation={[0.079, -0.029, -0.002]} />
        <mesh geometry={nodes.Torus011.geometry} material={materials['Red.001']} position={[0.414, -0.148, 1.611]} rotation={[0.097, -0.034, -0.008]} />
        <mesh geometry={nodes.Torus012.geometry} material={materials['Red.001']} position={[-0.487, 0.165, 0.869]} rotation={[0.042, 0.021, 0.005]} />
        <mesh geometry={nodes.Torus013.geometry} material={materials['Red.001']} position={[-0.468, 0.049, 1.112]} rotation={[0.126, 0.063, 0.014]} />
        <mesh geometry={nodes.Torus014.geometry} material={materials['Red.001']} position={[-0.458, -0.063, 1.367]} rotation={[0.18, 0.099, -0.016]} />
        <mesh geometry={nodes.Torus015.geometry} material={materials['Red.001']} position={[-0.414, -0.137, 1.611]} rotation={[0.076, 0.005, 0.065]} />
      </group>
      <group position={[0.44, 0.756, -0.541]} rotation={[0, Math.PI / 2, 0]} scale={0.442}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Red.001']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Yellow.001']} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['Red.001']} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['White.001']} />
        <mesh geometry={nodes.Cube004.geometry} material={materials['Yellow.001']} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['Red.001']} position={[0, -0.04, -0.02]} />
        <mesh geometry={nodes.NurbsPath001.geometry} material={materials.Blue} />
        <mesh geometry={nodes.NurbsPath002.geometry} material={materials.Blue} position={[0, -0.047, 0]} />
        <mesh geometry={nodes.NurbsPath003.geometry} material={materials.Blue} position={[0, -0.102, 0]} />
        <mesh geometry={nodes.NurbsPath008.geometry} material={materials.Blue} position={[0, -0.144, 0]} />
        <mesh geometry={nodes.Torus001.geometry} material={materials['Red.001']} position={[0.46, 0.187, 0.864]} />
        <mesh geometry={nodes.Torus002.geometry} material={materials['Red.001']} position={[0.468, 0.047, 1.112]} rotation={[0.14, -0.052, -0.002]} />
        <mesh geometry={nodes.Torus003.geometry} material={materials['Red.001']} position={[0.458, -0.057, 1.367]} rotation={[0.079, -0.029, -0.002]} />
        <mesh geometry={nodes.Torus004.geometry} material={materials['Red.001']} position={[0.414, -0.148, 1.611]} rotation={[0.097, -0.034, -0.008]} />
        <mesh geometry={nodes.Torus005.geometry} material={materials['Red.001']} position={[-0.487, 0.165, 0.869]} rotation={[0.042, 0.021, 0.005]} />
        <mesh geometry={nodes.Torus006.geometry} material={materials['Red.001']} position={[-0.468, 0.049, 1.112]} rotation={[0.126, 0.063, 0.014]} />
        <mesh geometry={nodes.Torus007.geometry} material={materials['Red.001']} position={[-0.458, -0.063, 1.367]} rotation={[0.18, 0.099, -0.016]} />
        <mesh geometry={nodes.Torus016.geometry} material={materials['Red.001']} position={[-0.414, -0.137, 1.611]} rotation={[0.076, 0.005, 0.065]} />
      </group>
    </group>
  )
}

useGLTF.preload('/covermodels/football.gltf')