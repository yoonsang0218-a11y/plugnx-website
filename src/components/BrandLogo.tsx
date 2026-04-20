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

type Props = {
  brand: BrandKey;
  /** Tile aspect ratio, e.g. "3/1" or "5/2". Default "3/1". */
  aspectRatio?: string;
  className?: string;
};

/**
 * Brand logo displayed inside a fixed-aspect white tile.
 * The tile always fills 100% of its parent's width, so placing multiple
 * BrandLogos into an equal-column grid guarantees identical tile sizes.
 */
export default function BrandLogo({
  brand,
  aspectRatio = "3/1",
  className = "",
}: Props) {
  const spec = BRANDS[brand];

  return (
    <div
      className={`block rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 ${className}`}
      style={{
        width: "100%",
        aspectRatio,
      }}
      aria-label={spec.label}
      role="img"
    >
      <div
        className="flex h-full w-full items-center justify-center overflow-hidden"
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
    </div>
  );
}

export { BRANDS };
