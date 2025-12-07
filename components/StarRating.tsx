// components/StarRating.tsx
// Componente para exibir rating com estrelas (0-5)

type Props = {
  rating: number; // 0 a 5 (pode ser decimal, ex: 4.5)
  size?: "sm" | "md" | "lg";
  showNumber?: boolean; // Se deve mostrar o número ao lado
  className?: string;
};

export default function StarRating({ 
  rating, 
  size = "md", 
  showNumber = false,
  className = "" 
}: Props) {
  // Garante que rating está entre 0 e 5
  const normalizedRating = Math.max(0, Math.min(5, rating));
  
  // Tamanhos das estrelas
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };
  
  const starSize = sizeClasses[size];
  
  // Gera array de 5 estrelas
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    const isFull = normalizedRating >= starValue;
    const isHalf = normalizedRating >= starValue - 0.5 && normalizedRating < starValue;
    
    return (
      <span key={index} className={`${starSize} inline-block ${className}`}>
        {isFull ? (
          <span className="text-emerald-500">★</span>
        ) : isHalf ? (
          <span className="text-emerald-500 relative">
            <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
              ★
            </span>
            <span className="text-slate-300">★</span>
          </span>
        ) : (
          <span className="text-slate-300">★</span>
        )}
      </span>
    );
  });
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center" aria-label={`Rating: ${normalizedRating} out of 5 stars`}>
        {stars}
      </div>
      {showNumber && (
        <span className="text-sm text-slate-600 ml-1">
          {normalizedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}



