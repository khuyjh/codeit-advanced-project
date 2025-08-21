import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/lib/chipUtils';

const chipVariants = cva(
  'inline-flex items-center justify-center font-semibold whitespace-nowrap transition-colors',
  {
    variants: {
      /* 종류별 칩 스타일, 커스텀 가능 */
      size: {
        ranking: 'h-[18px] rounded-[50px] px-[8px] py-[2px] text-sm-regular',
        category: 'h-[29px] rounded-[8px] px-[10px] py-[4px] text-sm',
        filter: 'h-[30px] rounded-full px-[12px] py-[6px] text-sm',
        thumbs: 'h-[30px] rounded-full px-[12px] py-[6px] text-sm',
        compare: 'h-[35px] rounded-[6px] px-[10px] py-[8px] text-sm',
      },
      clickable: {
        true: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'filter',
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, size, clickable, ...props }, ref) => {
    return (
      <div className={cn(chipVariants({ size, clickable }), className)} ref={ref} {...props} />
    );
  },
);
Chip.displayName = 'Chip';

export { Chip, chipVariants };
