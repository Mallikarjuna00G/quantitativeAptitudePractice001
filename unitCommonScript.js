function readTimeFunction() {
    const unit = document.getElementById("unit");
    const unitName = document.getElementById("unitName");

    // `document.querySelector` may return null if the selector doesn't match anything.
    if(unit){
        const text = unit.textContent;
        const wordMatchRegExp = /[^\s]+/g;  // Regular expression
        const word = text.matchAll(wordMatchRegExp);
        // match all returns an iterator, convert to array to get word count
        const wordCount = [...word].length;
        
        const readTimeDiv = document.createElement("div");
        readTimeDiv.id = "readTimeDiv";
        const badge = document.createElement("p");
        
        // Use the same styling as the publish information in an unit's header
        badge.innerHTML = `⏱️ <span id="i_readingTime">0</span> min read at <input id="i_readingSpeed" name="wpm" type="number" min="20" max="350" maxlength="3" value="150" style="width: 6ch; height: 1.2em"> wpm`;
        readTimeDiv.appendChild(badge);
        badge.style.fontSize = "0.8em";

        const i_readingTime = readTimeDiv.querySelector("#i_readingTime");
        const i_readingSpeed = readTimeDiv.querySelector("#i_readingSpeed");
        i_readingTime.textContent = Math.round(wordCount / parseInt(i_readingSpeed.value, 10));
        // console.log(i_readingTime.innertext);
        // support for API reference docs

        unitName.insertAdjacentElement("afterend", readTimeDiv);
        
        i_readingSpeed.addEventListener("change", updateReadingTimeData);
        
        function updateReadingTimeData() {
            let a = Math.max(20, Math.min(350, parseInt(i_readingSpeed.value, 10)));  // Keeping in the range
            i_readingSpeed.value = a;
            i_readingTime.textContent = Math.round(wordCount / a);
            // console.log(i_readingSpeed.value);
        }
    }
}

function fetchAndFeedJS(fetchFile, feedId) {
    // console.log(fetchFile);
    fetch(fetchFile)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.text();
    })
    .then(scriptText => {
        const codeElement = document.getElementById(feedId);
        codeElement.textContent = scriptText;
        hljs.highlightElement(codeElement);
    })
    .catch(error => {
        console.error('Error fetching script:', error);
        const preElement = document.getElementById(feedId);
        preElement.textContent = `Error loading script: ${error.message}`;
    });
}

function doSyntaxHighlighting() {
    const srcFilesPreCodes = document.querySelectorAll(".srcFile pre code");
    const srcFilesAnchors = document.querySelectorAll(".srcFile .programLink");

    const examples = [];

    srcFilesPreCodes.forEach((srcFileCode, i) => {
        srcFileCode.id = `srcFileCode-${i}`;
    });

    srcFilesAnchors.forEach((srcFile, i) => {
        examples.push({file: srcFile.textContent, id: srcFilesPreCodes[i].id});
    });

    examples.forEach(example => {
        fetchAndFeedJS(`${example.file}`, `${example.id}`);
    });
}

function prependSpaces() {
    const nbsp4 = document.querySelectorAll(".nbsp4");
    nbsp4.forEach(nbsp => {
        nbsp.innerHTML = "&nbsp;".repeat(4);
    });

    const nbsp8 = document.querySelectorAll(".nbsp8");
    nbsp8.forEach(nbsp => {
        nbsp.innerHTML = "&nbsp;".repeat(8);
    });
}

export {
    readTimeFunction, 
    fetchAndFeedJS, 
    doSyntaxHighlighting,
    prependSpaces
};