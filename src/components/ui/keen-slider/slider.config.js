export const sliderPresets = {
    default: {
        loop: false,
        slides: {
            perView: 4,
            spacing: 16,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 12,
                },
            },
            "(max-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 10,
                },
            },
            "(max-width: 480px)": {
                slides: {
                    perView: 1,
                    spacing: 8,
                },
            },
        },
    }
}