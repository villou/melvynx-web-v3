import { useSpring, animated } from '@react-spring/web';

export default function WaveDivider() {
  const [{ svgRight }] = useSpring(() => ({
    from: { svgRight: 0 },
    to: { svgRight: 24 },
    loop: true,
    config: {
      duration: 1500,
    },
  }));

  return (
    <div className="flex p-2 items-center justify-center">
      <div className="overflow-hidden" style={{ width: 150 }}>
        <animated.svg
          data-testid="wave-divider"
          style={{
            position: 'relative',
            right: svgRight,
            maxWidth: 'unset',
            width: 180,
          }}
          width="192" // for 8 thing => 24PX
          height="14"
          viewBox="0 0 192 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M-2.00012 6.99999C0.166593 0.333339 8.08317 0.333337 10.2499 6.99998C12.4166 13.6666 20.3331 13.6666 22.4999 6.99999C24.6666 0.333344 32.5832 0.333342 34.7499 6.99999C36.9166 13.6666 44.8331 13.6666 46.9999 6.99999C49.1666 0.333348 57.0832 0.333346 59.2499 6.99999C61.4166 13.6666 69.3331 13.6666 71.4999 7C73.6666 0.333352 81.5832 0.33335 83.7499 7C85.9166 13.6666 93.8332 13.6666 95.9999 7C98.1666 0.333356 106.083 0.333354 108.25 7C110.417 13.6666 118.333 13.6666 120.5 7.00001C122.667 0.333361 130.583 0.333358 132.75 7C134.917 13.6666 142.833 13.6667 145 7.00001C147.167 0.333365 155.083 0.333363 157.25 7.00001C159.417 13.6667 167.333 13.6667 169.5 7.00001C171.667 0.333369 179.583 0.333367 181.75 7.00001C183.917 13.6667 191.833 13.6667 194 7.00002"
              stroke="#28F1FE"
              strokeWidth="4"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="192" height="14" fill="white" />
            </clipPath>
          </defs>
        </animated.svg>
      </div>
    </div>
  );
}
