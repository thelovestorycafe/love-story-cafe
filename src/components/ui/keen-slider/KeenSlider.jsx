import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useMemo, useCallback } from "react";
import styles from "./styles.module.css";
import { sliderPresets } from "./slider.config";
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";

const KeenSlider = ({
    children,
    preset = "default",
    options = {},
    perView,
    spacing,
    showArrows = false,
    showDots = false,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [totalSlides, setTotalSlides] = useState(0);

    const finalConfig = useMemo(() => ({
        ...sliderPresets[preset],
        ...options,

        slides: {
            ...sliderPresets[preset]?.slides,
            ...options?.slides,

            ...(perView !== undefined && { perView }),
            ...(spacing !== undefined && { spacing }),
        },

        breakpoints: {
            ...sliderPresets[preset]?.breakpoints,
            ...options?.breakpoints,
        },

        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
            options.slideChanged?.(slider);
        },

        created(slider) {
            setLoaded(true);
            setTotalSlides(slider.track.details.slides.length);
            options.created?.(slider);
        },

        updated(slider) {
            setTotalSlides(slider.track.details.slides.length);
            options.updated?.(slider);
        },
    }), [preset, options, perView, spacing]);

    const [sliderRef, instanceRef] = useKeenSlider(finalConfig);

    const handlePrev = useCallback(() => {
        instanceRef.current?.prev();
    }, [instanceRef]);

    const handleNext = useCallback(() => {
        instanceRef.current?.next();
    }, [instanceRef]);

    const handleDotClick = useCallback((idx) => {
        instanceRef.current?.moveToIdx(idx);
    }, [instanceRef]);

    return (
        <div className={styles.wrapper}>
            <div ref={sliderRef} className="keen-slider">
                {children}
            </div>

            {showArrows && loaded && (
                <>
                    <SliderArrow direction="left" onClick={handlePrev} />
                    <SliderArrow direction="right" onClick={handleNext} />
                </>
            )}

            {showDots && loaded && totalSlides > 0 && (
                <SliderDots
                    total={totalSlides}
                    current={currentSlide}
                    onClick={handleDotClick}
                />
            )}
        </div>
    );
};

export default KeenSlider;