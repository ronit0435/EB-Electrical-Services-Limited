import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Zap, Eye, RotateCw, Sparkles, Shield, Cpu } from 'lucide-react';

interface Hotspot {
  title: string;
  subtitle: string;
  category: string;
  position: THREE.Vector3;
  color: string;
}

export const ThreeHouseScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('consumer-unit');
  const [isHovered, setIsHovered] = useState(false);
  const [pulseBoost, setPulseBoost] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(14, 11, 16);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Root House Group
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);

    // 1. Grid Ground with electric grid lines
    const gridHelper = new THREE.GridHelper(24, 24, 0x00BFFF, 0x152542);
    gridHelper.position.y = -0.05;
    houseGroup.add(gridHelper);

    // Subtle ground glowing circle
    const ringGeo = new THREE.RingGeometry(8, 8.4, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00BFFF,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.02;
    houseGroup.add(ringMesh);

    // 2. Blueprint Architectural House Outline (Lines & Semi-Transparent Glass Panels)
    const lineMaterialCyan = new THREE.LineBasicMaterial({
      color: 0x00BFFF,
      transparent: true,
      opacity: 0.85,
      linewidth: 2,
    });

    const lineMaterialGold = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.9,
      linewidth: 2,
    });

    const glassWallMaterial = new THREE.MeshBasicMaterial({
      color: 0x00BFFF,
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    // Main House Body (Dimensions: W: 7, H: 4.8, D: 6)
    const boxGeo = new THREE.BoxGeometry(7, 4.8, 6);
    const boxEdges = new THREE.EdgesGeometry(boxGeo);
    const boxLines = new THREE.LineSegments(boxEdges, lineMaterialCyan);
    boxLines.position.set(0, 2.4, 0);
    houseGroup.add(boxLines);

    const boxGlassMesh = new THREE.Mesh(boxGeo, glassWallMaterial);
    boxGlassMesh.position.set(0, 2.4, 0);
    houseGroup.add(boxGlassMesh);

    // Floor divider (Ground & First floor)
    const floorGeo = new THREE.PlaneGeometry(6.9, 5.9);
    const floorEdges = new THREE.EdgesGeometry(floorGeo);
    const floorLine = new THREE.LineSegments(floorEdges, new THREE.LineBasicMaterial({ color: 0x00BFFF, transparent: true, opacity: 0.4 }));
    floorLine.rotation.x = Math.PI / 2;
    floorLine.position.set(0, 2.4, 0);
    houseGroup.add(floorLine);

    // Pitched Roof Outline
    const roofPoints = [
      // Left gable
      new THREE.Vector3(-3.5, 4.8, -3),
      new THREE.Vector3(0, 7.2, -3),
      new THREE.Vector3(0, 7.2, -3),
      new THREE.Vector3(3.5, 4.8, -3),
      // Right gable
      new THREE.Vector3(-3.5, 4.8, 3),
      new THREE.Vector3(0, 7.2, 3),
      new THREE.Vector3(0, 7.2, 3),
      new THREE.Vector3(3.5, 4.8, 3),
      // Ridge
      new THREE.Vector3(0, 7.2, -3),
      new THREE.Vector3(0, 7.2, 3),
      // Eaves
      new THREE.Vector3(-3.5, 4.8, -3),
      new THREE.Vector3(-3.5, 4.8, 3),
      new THREE.Vector3(3.5, 4.8, -3),
      new THREE.Vector3(3.5, 4.8, 3),
    ];
    const roofGeo = new THREE.BufferGeometry().setFromPoints(roofPoints);
    const roofLines = new THREE.LineSegments(roofGeo, lineMaterialCyan);
    houseGroup.add(roofLines);

    // Internal Room partitions
    const partitionGeo = new THREE.PlaneGeometry(3.5, 2.3);
    const partitionEdges = new THREE.EdgesGeometry(partitionGeo);
    const partition = new THREE.LineSegments(partitionEdges, new THREE.LineBasicMaterial({ color: 0x00BFFF, transparent: true, opacity: 0.3 }));
    partition.position.set(-1.75, 1.2, 0);
    houseGroup.add(partition);

    // Doorway
    const doorPoints = [
      new THREE.Vector3(1.2, 0, 3.01),
      new THREE.Vector3(1.2, 1.9, 3.01),
      new THREE.Vector3(2.4, 1.9, 3.01),
      new THREE.Vector3(2.4, 0, 3.01),
    ];
    const doorGeo = new THREE.BufferGeometry().setFromPoints(doorPoints);
    const doorLines = new THREE.Line(doorGeo, lineMaterialGold);
    houseGroup.add(doorLines);

    // Architectural Windows
    const createWindow = (x: number, y: number, z: number, w: number, h: number, rotY = 0) => {
      const wGeo = new THREE.BoxGeometry(w, h, 0.05);
      const wEdge = new THREE.EdgesGeometry(wGeo);
      const wLine = new THREE.LineSegments(wEdge, new THREE.LineBasicMaterial({ color: 0x00BFFF, transparent: true, opacity: 0.6 }));
      wLine.position.set(x, y, z);
      wLine.rotation.y = rotY;
      houseGroup.add(wLine);
    };
    createWindow(-1.8, 1.3, 3.01, 1.8, 1.4); // Ground floor living window
    createWindow(-1.8, 3.6, 3.01, 1.8, 1.2); // Upstairs bedroom window
    createWindow(1.8, 3.6, 3.01, 1.6, 1.2);  // Upstairs study window

    // 3. Electrical Consumer Unit (The Hub / Fuse Board)
    const cuGeo = new THREE.BoxGeometry(0.5, 0.7, 0.25);
    const cuMat = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: false });
    const cuMesh = new THREE.Mesh(cuGeo, cuMat);
    cuMesh.position.set(0.6, 1.2, 2.9);
    houseGroup.add(cuMesh);

    // Glowing core for Consumer Unit
    const cuGlowGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const cuGlowMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.8 });
    const cuGlow = new THREE.Mesh(cuGlowGeo, cuGlowMat);
    cuGlow.position.set(0.6, 1.2, 3.05);
    houseGroup.add(cuGlow);

    // 4. Electrical Conduits (Circuit paths running from Consumer Unit through house)
    const conduitCurves = [
      // Circuit A: Consumer unit -> Living room pendant light
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.6, 1.2, 2.8),
        new THREE.Vector3(0.6, 2.3, 2.8),
        new THREE.Vector3(-1.8, 2.3, 2.8),
        new THREE.Vector3(-1.8, 2.3, 0),
        new THREE.Vector3(-1.8, 1.9, 0),
      ]),
      // Circuit B: Consumer unit -> Upstairs Master Lighting & Hive Smart Stat
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.6, 1.2, 2.8),
        new THREE.Vector3(0.6, 3.6, 2.8),
        new THREE.Vector3(-1.8, 3.6, 2.8),
        new THREE.Vector3(-1.8, 4.6, 0),
        new THREE.Vector3(-1.8, 4.2, 0),
      ]),
      // Circuit C: Consumer unit -> Roof Solar & Attic power
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.6, 1.2, 2.8),
        new THREE.Vector3(3.2, 1.2, 2.8),
        new THREE.Vector3(3.2, 4.8, 1.5),
        new THREE.Vector3(1.5, 6.2, 0),
        new THREE.Vector3(0, 6.8, 0),
      ]),
      // Circuit D: Consumer unit -> Outdoor EV Charger & Security Light
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.6, 0.4, 2.8),
        new THREE.Vector3(2.8, 0.4, 2.8),
        new THREE.Vector3(4.5, 0.4, 3.2),
        new THREE.Vector3(4.5, 1.2, 3.2),
      ]),
    ];

    // Render static conduit lines
    conduitCurves.forEach((curve, idx) => {
      const points = curve.getPoints(50);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: idx === 0 ? 0x00BFFF : idx === 1 ? 0x38BDF8 : idx === 2 ? 0xD4AF37 : 0x00E5FF,
        transparent: true,
        opacity: 0.45,
        linewidth: 1.5,
      });
      const line = new THREE.Line(geom, mat);
      houseGroup.add(line);
    });

    // 5. Flowing Electric Pulses along the Circuits
    const pulseCountPerCurve = 3;
    const pulseSpheres: { mesh: THREE.Mesh; curveIndex: number; progress: number; speed: number }[] = [];

    const pulseGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const pulseMatCyan = new THREE.MeshBasicMaterial({ color: 0x00BFFF });
    const pulseMatGold = new THREE.MeshBasicMaterial({ color: 0xFFEA79 });

    conduitCurves.forEach((curve, curveIdx) => {
      for (let p = 0; p < pulseCountPerCurve; p++) {
        const mesh = new THREE.Mesh(pulseGeo, curveIdx === 2 ? pulseMatGold : pulseMatCyan);
        mesh.scale.set(1, 1, 1);
        houseGroup.add(mesh);

        pulseSpheres.push({
          mesh,
          curveIndex: curveIdx,
          progress: p / pulseCountPerCurve,
          speed: 0.0035 + (curveIdx * 0.0008),
        });
      }
    });

    // 6. 3D Architectural Light Nodes (Pendants, Smart Terminals)
    const addLightNode = (pos: THREE.Vector3, color: number, name: string) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(pos);

      const bulbGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const bulbMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      nodeGroup.add(bulb);

      const haloGeo = new THREE.RingGeometry(0.25, 0.45, 24);
      const haloMat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI / 2;
      nodeGroup.add(halo);

      houseGroup.add(nodeGroup);
      return nodeGroup;
    };

    const lightNodes = [
      addLightNode(new THREE.Vector3(-1.8, 1.9, 0), 0x00BFFF, 'ground-lighting'),
      addLightNode(new THREE.Vector3(-1.8, 4.2, 0), 0x38BDF8, 'first-floor-lighting'),
      addLightNode(new THREE.Vector3(0, 6.8, 0), 0xD4AF37, 'solar-hub'),
      addLightNode(new THREE.Vector3(4.5, 1.2, 3.2), 0x00E5FF, 'ev-charger'),
    ];

    // 7. Ambient Electric Particles Field
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 18;
      particlePositions[i * 3 + 1] = Math.random() * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 18;
      particleSpeeds.push(0.01 + Math.random() * 0.02);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00BFFF,
      size: 0.14,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction for smooth parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.25;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation or mouse influence
      if (autoRotate && !isHovered) {
        houseGroup.rotation.y += 0.003;
      } else {
        houseGroup.rotation.y += (targetRotationY - houseGroup.rotation.y) * 0.05;
        houseGroup.rotation.x += (targetRotationX - houseGroup.rotation.x) * 0.05;
      }

      // Consumer unit pulsing
      const cuPulseScale = 1 + Math.sin(elapsedTime * 4) * 0.15;
      cuGlow.scale.set(cuPulseScale, cuPulseScale, cuPulseScale);

      // Light nodes soft pulsation
      lightNodes.forEach((node, i) => {
        const ring = node.children[1];
        if (ring) {
          const s = 1 + Math.sin(elapsedTime * 3 + i) * 0.2;
          ring.scale.set(s, s, s);
        }
      });

      // Advance electric pulses along conduits
      const speedMultiplier = pulseBoost ? 2.5 : 1;
      pulseSpheres.forEach(pulse => {
        pulse.progress += pulse.speed * speedMultiplier;
        if (pulse.progress >= 1) pulse.progress = 0;

        const curve = conduitCurves[pulse.curveIndex];
        const point = curve.getPoint(pulse.progress);
        pulse.mesh.position.copy(point);

        // Flash scale when moving fast
        const scaleVal = (1 + Math.sin(pulse.progress * Math.PI) * 0.4) * (pulseBoost ? 1.4 : 1);
        pulse.mesh.scale.set(scaleVal, scaleVal, scaleVal);
      });

      // Float electric ambient particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += particleSpeeds[i];
        if (positions[i * 3 + 1] > 11) {
          positions[i * 3 + 1] = 0;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate, isHovered, pulseBoost]);

  const hotspots: Hotspot[] = [
    {
      title: 'Consumer Unit (Fuse Board)',
      subtitle: '18th Edition BS7671 Metal Enclosure with Dual RCBO & SPD',
      category: 'Safety Core',
      position: new THREE.Vector3(0.6, 1.2, 2.9),
      color: '#D4AF37',
    },
    {
      title: 'Smart Home & Hive Thermostat',
      subtitle: 'Wireless Multi-Zone Temperature Automation',
      category: 'Smart Control',
      position: new THREE.Vector3(-1.8, 3.6, 2.8),
      color: '#00BFFF',
    },
    {
      title: 'Architectural LED Lighting',
      subtitle: 'Dimmable Downlights & Mood Circuitry',
      category: 'Domestic',
      position: new THREE.Vector3(-1.8, 1.9, 0),
      color: '#38BDF8',
    },
    {
      title: 'EV Smart Charging & External Power',
      subtitle: 'Dedicated 7.4kW Fast Charger Point & IP66 Sockets',
      category: 'Energy Solutions',
      position: new THREE.Vector3(4.5, 1.2, 3.2),
      color: '#10B981',
    },
  ];

  return (
    <div
      className="relative w-full h-[480px] sm:h-[540px] lg:h-[620px] rounded-2xl overflow-hidden glass-panel border border-[#00BFFF]/20 flex items-center justify-center select-none shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top HUD Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1220]/80 border border-[#00BFFF]/30 backdrop-blur-md">
        <div className="w-2 h-2 rounded-full bg-[#00BFFF] animate-ping" />
        <span className="text-xs font-semibold tracking-wide text-[#00BFFF] uppercase font-heading">
          Interactive 3D Electrical Blueprint
        </span>
      </div>

      {/* Live Voltage / Status Readout */}
      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-[#0B1220]/80 border border-slate-700/60 backdrop-blur-md text-xs">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Shield className="w-3.5 h-3.5" />
          <span className="font-mono font-medium">230V AC • 50Hz Stable</span>
        </div>
        <div className="w-px h-3 bg-slate-700" />
        <div className="flex items-center gap-1 text-[#D4AF37]">
          <Cpu className="w-3.5 h-3.5" />
          <span className="font-mono">NICEIC Certified</span>
        </div>
      </div>

      {/* Interactive Controls Overlay at Bottom */}
      <div className="absolute bottom-4 inset-x-4 z-10 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-[#070e1b]/85 border border-[#00BFFF]/20 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mr-1 flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#00BFFF]" /> Circuits:
          </span>
          {hotspots.map((spot, idx) => (
            <button
              key={idx}
              id={`blueprint-node-${idx}`}
              onClick={() => setActiveHotspot(spot.title)}
              className={`px-2.5 py-1 text-xs rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeHotspot === spot.title
                  ? 'bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/40 shadow-[0_0_10px_rgba(0,191,255,0.2)]'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-transparent'
              }`}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: spot.color }}
              />
              {spot.category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            id="toggle-pulse-boost"
            onClick={() => setPulseBoost(!pulseBoost)}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium flex items-center gap-1.5 transition-all ${
              pulseBoost
                ? 'bg-[#00BFFF] text-[#0B1220] font-bold shadow-[0_0_12px_#00BFFF]'
                : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700'
            }`}
            title="Accelerate electric flow pulses"
          >
            <Sparkles className="w-3 h-3" />
            <span>{pulseBoost ? 'Current: High' : 'Current: Standard'}</span>
          </button>

          <button
            id="toggle-scene-rotate"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-lg border text-xs transition-all ${
              autoRotate
                ? 'bg-slate-800/80 text-[#00BFFF] border-[#00BFFF]/30'
                : 'bg-slate-800/40 text-slate-400 border-slate-700'
            }`}
            title="Toggle 3D Orbit"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
        </div>
      </div>

      {/* Selected Node Details Tooltip Overlay */}
      {activeHotspot && (
        <div className="absolute top-16 left-4 max-w-xs z-10 p-3 rounded-xl bg-[#0B1220]/90 border border-[#00BFFF]/40 backdrop-blur-lg shadow-xl animate-in fade-in zoom-in duration-200">
          {(() => {
            const current = hotspots.find(h => h.title === activeHotspot) || hotspots[0];
            return (
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#00BFFF] px-1.5 py-0.5 rounded bg-[#00BFFF]/10 border border-[#00BFFF]/20">
                    {current.category}
                  </span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-slate-400 hover:text-white text-xs px-1"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="text-xs font-bold text-white font-heading">{current.title}</h4>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">{current.subtitle}</p>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
