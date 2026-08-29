import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PortfolioItem, Hotspot } from '../types';
import { 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Info, 
  X, 
  Eye, 
  Compass, 
  Sparkles,
  Volume2,
  VolumeX,
  Share2,
  ExternalLink,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface PanoramaViewerProps {
  item: PortfolioItem;
  onClose?: () => void;
  isModal?: boolean;
}

export const Panorama360Viewer: React.FC<PanoramaViewerProps> = ({
  item,
  onClose,
  isModal = false
}) => {
  const [pitch, setPitch] = useState<number>(0);
  const [yaw, setYaw] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; y: number; startYaw: number; startPitch: number }>({
    x: 0,
    y: 0,
    startYaw: 0,
    startPitch: 0
  });

  // Auto rotation effect when idle
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const interval = setInterval(() => {
      setYaw((prev) => (prev + 0.15) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Mouse & Touch Pan Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startYaw: yaw,
      startPitch: pitch
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    
    const sensitivity = 0.2 / zoom;
    let newYaw = (dragStartRef.current.startYaw - deltaX * sensitivity) % 360;
    if (newYaw < 0) newYaw += 360;

    const newPitch = Math.max(-45, Math.min(45, dragStartRef.current.startPitch + deltaY * sensitivity));

    setYaw(newYaw);
    setPitch(newPitch);
  }, [isDragging, zoom]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setAutoRotate(false);
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        startYaw: yaw,
        startPitch: pitch
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - dragStartRef.current.x;
    const deltaY = e.touches[0].clientY - dragStartRef.current.y;
    
    const sensitivity = 0.25 / zoom;
    let newYaw = (dragStartRef.current.startYaw - deltaX * sensitivity) % 360;
    if (newYaw < 0) newYaw += 360;

    const newPitch = Math.max(-45, Math.min(45, dragStartRef.current.startPitch + deltaY * sensitivity));

    setYaw(newYaw);
    setPitch(newPitch);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom((prev) => {
      if (direction === 'in') return Math.min(2.2, prev + 0.25);
      return Math.max(0.8, prev - 0.25);
    });
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Convert yaw to background position offset for infinite seamless panoramic simulation
  const bgPosX = (yaw / 360) * 100;
  const bgPosY = 50 + pitch * 0.4;

  return (
    <div
      ref={containerRef}
      id={`360-viewer-${item.id}`}
      className={`relative select-none overflow-hidden rounded-2xl border border-sky-100 bg-slate-900 text-slate-800 shadow-2xl transition-all duration-300 ${
        isModal ? 'w-full h-[78vh] max-h-[850px]' : 'w-full h-[420px] sm:h-[500px]'
      }`}
    >
      {/* 360 Panoramic Simulated Canvas Viewport */}
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          backgroundImage: `url(${item.panoramicImage})`,
          backgroundSize: `${zoom * 260}% ${zoom * 180}%`,
          backgroundPosition: `${bgPosX}% ${bgPosY}%`,
          backgroundRepeat: 'repeat-x',
          transition: isDragging ? 'none' : 'background-position 0.05s ease-out, transform 0.2s ease-out'
        }}
      >
        {/* Subtle radial lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 pointer-events-none" />
      </div>

      {/* Interactive Hotspots rendered dynamically relative to panoramic angle */}
      <div className="absolute inset-0 pointer-events-none">
        {item.hotspots.map((hotspot) => {
          // Calculate if hotspot is currently visible within camera viewport
          const hotspotNormalizedX = hotspot.x; // 0 - 100
          const currentViewYawPct = (yaw / 360) * 100;
          let diffX = hotspotNormalizedX - currentViewYawPct;
          
          // Wrap around logic
          if (diffX > 50) diffX -= 100;
          if (diffX < -50) diffX += 100;

          // Only show when inside the ~80deg FOV (-25% to +25%)
          const isVisible = Math.abs(diffX) < 32;
          const screenX = 50 + diffX * (1.8 * zoom);
          const screenY = hotspot.y + (pitch * 0.4);

          if (!isVisible) return null;

          return (
            <div
              key={hotspot.id}
              className="absolute pointer-events-auto transition-transform duration-150 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${Math.max(8, Math.min(92, screenX))}%`,
                top: `${Math.max(12, Math.min(88, screenY))}%`
              }}
            >
              <button
                id={`hotspot-btn-${hotspot.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot);
                }}
                className="group relative flex items-center justify-center p-2 rounded-full bg-white/90 text-sky-600 shadow-lg backdrop-blur-md border-2 border-sky-400 hover:scale-125 transition-all duration-200"
                aria-label={`Hotspot: ${hotspot.title}`}
              >
                <div className="absolute -inset-2 rounded-full bg-sky-400/30 animate-ping pointer-events-none" />
                <Sparkles className="w-4 h-4 text-sky-600 group-hover:rotate-45 transition-transform" />
                
                {/* Hotspot Floating Pill on Hover */}
                <span className="hidden sm:inline-block absolute left-full ml-2 px-2.5 py-1 rounded-md bg-white/95 text-slate-800 text-xs font-semibold whitespace-nowrap shadow-md border border-sky-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  {hotspot.title}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Top Glass Info Bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
        <div className="flex items-center gap-2 pointer-events-auto bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-md">
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 font-heading">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>360° LIVE INTERACTIVE VIEW</span>
          </div>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-medium text-slate-600 truncate max-w-[140px] sm:max-w-[220px]">
            {item.title}
          </span>
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          {/* Audio ambient toggle */}
          <button
            id={`toggle-sound-${item.id}`}
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-white/85 backdrop-blur-md text-slate-700 hover:text-sky-600 border border-white/80 shadow-sm transition"
            title={soundEnabled ? 'Mute spatial audio' : 'Enable ambient sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-sky-600" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Share Button */}
          <button
            id={`share-tour-${item.id}`}
            onClick={handleShare}
            className="p-2 rounded-full bg-white/85 backdrop-blur-md text-slate-700 hover:text-sky-600 border border-white/80 shadow-sm transition"
            title="Share tour"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Fullscreen Button */}
          <button
            id={`fullscreen-tour-${item.id}`}
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-white/85 backdrop-blur-md text-slate-700 hover:text-sky-600 border border-white/80 shadow-sm transition"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close if in modal */}
          {onClose && (
            <button
              id={`close-tour-modal-${item.id}`}
              onClick={onClose}
              className="p-2 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 shadow-sm transition ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Share Toast */}
      {copiedLink && (
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-30 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg font-medium animate-bounce">
          ✓ 360° Tour Link copied to clipboard!
        </div>
      )}

      {/* Active Hotspot Popup Card */}
      {activeHotspot && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-sm bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-sky-200 shadow-2xl animate-fade-in text-slate-800">
          <div className="flex items-start justify-between gap-2">
            <div>
              {activeHotspot.tag && (
                <span className="inline-block text-[10px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded uppercase tracking-wider mb-1">
                  {activeHotspot.tag}
                </span>
              )}
              <h4 className="text-sm font-bold text-slate-900 font-heading">{activeHotspot.title}</h4>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{activeHotspot.description}</p>
          <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
            <span className="text-[11px] text-sky-600 font-medium">✨ Ultra-HD 360 Feature</span>
            <a
              href={`https://wa.me/917508094760?text=${encodeURIComponent(`Hello Smart View Labs! I saw the feature "${activeHotspot.title}" in ${item.title} and want something similar for my property.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline"
            >
              Inquire Now <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Bottom HUD Controls */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        {/* Drag Guidance */}
        <div className="hidden sm:flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 text-[11px] font-medium text-slate-600 shadow-sm pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Click & Drag to explore 360°</span>
        </div>

        {/* Viewport Action Controls */}
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-full border border-sky-100 shadow-md pointer-events-auto mx-auto sm:mx-0">
          <button
            id="btn-rotate-left"
            onClick={() => { setYaw((prev) => (prev - 25 + 360) % 360); setAutoRotate(false); }}
            className="p-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-full transition"
            title="Pan Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            id="btn-toggle-autorotate"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-full transition flex items-center gap-1 text-xs font-medium px-2.5 ${
              autoRotate ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
            }`}
            title="Toggle Auto Spin"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            <span className="hidden md:inline">{autoRotate ? 'Auto' : 'Static'}</span>
          </button>

          <button
            id="btn-rotate-right"
            onClick={() => { setYaw((prev) => (prev + 25) % 360); setAutoRotate(false); }}
            className="p-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-full transition"
            title="Pan Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-px h-4 bg-slate-200 mx-0.5" />

          <button
            id="btn-zoom-in"
            onClick={() => handleZoom('in')}
            className="p-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-full transition"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="btn-zoom-out"
            onClick={() => handleZoom('out')}
            className="p-1.5 text-slate-600 hover:text-sky-700 hover:bg-sky-50 rounded-full transition"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Resolution Badge */}
        <div className="hidden sm:flex items-center gap-1 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/80 text-[10px] font-bold text-sky-700 shadow-sm pointer-events-auto">
          <span>{item.resolution}</span>
        </div>
      </div>
    </div>
  );
};
