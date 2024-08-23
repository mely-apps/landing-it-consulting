import React from 'react';

const Rules = () => {
  return (
    <div className='container mt-44 rounded-lg border-2 px-20 py-10 backdrop-blur-sm'>
      <div className='grid grid-cols-4'>
        <h2 className='col-span-1 text-[70px] font-extrabold uppercase text-primary'>
          Rules
        </h2>
        <div className='col-span-3'>
          <p className='text-3xl italic'>
            &quot;Các team lựa chọn một case study từ challenge đến từ BTC, từ
            đó phân tích và thiết kế ra các ý tưởng, giải pháp để giải quyết các
            vấn đề được đặt ra. Giải thưởng sẽ được trao cho những ý tưởng có
            tính khả thi, sáng tạo và mang tính teamwork&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
