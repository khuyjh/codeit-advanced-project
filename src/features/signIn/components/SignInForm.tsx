'use client';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import PasswordInput from '@/shared/components/PasswordInput';

const SignInForm = () => {
  return (
    <form className='mx-auto flex flex-col gap-[30px] md:w-110 md:gap-10 xl:w-160'>
      <Input
        label='이메일'
        id='email'
        type='email'
        autoComplete='email'
        placeholder='이메일을 입력해 주세요'
      />
      <PasswordInput label='비밀번호' id='password' placeholder='비밀번호를 입력해 주세요' />
      <Button className='max-w-auto mt-[30px] md:mt-5' type='submit'>
        로그인
      </Button>
    </form>
  );
};
export default SignInForm;
