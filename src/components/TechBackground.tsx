export const TechBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="0"
              y1="80"
              x2="100"
              y2="80"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Vertical lines */}
            <line
              x1="30"
              y1="0"
              x2="30"
              y2="100"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="70"
              y1="0"
              x2="70"
              y2="100"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              opacity="0.3"
            />
            {/* Circuit nodes */}
            <circle cx="30" cy="20" r="2" fill="hsl(var(--primary))" opacity="0.5" />
            <circle cx="70" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.5" />
            <circle cx="30" cy="80" r="2" fill="hsl(var(--primary))" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>

      {/* Floating computer outlines */}
      <div className="absolute top-20 left-10 w-32 h-24 border-2 border-primary/20 rounded-lg animate-float" />
      <div className="absolute top-40 right-20 w-24 h-20 border-2 border-primary/20 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-28 h-22 border-2 border-primary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};
