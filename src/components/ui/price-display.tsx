import { cn } from '@/lib/utils'

interface PriceDisplayProps {
  price: number
  salePrice?: number | null
  className?: string
  showCurrency?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function PriceDisplay({ 
  price, 
  salePrice, 
  className,
  showCurrency = true,
  size = 'md'
}: PriceDisplayProps) {
  const effectivePrice = salePrice ?? price
  const hasDiscount = salePrice && salePrice < price
  const currency = showCurrency ? '€' : ''

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn('font-bold', sizeClasses[size])}>
        {currency}{effectivePrice.toFixed(2)}
      </span>
      {hasDiscount && (
        <span className={cn(
          'text-muted-foreground line-through',
          size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
        )}>
          {currency}{price.toFixed(2)}
        </span>
      )}
    </div>
  )
}