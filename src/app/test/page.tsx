import StatisticsCard from '@/shared/components/card/statisticsCard';

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col space-y-6 bg-gray-900 p-10'>
      <StatisticsCard
        title='별점 평균'
        iconType='star'
        value={4.9}
        comparisonText='같은 카테고리의 제품들보다 0.8점 더 높아요!'
      />
      <StatisticsCard
        title='찜'
        iconType='heart'
        value={566}
        comparisonText='같은 카테고리의 제품들보다 23개 더 적어요!'
      />
      <StatisticsCard
        title='리뷰'
        iconType='message'
        value={4123}
        comparisonText='같은 카테고리의 제품들보다 186개 더 많아요!'
      />
    </div>
  );
}
