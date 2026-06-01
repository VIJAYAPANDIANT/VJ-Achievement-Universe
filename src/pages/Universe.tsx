import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { playHover, playClick } from '../utils/sounds';
import { achievementsData } from '../data/achievementsData';
import { BookOpen, Trophy, Award, Briefcase, Flame, Sparkles } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    url: 'https://github.com/VIJAYAPANDIANT',
    colorClass: 'hover:text-white hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/hackervj18/',
    colorClass: 'hover:text-[#ffa116] hover:border-[#ffa116] hover:shadow-[0_0_12px_rgba(255,161,22,0.45)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16.102 17.93l-2.69 2.607c-.466.452-1.111.97-1.826.97-.715 0-1.36-.52-1.826-.97L3.51 14.3a3.48 3.48 0 0 1 0-4.92l6.25-6.052a.792.792 0 0 1 1.12.001l1.12 1.12c.31.31.309.813-.002 1.123L5.8 11.754a1.864 1.864 0 0 0 0 2.635l6.25 6.052c.237.23.518.423.82.423.3 0 .582-.193.819-.423l2.413-2.34a.79.79 0 0 1 1.12 0l1.12 1.12a.792.792 0 0 1-.001 1.12zM20.49 13.69l-1.12 1.12a.792.792 0 0 1-1.12-.001l-6.25-6.052a1.864 1.864 0 0 0-2.636 0L8.147 9.873a.79.79 0 0 1-1.12 0L5.908 8.75a.792.792 0 0 1 .001-1.12l1.205-1.168a3.48 3.48 0 0 1 4.92 0l6.25 6.052c.466.452 1.111.97 1.826.97.715 0 1.36-.52 1.826-.97l1.12-1.12a.792.792 0 0 1 1.12.001l1.12 1.12a.792.792 0 0 1-.001 1.12l-2.413 2.34c-.237.23-.518.423-.82.423-.3 0-.582-.193-.819-.423z" />
      </svg>
    ),
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/vijayapandiant11',
    colorClass: 'hover:text-[#308b50] hover:border-[#308b50] hover:shadow-[0_0_12px_rgba(48,139,80,0.45)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.117 12.005c0-1.896.11-3.134.332-3.712.222-.577.625-.97 1.208-1.176a3.5 3.5 0 0 1 1.22-.206c.463 0 .973.082 1.53.247v1.896a6.3 6.3 0 0 0-1.077-.082c-.37 0-.643.08-.82.238-.175.16-.297.4-.365.722-.068.32-.102.822-.102 1.505v.566c0 1.298.118 2.143.353 2.535.235.39.697.587 1.385.587.278 0 .584-.031.921-.093v1.865a7.5 7.5 0 0 1-1.63.144c-.792 0-1.428-.18-1.908-.54-.48-.361-.796-.897-.948-1.607-.152-.71-.228-1.782-.228-3.215v-.867zm-3.275 1.713c.221.578.625.97 1.208 1.176.584.206.99.309 1.22.309.463 0 .973-.082 1.53-.247v-1.896a6.3 6.3 0 0 0-1.077.082c-.37 0-.643-.08-.82-.238-.175-.16-.297-.4-.365-.722-.068-.32-.102-.822-.102-1.505v-.566c0-1.298.118-2.143.353-2.535.235-.39.697-.587 1.385-.587.278 0 .584.031.921.093V5.42a7.5 7.5 0 0 0-1.63-.144c-.792 0-1.428.18-1.908.54-.48.361-.796.897-.948 1.607-.152.71-.228 1.782-.228 3.215v.867c0 1.896.11 3.134.332 3.712z" />
      </svg>
    ),
  },
  {
    name: 'Twitter (X)',
    url: 'https://x.com/Vijayapand33371',
    colorClass: 'hover:text-white hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/vijay_code07',
    colorClass: 'hover:text-[#d3a275] hover:border-[#d3a275] hover:shadow-[0_0_12px_rgba(211,162,117,0.45)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 3a4.5 4.5 0 0 0-4.3 3.2 3.5 3.5 0 0 0-.2 6.6v4.7a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4.7a3.5 3.5 0 0 0-.2-6.6A4.5 4.5 0 0 0 12 3zm-3.5 13v-1h7v1zm0 2v-1h7v1z" />
      </svg>
    ),
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/vijayapandian112007',
    colorClass: 'hover:text-[#318dec] hover:border-[#318dec] hover:shadow-[0_0_12px_rgba(49,141,236,0.45)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4.5 12h3V21h-3z M10.5 3h3V21h-3z M16.5 7.5h3V21h-3z" />
      </svg>
    ),
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/vijayapandian111',
    colorClass: 'hover:text-[#2ec866] hover:border-[#2ec866] hover:shadow-[0_0_12px_rgba(46,200,102,0.45)]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M10.875 16.7h2.25v-2.45h1.75v2.45h2.25V7.3h-2.25v2.45h-1.75V7.3h-2.25v9.4z" />
      </svg>
    ),
  },
];

interface CategoryNode {
  name: 'Internships' | 'Hackathons' | 'Courses' | 'Workshops' | 'Competitions' | 'Badges';
  icon: React.ComponentType<any>;
  color: string;
  glowColor: string;
  description: string;
  stat: string;
  angle: number; // orbital angle
  radius: number; // orbital radius
}

interface UniverseProps {
  onSelectCategory: (category: string) => void;
}

export const Universe: React.FC<UniverseProps> = ({ onSelectCategory }) => {
  const canvas2DRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Compute actual counts for statistics
  const getStats = (cat: string) => {
    return achievementsData.filter((a) => a.category === cat).length.toString();
  };

  const categories: CategoryNode[] = [
    {
      name: 'Internships',
      icon: Briefcase,
      color: '#10b981', // Emerald green
      glowColor: 'rgba(16, 185, 129, 0.4)',
      description: 'Industry and research experiences',
      stat: `${getStats('Internships')} Positions`,
      angle: 0,
      radius: 200,
    },
    {
      name: 'Hackathons',
      icon: Trophy,
      color: '#f97316', // Orange
      glowColor: 'rgba(249, 115, 22, 0.4)',
      description: 'Product builds & fast prototyping',
      stat: `${getStats('Hackathons')} Hackathons`,
      angle: Math.PI / 3,
      radius: 200,
    },
    {
      name: 'Courses',
      icon: BookOpen,
      color: '#3b82f6', // Blue
      glowColor: 'rgba(59, 130, 246, 0.4)',
      description: 'Verified academic coursework',
      stat: `${getStats('Courses')} Certificates`,
      angle: (2 * Math.PI) / 3,
      radius: 200,
    },
    {
      name: 'Workshops',
      icon: Sparkles,
      color: '#06b6d4', // Cyan
      glowColor: 'rgba(6, 182, 212, 0.4)',
      description: 'Bootcamps & professional training',
      stat: `${getStats('Workshops')} Workshops`,
      angle: Math.PI,
      radius: 200,
    },
    {
      name: 'Competitions',
      icon: Flame,
      color: '#ef4444', // Red
      glowColor: 'rgba(239, 68, 68, 0.4)',
      description: 'Competitive coding & challenges',
      stat: `${getStats('Competitions')} Placements`,
      angle: (4 * Math.PI) / 3,
      radius: 200,
    },
    {
      name: 'Badges',
      icon: Award,
      color: '#a855f7', // Purple
      glowColor: 'rgba(168, 85, 247, 0.4)',
      description: 'Gaming style skill accomplishments',
      stat: `${getStats('Badges')} Badges`,
      angle: (5 * Math.PI) / 3,
      radius: 200,
    },
  ];

  const [hoveredNode, setHoveredNode] = useState<CategoryNode | null>(null);

  // 2D Galaxy Interactive fallback & dashboard visualizer
  useEffect(() => {
    const canvas = canvas2DRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);
    let animationId: number;

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Orbit parameters
    let angleOffset = 0;
    let targetAngleOffset = 0;
    let isDragging = false;
    let startMouseX = 0;

    const nodes = categories.map((cat, idx) => ({
      ...cat,
      angle: (idx * Math.PI * 2) / categories.length,
    }));

    // Particle star field inside universe core
    const orbitalParticles: { angle: number; radius: number; size: number; speed: number; alpha: number; color: string }[] = [];
    const starColors = ['#06b6d4', '#8b5cf6', '#a855f7', '#3b82f6'];
    for (let i = 0; i < 200; i++) {
      orbitalParticles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 250 + 20,
        size: Math.random() * 1.5 + 0.5,
        speed: (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
        alpha: Math.random() * 0.7 + 0.1,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    const mousePos = { x: 0, y: 0 };
    let activeHoverIdx = -1;

    const drawNode = (node: typeof nodes[0], currentAngle: number, index: number) => {
      const centerX = width / 2;
      const centerY = height / 2;

      // Elliptical orbit calculation (gives 3D depth perspective)
      const radiusX = Math.min(width * 0.32, 280);
      const radiusY = Math.min(height * 0.22, 160);

      const x = centerX + Math.cos(currentAngle) * radiusX;
      const y = centerY + Math.sin(currentAngle) * radiusY;

      // Depth scale (smaller at back, larger at front)
      const zScale = (Math.sin(currentAngle) + 2) / 3; // 0.33 to 1.0
      const nodeSize = 42 * zScale;
      const isHovered = index === activeHoverIdx;

      // Draw orbit path segment
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Node shadow/glow
      ctx.shadowBlur = isHovered ? 25 : 10 * zScale;
      ctx.shadowColor = node.color;

      // Draw glowing background ring
      ctx.fillStyle = isHovered ? node.color : 'rgba(15, 12, 35, 0.75)';
      ctx.strokeStyle = node.color;
      ctx.lineWidth = isHovered ? 3 : 1.5;

      ctx.beginPath();
      ctx.arc(x, y, nodeSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Draw icon symbol manually inside node
      ctx.fillStyle = isHovered ? '#030014' : node.color;
      ctx.font = `bold ${Math.floor(18 * zScale)}px Space Grotesk`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Custom icon mapping
      let emoji = '💼';
      if (node.name === 'Hackathons') emoji = '🏆';
      else if (node.name === 'Courses') emoji = '📚';
      else if (node.name === 'Workshops') emoji = '🎓';
      else if (node.name === 'Competitions') emoji = '⚔';
      else if (node.name === 'Badges') emoji = '🔰';

      ctx.fillText(emoji, x, y);

      // Floating title labels below node
      ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(226, 232, 240, 0.8)';
      ctx.font = `${isHovered ? 'bold' : 'normal'} ${Math.floor(13 * zScale + (isHovered ? 2 : 0))}px Space Grotesk`;
      ctx.fillText(node.name, x, y + nodeSize + 18);

      // Sub-label for stats
      ctx.fillStyle = isHovered ? node.color : 'rgba(148, 163, 184, 0.6)';
      ctx.font = `${Math.floor(11 * zScale)}px Courier New`;
      ctx.fillText(node.stat, x, y + nodeSize + 32);

      return { x, y, size: nodeSize };
    };

    const render2DUniverse = () => {
      ctx.clearRect(0, 0, width, height);

      // Slowly float base angle
      if (!isDragging) {
        targetAngleOffset += 0.001;
      }
      angleOffset += (targetAngleOffset - angleOffset) * 0.1;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw central galaxy core
      const coreGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 90);
      coreGlow.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
      coreGlow.addColorStop(0.3, 'rgba(6, 182, 212, 0.2)');
      coreGlow.addColorStop(1, 'rgba(3, 0, 20, 0)');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
      ctx.fill();

      // Render orbiting space particles
      orbitalParticles.forEach((p) => {
        p.angle += p.speed;
        // Elliptical coordinate computation
        const rx = p.radius * Math.min(width * 0.0015, 1.2);
        const ry = p.radius * 0.6 * Math.min(height * 0.0015, 1.2);
        const px = centerX + Math.cos(p.angle + angleOffset * 0.3) * rx;
        const py = centerY + Math.sin(p.angle + angleOffset * 0.3) * ry;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      // Core text display
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px Space Grotesk';
      ctx.fillText('CORE SYSTEM', centerX, centerY - 6);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
      ctx.font = '9px monospace';
      ctx.fillText('CLICK ORBITS TO ENTER', centerX, centerY + 10);

      // Render nodes and record their rendered positions
      const renderedPositions: { x: number; y: number; size: number }[] = [];
      nodes.forEach((node, idx) => {
        const currentAngle = node.angle + angleOffset;
        const pos = drawNode(node, currentAngle, idx);
        renderedPositions.push(pos);
      });

      // Handle hover interactions
      let foundHoverIdx = -1;
      for (let i = 0; i < renderedPositions.length; i++) {
        const pos = renderedPositions[i];
        const dx = mousePos.x - pos.x;
        const dy = mousePos.y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < pos.size + 15) {
          foundHoverIdx = i;
          break;
        }
      }

      if (foundHoverIdx !== activeHoverIdx) {
        if (foundHoverIdx !== -1) {
          playHover();
          setHoveredNode(nodes[foundHoverIdx]);
        } else {
          setHoveredNode(null);
        }
        activeHoverIdx = foundHoverIdx;
      }

      animationId = requestAnimationFrame(render2DUniverse);
    };

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
    };

    const handleCanvasMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startMouseX = e.clientX;
    };

    const handleCanvasMouseUp = (e: MouseEvent) => {
      isDragging = false;
      // If not dragging far, count as click
      const distance = Math.abs(e.clientX - startMouseX);
      if (distance < 5 && activeHoverIdx !== -1) {
        playClick();
        onSelectCategory(nodes[activeHoverIdx].name);
      }
    };

    const handleCanvasMouseMoveDrag = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startMouseX;
      targetAngleOffset += deltaX * 0.005;
      startMouseX = e.clientX;
    };

    canvas.addEventListener('mousemove', handleCanvasMouseMove);
    canvas.addEventListener('mousedown', handleCanvasMouseDown);
    window.addEventListener('mouseup', handleCanvasMouseUp);
    canvas.addEventListener('mousemove', handleCanvasMouseMoveDrag);

    render2DUniverse();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleCanvasMouseMove);
        canvas.removeEventListener('mousedown', handleCanvasMouseDown);
        canvas.removeEventListener('mousemove', handleCanvasMouseMoveDrag);
      }
      window.removeEventListener('mouseup', handleCanvasMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, [onSelectCategory]);

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)] flex flex-col justify-between overflow-hidden" ref={containerRef}>
      {/* Visual background decorations */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(8,3,24,0.3)_0%,transparent_70%] pointer-events-none" />

      {/* Futuristic Header Telemetry */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 z-10 select-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col border-l border-cyan-500/30 pl-4 py-1"
        >
          <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">Telemetry System Active</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-sans mt-1">
            ACHIEVEMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">UNIVERSE</span>
          </h1>
          <p className="text-xs text-slate-400 max-w-sm mt-1">
            An orbital mapping of certifications, placements, badges, and learning milestones. Drag to rotate system core.
          </p>
        </motion.div>

        {/* Active Certificates Count HUD Card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col border border-cyan-500/20 bg-slate-950/65 backdrop-blur-md rounded-xl px-4 py-2 font-mono text-[11px] text-cyan-400 text-glow-cyan shadow-[0_0_15px_rgba(6,182,212,0.05)]"
        >
          ACTIVE CERTIFICATES: {achievementsData.length}
        </motion.div>

        {/* Operator Profile Telemetry HUD Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[480px] flex flex-col border border-cyan-500/20 bg-slate-950/65 backdrop-blur-md rounded-xl px-5 py-3.5 font-mono text-[11px] text-slate-300 gap-2.5 tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.06)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            {/* Avatar Frame with Cyber Effects */}
            <div className="relative flex-shrink-0 group">
              {/* Outer cyber rotating dashed ring */}
              <div className="absolute inset-0 -m-1.5 rounded-full border border-dashed border-cyan-500/40 animate-[spin_30s_linear_infinite] pointer-events-none" />
              {/* Pulsing neon outer circle */}
              <div className="absolute inset-0 -m-1 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors pointer-events-none" />
              {/* Image Container with Scanline effect */}
              <div className="relative w-[76px] h-[76px] rounded-full overflow-hidden border-2 border-cyan-400/30 bg-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.2)] hologram-scan select-none">
                <img 
                  src="/avatar.png" 
                  alt="Operator Avatar" 
                  className="w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-cyan-900/10 pointer-events-none mix-blend-overlay" />
              </div>
            </div>

            {/* Operator Telemetry Information */}
            <div className="flex-1 w-full flex flex-col gap-1.5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-1 border-b border-white/10 pb-1.5">
                <span className="text-cyan-400 font-bold text-glow-cyan text-[12px]">OPERATOR: VIJAYAPANDIAN T</span>
                <span className="text-purple-400 text-[10px]">B.E. CSE (PRE-FINAL)</span>
              </div>
              <div className="text-slate-200 text-[10px] sm:text-[11px]">INSTITUTION: SRM Easwari Engineering College</div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>LOC: Chennai, Tamil Nadu</span>
                <span>AGE: 18 (11.07.2007)</span>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="flex flex-col md:flex-row justify-between gap-x-6 gap-y-0.5 border-t border-white/10 pt-2 text-slate-400 text-[10px]">
            <span>EMAIL: vijayapandian112007@gmail.com</span>
            <span>PH: +91 8610554060</span>
          </div>

          {/* Coding & Social Profiles Grid */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 border-t border-white/10">
            <span className="text-[10px] text-cyan-500/80 mr-1 select-none font-bold">PROFILES:</span>
            {profiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                title={profile.name}
                className={`w-[26px] h-[26px] rounded-md flex items-center justify-center border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 cursor-pointer ${profile.colorClass}`}
              >
                {profile.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Galaxy Arena */}
      <div className="flex-1 w-full relative flex items-center justify-center my-4 min-h-[450px]">
        {/* Hover card floating HUD */}
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 md:top-8 w-11/12 max-w-md bg-glass border border-cyan-500/30 p-4 rounded-xl shadow-2xl z-20 pointer-events-none"
            style={{
              boxShadow: `0 0 25px ${hoveredNode.glowColor}, inset 0 0 10px rgba(6, 182, 212, 0.05)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center border text-white"
                style={{ borderColor: hoveredNode.color, backgroundColor: `${hoveredNode.color}20` }}
              >
                <hoveredNode.icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{hoveredNode.name}</h3>
                <p className="text-[11px] text-cyan-400 font-mono">{hoveredNode.stat}</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">{hoveredNode.description}</p>
            <div className="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>ORBITAL ANGLE: {(hoveredNode.angle * 57.29).toFixed(0)}°</span>
              <span className="text-cyan-400 animate-pulse">CLICK TO DECRYPT VAULT</span>
            </div>
          </motion.div>
        )}

        {/* 2D Canvas Fallback / Native render */}
        <div className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing">
          <canvas ref={canvas2DRef} className="w-full h-full block" />
        </div>
      </div>

      {/* Categories Fast Travel Grid */}
      <div className="w-full bg-black/40 border-t border-white/5 backdrop-blur-md py-4 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  playClick();
                  onSelectCategory(cat.name);
                }}
                className="flex flex-col items-center justify-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/20 transition-all text-center group cursor-pointer"
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110 text-white"
                  style={{ backgroundColor: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  <Icon size={16} style={{ color: cat.color }} />
                </div>
                <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                  {cat.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5 font-mono">
                  {getStats(cat.name)} entries
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
