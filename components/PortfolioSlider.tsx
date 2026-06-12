import React, { useState, useEffect, useCallback, useRef } from 'react';

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
  deliverables: string[];
  image: string;
  videoUrl?: string;
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
const SLIDES: Slide[] = [ {
    id: 1,
    title: 'Digital Twin Demonstration Platform',
    location: 'Interactive Real-Time Platform',
    type: 'Digital Twin Development',
    role: 'Digital Twin Developer',
    description: 'Built an interactive digital twin platform featuring real-time walkthroughs, automatic doors, smart lighting, POIs linked to HVAC assets, and live EBO integration via authenticated REST APIs.',
    technologies: ['Unreal Engine 5', 'Blueprints', 'UMG', 'REST APIs', 'EBO Integration'],
    deliverables: ['Real-Time 3D Walkthroughs', 'Smart Automation Systems', 'Live EBO API Integration'],
    image: 'https://images.unsplash.com/photo-1691405138982-613ed5b4dbb0?w=1920&h=1080&fit=crop&auto=format',
    // Demo video for the Digital Twin slide
    videoUrl: '/demos/UNREAL-ENGINE -PROTOTYPE.mp4',
    accent: '#8000ff',
  },
  {
    id: 2,
    title: 'RDC Schneider Electric Headquarters',
    location: 'Riyadh, Saudi Arabia',
    type: 'BMS GUI Engineering',
    role: 'GUI Engineer',
    description: 'Developed BMS graphical interfaces, navigation systems, and building visualization assets for Schneider Electric regional headquarters.',
    technologies: ['EBO', 'TGML', 'SketchUp', 'Lumion Pro', 'Photoshop'],
    deliverables: ['BMS Graphical Interfaces', 'Navigation Systems', 'Building Visualization'],
    image: 'https://images.unsplash.com/photo-1685720543547-cc4873188c75?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/schnider%20RDC.mp4',
    accent: '#00e89a',
  },
  {
    id: 3,
    title: 'Ministry of Tourism',
    location: 'Saudi Arabia',
    type: 'BMS GUI Engineering',
    role: 'GUI Engineer',
    description: 'Created monitoring graphics, visualization layouts, and BMS interfaces for a government-scale facility.',
    technologies: ['EBO', 'TGML', 'SketchUp', 'V-Ray', 'Photoshop'],
    deliverables: ['Monitoring Graphics', 'Visualization Layouts', 'BMS Interfaces'],
    image: 'https://images.unsplash.com/photo-1570724546132-6a61bb3c3894?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/MOT.mp4',
    accent: '#00d4ff',
  },
  {
    id: 4,
    title: 'Abu Qir Metro Station',
    location: 'Alexandria, Egypt',
    type: 'Infrastructure GUI Engineering',
    role: 'GUI Engineer',
    description: 'Developed operational monitoring screens and graphical navigation interfaces for metro infrastructure.',
    technologies: ['EBO', 'TGML', 'SketchUp', 'V-Ray', 'Photoshop'],
    deliverables: ['Operational Monitoring Screens', 'Graphical Navigation', 'Infrastructure Interfaces'],
    image: 'https://images.unsplash.com/photo-1556695736-d287caebc48e?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/ABO%20QIR%20STATION.mp4',
    accent: '#4da6ff',
  },
  {
    id: 5,
    title: 'Schneider Badr Factory',
    location: 'Badr City, Egypt',
    type: 'Industrial BMS GUI Engineering',
    role: 'GUI Engineer',
    description: 'Designed factory monitoring interfaces and facility visualization systems for large-scale industrial operations.',
    technologies: ['EBO', 'TGML', 'SketchUp', 'Sweet Home 3D'],
    deliverables: ['Factory Monitoring Interfaces', 'Facility Visualization', 'Industrial Dashboards'],
    image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/SCHNIDER%20BADR.mp4',
    accent: '#00e89a',
  },
  {
    id: 6,
    title: 'VOCO Hotel Arabella Plaza',
    location: 'Egypt',
    type: 'Hotel Automation GUI',
    role: 'GUI Engineer',
    description: 'Developed hotel automation graphics, room management interfaces, and building monitoring systems.',
    technologies: ['EBO', 'TGML', 'KNX', 'GRMS', 'SketchUp'],
    deliverables: ['Hotel Automation Graphics', 'Room Management UI', 'Building Monitoring'],
    image: 'https://images.unsplash.com/photo-1677129667171-92abd8740fa3?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/voco.mp4',
    accent: '#fbbf24',
  },
  {
    id: 7,
    title: 'October Plaza',
    location: '6th of October City, Egypt',
    type: 'BMS GUI Engineering',
    role: 'GUI Engineer',
    description: 'Created BMS dashboards and visualization interfaces for residential and mixed-use facilities.',
    technologies: ['EBO', 'TGML', 'SketchUp', 'Sweet Home 3D'],
    deliverables: ['BMS Dashboards', 'Mixed-Use Visualization', 'Residential Interfaces'],
    image: 'https://images.unsplash.com/photo-1513061379709-ef0cd1695189?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/october%20plaza.mp4',
    accent: '#00eeff',
  },
  {
    id: 8,
    title: 'Village West',
    location: 'Egypt',
    type: 'BMS GUI Engineering',
    role: 'GUI Engineer',
    description: 'Developed graphical monitoring interfaces and building visualization assets for a residential development.',
    technologies: ['EBO', 'TGML', 'SketchUp', 'Sweet Home 3D'],
    deliverables: ['Graphical Monitoring Interfaces', 'Building Visualization Assets', 'Residential Dashboards'],
    image: 'https://images.unsplash.com/photo-1535391879778-3bae11d29a24?w=1920&h=1080&fit=crop&auto=format',
    videoUrl: '/demos/village%20west.mp4',
    accent: '#a78bfa',
  },

];

const AUTO_MS = 8000;

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
    >
      <path
        d={paths[corner]} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="square"
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

// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({ slide, onClose }: { slide: Slide; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Autoplay when modal opens
  useEffect(() => {
    if (videoRef.current && slide.videoUrl) {
      videoRef.current.play().catch(() => {});
    }
  }, [slide.videoUrl]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(3,5,14,0.95)',
        backdropFilter: 'blur(24px)',
        animation: 'modal-in 0.3s cubic-bezier(0.22,1,0.36,1)',
        padding: '16px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1200,
          borderRadius: 16,
          overflow: 'hidden',
          border: `1px solid ${slide.accent}30`,
          boxShadow: `0 0 80px ${slide.accent}20, 0 40px 120px rgba(0,0,0,0.8)`,
          animation: 'modal-scale 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* HUD brackets */}
        <Bracket corner="tl" color={slide.accent} size={24} active />
        <Bracket corner="tr" color={slide.accent} size={24} active />
        <Bracket corner="bl" color={slide.accent} size={24} active />
        <Bracket corner="br" color={slide.accent} size={24} active />

        {slide.videoUrl ? (
          <video
            ref={videoRef}
            src={slide.videoUrl}
            poster={slide.image}
            controls
            style={{
              width: '100%',
              display: 'block',
              background: '#000',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        ) : (
          /* No video yet — show styled placeholder */
          <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#030510' }}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16,
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                border: `1px solid ${slide.accent}50`,
                background: `${slide.accent}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={slide.accent} strokeWidth="1.5">
                  <path d="M15 10l4.553-2.274A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: '"Oxanium", sans-serif', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)', margin: '0 0 6px' }}>
                  Video Coming Soon
                </p>
                <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: 0, letterSpacing: '0.1em' }}>
                  Add videoUrl to display project recording
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 10,
            width: 36, height: 36, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(3,5,14,0.8)',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer', color: 'rgba(255,255,255,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, lineHeight: 1,
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.background = 'rgba(3,5,14,0.8)'; }}
        >
          ✕
        </button>

        {/* Bottom info bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '12px 20px',
          background: 'linear-gradient(to top, rgba(3,5,14,0.95) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}>
          <p style={{ fontFamily: '"Oxanium", sans-serif', fontSize: 13, fontWeight: 600, color: '#fff', margin: '0 0 2px' }}>
            {slide.title}
          </p>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: slide.accent, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {slide.location} · {slide.role}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Slider ──────────────────────────────────────────────────────────────
export function PortfolioSlider() {
  const [idx, setIdx]           = useState(0);
  const [dir, setDir]           = useState<'next' | 'prev'>('next');
  const [phase, setPhase]       = useState<'idle' | 'exit' | 'enter'>('idle');
  const [progress, setProgress] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [bgState, setBgState]   = useState({ from: SLIDES[0].image, to: SLIDES[0].image, fading: false });
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const ww = useWindowWidth();

  const isMobile = ww < 640;
  const isTablet = ww >= 640 && ww < 1024;

  const slide = SLIDES[idx];

  const goTo = useCallback((next: number, direction: 'next' | 'prev' = 'next') => {
    if (phase !== 'idle' || videoOpen) return;
    setDir(direction);
    setBgState({ from: SLIDES[idx].image, to: SLIDES[next].image, fading: true });
    setTimeout(() => setBgState({ from: SLIDES[next].image, to: SLIDES[next].image, fading: false }), 1000);
    setPhase('exit');
    setTimeout(() => {
      setIdx(next);
      setPhase('enter');
      setTimeout(() => setPhase('idle'), 60);
    }, 400);
  }, [idx, phase, videoOpen]);

  const next = useCallback(() => goTo((idx + 1) % SLIDES.length, 'next'), [idx, goTo]);
  const prev = useCallback(() => goTo((idx - 1 + SLIDES.length) % SLIDES.length, 'prev'), [idx, goTo]);

  // Auto-advance
  useEffect(() => {
    if (videoOpen) return;
    const start = Date.now();
    setProgress(0);
    progTimer.current = setInterval(() => setProgress(Math.min((Date.now() - start) / AUTO_MS, 1)), 40);
    autoTimer.current = setTimeout(next, AUTO_MS);
    return () => { clearTimeout(autoTimer.current!); clearInterval(progTimer.current!); };
  }, [idx, videoOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (videoOpen) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, videoOpen]);

  // Touch swipe
  const touchX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const d = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 48) d > 0 ? next() : prev();
  };

  const contentVisible = phase === 'idle' || phase === 'enter';
  const yOffset = phase === 'exit' ? (dir === 'next' ? '-10px' : '10px') : phase === 'enter' ? (dir === 'next' ? '10px' : '-10px') : '0px';

  // Responsive derived values
  const hPadding   = isMobile ? 16 : isTablet ? 28 : 48;
  const headerH    = isMobile ? 48 : 56;
  const bottomH    = isMobile ? 52 : 56;
  const titleSize  = isMobile ? '1.15rem' : isTablet ? '1.45rem' : 'clamp(1.3rem, 2.4vw, 2.1rem)';
  const infoGrid   = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '150px 1fr 300px';

  // Container height — fixed block, NOT full-screen
  const containerH = isMobile ? 560 : isTablet ? 620 : 720;

  // Video height = container minus all surrounding fixed-height elements
  const barsH     = headerH + bottomH + 2;      // top bar + bottom bar + progress line
  const titleH    = isMobile ? 72 : 82;          // title block estimated height
  const infoH     = isMobile ? 115 : isTablet ? 95 : 72; // info strip estimated height
  const contentPad = isMobile ? 28 : 36;         // top+bottom padding of content area
  const gapsH     = isMobile ? 12 * 2 : 14 * 2; // two flex gaps
  const videoH    = Math.max(containerH - barsH - titleH - infoH - contentPad - gapsH, 140);

  return (






    
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
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
       <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      {/* ── Immersive background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Incoming image (bottom) */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bgState.to})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(60px) saturate(1.4)', transform: 'scale(1.1)',
        }} />
        {/* Outgoing image (top, fades out) */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${bgState.from})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(60px) saturate(1.4)', transform: 'scale(1.1)',
          opacity: bgState.fading ? 0 : 1,
          transition: 'opacity 1.1s ease',
          pointerEvents: 'none',
        }} />
        {/* Dark veil */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,5,14,0.84)' }} />
        {/* Accent bloom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 70% 55% at 12% 65%, ${slide.accent}1a 0%, transparent 55%)`,
          transition: 'background 0.9s ease',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 40% at 88% 25%, rgba(107,33,255,0.09) 0%, transparent 55%)' }} />
        {/* Dot texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
      </div>

      {/* ── Layout ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Top bar */}
     

        {/* Content area */}
        <div style={{
          flex: 1, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: isMobile ? '14px 16px' : isTablet ? '18px 28px' : '18px 48px',
          gap: isMobile ? 12 : 14,
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
            
            {/* التعديل هنا: شيلنا الجريدينت وخلينا التيكست أبيض صريح عشان ميضربش */}
            <h1 style={{
              fontFamily: '"Oxanium", sans-serif',
              fontSize: titleSize,
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              margin: '0 0 8px',
              color: '#ffffff',
              transition: 'color 0.5s ease',
            }}>
              {slide.title}
            </h1>

            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: isMobile ? 9 : 10,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: slide.accent,
              background: `${slide.accent}12`,
              border: `1px solid ${slide.accent}25`,
              padding: '3px 9px',
              borderRadius: 4,
              display: 'inline-block',
            }}>
              {slide.type}
            </span>
          </div>

          {/* Video hero */}
          <div style={{
            width: '100%', maxWidth: 1100,
            flexShrink: 0,
            opacity: contentVisible ? 1 : 0,
            transform: `scale(${contentVisible ? 1 : 0.97}) translateY(${yOffset})`,
            transition: 'opacity 0.4s ease 0.04s, transform 0.48s cubic-bezier(0.22,1,0.36,1) 0.04s',
          }}>
            <VideoHero slide={slide} active={contentVisible} onPlay={() => setVideoOpen(true)} isMobile={isMobile} videoH={videoH} />
          </div>

          {/* Info strip */}
          <div style={{
            width: '100%', maxWidth: 1100,
            opacity: contentVisible ? 1 : 0,
            transform: `translateY(${yOffset})`,
            transition: 'opacity 0.4s ease 0.08s, transform 0.4s cubic-bezier(0.22,1,0.36,1) 0.08s',
          }}>
            <InfoStrip slide={slide} gridCols={infoGrid} isMobile={isMobile} />
          </div>
        </div>

        {/* Bottom nav bar */}
        <div style={{
          flexShrink: 0, height: bottomH,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: `0 ${hPadding}px`,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(12px)',
          background: 'rgba(3,5,14,0.5)',
        }}>
          {/* Slide dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {SLIDES.map((s, i) => (
              <button key={s.id} onClick={() => goTo(i, i > idx ? 'next' : 'prev')} style={{
                width: i === idx ? 22 : 5, height: 5, borderRadius: 3, border: 'none', cursor: 'pointer', padding: 0,
                background: i === idx ? slide.accent : 'rgba(255,255,255,0.18)',
                boxShadow: i === idx ? `0 0 8px ${slide.accent}80` : 'none',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              }} />
            ))}
          </div>
          {/* Arrow buttons */}
          <div style={{ display: 'flex', gap: 8 }}>
            {[{ d: 'prev', fn: prev }, { d: 'next', fn: next }].map(({ d, fn }) => (
              <button key={d} onClick={fn} style={{
                width: isMobile ? 32 : 36, height: isMobile ? 32 : 36,
                borderRadius: 8, border: d === 'next' ? `1px solid ${slide.accent}45` : '1px solid rgba(255,255,255,0.1)',
                background: d === 'next' ? `${slide.accent}16` : 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)', cursor: 'pointer',
                color: d === 'next' ? slide.accent : 'rgba(255,255,255,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
                boxShadow: d === 'next' ? `0 0 14px ${slide.accent}18` : 'none',
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
            height: '100%', width: `${progress * 100}%`,
            background: `linear-gradient(90deg, ${slide.accent}55, ${slide.accent})`,
            boxShadow: `0 0 8px ${slide.accent}80`,
            transition: 'background 0.5s ease',
          }} />
        </div>
      </div>

      {/* Floating side arrows — absolute inside the component (tablet+) */}
      {!isMobile && (
        <>
          <SideArrow side="left" onClick={prev} accent={slide.accent} />
          <SideArrow side="right" onClick={next} accent={slide.accent} />
        </>
      )}

      {/* Video modal */}
      {videoOpen && <VideoModal slide={slide} onClose={() => setVideoOpen(false)} />}

      <GlobalStyles />
    </div>
  );
}

// ─── Video Hero ───────────────────────────────────────────────────────────────
function VideoHero({ slide, active, onPlay, isMobile, videoH }: {
  slide: Slide; active: boolean; onPlay: () => void; isMobile: boolean; videoH: number;
}) {
  const [hovered, setHovered] = useState(false);
  const btnSize = isMobile ? 48 : 60;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onPlay}
      style={{
        position: 'relative',
        width: '100%',
        height: videoH,   // explicit px height — no padding-bottom trick
        borderRadius: isMobile ? 10 : 14,
        overflow: 'hidden',
        border: `1px solid rgba(255,255,255,0.07)`,
        boxShadow: `0 0 0 1px ${slide.accent}20, 0 0 55px ${slide.accent}12, 0 0 130px ${slide.accent}07, 0 28px 70px rgba(0,0,0,0.55)`,
        cursor: 'pointer',
        transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Photo */}
      <img
        src={slide.image} alt={slide.title}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.05)' : active ? 'scale(1.02)' : 'scale(1.07)',
          transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        }}
      />

      {/* Cinema overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(3,5,14,0.70) 0%, rgba(3,5,14,0.40) 45%, rgba(3,5,14,0.75) 100%)' }} />

      {/* Accent wash */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 55% 60% at 22% 50%, ${slide.accent}18 0%, transparent 62%)`, transition: 'background 0.6s ease' }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
        backgroundSize: '52px 52px',
      }} />

      {/* Scan line */}
      {active && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${slide.accent}70 30%, ${slide.accent}95 50%, ${slide.accent}70 70%, transparent)`,
          animation: 'scanline 4.5s linear infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Corner brackets */}
      {(['tl','tr','bl','br'] as const).map(c => (
        <Bracket key={c} corner={c} color={slide.accent} size={isMobile ? 20 : 28} active={active} />
      ))}

      {/* Status chip */}
      <div style={{
        position: 'absolute', top: isMobile ? 10 : 14, left: isMobile ? 10 : 16,
        display: 'flex', alignItems: 'center', gap: 7,
        padding: `4px ${isMobile ? 10 : 12}px`,
        borderRadius: 6, background: 'rgba(3,5,14,0.65)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)',
      }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 6px #ef444490', animation: 'blink 1.8s ease-in-out infinite' }} />
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 8 : 9, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase' }}>
          Video Preview
        </span>
      </div>

      {/* Aspect ratio chip */}
      {!isMobile && (
        <div style={{
          position: 'absolute', top: 14, right: 16,
          padding: '4px 12px', borderRadius: 6, background: 'rgba(3,5,14,0.65)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)',
          fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.28)',
        }}>
          16:9 ◻
        </div>
      )}

      {/* Play button */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'relative',
          width: btnSize, height: btnSize, borderRadius: '50%',
          background: 'rgba(3,5,14,0.55)',
          border: `1.5px solid ${slide.accent}55`,
          backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 0 36px ${slide.accent}30, inset 0 0 20px rgba(0,0,0,0.4)`,
          transform: hovered ? 'scale(1.14)' : 'scale(1)',
          transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease',
        }}>
          {active && [0, 1].map(i => (
            <div key={i} style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: `1px solid ${slide.accent}40`,
              animation: `ring-out ${1.6 + i * 0.7}s ease-out infinite`,
              animationDelay: `${i * 0.45}s`,
            }} />
          ))}
          {/* Triangle */}
          <div style={{
            width: 0, height: 0, marginLeft: isMobile ? 3 : 4,
            borderTop: `${isMobile ? 9 : 11}px solid transparent`,
            borderBottom: `${isMobile ? 9 : 11}px solid transparent`,
            borderLeft: `${isMobile ? 15 : 18}px solid ${slide.accent}`,
          }} />
        </div>
      </div>

      {/* Bottom gradient + label */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 88,
        background: 'linear-gradient(to top, rgba(3,5,14,0.9) 0%, transparent 100%)',
        display: 'flex', alignItems: 'flex-end',
        padding: `0 ${isMobile ? 12 : 20}px ${isMobile ? 10 : 14}px`,
      }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: isMobile ? 8 : 9, letterSpacing: '0.18em', color: `${slide.accent}90`, textTransform: 'uppercase' }}>
          {slide.type}
        </span>
      </div>
    </div>
  );
}

// ─── Info strip ───────────────────────────────────────────────────────────────
function InfoStrip({ slide, gridCols, isMobile }: { slide: Slide; gridCols: string; isMobile: boolean }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: gridCols, gap: 0,
      borderRadius: isMobile ? 10 : 12, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(20px)',
      background: 'rgba(8,12,28,0.60)',
      boxShadow: '0 8px 36px rgba(0,0,0,0.4)',
    }}>
      {/* Role */}
      <div style={{
        padding: isMobile ? '12px 14px' : '14px 20px',
        borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
        borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none',
        display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : 'flex-start',
        justifyContent: isMobile ? 'space-between' : 'center', gap: isMobile ? 0 : 5,
      }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
          Role
        </span>
        <span style={{ fontFamily: '"Oxanium", sans-serif', fontSize: isMobile ? 12 : 13, fontWeight: 600, color: slide.accent, transition: 'color 0.4s' }}>
          {slide.role}
        </span>
      </div>

      {/* Technologies */}
      <div style={{
        padding: isMobile ? '12px 14px' : '14px 20px',
        borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
        borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none',
        display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
          Technologies
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {slide.technologies.map(t => <TechBadge key={t} tech={t} />)}
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: isMobile ? '12px 14px' : '14px 20px', display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center' }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>
          Description
        </span>
        <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: isMobile ? 11 : 12, lineHeight: 1.65, color: 'rgba(255,255,255,0.52)', margin: 0 }}>
          {slide.description}
        </p>
      </div>
    </div>
  );
}

// ─── Floating side arrow ──────────────────────────────────────────────────────
function SideArrow({ side, onClick, accent }: { side: 'left' | 'right'; onClick: () => void; accent: string }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'absolute', [side]: 14, top: '50%', transform: 'translateY(-50%)',
        zIndex: 10,
        width: 40, height: 40, borderRadius: '50%',
        border: hov ? `1px solid ${accent}55` : '1px solid rgba(255,255,255,0.1)',
        background: hov ? `${accent}14` : 'rgba(3,5,14,0.6)',
        backdropFilter: 'blur(12px)', cursor: 'pointer',
        color: hov ? accent : 'rgba(255,255,255,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.22s ease',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        {side === 'right'
          ? <path d="M4.5 2l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M8.5 2l-4 4.5 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </button>
  );
}

// ─── Global keyframes ─────────────────────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      @keyframes scanline {
        0%   { top: -2px; opacity: 0; }
        4%   { opacity: 1; }
        96%  { opacity: 0.55; }
        100% { top: 100%; opacity: 0; }
      }
      @keyframes ring-out {
        0%   { transform: scale(1);   opacity: 0.55; }
        100% { transform: scale(2.6); opacity: 0; }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.35; }
      }
      @keyframes modal-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes modal-scale {
        from { transform: scale(0.94); opacity: 0; }
        to   { transform: scale(1);    opacity: 1; }
      }
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; }
      video::-webkit-media-controls { border-radius: 0; }
    `}</style>
  );
}