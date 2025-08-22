// 비교 페이지
'use client';

import { useState } from 'react';

import Dropdown from '@/shared/components/Dropdown';
const CATEGORIES = [
  { name: 'category1', value: 1 },
  { name: 'category2', value: 2 },
  { name: 'category3', value: 3 },
  { name: 'category4', value: 4 },
];

const ComparePage = () => {
  const [selected, setSelected] = useState<string | number | boolean | null>(null);

  return (
    <div>
      <Dropdown options={CATEGORIES} onChange={(v) => setSelected(v)} />
    </div>
  );
};

export default ComparePage;
