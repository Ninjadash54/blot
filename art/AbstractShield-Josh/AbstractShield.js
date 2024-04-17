// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

/*
@title: Josh Deva
@author: AbstractShield
@snapshot: Snap1
*/

const width = 200;
const height = 200;

setDocDimensions(width, height);

const finalLines = [];

// Parameters
let s = 100; // square size
let d = 45; // depth of the illusion
let shadingDensity = 5; // increase for more shading
let circleDensity = 25; // increase for more circles
let linesPerCircle = 15; // increase for denser lines
let radialCircles = 75; // number of radial circles

// Function to clear the canvas
const clearDoc = () => {
    const allLines = [];
    drawLines(allLines);
};

// Function to generate the art
const generateArt = () => {
    // Clear previous drawings
    clearDoc();

    // Center coordinates
    const centerX = width / 2;
    const centerY = height / 2;

    // Front face with gradient fill
    drawLines([
        [[centerX - s / 2, centerY - s / 2], [centerX - s / 2, centerY + s / 2], [centerX + s / 2, centerY + s / 2], [centerX + s / 2, centerY - s / 2], [centerX - s / 2, centerY - s / 2]]
    ]);

    // Textured shading lines
    for (let i = 1; i <= shadingDensity; i++) {
        const shadeFactor = (i / shadingDensity) * d;
        drawLines([
            // Top-left to bottom-right shading
            [[centerX - s / 2 + shadeFactor, centerY - s / 2], [centerX - s / 2 + shadeFactor + d, centerY - s / 2 - d]],
            [[centerX - s / 2, centerY - s / 2 + shadeFactor], [centerX - s / 2 - d, centerY - s / 2 + shadeFactor + d]],
            // Top-right to bottom-left shading
            [[centerX + s / 2 - shadeFactor, centerY - s / 2], [centerX + s / 2 - shadeFactor - d, centerY - s / 2 - d]],
            [[centerX + s / 2, centerY - s / 2 + shadeFactor], [centerX + s / 2 + d, centerY - s / 2 + shadeFactor + d]],
            // Bottom-left to top-right shading
            [[centerX - s / 2, centerY + s / 2 - shadeFactor], [centerX - s / 2 - d, centerY + s / 2 - shadeFactor - d]],
            [[centerX - s / 2 + shadeFactor, centerY + s / 2], [centerX - s / 2 + shadeFactor + d, centerY + s / 2 + d]],
            // Bottom-right to top-left shading
            [[centerX + s / 2, centerY + s / 2 - shadeFactor], [centerX + s / 2 + d, centerY + s / 2 - shadeFactor - d]],
            [[centerX + s / 2 - shadeFactor, centerY + s / 2], [centerX + s / 2 - shadeFactor - d, centerY + s / 2 + d]]
        ]);
    }

    // Complex radial pattern with gradients
    for (let i = 0; i < circleDensity; i++) {
        const maxRadius = (s / 2) * ((circleDensity - i) / circleDensity);
        const minRadius = (s / 2) * ((circleDensity - i - 1) / circleDensity);
        const maxCircumference = 2 * Math.PI * maxRadius;
        const minCircumference = 2 * Math.PI * minRadius;
        for (let j = 0; j < linesPerCircle; j++) {
            const angleIncrement = (2 * Math.PI) / linesPerCircle;
            const angle = j * angleIncrement;
            const x1 = centerX + maxRadius * Math.cos(angle);
            const y1 = centerY + maxRadius * Math.sin(angle);
            const x2 = centerX + minRadius * Math.cos(angle);
            const y2 = centerY + minRadius * Math.sin(angle);
            drawLines([[[x1, y1], [x2, y2]]]);
        }
    }

    // Intricate radial circles with texture
    const step = s / (2 * radialCircles);
    for (let i = 0; i < radialCircles; i++) {
        const radius = step * (i + 1);
        const circumference = 2 * Math.PI * radius;
        for (let j = 0; j < linesPerCircle; j++) {
            const angleIncrement = (2 * Math.PI) / linesPerCircle;
            const angle = j * angleIncrement;
            const deltaX = circumference / linesPerCircle;
            const deltaY = radius * Math.sin(angleIncrement / 2);
            const x1 = centerX + radius * Math.cos(angle);
            const y1 = centerY + radius * Math.sin(angle);
            const x2 = centerX + (radius + step) * Math.cos(angle);
            const y2 = centerY + (radius + step) * Math.sin(angle);
            drawLines([[[x1, y1], [x2, y2]]]);
        }
    }


};

// Function to adjust parameters
const adjustParameters = () => {
    generateArt();
};

// Initial generation
generateArt();

// Parameter adjustments
const setShadingDensity = (newValue) => {
    shadingDensity = newValue;
    adjustParameters();
};

const setCircleDensity = (newValue) => {
    circleDensity = newValue;
    adjustParameters();
};

const setLinesPerCircle = (newValue) => {
    linesPerCircle = newValue;
    adjustParameters();
};

const setRadialCircles = (newValue) => {
    radialCircles = newValue;
    adjustParameters();
};

const setEyeSize = (newValue) => {
    eyeSize = newValue;
    adjustParameters();
};

const setParabolaHeight = (newValue) => {
    parabolaHeight = newValue;
    adjustParameters();
};
