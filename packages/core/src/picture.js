import { dirFromMove } from './game';

export const TRANSLATE_DURATION = 100;

export const TILE_MARGIN = 2;
export const MAX_TILE_SIZE = 100;

export const DEFAULT_IMAGE_SIZE = 500; // 500px
export const IMAGE_SIZE = 60; // 60vh

export const associateTileToBackground = grid => {
    const tileSize = grid.length > 0 ? 100 / grid.length : 0; // 100%

    let tileToBg = {};

    grid.forEach((row, rowKey) => {
        row.forEach((value, colKey) => {
            tileToBg[value] = `${tileSize * colKey}% ${tileSize * rowKey}%`;
        });
    });
    return tileToBg;
};

export const divideBackgroundStyle = (imageSize, nbOfTiles) =>
    imageSize / (nbOfTiles + 1);

export const buildBackgroundStyle = (
    nbTiles,
    tileImageCoords,
    tileSize,
    unit = 'px',
) => ({
    backgroundPosition: tileImageCoords,
    backgroundSize: `${(nbTiles + 1) * tileSize}${unit}`,
});

export const buildDimensionStyle = (tileSize = MAX_TILE_SIZE, unit = 'px') => ({
    height: `${tileSize}${unit}`,
    margin: `${TILE_MARGIN}px`,
    width: `${tileSize}${unit}`,
});

export const buildTranslateStyle = (dir, tileSize, unit = 'px') => {
    const translatingDir = {
        y: `${dir.y} * (${tileSize}${unit} + ${TILE_MARGIN}px)`,
        x: `${dir.x} * (${tileSize}${unit} + ${TILE_MARGIN}px)`,
    };
    return {
        transition: `transform ${TRANSLATE_DURATION}ms ease-out`,
        transform: `translate(${translatingDir.x}), ${translatingDir.y})`,
    };
};

export const getUnits = isResponsive => (isResponsive ? 'vh' : 'px');

export const buildResponsiveDimension = (isResponsive, nbTiles) => {
    const tileSize = divideBackgroundStyle(
        isResponsive ? IMAGE_SIZE : DEFAULT_IMAGE_SIZE,
        nbTiles,
    );

    const dimensionStyle = buildDimensionStyle(
        tileSize,
        getUnits(isResponsive),
    );

    return { dimensionStyle, tileSize };
};

export const buildResponsiveBackground = (
    isResponsive,
    nbTiles,
    tileImageCoords,
    tileSize,
) =>
    buildBackgroundStyle(
        nbTiles,
        tileImageCoords,
        tileSize,
        getUnits(isResponsive),
    );

export const buildResponsiveTranslate = (
    isResponsive,
    grid,
    tileSize,
    tileValue,
) => {
    const dir = dirFromMove(grid, tileValue);
    return buildTranslateStyle(
        dir,
        tileSize,
        tileValue,
        getUnits(isResponsive),
    );
};
