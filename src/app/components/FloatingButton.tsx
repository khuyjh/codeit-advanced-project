'use client';

import { Plus } from 'lucide-react';

interface FloatingButtonProps {
  /** 버튼 클릭 핸들러 @todo 작품 추가 모달로 교체 */
  onClick?: () => void;
  /** 현재는 항상 true, @todo 로그인 여부와 연동 */
  isVisible?: boolean;
}

/**
 * 메인 페이지 우측 하단 플로팅 버튼
 * @todo 로그인 가드, 모달 연동
 */
export default function FloatingButton({ onClick, isVisible = true }: FloatingButtonProps) {
  if (!isVisible) return null; // @todo 로그인 여부 판별 시 조건 교체

  return (
    <button
      type='button'
      onClick={onClick}
      aria-label='작품 추가'
      className='bg-main hover:bg-red fixed right-5 bottom-5 z-50 h-[60px] w-[60px] rounded-full text-white focus:ring-1 focus:ring-white focus:ring-offset-1 focus:outline-none active:opacity-80 md:right-[30px] md:bottom-6 xl:right-[180px] xl:bottom-10'
    >
      <Plus className='mx-auto size-10' strokeWidth={1} />
    </button>
  );
}
