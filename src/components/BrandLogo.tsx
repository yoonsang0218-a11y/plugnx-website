export type BrandKey =
  | "kakao"
  | "naver"
  | "kakaobank"
  | "upbit"
  | "coinone"
  | "korbit";

type BrandSpec = {
  label: string;
  src: string;
  /** Max logo height relative to tile height (0-1). */
  scaleH?: number;
  /** Max logo width relative to tile width (0-1). */
  scaleW?: number;
};

const BRANDS: Record<BrandKey, BrandSpec> = {
  kakao: {
    label: "카카오",
    src: "/brand/kakao.svg",
    scaleH: 0.5,
    scaleW: 0.7,
  },
  naver: {
    label: "네이버",
    src: "/brand/naver.svg",
    scaleH: 0.62,
    scaleW: 0.62,
  },
  kakaobank: {
    label: "카카오뱅크",
    src: "/brand/kakaobank.svg",
    scaleH: 0.5,
    scaleW: 0.84,
  },
  upbit: {
    label: "업비트",
    src: "/brand/upbit.svg",
    scaleH: 0.52,
    scaleW: 0.8,
  },
  coinone: {
    label: "코인원",
    src: "/brand/coinone.svg",
    scaleH: 0.44,
    scaleW: 0.8,
  },
  korbit: {
    label: "코빗",
    src: "/brand/korbit.png",
    scaleH: 0.54,
    scaleW: 0.7,
  },
};

/** Pre-defined tile sizes so every row in the site uses identical dimensions. */
export type BrandSize = "sm" | "md" | "lg";

const SIZE_CLASS: Record<BrandSize, string> = {
  // Compact — used for small inline badges (e.g. Portfolio cards).
  sm: "h-10 sm:h-12",
  // Medium — used for Hero "Trusted by" strip.
  md: "h-16 sm:h-20",
  // Large — used for Testimonials / About partner & client rows.
  lg: "h-24 sm:h-28 md:h-32",
};

type Props = {
  brand: BrandKey;
  size?: BrandSize;
  className?: string;
};

/**
 * Brand logo rendered inside a fixed-height white tile.
 *
 * Height is pinned by a pre-defined `size` class, and width fills the
 * parent column via `w-full`. Every BrandLogo with the same `size` prop
 * renders to the exact same rectangle regardless of the enclosed logo's
 * natural proportions.
 */
export default function BrandLogo({
  brand,
  size = "lg",
  className = "",
}: Props) {
  const spec = BRANDS[brand];

  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 ${SIZE_CLASS[size]} ${className}`}
      aria-label={spec.label}
      role="img"
    >
      <img
        src={spec.src}
        alt=""
        aria-hidden
        style={{
          maxHeight: `${(spec.scaleH ?? 0.55) * 100}%`,
          maxWidth: `${(spec.scaleW ?? 0.75) * 100}%`,
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export { BRANDS };
