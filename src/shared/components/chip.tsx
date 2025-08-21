import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/lib/chipUtils';

const baseChipClasses =
  'inline-flex items-center justify-center font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const chipVariants = cva(baseChipClasses, {
  variants: {
    size: {
      ranking: 'h-[18px] rounded-[50px] px-[8px] py-[2px] text-sm-regular',
      category: 'h-[29px] rounded-[8px] px-[10px] py-[4px] text-lg-medium',
      filter: 'h-[30px] rounded-full px-[12px] py-[6px] text-md-regular',
      thumbs: 'h-[30px] rounded-full px-[12px] py-[6px] text-md-regular',
      compare: 'h-[35px] rounded-[6px] px-[10px] py-[8px] text-base-regular',
    },
    clickable: {
      true: 'cursor-pointer hover:opacity-80',
    },
  },
  defaultVariants: {
    size: 'category',
  },
});

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

function Chip({ className, size, clickable, ...props }: ChipProps) {
  return <div className={cn(chipVariants({ size, clickable }), className)} {...props} />;
}

export { Chip, chipVariants };
