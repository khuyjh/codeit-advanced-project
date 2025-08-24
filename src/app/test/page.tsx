import React from 'react';

import ActivityCard from '@/shared/components/card/activityCard';

const TestPage = () => {
  return (
    <div>
      <h1>Activity Card 테스트 페이지</h1>
      <ActivityCard title='남긴 별점 평균' variant='iconValue' value={4.1} iconType='star' />

      <ActivityCard title='남긴 리뷰 수' variant='iconValue' value={125} iconType='message' />

      <ActivityCard
        title='관심 카테고리'
        variant='chip'
        chipLabel='전자기기'
        chipClassName='bg-[#23B5811A] text-[#23B581]'
      />
    </div>
  );
};

export default TestPage;
