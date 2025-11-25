'use client'

import { Text } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface Props {
  text: string
  position: [number, number, number]
  rotationSpeed?: number
  floatSpeed?: number
  size?: number
  color?: string
}

export default function FloatingCodeText({
  text,
  position,
  rotationSpeed = 0.002,
  floatSpeed = 0.3,
  size = 0.45,
  color = '#00f0ff',
}: Props) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse, viewport } = useThree()
  const phase = Math.random() * Math.PI * 2
  const basePos = new THREE.Vector3(...position)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (meshRef.current) {
      // Floating vertical motion
      const yFloat = Math.sin(t * floatSpeed + phase) * 0.2
      meshRef.current.position.y = basePos.y + yFloat

      // Cursor repel motion
      const cursorX = (mouse.x * viewport.width) / 2
      const cursorY = (mouse.y * viewport.height) / 2
      const dist = meshRef.current.position.distanceTo(new THREE.Vector3(cursorX, cursorY, basePos.z))
      const repelFactor = Math.max(0, 1 - dist / 4)

      const repelX = (meshRef.current.position.x - cursorX) * repelFactor * 0.1
      const repelY = (meshRef.current.position.y - cursorY) * repelFactor * 0.1

      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, basePos.x + repelX, 0.1)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, basePos.y + yFloat + repelY, 0.1)

      // Rotate slowly
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={size}
      color={color}
      maxWidth={3}
      anchorX="center"
      anchorY="middle"
      outlineColor="#0f0f0f"
      outlineWidth={0.008}
      fillOpacity={0.4} // darker text
    >
      {text}
    </Text>
  )
}
