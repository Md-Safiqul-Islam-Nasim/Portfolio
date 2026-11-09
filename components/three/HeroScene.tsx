import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Procedural Studio Environment (zero external HDR network fetches) */
/* ------------------------------------------------------------------ */
function StudioEnvironment() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color('#06080f');
    const geo = new THREE.PlaneGeometry(1, 1);
    const materials: THREE.Material[] = [];

    const panel = (
      color: string,
      intensity: number,
      pos: [number, number, number],
      scale: [number, number],
    ) => {
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color).multiplyScalar(intensity),
        side: THREE.DoubleSide,
      });
      materials.push(mat);
      const m = new THREE.Mesh(geo, mat);
      m.position.set(...pos);
      m.scale.set(scale[0], scale[1], 1);
      m.lookAt(0, 0, 0);
      envScene.add(m);
    };

    panel('#3b82f6', 5.5, [-5, 3, 4], [5, 6]); // Cobalt key light
    panel('#8b5cf6', 4.5, [5, -1, 3], [5, 6]); // Violet rim light
    panel('#ffffff', 2.8, [0, 6, 1], [6, 3]); // Top softbox
    panel('#60a5fa', 1.8, [0, -6, -2], [8, 2]); // Floor bounce

    const pmrem = new THREE.PMREMGenerator(gl);
    const rt = pmrem.fromScene(envScene, 0.035);
    scene.environment = rt.texture;

    return () => {
      scene.environment = null;
      rt.dispose();
      pmrem.dispose();
      geo.dispose();
      materials.forEach((m) => m.dispose());
    };
  }, [gl, scene]);

  return null;
}

/* ------------------------------------------------------------------ */
/*  3D Software Architecture Topology                                  */
/*  Tier 1 (top): API Gateway & JWT/RBAC Auth node                    */
/*  Tier 2 (mid): 3 Distributed Service Nodes                         */
/*  Tier 3 (bot): Primary/Replica Database & Redis Cache Cluster      */
/*  Animated data packets traverse the interconnecting conduits.      */
/* ------------------------------------------------------------------ */
const GATEWAY_POS = new THREE.Vector3(0, 1.45, 0);
const SERVICE_POS: THREE.Vector3[] = [
  new THREE.Vector3(-1.35, 0.1, 0.65),
  new THREE.Vector3(1.35, 0.1, 0.65),
  new THREE.Vector3(0, 0.1, -1.35),
];
const DATA_POS: THREE.Vector3[] = [
  new THREE.Vector3(-0.95, -1.35, -0.35),
  new THREE.Vector3(0.95, -1.35, -0.35),
  new THREE.Vector3(0, -1.35, 1.05),
];

interface EdgeLink {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
  speed: number;
  offset: number;
}

const LINKS: EdgeLink[] = [
  // Gateway -> Services
  { from: GATEWAY_POS, to: SERVICE_POS[0], color: '#60a5fa', speed: 0.65, offset: 0.0 },
  { from: GATEWAY_POS, to: SERVICE_POS[1], color: '#60a5fa', speed: 0.55, offset: 0.33 },
  { from: GATEWAY_POS, to: SERVICE_POS[2], color: '#a78bfa', speed: 0.6, offset: 0.66 },
  // Service ring
  { from: SERVICE_POS[0], to: SERVICE_POS[1], color: '#3b82f6', speed: 0.45, offset: 0.15 },
  { from: SERVICE_POS[1], to: SERVICE_POS[2], color: '#8b5cf6', speed: 0.45, offset: 0.5 },
  { from: SERVICE_POS[2], to: SERVICE_POS[0], color: '#3b82f6', speed: 0.45, offset: 0.85 },
  // Services -> Data & Cache tier
  { from: SERVICE_POS[0], to: DATA_POS[0], color: '#34d399', speed: 0.7, offset: 0.2 },
  { from: SERVICE_POS[1], to: DATA_POS[1], color: '#60a5fa', speed: 0.65, offset: 0.55 },
  { from: SERVICE_POS[0], to: DATA_POS[2], color: '#a78bfa', speed: 0.5, offset: 0.4 },
  { from: SERVICE_POS[1], to: DATA_POS[2], color: '#60a5fa', speed: 0.55, offset: 0.75 },
  { from: SERVICE_POS[2], to: DATA_POS[0], color: '#60a5fa', speed: 0.6, offset: 0.1 },
  { from: SERVICE_POS[2], to: DATA_POS[1], color: '#a78bfa', speed: 0.6, offset: 0.9 },
];

function ConduitNetwork({ animate }: { animate: boolean }) {
  const packetsRef = useRef<THREE.Group>(null);

  const lineGeometry = useMemo(() => {
    const pts: number[] = [];
    for (const l of LINKS) {
      pts.push(l.from.x, l.from.y, l.from.z, l.to.x, l.to.y, l.to.z);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  useEffect(() => () => lineGeometry.dispose(), [lineGeometry]);

  useFrame((state) => {
    if (!animate || !packetsRef.current) return;
    const t = state.clock.elapsedTime;
    packetsRef.current.children.forEach((child, idx) => {
      const link = LINKS[idx];
      if (!link) return;
      const u = (t * link.speed + link.offset) % 1;
      child.position.lerpVectors(link.from, link.to, u);
    });
  });

  return (
    <group>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.28} />
      </lineSegments>
      <group ref={packetsRef}>
        {LINKS.map((l, i) => (
          <mesh key={i} position={l.from.toArray()}>
            <sphereGeometry args={[0.042, 12, 12]} />
            <meshBasicMaterial color={l.color} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/** Stacked cylindrical platter representing a Database / Cache node */
function DatabaseCylinder({ position, accent }: { position: [number, number, number]; accent: string }) {
  return (
    <group position={position}>
      {[-0.14, 0, 0.14].map((y, idx) => (
        <mesh key={idx} position={[0, y, 0]}>
          <cylinderGeometry args={[0.34, 0.34, 0.085, 28]} />
          <meshStandardMaterial
            color="#151b2b"
            metalness={0.88}
            roughness={0.18}
            envMapIntensity={1.5}
          />
        </mesh>
      ))}
      {/* Glowing ring indicator */}
      <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.26, 0.012, 12, 48]} />
        <meshBasicMaterial color={accent} toneMapped={false} />
      </mesh>
    </group>
  );
}

/** Architectural Service Node (metallic-glass octahedron + orbital ring) */
function ServiceNode({
  position,
  accent,
  lite,
}: {
  position: [number, number, number];
  accent: string;
  lite: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += dt * 0.4;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.34, 0]} />
        <meshPhysicalMaterial
          color="#b8ceff"
          metalness={lite ? 0.85 : 0.2}
          roughness={0.12}
          transmission={lite ? 0 : 0.85}
          thickness={0.9}
          ior={1.48}
          clearcoat={1}
          envMapIntensity={1.6}
          flatShading
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshBasicMaterial color={accent} toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.48, 0.008, 8, 64]} />
        <meshBasicMaterial color={accent} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function ArchitectureTopology({
  pointer,
  lite,
  animate,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  lite: boolean;
  animate: boolean;
}) {
  const root = useRef<THREE.Group>(null);
  const gatewayMesh = useRef<THREE.Mesh>(null);
  const gatewayCage = useRef<THREE.LineSegments>(null);

  const cageGeo = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.62, 1)),
    [],
  );
  useEffect(() => () => cageGeo.dispose(), [cageGeo]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      const targetX = 0.14 + pointer.current.y * 0.22;
      const targetY = (animate ? t * 0.14 : 0.4) + pointer.current.x * 0.42;
      root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, targetX, 2.5, dt);
      root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, targetY, 2.5, dt);
      root.current.position.y = Math.sin(t * 0.7) * 0.06;
    }
    if (gatewayMesh.current && animate) {
      gatewayMesh.current.rotation.y -= dt * 0.35;
      gatewayMesh.current.rotation.x += dt * 0.15;
    }
    if (gatewayCage.current && animate) {
      gatewayCage.current.rotation.y += dt * 0.2;
    }
  });

  return (
    <group ref={root} scale={lite ? 0.86 : 0.96}>
      {/* Tier 1: Top API Gateway & Auth Core */}
      <group position={GATEWAY_POS.toArray()}>
        <mesh ref={gatewayMesh}>
          <icosahedronGeometry args={[0.46, 0]} />
          <meshPhysicalMaterial
            color="#dbeafe"
            metalness={lite ? 0.85 : 0.1}
            roughness={0.08}
            transmission={lite ? 0 : 0.92}
            thickness={1.2}
            ior={1.52}
            clearcoat={1}
            iridescence={0.7}
            envMapIntensity={1.7}
            flatShading
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.16, 20, 20]} />
          <meshBasicMaterial color="#60a5fa" toneMapped={false} />
        </mesh>
        <lineSegments ref={gatewayCage} geometry={cageGeo}>
          <lineBasicMaterial color="#93c5fd" transparent opacity={0.42} />
        </lineSegments>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.78, 0.009, 8, 80]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.45} />
        </mesh>
      </group>

      {/* Tier 2: Service Mesh Ring + 3 Service Nodes */}
      <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.48, 0.007, 8, 120]} />
        <meshStandardMaterial color="#93c5fd" metalness={0.9} roughness={0.2} transparent opacity={0.35} />
      </mesh>
      <ServiceNode position={SERVICE_POS[0].toArray() as [number, number, number]} accent="#60a5fa" lite={lite} />
      <ServiceNode position={SERVICE_POS[1].toArray() as [number, number, number]} accent="#a78bfa" lite={lite} />
      <ServiceNode position={SERVICE_POS[2].toArray() as [number, number, number]} accent="#38bdf8" lite={lite} />

      {/* Tier 3: Database & Redis Cache Cluster */}
      <mesh position={[0, -1.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 1.55, 64]} />
        <meshBasicMaterial color="#3b82f6" side={THREE.DoubleSide} transparent opacity={0.08} />
      </mesh>
      <DatabaseCylinder position={DATA_POS[0].toArray() as [number, number, number]} accent="#34d399" />
      <DatabaseCylinder position={DATA_POS[1].toArray() as [number, number, number]} accent="#60a5fa" />
      <DatabaseCylinder position={DATA_POS[2].toArray() as [number, number, number]} accent="#a78bfa" />

      {/* Inter-tier Conduits & Live Data Packets */}
      <ConduitNetwork animate={animate} />
      <pointLight position={[0, 0.4, 0]} color="#3b82f6" intensity={4} distance={4.5} />
    </group>
  );
}

function AmbientParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.02;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.022} color="#93c5fd" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

interface HeroSceneProps {
  lite?: boolean;
  reducedMotion?: boolean;
}

const HeroScene: React.FC<HeroSceneProps> = ({ lite = false, reducedMotion = false }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reducedMotion]);

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const frameloop = reducedMotion ? 'demand' : inView ? 'always' : 'never';

  return (
    <div ref={wrapper} className="absolute inset-0" aria-hidden>
      <Canvas
        frameloop={frameloop}
        dpr={lite ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0.35, 6.2], fov: 38 }}
        gl={{ antialias: !lite, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <StudioEnvironment />
        <ambientLight intensity={0.35} />
        <directionalLight position={[-4, 5, 3]} intensity={1.6} color="#60a5fa" />
        <directionalLight position={[4, -2, 2]} intensity={1.2} color="#a78bfa" />
        <ArchitectureTopology pointer={pointer} lite={lite} animate={!reducedMotion} />
        <AmbientParticles count={lite ? 140 : 320} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
