'use client';

import { useState } from 'react';

import Input, { InputProps } from './Input';
import VisibilityOffIcon from '../../../public/icons/VisibilityOffIcon.svg';
import VisibilityOnIcon from '../../../public/icons/VisibilityOnIcon.svg';
import { cn } from '../lib/cn';

//기존 Input 타입에서 label을 필수처리
type PasswordInput = Omit<InputProps, 'label'> & Required<Pick<InputProps, 'label'>>;

const PasswordInput = ({ label, error, helperText, ...props }: PasswordInput) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickToggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className='relative w-full md:max-w-110 xl:max-w-160'>
      <Input
        error={error}
        type={isVisible ? 'text' : 'password'}
        label={label}
        helperText={helperText}
        {...props}
      />
      {/* helperText가 있을 때와 없을 때 전체 높이가 달라져 버튼 위치를 조건부 스타일링 처리 */}
      <div
        className={cn('absolute top-[55%] right-5', {
          'top-[40%] right-5 xl:top-[42%]': helperText,
        })}
      >
        {isVisible ? (
          <button className='cursor-pointer' onClick={handleClickToggleVisibility}>
            <VisibilityOnIcon />
          </button>
        ) : (
          <button className='cursor-pointer' onClick={handleClickToggleVisibility}>
            <VisibilityOffIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
