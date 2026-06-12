const TechSkillBadge = ({ short, color }) => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <div
      className="flex flex-col items-center justify-center gap-4 rounded-2xl border px-8 py-10 backdrop-blur-md"
      style={{
        borderColor: `${color}40`,
        backgroundColor: `${color}12`,
        boxShadow: `0 0 40px ${color}20`,
      }}
    >
      <div
        className="size-4 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 16px ${color}`,
        }}
      />
      <span
        className="font-mono text-3xl 2xl:text-4xl font-bold tracking-wider"
        style={{ color }}
      >
        {short}
      </span>
    </div>
  </div>
);

export default TechSkillBadge;
