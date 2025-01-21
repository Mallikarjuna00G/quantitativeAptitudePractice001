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

const unitNames = ["CoverPage", "Numbers", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification", "Square Roots & Cube Roots", "Average", "Problems on Numbers", "Problems on Ages", "Surds and Indices", "Percentage", "Profit and Loss", "Ratio & Proportion", "Partnership", "Chain Rule", "Time & Work", "Pipes & Cisterns", "Time & Distance", "Problems on Trains", "Problems on Boats & Streams", "Alligation of Mixture", "Simple Interest", "Compound Interest", "Logarithms", "Area", "Volume & Surface Areas", "Races & Games Of Skill", "Calendar", "Clocks", "Stocks & Shares", "True Discount", "Banker's Discount", "Odd man out & Series", "Data Interpretation", "More Practice Questions"];

const unitObjects = [];

unitNames.forEach((unitName, i) => {
    unitObjects.push({unitNo: i+1, unitName: unitName});
});

let contentListTemp =  `<ol id="contentList">`;
unitObjects.forEach((unitObject) => {
    contentListTemp += `<li id="li${unitObject.unitNo.toString().padStart(2, '0')}">${unitObject.unitName}</li>`
});
contentListTemp += "</ol>";
leftSideContent.innerHTML = contentListTemp;

const contentList = leftSideContent.querySelector("#contentList");
const contentListItems = contentList.querySelectorAll('li');
const unitFrame = document.getElementById("unitFrame");

contentListItems.forEach((contentItem) => {
    contentItem.addEventListener('click', (e) => {
        unitFrame.src = `./unit${e.target.id.substring(2)}/index.html`;
    });
});

// ------------------ ON DOM loaded

document.addEventListener('DOMContentLoaded', () => {
    unitFrame.src = `./unit01/index.html`;
})