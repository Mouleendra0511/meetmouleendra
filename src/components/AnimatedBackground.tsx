export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-float animation-delay-200" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float animation-delay-400" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};
