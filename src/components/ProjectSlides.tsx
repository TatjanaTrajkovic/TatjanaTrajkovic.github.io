import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

// Image slideshow for a project card. Images live in public/projects/<project>/.
export function ProjectSlides({ slides, prevLabel, nextLabel, slideLabel }: { slides: Slide[]; prevLabel: string; nextLabel: string; slideLabel: string }) {
  const [ref, api] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => api && setIndex(api.selectedScrollSnap()), [api]);
  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <div className="project-visual project-slides" role="region" aria-roledescription="carousel">
      <div className="slides-viewport" ref={ref}>
        <div className="slides-track">
          {slides.map((s, i) => (
            <div className="slide" key={s.src} role="group" aria-roledescription="slide" aria-label={`${i + 1} / ${slides.length}`}>
              <img src={s.src} alt={s.alt} />
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && (
        <div className="slides-controls">
          <button type="button" className="slides-arrow" aria-label={prevLabel} onClick={() => api?.scrollPrev()}><ChevronLeft size={18} /></button>
          <div className="slides-dots">
            {slides.map((s, i) => (
              <button type="button" key={s.src} className={i === index ? "is-active" : ""} aria-label={`${slideLabel} ${i + 1}`} aria-current={i === index} onClick={() => api?.scrollTo(i)} />
            ))}
          </div>
          <button type="button" className="slides-arrow" aria-label={nextLabel} onClick={() => api?.scrollNext()}><ChevronRight size={18} /></button>
        </div>
      )}
    </div>
  );
}
