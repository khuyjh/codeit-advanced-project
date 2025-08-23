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

  const CARD_BASE_STYLE =
    'bg-black-800 border-black-700 border flex h-[82px] w-[335px] flex-col rounded-[12px] px-[20px] py-[20px] md:h-[169px] md:w-[218px] md:px-[43.5px] md:py-[30px] md:space-y-[15px] xl:h-[190px] xl:w-[300px] xl:px-[74px] xl:py-[30px]';

  const CONTENT_ALIGNMENT_STYLE = 'justify-start items-start md:justify-center md:items-center';

  return (
    <div className={`${CARD_BASE_STYLE} ${CONTENT_ALIGNMENT_STYLE}`}>
      {/* 제목 및 값 섹션 */}
      <div className='mb-[5px] flex items-center justify-between space-x-2.5 md:flex-col md:items-center md:space-x-0'>
        {/* 제목 */}
        <p className='text-md-medium md:text-base-medium xl:text-lg-medium text-white'>{title}</p>

        {/* 아이콘 및 값 */}
        <div className='flex items-center space-x-[5px]'>
          {/* 아이콘 */}
          <div
            className={`h-[19px] w-[19px] md:h-[20px] md:w-[20px] xl:h-[24px] xl:w-[24px] ${colorClass} flex items-center justify-center`}
          >
            {IconComponent}
          </div>
          {/* 값 */}
          <span className={`text-[16px] font-light text-[#9FA6B2] md:text-3xl xl:text-3xl`}>
            {value}
          </span>
        </div>
      </div>

      {/* 하단 비교 텍스트 */}
      <p className='text-xs-light md: text-center text-gray-400 xl:text-[14px] xl:font-light'>
        {comparisonText}
      </p>
    </div>
  );
};

export default StatisticsCard;
