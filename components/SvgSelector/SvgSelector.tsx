import React from 'react';
import Svg, { G, Path, Polygon, Rect } from 'react-native-svg';

type TSvgSelectorProps = {
  id: 'checkbox-checked' | 'checkbox-unchecked' | 'trash';
  className?: string;
  style?: Record<string, string>;
};

type TSvgMapItem = Record<string, JSX.Element>;

const SvgSelector: React.FC<TSvgSelectorProps> = ({ id, className, style }) => {
  const svgMap: TSvgMapItem = {
    placeholder: (
      <Svg viewBox="0 0 249.99 199.99">
        <>
          <Rect
            x="9"
            y="9"
            width="232"
            height="182"
            rx="17.99"
            strokeMiterlimit="10"
            strokeWidth="17.99"
            fill="#000"
            stroke="#000"
          />
          <Polygon points="35 165 35 140.64 75.47 100.17 95.64 120.35 161 55 214.5 108.5 214.5 165 35 165" />
          <Path
            d="M83,84c-.54,31.55-47.47,31.54-48,0C35.54,52.45,82.47,52.46,83,84Z"
            transform="translate(0 -25)"
          />
        </>
      </Svg>
    ),
    'checkbox-checked': (
      <Svg width="37" height="37" viewBox="0 0 37 37">
        <Path
          d="M24.7563 3.5H12.1863C6.72627 3.5 3.47127 6.755 3.47127 12.215L3.47127 24.77C3.47127 30.245 6.72627 33.5 12.1863 33.5H24.7413C30.2013 33.5 33.4563 30.245 33.4563 24.785L33.4563 12.215C33.4713 6.755 30.2163 3.5 24.7563 3.5ZM25.6413 15.05L17.1363 23.555C16.9263 23.765 16.6413 23.885 16.3413 23.885C16.0413 23.885 15.7563 23.765 15.5463 23.555L11.3013 19.31C10.8663 18.875 10.8663 18.155 11.3013 17.72C11.7363 17.285 12.4563 17.285 12.8913 17.72L16.3413 21.17L24.0513 13.46C24.4863 13.025 25.2063 13.025 25.6413 13.46C26.0763 13.895 26.0763 14.6 25.6413 15.05Z"
          fill="#469D3E"
        />
      </Svg>
    ),
    'checkbox-unchecked': (
      <Svg width="37" height="37" viewBox="0 0 37 37" fill="none">
        <Path
          d="M13.9713 33.5H22.9713C30.4713 33.5 33.4713 30.5 33.4713 23L33.4713 14C33.4713 6.5 30.4713 3.5 22.9713 3.5H13.9713C6.47127 3.5 3.47127 6.5 3.47127 14L3.47127 23C3.47127 30.5 6.47127 33.5 13.9713 33.5Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          opacity="0.34"
          d="M12.0963 18.5L16.3413 22.745L24.8463 14.255"
          stroke="#3B3B3B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
    trash: (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.78999C5.99999 22 5.90999 20.78 5.79999 19.21L5.14999 9.14"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.33 16.5H13.66"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.5 12.5H14.5"
          stroke="#6F767E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  };

  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id "${id}" doesn't exist`);
    return svgMap.placeholder;
  }

  return svgMap[id];
};

export default React.memo(SvgSelector);
