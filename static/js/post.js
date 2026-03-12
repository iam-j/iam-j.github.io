---
    layout: null
---

/**
 * Page ready
 */
document.addEventListener('DOMContentLoaded', function() {
    generateContent();
});

/**
 * Sidebar table of contents
 */
function generateContent() {
    var tocContainers = document.querySelectorAll('.toc');
    var markdownToc = document.querySelector('.post ul#markdown-toc');
    if (!markdownToc || !tocContainers.length) return;

    tocContainers.forEach(function(container) {
        container.innerHTML = '';
        container.appendChild(markdownToc.cloneNode(true));
    });
}
