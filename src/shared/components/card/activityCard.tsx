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
 * chipClassName: 칩 -> 스타일
 * className: 커스텀
 */
interface ActivityCardProps {
  title: string;
  variant: 'iconValue' | 'chip';
  value?: string | number;
  iconType?: 'star' | 'message';
  chipLabel?: string;
  chipClassName?: string;
  className?: string;
}

const CARD_BASE_STYLE =
  'bg-black-800 border-black-700 border flex w-full min-w-[105px] min-h-[119px] flex-col rounded-[12px] px-[26.5px] py-[20px] items-center gap-y-[15px]';
const TOP_BASE_STYLE = 'text-md-medium xl:text-base-medium text-gray-400';

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
  chipClassName,
  className,
}: ActivityCardProps) => {
  const renderContent = () => {
    /* 아이콘 + 값 */
    if (variant === 'iconValue' && iconType && value !== undefined) {
      const { component: IconComponent, colorClass } = ICON_MAP[iconType];
      return (
        <div className='flex items-center space-x-[5px]'>
          {/* 아이콘 부분 */}
          <div
            className={cn(
              'flex h-[20px] w-[20px] items-center justify-center xl:h-[24px] xl:w-[24px]',
              colorClass,
            )}
          >
            {IconComponent}
          </div>
          {/* 값 부분 (formatNumber로 숫자 포맷팅) */}
          <span className='text-xl-regular xl:text-2xl-regular text-white'>
            {formatNumber(value)}
          </span>
        </div>
      );
    }
    /* 칩 */
    if (variant === 'chip' && chipLabel) {
      return (
        <Chip variant='category' size='category' className={chipClassName}>
          {chipLabel}
        </Chip>
      );
    }

    return null;
  };

  return (
    <div className={cn(CARD_BASE_STYLE, className)}>
      {/* 상단 텍스트 */}
      <p className={cn(TOP_BASE_STYLE, className)}>{title}</p>
      {/* 하단 컨텐츠 */}
      {renderContent()}
    </div>
  );
};

export default ActivityCard;
