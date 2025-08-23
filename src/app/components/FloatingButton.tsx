'use client';

import { Plus } from 'lucide-react';

interface FloatingButtonProps {
  /** 현재는 항상 true, @todo 로그인 여부와 연동 */
  isVisible?: boolean;
}

/**
 * 메인 페이지 우측 하단 플로팅 버튼
 * @todo 로그인 가드, 모달 연동
 */
export default function FloatingButton({ isVisible = true }: FloatingButtonProps) {
  if (!isVisible) return null; // @todo 로그인 여부 판별 시 조건 교체

  const handleClick = () => {
    console.log('작품 추가 버튼 클릭'); // @todo 모달 오픈 로직으로 교체
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-label='작품 추가'
      className='bg-main hover:bg-red fixed right-5 bottom-10 z-50 h-[60px] w-[60px] rounded-full text-white focus:ring-1 focus:ring-white focus:ring-offset-1 focus:outline-none active:opacity-80 md:right-[30px] md:bottom-[60px] xl:right-[180px] xl:bottom-[90px]'
    >
      <Plus className='mx-auto size-10' strokeWidth={1} />
    </button>
  );
}
