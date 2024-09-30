import Card from 'react-animated-3d-card';
import '../../styles/globals.css';

const AnimatedCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card
      className={className}
      shineStrength={0.1}
      style={{
        background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        cursor: 'pointer',
      }}
      onClick={() => console.log('Hola')}
    >
      <div className='wrapper'>
        <div className='clash-card wizard'>
          <div className='clash-card__image clash-card__image--wizard'>
            {children}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AnimatedCard;
