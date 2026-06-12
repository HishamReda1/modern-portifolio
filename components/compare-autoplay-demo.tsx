import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Compare } from "@/components/ui/compare"; // تأكد من المسار

// ─── Types ────────────────────────────────────────────────────────────────────
type Tech =
  | 'EBO' | 'TGML' | 'SketchUp' | 'Lumion Pro' | 'V-Ray'
  | 'Sweet Home 3D' | 'Photoshop' | 'Unreal Engine 5'
  | 'Blueprints' | 'UMG' | 'REST APIs' | 'EBO Integration'
  | 'KNX' | 'GRMS';

interface Slide {
  id: number;
  title: string;
  location: string;
  type: string;
  role: string;
  description: string;
  technologies: Tech[];
  imageBefore: string;
  imageAfter: string;
  accent: string;
}

// ─── Tech catalogue ───────────────────────────────────────────────────────────
const TECH_META: Record<Tech, { short: string; color: string }> = {
  EBO:               { short: 'EBO',    color: '#00e89a' },
  TGML:              { short: 'TGML',   color: '#00d4ff' },
  SketchUp:          { short: 'SU',     color: '#ff6b35' },
  'Lumion Pro':      { short: 'Lumion', color: '#4da6ff' },
  'V-Ray':           { short: 'V‑Ray',  color: '#ff4d7e' },
  'Sweet Home 3D':   { short: 'SH3D',  color: '#ffb347' },
  Photoshop:         { short: 'Ps',     color: '#31a8ff' },
  'Unreal Engine 5': { short: 'UE5',   color: '#c084fc' },
  Blueprints:        { short: 'BP',    color: '#60a5fa' },
  UMG:               { short: 'UMG',   color: '#a78bfa' },
  'REST APIs':       { short: 'REST',  color: '#34d399' },
  'EBO Integration': { short: 'EBO⊕', color: '#00e89a' },
  KNX:               { short: 'KNX',   color: '#f97316' },
  GRMS:              { short: 'GRMS',  color: '#fbbf24' },
};

// ─── Slide data ───────────────────────────────────────────────────────────────
const SLIDES: Slide[] = [
  {
    id: 1,
    title: 'Modern Villa Exterior',
    location: 'Residential',
    type: 'Architectural Render',
    role: '3D Visualizer',
    description: 'From a basic model to a photorealistic render, meticulously crafting the mood, custom materials, and sculpting with light to bring the vision to life.',
    technologies: ['SketchUp', 'Lumion Pro', 'Photoshop'],
    imageBefore: '/before.jpg',
    imageAfter: '/pro/8.jpg',
    accent: '#4da6ff',
  },
  {
    id: 2,
    title: "Orman Children's Hospital",
    location: 'Sohag, Egypt',
    type: 'BMS Integration Model',
    role: 'GUI Engineer',
    description: 'Transforming initial 2D CAD designs into a full 3D model. Optimized for seamless integration with Building Management Systems.',
    technologies: ['SketchUp', 'Lumion Pro'],
    imageBefore: '/مستشفى الاورمان للاطفال في سوهاج  before render.jpg',
    imageAfter: '/مستشفى الاورمان للاطفال في سوهاج.png',
    accent: '#00e89a',
  },
  {
    id: 3,
    title: 'AHU Components - EITS',
    location: 'Industrial Facility',
    type: 'HVAC Visualization',
    role: 'GUI Engineer',
    description: 'Complete build of all Air Handling Unit (AHU) components for EITS, highlighting technical details and real-world visualization.',
    technologies: ['SketchUp', 'Lumion Pro'],
    imageBefore: '/AHU BEFORE.PNG',
    imageAfter: '/AHU AFTER.PNG',
    accent: '#00d4ff',
  },
  {
    id: 4,
    title: 'Fresh Air Handling Unit (FAHU)',
    location: 'Infrastructure',
    type: 'BMS GUI Engineering',
    role: 'GUI Engineer',
    description: 'Visual upgrade for the FAHU system interface. Intricate internal components and airflow paths rendered with high photorealism for a clear BMS integration.',
    technologies: ['SketchUp', 'V-Ray', 'TGML'],
    imageBefore: '/FAHU-BEFOR.jpeg',
    imageAfter: '/FAHU-AFTER.png',
    accent: '#c084fc',
  },
  {
    id: 5,
    title: 'DX Split Unit / Fan Coil',
    location: 'Commercial Building',
    type: 'Mechanical Visualization',
    role: 'GUI Engineer',
    description: 'Detailed 3D representation of a ceiling-concealed Fan Coil Unit. Precise mechanical details, ductwork, and piping connections carefully crafted.',
    technologies: ['SketchUp', 'V-Ray', 'TGML'],
    imageBefore: '/fanCoil-before.jpeg',
    imageAfter: '/fanCoil-after.png',
    accent: '#ffb347',
  },
  {
    id: 6,
    title: 'Water Booster Pump Station',
    location: 'Utility Infrastructure',
    type: 'Industrial Dashboard',
    role: 'GUI Engineer',
    description: 'Transforming a real-world pump room photo into a clean, interactive 3D graphical interface for professional dashboard monitoring.',
    technologies: ['SketchUp', 'V-Ray', 'TGML'],
    imageBefore: '/station-before.jpeg',
    imageAfter: '/STATION-AFTER.png',
    accent: '#ff4d7e',
  }
];

const AUTO_MS = 10000; // زودت الوقت لـ 10 ثواني عشان المستخدم يلحق يستخدم المقارنة

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

// ─── HUD bracket ─────────────────────────────────────────────────────────────
function Bracket({ corner, color, size = 28, active }: {
  corner: 'tl' | 'tr' | 'bl' | 'br';
  color: string;
  size?: number;
  active: boolean;
}) {
  const s = size;
  const paths: Record<typeof corner, string> = {
    tl: `M${s},0 L0,0 L0,${s}`,
    tr: `M0,0 L${s},0 L${s},${s}`,
    bl: `M${s},${s} L0,${s} L0,0`,
    br: `M0,${s} L${s},${s} L${s},0`,
  };
  return (
    <svg
      width={s} height={s} viewBox={`0 0 ${s} ${s}`}
      style={{ position: 'absolute', ...(corner === 'tl' ? { top: -1, left: -1 } : corner === 'tr' ? { top: -1, right: -1 } : corner === 'bl' ? { bottom: -1, left: -1 } : { bottom: -1, right: -1 }) }}
      className="pointer-events-none z-10"
    >
      <path
        d={paths[corner]} fill="none" stroke={color} strokeWidth="2" strokeLinecap="square"
        style={{
          strokeDasharray: s * 2,
          strokeDashoffset: active ? 0 : s * 2,
          transition: 'stroke-dashoffset 0.65s cubic-bezier(0.22,1,0.36,1)',
        }}
      />
    </svg>
  );
}

// ─── Tech badge ───────────────────────────────────────────────────────────────
function TechBadge({ tech }: { tech: Tech }) {
  const m = TECH_META[tech];
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '4px 11px',
      borderRadius: 6,
      border: `1px solid ${m.color}28`,
      background: `${m.color}0e`,
      backdropFilter: 'blur(8px)',
      flexShrink: 0,
    }}>
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: m.color, boxShadow: `0 0 5px ${m.color}`, flexShrink: 0 }} />
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, fontWeight: 500, color: m.color, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
        {m.short}
      </span>
    </div>
  );
}

// ─── Main Slider ──────────────────────────────────────────────────────────────
export default function PortfolioCompareSlider() {
  const [idx, setIdx]           = useState(0);
  const [dir, setDir]           = useState<'next' | 'prev'>('next');
  const [phase, setPhase]       = useState<'idle' | 'exit' | 'enter'>('idle');
  const [progress, setProgress] = useState(0);
  const [bgState, setBgState]   = useState({ from: SLIDES[0].imageAfter, to: SLIDES[0].imageAfter, fading: false });
  const [isInteracting, setIsInteracting] = useState(false); // لوقف التايمر وقت المقارنة
  
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const ww = useWindowWidth();

  const isMobile = ww < 640;
  const isTablet = ww >= 640 && ww < 1024;

  const slide = SLIDES[idx];

  const goTo = useCallback((next: number, direction: 'next' | 'prev' = 'next') => {
    if (phase !== 'idle') return;
    setDir(direction);
    setBgState({ from: SLIDES[idx].imageAfter, to: SLIDES[next].imageAfter, fading: true });
    setTimeout(() => setBgState({ from: SLIDES[next].imageAfter, to: SLIDES[next].imageAfter, fading: false }), 1000);
    setPhase('exit');
    setTimeout(() => {
      setIdx(next);
      setPhase('enter');
      setTimeout(() => setPhase('idle'), 60);
    }, 400);
  }, [idx, phase]);

  const next = useCallback(() => goTo((idx + 1) % SLIDES.length, 'next'), [idx, goTo]);
  const prev = useCallback(() => goTo((idx - 1 + SLIDES.length) % SLIDES.length, 'prev'), [idx, goTo]);

  // Auto-advance
  useEffect(() => {
    if (isInteracting) return; // توقف السلايدر التلقائي لو المستخدم بيلعب في الـ Compare
    
    const start = Date.now();
    setProgress(0);
    progTimer.current = setInterval(() => setProgress(Math.min((Date.now() - start) / AUTO_MS, 1)), 40);
    autoTimer.current = setTimeout(next, AUTO_MS);
    return () => { clearTimeout(autoTimer.current!); clearInterval(progTimer.current!); };
  }, [idx, isInteracting, next]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const contentVisible = phase === 'idle' || phase === 'enter';
  const yOffset = phase === 'exit' ? (dir === 'next' ? '-10px' : '10px') : phase === 'enter' ? (dir === 'next' ? '10px' : '-10px') : '0px';

  const hPadding   = isMobile ? 16 : isTablet ? 28 : 48;
  const bottomH    = isMobile ? 52 : 56;
  const titleSize  = isMobile ? '1.15rem' : isTablet ? '1.45rem' : 'clamp(1.3rem, 2.4vw, 2.1rem)';
  const infoGrid   = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '150px 1fr 300px';
  const containerH = isMobile ? 650 : isTablet ? 700 : 800;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: containerH,
        overflow: 'hidden',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        background: '#03050e',
        flexShrink: 0,
      }}
    >
      {/* ── Immersive background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bgState.to})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(60px) saturate(1.4)', transform: 'scale(1.1)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bgState.from})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(60px) saturate(1.4)', transform: 'scale(1.1)',
          opacity: bgState.fading ? 0 : 1,
          transition: 'opacity 1.1s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,5,14,0.84)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 70% 55% at 12% 65%, ${slide.accent}1a 0%, transparent 55%)`,
          transition: 'background 0.9s ease',
        }} />
      </div>

      {/* ── Layout ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Content area */}
        <div style={{
          flex: 1, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: isMobile ? '14px 16px' : isTablet ? '18px 28px' : '18px 48px',
          gap: isMobile ? 12 : 20,
        }}>

          {/* Title block */}
          <div style={{
            width: '100%', maxWidth: 1100,
            opacity: contentVisible ? 1 : 0,
            transform: `translateY(${yOffset})`,
            transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: isMobile ? 5 : 7, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 9 : 10, letterSpacing: '0.22em', color: slide.accent, textTransform: 'uppercase', transition: 'color 0.5s' }}>
                {slide.role}
              </span>
              <div style={{ height: 1, width: 36, background: `linear-gradient(to right, ${slide.accent}55, transparent)` }} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 9 : 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase' }}>
                {slide.location}
              </span>
            </div>
            
            <h1 style={{
              fontFamily: '"Oxanium", sans-serif', fontSize: titleSize, fontWeight: 700,
              letterSpacing: '-0.01em', lineHeight: 1.1, margin: '0 0 8px', color: '#ffffff',
              transition: 'color 0.5s ease',
            }}>
              {slide.title}
            </h1>
          </div>

          {/* Compare Hero Section */}
          <div 
            onMouseEnter={() => setIsInteracting(true)} 
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
            style={{
            width: '100%', maxWidth: 1100, flexShrink: 1, flexGrow: 1,
            opacity: contentVisible ? 1 : 0,
            transform: `scale(${contentVisible ? 1 : 0.97}) translateY(${yOffset})`,
            transition: 'opacity 0.4s ease 0.04s, transform 0.48s cubic-bezier(0.22,1,0.36,1) 0.04s',
            position: 'relative',
            borderRadius: isMobile ? 10 : 16,
            border: `1px solid rgba(255,255,255,0.07)`,
            boxShadow: `0 0 0 1px ${slide.accent}20, 0 0 55px ${slide.accent}12, 0 28px 70px rgba(0,0,0,0.55)`,
            overflow: 'hidden',
          }}>
            {/* Component: Compare inside the HUD */}
            <Compare
              firstImage={slide.imageBefore}
              secondImage={slide.imageAfter}
              firstImageClassName="object-cover w-full h-full"
              secondImageClassname="object-cover w-full h-full"
              className="w-full h-full"
              slideMode="hover"
              autoplay={true}
            />

            {/* Corner brackets overlay */}
            {(['tl','tr','bl','br'] as const).map(c => (
              <Bracket key={c} corner={c} color={slide.accent} size={isMobile ? 20 : 28} active={contentVisible} />
            ))}

            {/* Status chip */}
            <div className="pointer-events-none" style={{
              position: 'absolute', top: isMobile ? 10 : 14, left: isMobile ? 10 : 16, zIndex: 10,
              display: 'flex', alignItems: 'center', gap: 7, padding: `4px ${isMobile ? 10 : 12}px`,
              borderRadius: 6, background: 'rgba(3,5,14,0.65)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)',
            }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: slide.accent, boxShadow: `0 0 6px ${slide.accent}90`, animation: 'blink 1.8s ease-in-out infinite' }} />
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 8 : 9, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                Live Comparison
              </span>
            </div>
          </div>

          {/* Info strip */}
          <div style={{
            width: '100%', maxWidth: 1100,
            opacity: contentVisible ? 1 : 0,
            transform: `translateY(${yOffset})`,
            transition: 'opacity 0.4s ease 0.08s, transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.08s',
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: infoGrid, gap: 0,
              borderRadius: isMobile ? 10 : 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)', background: 'rgba(8,12,28,0.60)', boxShadow: '0 8px 36px rgba(0,0,0,0.4)',
            }}>
              <div style={{ padding: '14px 20px', borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)', borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', flexDirection: isMobile ? 'row' : 'column', justifyContent: isMobile ? 'space-between' : 'center', gap: isMobile ? 0 : 5 }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>Role</span>
                <span style={{ fontFamily: '"Oxanium", sans-serif', fontSize: isMobile ? 12 : 13, fontWeight: 600, color: slide.accent }}>{slide.role}</span>
              </div>
              <div style={{ padding: '14px 20px', borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)', borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>Technologies</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {slide.technologies.map(t => <TechBadge key={t} tech={t} />)}
                </div>
              </div>
              <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center' }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>Description</span>
                <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: isMobile ? 11 : 12, lineHeight: 1.65, color: 'rgba(255,255,255,0.52)', margin: 0 }}>{slide.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div style={{
          flexShrink: 0, height: bottomH, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: `0 ${hPadding}px`, borderTop: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', background: 'rgba(3,5,14,0.5)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {SLIDES.map((s, i) => (
              <button key={s.id} onClick={() => goTo(i, i > idx ? 'next' : 'prev')} style={{
                width: i === idx ? 22 : 5, height: 5, borderRadius: 3, border: 'none', cursor: 'pointer', padding: 0,
                background: i === idx ? slide.accent : 'rgba(255,255,255,0.18)', boxShadow: i === idx ? `0 0 8px ${slide.accent}80` : 'none',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[{ d: 'prev', fn: prev }, { d: 'next', fn: next }].map(({ d, fn }) => (
              <button key={d} onClick={fn} style={{
                width: isMobile ? 32 : 36, height: isMobile ? 32 : 36, borderRadius: 8,
                border: d === 'next' ? `1px solid ${slide.accent}45` : '1px solid rgba(255,255,255,0.1)',
                background: d === 'next' ? `${slide.accent}16` : 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)', cursor: 'pointer',
                color: d === 'next' ? slide.accent : 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease', boxShadow: d === 'next' ? `0 0 14px ${slide.accent}18` : 'none',
              }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  {d === 'next'
                    ? <path d="M3.5 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    : <path d="M7.5 1.5l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 2, flexShrink: 0, background: 'rgba(255,255,255,0.04)' }}>
          <div style={{
            height: '100%', width: isInteracting ? '100%' : `${progress * 100}%`,
            background: `linear-gradient(90deg, ${slide.accent}55, ${slide.accent})`,
            boxShadow: `0 0 8px ${slide.accent}80`, transition: isInteracting ? 'width 0.3s' : 'background 0.5s ease',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      `}</style>
    </div>
  );
}