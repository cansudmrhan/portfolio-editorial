type GrainProps = {
  /** Must be unique per instance — SVG filter ids are document-global. */
  readonly id: string;
  readonly className?: string;
};

/**
 * Printed-paper texture: three stacked noise fields multiplied together.
 * Two thresholded turbulence layers give hard ink specks at two scales, and a
 * very low frequency layer adds broad uneven smudges. The discrete transfers
 * matter — smooth turbulence averages out to a flat grey wash.
 * Alpha is forced opaque so only the blend mode decides what darkens.
 */
export function Grain({ id, className = "" }: GrainProps) {
  return (
    <svg className={`grain ${className}`} aria-hidden="true" focusable="false">
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          numOctaves={3}
          seed={7}
          stitchTiles="stitch"
          result="coarse"
        />
        <feColorMatrix in="coarse" type="saturate" values="0" result="coarseFlat" />
        <feComponentTransfer in="coarseFlat" result="coarseSpecks">
          <feFuncR type="discrete" tableValues="1 1 0" />
          <feFuncG type="discrete" tableValues="1 1 0" />
          <feFuncB type="discrete" tableValues="1 1 0" />
          <feFuncA type="linear" slope="0" intercept="1" />
        </feComponentTransfer>

        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.95"
          numOctaves={2}
          seed={29}
          stitchTiles="stitch"
          result="fine"
        />
        <feColorMatrix in="fine" type="saturate" values="0" result="fineFlat" />
        <feComponentTransfer in="fineFlat" result="fineSpecks">
          <feFuncR type="discrete" tableValues="1 1 0" />
          <feFuncG type="discrete" tableValues="1 1 0" />
          <feFuncB type="discrete" tableValues="1 1 0" />
          <feFuncA type="linear" slope="0" intercept="1" />
        </feComponentTransfer>

        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.014"
          numOctaves={2}
          seed={13}
          stitchTiles="stitch"
          result="smudge"
        />
        <feColorMatrix in="smudge" type="saturate" values="0" result="smudgeFlat" />
        <feComponentTransfer in="smudgeFlat" result="smudgeSoft">
          <feFuncR type="linear" slope="0.7" intercept="0.45" />
          <feFuncG type="linear" slope="0.7" intercept="0.45" />
          <feFuncB type="linear" slope="0.7" intercept="0.45" />
          <feFuncA type="linear" slope="0" intercept="1" />
        </feComponentTransfer>

        <feBlend in="coarseSpecks" in2="fineSpecks" mode="multiply" result="specks" />
        <feBlend in="specks" in2="smudgeSoft" mode="multiply" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
