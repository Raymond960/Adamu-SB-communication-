import React from 'react';

interface AsbLogoProps {
  variant?: 'horizontal' | 'centered' | 'iconOnly' | 'exactImage';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showTagline?: boolean;
}

export const AsbLogo: React.FC<AsbLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Dimensions and scaling based on size
  const iconSizes = {
    sm: { w: 32, h: 32 },
    md: { w: 48, h: 48 },
    lg: { w: 80, h: 80 },
    xl: { w: 140, h: 140 },
    '2xl': { w: 220, h: 220 },
  };

  const currentIcon = iconSizes[size] || iconSizes.md;

  // The EXACT pure solid white official ASB Emblem SVG matching the user's image
  const ExactWhiteEmblem = (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg
        viewBox="0 0 500 500"
        className="overflow-visible"
        style={{ width: currentIcon.w, height: currentIcon.h }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
          {/* Wave 1 - Outer broadcast arch: Pure White */}
          <path d="M2320 4175 c-227 -37 -456 -145 -619 -292 l-54 -49 52 -52 52 -52 83 68 c322 259 762 313 1133 137 108 -51 183 -99 254 -162 l50 -46 55 54 55 54 -33 28 c-188 161 -376 257 -593 302 -108 23 -327 28 -435 10z" />
          
          {/* Wave 2 - Middle broadcast arch: Pure White */}
          <path d="M2395 3884 c-181 -27 -362 -109 -498 -226 l-38 -33 55 -54 55 -54 51 45 c67 59 186 121 285 149 103 30 295 33 395 6 92 -25 213 -85 294 -146 l69 -52 48 47 c27 27 49 52 49 56 0 20 -146 125 -235 169 -135 66 -231 90 -380 94 -66 2 -133 1 -150 -1z" />
          
          {/* Wave 3 - Inner broadcast arch: Pure White */}
          <path d="M2352 3570 c-87 -23 -178 -70 -235 -121 l-42 -38 52 -52 51 -52 33 27 c86 72 208 111 328 103 103 -6 180 -33 253 -88 29 -21 55 -39 58 -39 3 0 28 23 55 51 l50 50 -40 35 c-144 122 -374 173 -563 124z" />
          
          {/* Main Monogram - Intertwined A, S, B: Pure White */}
          <path d="M1759 3203 c-6 -16 -92 -226 -193 -468 l-182 -440 -30 2 c-204 15 -221 15 -287 -1 -189 -44 -308 -161 -338 -330 -14 -83 -6 -96 15 -24 42 142 160 221 336 221 100 1 177 -19 269 -70 104 -56 173 -115 401 -338 217 -213 306 -283 445 -353 145 -72 324 -108 489 -99 273 15 467 137 546 342 34 86 34 253 0 340 -64 166 -153 246 -485 435 -214 122 -276 163 -337 223 -71 68 -93 117 -93 207 0 115 46 185 150 231 57 26 172 31 241 11 61 -18 133 -71 166 -121 52 -83 60 -127 65 -367 l5 -222 75 -52 c92 -64 172 -141 212 -205 l31 -49 0 98 0 98 153 -5 c168 -5 230 -20 309 -75 97 -68 137 -132 184 -297 39 -135 41 -269 5 -363 -27 -72 -93 -151 -160 -194 -53 -33 -41 -35 64 -8 221 56 372 191 421 375 18 67 18 187 -1 260 -46 173 -184 302 -394 365 l-73 23 63 30 c81 39 171 127 205 201 113 247 -11 499 -286 580 -102 30 -177 36 -496 37 l-319 0 0 -26 c1 -15 -4 -24 -11 -21 -275 106 -582 72 -746 -82 -142 -132 -178 -337 -92 -519 57 -119 169 -211 489 -400 187 -111 291 -185 328 -235 98 -131 101 -284 7 -391 -116 -131 -348 -149 -559 -42 -132 66 -204 132 -421 383 -120 140 -257 264 -360 328 -33 20 -59 42 -57 48 3 6 46 119 97 251 51 132 95 246 98 254 3 7 16 -17 30 -55 13 -38 64 -177 113 -308 49 -131 89 -243 89 -247 0 -5 -39 -9 -87 -9 l-87 0 54 -55 c53 -54 55 -55 111 -55 l57 0 47 -119 c47 -119 47 -120 138 -208 51 -49 119 -105 152 -125 75 -46 206 -90 252 -86 l35 3 -31 39 c-41 51 -86 146 -231 487 l-118 276 -84 84 c-124 124 -168 226 -168 392 0 89 0 89 -81 278 -74 172 -84 189 -106 189 -17 0 -27 -8 -34 -27z m1778 -128 c142 -42 216 -159 217 -345 1 -127 -20 -187 -88 -255 -34 -34 -68 -57 -101 -68 -59 -21 -194 -32 -259 -23 l-46 7 0 350 0 349 113 0 c71 0 132 -6 164 -15z" />
          
          {/* Left A Serif Foot: Pure White */}
          <path d="M1175 1788 c-60 -144 -123 -282 -140 -307 -42 -64 -104 -107 -170 -121 -48 -10 -55 -14 -55 -36 l0 -24 290 0 290 0 0 24 c0 21 -6 25 -46 31 -29 4 -57 17 -77 35 -28 25 -31 33 -30 82 1 54 44 183 134 411 22 53 39 99 39 101 0 7 -106 66 -117 66 -5 0 -58 -118 -118 -262z" />
          
          {/* Right B Serif Foot: Pure White */}
          <path d="M3876 1654 c-19 -74 -105 -160 -195 -196 -50 -20 -74 -23 -224 -23 -188 0 -187 -1 -187 73 0 51 -9 53 -35 6 -27 -50 -130 -143 -200 -181 l-60 -32 270 -1 c292 0 351 8 444 54 101 52 185 169 198 277 6 52 -1 66 -11 23z" />
        </g>
      </svg>
    </div>
  );

  // Exact reproduction on solid black square as seen in user's image
  if (variant === 'exactImage') {
    return (
      <div
        className={`bg-black aspect-square flex items-center justify-center rounded-xl overflow-hidden shadow-2xl p-6 ${className}`}
        style={{ width: currentIcon.w + 40, height: currentIcon.h + 40 }}
      >
        {ExactWhiteEmblem}
      </div>
    );
  }

  if (variant === 'iconOnly') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{ExactWhiteEmblem}</div>;
  }

  if (variant === 'centered') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {ExactWhiteEmblem}
        <div className="mt-2 tracking-tight">
          <div
            className={`font-black tracking-[0.14em] text-white uppercase leading-none ${
              size === 'xl' ? 'text-2xl sm:text-3xl' : size === 'lg' ? 'text-xl' : 'text-base'
            }`}
          >
            ADAMU S.B.
          </div>
          {showTagline && (
            <div
              className={`font-bold tracking-[0.24em] text-sky-400 uppercase mt-1 ${
                size === 'xl' ? 'text-xs sm:text-sm' : size === 'lg' ? 'text-[11px]' : 'text-[9px]'
              }`}
            >
              COMMUNICATION
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {ExactWhiteEmblem}
      <div className="text-left">
        <div
          className={`font-black tracking-[0.1em] text-white uppercase leading-tight ${
            size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg sm:text-xl' : 'text-base'
          }`}
        >
          ADAMU S.B.
        </div>
        {showTagline && (
          <div
            className={`font-extrabold tracking-[0.22em] text-sky-400 uppercase leading-none mt-0.5 ${
              size === 'lg' ? 'text-xs' : 'text-[10px]'
            }`}
          >
            COMMUNICATION
          </div>
        )}
      </div>
    </div>
  );
};
