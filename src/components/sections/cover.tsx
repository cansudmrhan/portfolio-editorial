import Image from "next/image";
import { Grain } from "@/components/grain";
import { cover } from "@/data/home";

const [firstName, lastName] = cover.nameLines;

export function Cover() {
  return (
    <section
      id="cover"
      aria-labelledby="cover-name"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-cream"
    >
      {/* One locked-up mark: both words flush left on the same x, with the
          brush word pulled up until it interlocks with the type behind it. */}
      <div className="absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 px-6 md:top-[34dvh] md:px-0">
        <div className="mx-auto w-fit">
          <div>
            <p
              aria-hidden="true"
              className="type-display type-shadow-word text-center text-ink"
            >
              {cover.shadowWord}
            </p>
            <p className="type-brush relative -mt-[0.97em] -ml-[0.017em] text-blue">
              {cover.lettering}
            </p>
          </div>

          <h1
            className="type-strong type-name mt-4 text-ink md:mt-[2.5dvh]"
            id="cover-name"
          >
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>
      </div>

      {/* Collage in the lower right, from md up only — below that the screen
          belongs to the lock-up. Both are cut-outs on transparency, so
          they sit straight on the cream with nothing behind them. The dvh caps
          keep them from climbing into the mark on short viewports.
          quality 100 on the texture is load-bearing: the lossy WebP encoder
          throws its alpha channel away below q=100 and it renders as a solid
          black square. */}
      <Image
        src={cover.cornerTexture.src}
        alt={cover.cornerTexture.alt}
        width={cover.cornerTexture.width}
        height={cover.cornerTexture.height}
        aria-hidden="true"
        quality={100}
        sizes="30vw"
        className="pointer-events-none absolute -right-[4.65vw] -bottom-[6dvh] z-10 hidden h-auto w-[30vw] max-w-none select-none md:block"
      />

      <Image
        src={cover.outline.src}
        alt={cover.outline.alt}
        width={cover.outline.width}
        height={cover.outline.height}
        preload
        sizes="80vw"
        className="pointer-events-none absolute right-[6vw] -bottom-[6dvh] z-10 hidden h-auto w-[min(42vw,66dvh)] max-w-none select-none md:block"
      />

      <p className="type-mono absolute top-6 left-6 z-20 flex items-center gap-1.5 text-[13px] text-ink md:top-[4dvh] md:left-[6vw]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="currentColor"
        >
          <path d="M12 2c-4.14 0-7.5 3.36-7.5 7.5 0 5.63 6.5 12 7.06 12.55a.6.6 0 0 0 .88 0C13 21.5 19.5 15.13 19.5 9.5 19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z" />
        </svg>
        {cover.locationLabel}
      </p>

      <p
        aria-hidden="true"
        className="type-mono absolute bottom-6 left-6 z-20 text-[13px] text-ink md:bottom-[4dvh] md:left-[6vw] lg:text-xs"
      >
        {cover.scrollCue}
      </p>

      <Grain id="grain-cover" />
    </section>
  );
}
