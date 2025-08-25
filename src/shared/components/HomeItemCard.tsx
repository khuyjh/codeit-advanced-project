//홈 페이지 아이템 카드 컴포넌트
import Image from 'next/image';

import { Star } from 'lucide-react';
import React from 'react';

const HomeItemCard = () => {
  return (
    // 가장 바깥 컨테이너 - width값을 가장 바깥인 부모 컨테이너에만 적용 !!여전히 반응형 문제. min-w, max-w 로 할지 고정값으로 할지 결정할 것
    <div className='border-black-700 bg-black-800 h-auto w-full max-w-[300px] min-w-[160px] rounded-lg border p-[10px]'>
      {/* 아이템 요소 컨테이너 */}
      <div className='flex w-full flex-col gap-[10px]'>
        {/* 이미지 컨테이너 - api 이미지 비율이 다를 경우 깨질 수 있어 고정 값 대신 해당 사항 적용*/}
        <div className='relative aspect-[14/9] w-full'>
          <Image src='/images/testImage.png' alt='테스트 이미지' fill className='object-contain' />
        </div>
        {/* 제목 및 값 섹션 */}
        <div className='w-full'>
          {/* 제목 - 너무 길어지면 truncate로 ...처리 */}
          <div>
            <h3 className='text-md-medium md:text-base-medium xl:text-lg-medium truncate text-white'>
              테스트용 제목
            </h3>
          </div>
          {/* 리뷰, 찜, 별점 컨테이너 - 크기 줄어들면 요소들 줄바꿈 되도록  */}
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
            {/* 리뷰 */}
            <div className='text-sm-regular md:text-md-regular xl:text-base-regular flex items-center gap-1 text-gray-600'>
              <span>리뷰</span>
              {/* 리뷰 개수 */}
              <span>400</span>
            </div>
            {/* 찜 */}
            <div className='text-sm-regular md:text-md-regular xl:text-base-regular flex items-center gap-1 text-gray-600'>
              <span>찜</span>
              {/* 찜 개수 */}
              <span>30</span>
            </div>
            {/* 별점 컨테이너 */}
            <div className='order-last flex basis-full items-center gap-1 md:order-none md:ml-auto md:basis-auto'>
              {/* 별 아이콘 lucide 사용 */}
              <Star className='h-auto w-[12px] fill-yellow-400 stroke-yellow-400 md:w-[15px] xl:w-[16px]' />
              {/* 별점 */}
              <span className='text-sm-regular md:text-md-regular xl:text-base-regular text-gray-400'>
                4.5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItemCard;
