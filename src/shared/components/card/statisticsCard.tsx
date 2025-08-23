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
    star: { component: <Star fill='currentColor' />, colorClass: 'text-yellow' },
    heart: { component: <Heart fill='currentColor' />, colorClass: 'text-red' },
    message: { component: <MessageSquare fill='currentColor' />, colorClass: 'text-blue-500' },
  };

  const { component: IconComponent, colorClass } = iconMap[iconType];
  const formattedValue = typeof value === 'number' ? value.toLocaleString('ko-KR') : value; //한국식 숫자 단위

  const CARD_BASE_STYLE =
    'bg-black-800 border-black-700 border flex h-[82px] w-[335px] flex-col rounded-[12px] px-[20px] py-[20px] md:h-[169px] md:w-[218px] md:px-[40px] md:py-[30px] xl:h-[190px] xl:w-[300px] xl:px-[70px] xl:py-[30px]';

  const CONTENT_ALIGNMENT_STYLE = 'justify-center items-start md:justify-center md:items-center';

  return (
    <div className={`${CARD_BASE_STYLE} ${CONTENT_ALIGNMENT_STYLE} md:gap-y-[15px]`}>
      {/* 제목 및 값 섹션 */}
      <div className='mb-[5px] flex items-center justify-between space-x-2.5 md:flex-col md:items-center md:space-x-0 md:gap-y-[15px]'>
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
          <span className={`text-base-light md:text-xl-light xl:text-2xl-light text-gray-400`}>
            {formattedValue}
          </span>
        </div>
      </div>

      {/* 하단 비교 텍스트 */}
      <p className='text-xs-light md:text-xs-light xl:text-md-light text-gray-400 md:text-center'>
        {comparisonText}
      </p>
    </div>
  );
};

export default StatisticsCard;
