function addLines() {
    // first line
    const lines = document.querySelector('#lines');
    const firstLine = document.createElement('div');
    firstLine.setAttribute('id', 'first-line');
    lines.appendChild(firstLine);
    for (let i = 0; i < 15; i++) {
        var line = document.createElement('div');
        line.setAttribute('class', 'line');
        lines.appendChild(line);
    }
}

export default addLines;