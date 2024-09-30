import { type ComponentProps } from 'react';

interface HexagonBackgroundProps extends ComponentProps<'svg'> {}

export default function HexagonBackground(props: HexagonBackgroundProps) {
  return (
    <svg
      width='1685'
      height='946'
      viewBox='0 0 1685 946'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_b_107_329)'>
        <path
          d='M639.347 1H21C9.95431 1 1 9.95428 1 21V924.971C1 936.028 9.97167 944.987 21.0285 944.971L1664.03 942.633C1675.06 942.617 1684 933.667 1684 922.633V108.102C1684 97.0566 1675.05 88.1022 1664 88.1022H1175.3H755.42C750.633 88.1022 746.004 86.3851 742.375 83.2629L652.391 5.83939C648.763 2.7171 644.134 1 639.347 1Z'
          fill='url(#paint0_linear_107_329)'
          fillOpacity='0.4'
        />
        <path
          d='M639.347 1H21C9.95431 1 1 9.95428 1 21V924.971C1 936.028 9.97167 944.987 21.0285 944.971L1664.03 942.633C1675.06 942.617 1684 933.667 1684 922.633V108.102C1684 97.0566 1675.05 88.1022 1664 88.1022H1175.3H755.42C750.633 88.1022 746.004 86.3851 742.375 83.2629L652.391 5.83939C648.763 2.7171 644.134 1 639.347 1Z'
          stroke='url(#paint1_linear_107_329)'
        />
      </g>
      <defs>
        <filter
          id='filter0_b_107_329'
          x='-23.5'
          y='-23.5'
          width='1732'
          height='992.971'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='12' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_107_329'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_107_329'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_107_329'
          x1='-102.764'
          y1='-39.731'
          x2='1600.29'
          y2='841.435'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D9D9D9' stopOpacity='0.2' />
          <stop offset='1' stopColor='#737373' stopOpacity='0.1' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_107_329'
          x1='1'
          y1='1'
          x2='1702.78'
          y2='15.1167'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='#80FFF7' stopOpacity='0.6' />
        </linearGradient>
      </defs>
    </svg>
  );
}
