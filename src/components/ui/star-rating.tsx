import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  showRating?: boolean
  className?: string
  readonly?: boolean
  onRatingChange?: (rating: number) => void
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showRating = false,
  className,
  readonly = true,
  onRatingChange
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }

  const handleStarClick = (starRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starRating)
    }
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const starRating = index + 1
          const isFilled = starRating <= Math.floor(rating)
          const isHalfFilled = starRating === Math.ceil(rating) && rating % 1 !== 0

          return (
            <Star
              key={index}
              className={cn(
                sizeClasses[size],
                'transition-colors',
                isFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : isHalfFilled
                  ? 'fill-yellow-400/50 text-yellow-400'
                  : 'text-gray-300',
                !readonly && 'cursor-pointer hover:text-yellow-400'
              )}
              onClick={() => handleStarClick(starRating)}
            />
          )
        })}
      </div>
      {showRating && (
        <span className="text-sm text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}