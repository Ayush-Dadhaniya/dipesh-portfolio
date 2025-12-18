const ShinyText = ({ text, disabled = false, speed = 15, className = '' }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`text-transparent text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold bg-clip-text inline-block overflow-hidden break-words ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, #fff 40%, #1daaf1ff 50%, #fff 10%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };
  
  export default ShinyText;