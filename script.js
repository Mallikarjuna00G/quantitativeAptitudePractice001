const leftSideViewer = document.querySelector("#leftSideViewer button");
const leftSideContent = document.getElementById("leftSideContent");

leftSideContent.style.display = "block";

leftSideViewer.addEventListener('click', () => {
    if(leftSideContent.style.display !== "none") {
        leftSideContent.style.display = "none";
        leftSideViewer.textContent = ">";
    } else {
        leftSideViewer.textContent = "<";
        leftSideContent.style.display = "block";
    }
});

const unitNames = ["CoverPage", "Numbers", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification", "Square Roots & Cube Roots", "Average", "Problems on Numbers", "Problems on Ages", "Surds and Indices", "Percentage", "Profit and Loss", "Ratio & Proportion", "Partnership", "Chain Rule", "Time & Work", "Pipes & Cisterns", "Time & Distance", "Problems on Trains", "Problems on Boats & Streams", "Alligation of Mixture", "Simple Interest", "Compound Interest", "Logarithms", "Area", "Volume & Surface Areas", "Races & Games Of Skill", "Calendar", "Clocks", "Stocks & Shares", "True Discount", "Banker's Dsiscount", "Odd man ou & Series", "Data Interpretation", "More Practice Questions"];

const unitObjects = [];

unitNames.forEach((unitName, i) => {
    unitObjects.push({unitNo: i, unitName: unitName,});
})

let contentListTemp =  `<ol id="contentList">`;
unitObjects.forEach((unitObject) => {
    contentListTemp += `<li>${unitObject.unitName}</li>`
});
contentListTemp += "</ol>";
leftSideContent.innerHTML = contentListTemp;


// ------------------ ON DOM loaded

document.addEventListener('DOMContentLoaded', {
    
})