/*
 * @copyright http://blog.rainynight.top/
 * Licensed under MIT
 */
// TagCloud.js upgrade: https://github.com/mcc108/TagCloud
// This script initializes the tag cloud using TagCloud.js
// Make sure to include TagCloud.js via CDN in your HTML

document.addEventListener('DOMContentLoaded', function () {
  // Collect all tag links from the tag cloud container
  var tagLinks = Array.from(document.querySelectorAll('.tagCloud a'));
  var texts = tagLinks.map(function(a) {
    // Add extra spaces for more spacious layout
    return a.textContent.trim() + '   ';
  });
  var hrefs = tagLinks.map(function(a) {
    return a.getAttribute('href');
  });

  // Remove the original links (TagCloud.js will render the sphere)
  var container = document.querySelector('.tagCloud');
  container.innerHTML = '';

  // Initialize TagCloud.js with a larger radius
  var tagNodes = TagCloud('.tagCloud', texts, {
    radius: 180, // bigger sphere
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  });

  // Make tags clickable
  // TagCloud.js renders spans, so we add click handlers
  var spans = container.querySelectorAll('span');
  spans.forEach(function(span, i) {
    span.style.cursor = 'pointer';
    span.addEventListener('click', function() {
      if (hrefs[i]) {
        window.location.hash = hrefs[i];
      }
    });
    span.setAttribute('tabindex', '0');
    span.setAttribute('role', 'link');
    span.setAttribute('aria-label', texts[i].trim());
    span.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        if (hrefs[i]) {
          window.location.hash = hrefs[i];
        }
      }
    });
    // Set font size for bigger tags
    span.style.fontSize = '1.35rem';
  });
});