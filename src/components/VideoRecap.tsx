'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SECTION_IDS } from '@/constants';

const VideoRecap = () => {
  const t = useTranslations('root');

  return (
    <div>
      <div className='mx-auto max-w-5xl'>
        <div className='relative overflow-hidden rounded-2xl border-4 border-[#80FFF7] bg-black/20 shadow-2xl backdrop-blur-sm'>
          <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
            {/* Facebook Video Embed */}
            <iframe
              src='https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcode.mely%2Fvideos%2F1684514488788330%2F&show_text=false&width=560&t=0'
              style={{
                border: 'none',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
              scrolling='no'
              frameBorder={0}
              allowFullScreen={true}
              allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRecap;
