---
    layout: null
---

/**
 * Page ready
 */
document.addEventListener('DOMContentLoaded', function() {
    backToTop();
    readingProgressBar();
    fadeInOnScroll();
    codeCopyButtons();
    navbarScrollBehavior();
});

/**
 * Back to top button
 */
function backToTop() {
    var st = document.querySelector('.page-scrollTop');
    if (!st) return;
    var topOffset = 0;

    window.addEventListener('scroll', function() {
        var currentTopOffset = window.scrollY;
        if (currentTopOffset > 0 && topOffset > currentTopOffset) {
            st.style.display = 'block';
            st.style.opacity = '0.7';
        } else {
            st.style.display = 'none';
        }
        topOffset = currentTopOffset;
    });

    st.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Dark mode toggle
 */
function dark_toggle() {
    var el1 = document.getElementById("dark-reader");
    if(el1.disabled) {
        el1.disabled = false;
        localStorage.setItem("darkreader", "enabled");
    } else {
        el1.disabled = true;
        localStorage.setItem("darkreader", "disabled");
    }
}

/**
 * Reading progress bar (post pages only)
 */
function readingProgressBar() {
    var bar = document.getElementById('reading-progress');
    if (!bar) return;

    window.addEventListener('scroll', function() {
        var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (docHeight <= 0) return;
        var scrolled = (window.scrollY / docHeight) * 100;
        bar.style.width = Math.min(scrolled, 100) + '%';
    });
}

/**
 * Fade-in on scroll using IntersectionObserver
 */
function fadeInOnScroll() {
    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
        elements.forEach(function(el) { el.classList.add('visible'); });
        return;
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function(el) { observer.observe(el); });
}

/**
 * Copy-to-clipboard buttons on code blocks
 */
function codeCopyButtons() {
    var highlights = document.querySelectorAll('.highlight');
    if (!highlights.length) return;

    highlights.forEach(function(block) {
        var btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.textContent = 'Copy';
        btn.type = 'button';

        btn.addEventListener('click', function() {
            var code = block.querySelector('code');
            if (!code) return;
            var text = code.textContent;

            navigator.clipboard.writeText(text).then(function() {
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(function() {
                    btn.textContent = 'Copy';
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(function() {
                btn.textContent = 'Failed';
                setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
            });
        });

        block.style.position = 'relative';
        block.appendChild(btn);
    });
}

/**
 * Navbar: transparent at top, solid on scroll (homepage only)
 */
function navbarScrollBehavior() {
    var navbar = document.querySelector('.navbar-tiffany');
    if (!navbar) return;

    // Only apply transparent behavior on homepage
    var isHomepage = window.location.pathname === '/' ||
                     window.location.pathname === '{{ site.baseurl }}/' ||
                     window.location.pathname === '/index.html';

    if (!isHomepage) return;

    navbar.classList.add('navbar-transparent');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-scrolled');
        }
    });
}
