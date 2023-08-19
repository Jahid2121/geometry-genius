function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base')   
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);

    const heightField = document.getElementById('triangle-height')
    const heightValueText = heightField.value
    const height = parseFloat(heightValueText)
    console.log(height);

    const area = 0.5 * base * height
    console.log(area);

    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value
    const width = parseFloat(widthValueText)
    console.log(width);

    const lengthField = document.getElementById('rectangle-length')
    const lengthValueText = lengthField.value
    const length = parseFloat(lengthValueText)
    console.log(length);

    const area = width * length

    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    // console.log(base);
    const height = getInputValue('parallelogram-height')
    // console.log(height);

    const area = base * height
    setElementInnerText('parallelogram-area', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius')
    const minorRadius = getInputValue('ellipse-minor-radius')
    const area = 3.14 * majorRadius * minorRadius
    setElementInnerText('ellipse-area', area)
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText)
    return value
}

function setElementInnerText(elementFieldId, area){
    const element = document.getElementById(elementFieldId)
    element.innerText = area
}
    