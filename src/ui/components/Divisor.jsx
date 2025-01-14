const colorMap = {
  primary: 'via-primary-main',
  secondary: 'via-secondary-main',
};

export function Divisor({ tailwindColor = 'secondary' }) {
  const color = colorMap[tailwindColor] || colorMap.primary;

  return (
    <div
      className={`from-transparent ${color} h-1 bg-gradient-to-r to-transparent`}
    />
  );
}
