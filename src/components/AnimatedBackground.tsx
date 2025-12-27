import { useParallax, useMouseParallax } from "@/hooks/useParallax";

export const AnimatedBackground = () => {
  const parallaxSlow = useParallax({ speed: 0.1 });
  const parallaxMedium = useParallax({ speed: 0.2 });
  const parallaxFast = useParallax({ speed: 0.3 });
  const mousePosition = useMouseParallax(0.02);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated gradient orbs with parallax */}
      <div 
        className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-float transition-transform duration-100"
        style={{ 
          transform: `translate(${mousePosition.x * 1.5}px, ${parallaxSlow + mousePosition.y * 1.5}px)` 
        }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-float animation-delay-200 transition-transform duration-100"
        style={{ 
          transform: `translate(${mousePosition.x * -1}px, ${parallaxMedium + mousePosition.y * -1}px)` 
        }}
      />
      <div 
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float animation-delay-400 transition-transform duration-100"
        style={{ 
          transform: `translate(${mousePosition.x * 0.8}px, ${parallaxFast + mousePosition.y * 0.8}px)` 
        }}
      />

      {/* Additional floating particles with parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/40 rounded-full blur-sm particle"
        style={{ transform: `translateY(${parallaxFast * 2}px)` }}
      />
      <div 
        className="absolute top-2/3 right-1/4 w-3 h-3 bg-accent/50 rounded-full blur-sm particle"
        style={{ transform: `translateY(${parallaxMedium * 2}px)`, animationDelay: "1s" }}
      />
      <div 
        className="absolute top-1/2 left-1/6 w-2 h-2 bg-primary/30 rounded-full blur-sm particle"
        style={{ transform: `translateY(${parallaxSlow * 2}px)`, animationDelay: "2s" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-accent/30 rounded-full blur-sm particle"
        style={{ transform: `translateY(${parallaxFast * 1.5}px)`, animationDelay: "0.5s" }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${parallaxSlow * 0.5}px)`
        }}
      />

      {/* Subtle radial glow that follows scroll */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] transition-transform duration-300"
        style={{ 
          transform: `translate(calc(-50% + ${mousePosition.x * 0.5}px), calc(-50% + ${mousePosition.y * 0.5}px))` 
        }}
      />
    </div>
  );
};
