import { Star, Heart, MessageSquare } from 'lucide-react';
import React from 'react';

interface StatisticsCardProps {
  title: string;
  value: string | number;
  iconType: 'star' | 'heart' | 'message';
  comparisonText: string;
}

const StatisticsCard = ({ title, value, iconType, comparisonText }: StatisticsCardProps) => {
  const iconMap = {
    star: { component: <Star fill='currentColor' />, colorClass: 'text-yellow-400' },
    heart: { component: <Heart fill='currentColor' />, colorClass: 'text-red-500' },
    message: { component: <MessageSquare fill='currentColor' />, colorClass: 'text-blue-500' },
  };

  const iconData = iconMap[iconType] || { component: null, colorClass: '' };
  const { component: IconComponent, colorClass } = iconData;

  if (!IconComponent) {
    console.error(`Invalid iconType: ${iconType}`);
    return null;
  }

  return (
    <div className='flex h-[82px] w-[335px] flex-col items-center justify-center rounded-xl bg-gray-800 p-4 shadow-lg md:h-[169px] md:w-[218px] md:p-6 xl:h-[190px] xl:w-[300px] xl:p-8'>
      {/* 제목 및 값 섹션 */}

      <div className='mb-0 flex items-center justify-center space-x-2 md:mb-4 md:flex-col md:items-center md:space-x-0'>
        {/* 제목 */}
        <p className='text-center text-sm text-gray-400 md:text-base xl:text-base'>{title}</p>

        {/* 아이콘 및 값 */}
        <div className='flex items-center space-x-2'>
          {/* 아이콘 */}
          <div className={`h-4 w-4 md:h-6 md:w-6 xl:h-6 xl:w-6 ${colorClass}`}>{IconComponent}</div>
          {/* 값 */}
          <span className={`text-xl font-bold ${colorClass} md:text-3xl xl:text-3xl`}>{value}</span>
        </div>
      </div>

      {/* 하단 비교 텍스트 */}
      <p className='text-center text-xs text-gray-400 md:text-sm xl:text-sm'>{comparisonText}</p>
    </div>
  );
};

export default StatisticsCard;
