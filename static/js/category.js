/**
 * Page ready
 */
document.addEventListener('DOMContentLoaded', function() {
    categoryDisplay();
});

/**
 * Category display
 * When a category is clicked on the right sidebar,
 * show/hide the corresponding post sections on the left
 */
function categoryDisplay() {
    selectCategory();
    document.querySelectorAll('.categories-item').forEach(function(item) {
        item.addEventListener('click', function() {
            window.location.hash = '#' + this.getAttribute('cate');
            selectCategory();
        });
    });
}

function selectCategory() {
    var thisId = window.location.hash.substring(1);
    if (thisId) {
        document.querySelectorAll('section[post-cate]').forEach(function(section) {
            if (section.getAttribute('post-cate') !== thisId) {
                section.style.display = 'none';
            } else {
                section.style.display = '';
            }
        });
    } else {
        document.querySelectorAll("section[post-cate='All']").forEach(function(section) {
            section.style.display = '';
        });
    }
}
