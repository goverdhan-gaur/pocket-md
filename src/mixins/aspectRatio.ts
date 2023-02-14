export const aspectRatioContainer = (ratio: string) => {
    const ratios = ratio.split(':')
    enum Dimension {
        width = +ratios[0],
        height = +ratios[1],
    }

    return `
        position: relative;
        overflow: hidden;
        padding: ${100 / (Dimension.width / Dimension.height)}% 0 0 0;
    `
}

export const aspectRatioImage = () => `
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
