//공용 드롭다운 ui
'use client';

import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Dropdown = () => {
  return (
    <div className='bg-color-black-800 p-6'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <span className='text-gray-600'>카테고리 선택</span>
            {/* 열림 아이콘 */}
            {/* 닫힘 아이콘 */}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>카테고리 1</DropdownMenuItem>
          <DropdownMenuItem>카테고리 2</DropdownMenuItem>
          <DropdownMenuItem>카테고리 3</DropdownMenuItem>
          <DropdownMenuItem>카테고리 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
