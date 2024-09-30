import { cn } from '@/lib/utils';
import React, { PropsWithChildren, useState } from 'react';

interface Rotation {
  x: number;
  y: number;
}

const Card: React.FC<
  PropsWithChildren & { className?: string; classNameContainer?: string }
> = ({ children, className, classNameContainer }) => {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const rotationX = (deltaY / cardRect.height) * 80;
    const rotationY = (deltaX / cardRect.width) * -80;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={cn('card-container', classNameContainer)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={className}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className='h-full w-full'>{children}</div>
      </div>
    </div>
  );
};

export default Card;
