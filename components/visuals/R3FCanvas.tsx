'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import FloatingCodeText from './FloatingCodeText'
import codeSymbols from './CodeSymbols'

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function SymbolScatter() {
  const spreadX = 18 // massive horizontal spread
  const spreadY = 12 // larger vertical spread
  const spreadZ = [-12, -4]

  return (
    <>
      {codeSymbols.map((text, i) => {
        const x = getRandomFloat(-spreadX, spreadX)
        const y = getRandomFloat(-spreadY, spreadY)
        const z = getRandomFloat(...spreadZ)
        const size = getRandomFloat(0.4, 0.6)
        const color = ['#00f0ff', '#14f1d9', '#65B1A5'][i % 3]

        return (
          <FloatingCodeText
            key={text + i}
            text={text}
            position={[x, y, z]}
            size={size}
            color={color}
            floatSpeed={0.3 + Math.random() * 0.3}
            rotationSpeed={0.002 + Math.random() * 0.002}
          />
        )
      })}
    </>
  )
}

export default function R3FCanvas() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // No interaction interference
      }}
      camera={{ position: [0, 0, 12], fov: 75 }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#14f1d9" />
      <Suspense fallback={null}>
        <SymbolScatter />
      </Suspense>
    </Canvas>
  )
}
