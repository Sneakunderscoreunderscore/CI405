document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');
    
    var searchInput = document.getElementById('searchInput');
    var glossaryItems = document.querySelectorAll('#glossaryList li');

    searchInput.addEventListener('input', function() {
        var searchQuery = this.value.toLowerCase();
        console.log('Search Query:', searchQuery);

        glossaryItems.forEach(function(item) {
            var term = item.querySelector('b').textContent.toLowerCase();
            if (term.includes(searchQuery)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
