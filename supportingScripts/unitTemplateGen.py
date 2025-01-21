import os

unitNames = ["CoverPage", "Numbers", "H.C.F. & L.C.M. of Numbers", "Decimal Fractions", "Simplification", "Square Roots & Cube Roots", "Average", "Problems on Numbers", "Problems on Ages", "Surds and Indices", "Percentage", "Profit and Loss", "Ratio & Proportion", "Partnership", "Chain Rule", "Time & Work", "Pipes & Cisterns", "Time & Distance", "Problems on Trains", "Problems on Boats & Streams", "Alligation of Mixture", "Simple Interest", "Compound Interest", "Logarithms", "Area", "Volume & Surface Areas", "Races & Games Of Skill", "Calendar", "Clocks", "Stocks & Shares", "True Discount", "Banker's Discount", "Odd man out & Series", "Data Interpretation", "More Practice Questions"]


contentToIndexHTML = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{}</title>
    <script>
        window.MathJax = {{
          tex: {{
            inlineMath: [['$', '$'], ['\\(', '\\)']], // Explicitly include $...$
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
          }},
          options: {{
              skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre','code','annotation', 'annotation-xml'],
              processEscapes: true
          }}
        }};
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="../unitCommonStyles.css">
</head>
<body>
    <div id="unit">
        <p><b>NOTE: This page is yet to be developed</b></p>  <!-- Remove this entire tag when starting to develop -->
        <h2 id="unitName">{}</h2>
        <div id="unitBody">
            <h3>a section</h3>
            <p>Its contents</p>
        </div>
    </div>
    <script src="./script.js" type="module"></script>
</body>
</html>"""

contentToJSFile = """import {readTimeFunction} from "../unitCommonScript.js";

readTimeFunction();
"""

def createFiles(filePath, content):
    if not os.path.exists(filePath):
        with open(filePath, "w") as f:
            f.write(content)
    else:
        with open(filePath, "w") as f:
            f.write(content)

for i in range(len(unitNames)):
    numStr = f"{(i+1):02}"
    
    folderPath = f'unit{numStr}'
    if not os.path.exists(folderPath):
        os.makedirs(folderPath)

    createFiles(f"{folderPath}/index.html", contentToIndexHTML.format(unitNames[i], unitNames[i]))
    createFiles(f"{folderPath}/styles.css", "")
    createFiles(f"{folderPath}/script.js", contentToJSFile)
    