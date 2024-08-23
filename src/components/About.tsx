import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h2 className='text-[70px] font-extrabold uppercase text-primary'>
        About
      </h2>
      <div className='mx-auto mt-[110px] flex max-w-[1280px] flex-col gap-[130px] font-inter text-3xl italic'>
        <p>
          IT Consultant <span className='text-primary'>Challenge</span> là cuộc
          thi dành cho các bạn sinh viên đam mê công nghệ và lập trình. Cuộc thi
          được tổ chức nhằm định hướng phát triển nghề nghiệp, tạo cơ hội cho
          các bạn trẻ cọ xát với thực tiễn và môi trường làm việc chuyên nghiệp,
          đồng thời kết nối và khởi tạo cộng đồng những cá nhân đam mê và có khả
          năng trong lĩnh vực tư vấn công nghệ thông tin.
        </p>
        <p>
          Tham gia cuộc thi, các đội sẽ được tiếp cận với các bài toán thực tế
          trong lĩnh vực công nghệ thông tin, từ đó phát triển giải pháp đột phá
          và khả thi. Đây là cơ hội tuyệt vời để các bạn trẻ thể hiện tài năng,
          rèn luyện kỹ năng, và học hỏi từ các chuyên gia đầu ngành, đồng thời
          xây dựng mạng lưới kết nối quý báu trong ngành công nghệ.
        </p>
      </div>
    </div>
  );
};

export default About;
