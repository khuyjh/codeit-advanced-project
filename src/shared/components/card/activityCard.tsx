import { Star, MessageSquare } from 'lucide-react';
import React from 'react';

import { Chip } from '@/shared/components/chip';
import { cn } from '@/shared/lib/cn';
import { formatNumber } from '@/shared/utils/formatters';

/*
 * title: 상단 텍스트
 * variant: 하단 UI
 * value: 아이콘 -> 값
 * iconType: 아이콘
 * chipLabel: 칩 -> 텍스트
 * className: 커스텀
 */
interface ActivityCardProps {
  title: string;
  variant: 'iconValue' | 'chip';
  value?: string | number;
  iconType?: 'star' | 'message';
  chipLabel?: string;
  className?: string;
}

const CARD_BASE_STYLE = 'bg-black-800 border-black-700 border';

const ICON_MAP = {
  star: { component: <Star fill='currentColor' />, colorClass: 'text-yellow' },
  message: { component: <MessageSquare fill='currentColor' />, colorClass: 'text-blue-500' },
};

const ActivityCard = ({
  title,
  variant,
  value,
  iconType,
  chipLabel,
  className,
}: ActivityCardProps) => {
  const renderContent = () => {
    /* 아이콘 + 값 */
    if (variant === 'iconValue' && iconType && value !== undefined) {
      const { component: IconComponent, colorClass } = ICON_MAP[iconType];
      return (
        <div className='flex items-center space-x-[5px]'>
          {/* 아이콘 부분 */}
          <div className={cn('flex h-[20px] w-[20px] items-center justify-center', colorClass)}>
            {IconComponent}
          </div>
          {/* 값 부분 (formatNumber로 숫자 포맷팅) */}
          <span className='text-base-light md:text-xl-light xl:text-2xl-light text-gray-400'>
            {formatNumber(value)}
          </span>
        </div>
      );
    }
    /* 칩 */
    if (variant === 'chip' && chipLabel) {
      return (
        <Chip variant='category' size='category'>
          {chipLabel}
        </Chip>
      );
    }

    return null;
  };

  return (
    <div className={cn(CARD_BASE_STYLE, className)}>
      {/* 상단 텍스트 */}
      <p className='text-md-medium md:text-base-medium xl:text-lg-medium text-white'>{title}</p>
      {/* 하단 컨텐츠 */}
      {renderContent()}
    </div>
  );
};

export default ActivityCard;
