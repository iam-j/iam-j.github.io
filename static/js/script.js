---
    layout: null
---

/**
 * Page ready
 */
document.addEventListener('DOMContentLoaded', function() {
    backToTop();
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
