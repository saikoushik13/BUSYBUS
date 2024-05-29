document.getElementById('searchInput').addEventListener('input', function() {
    var searchText = this.value.trim().toLowerCase();
    var rows = document.querySelectorAll('#table tbody tr');

    if (searchText === "") {
        rows.forEach(function(row) {
            row.style.display = 'table-row';
            row.querySelector('td:nth-child(2)').innerHTML = row.querySelector('td:nth-child(2)').textContent;
        });
    } else {
        rows.forEach(function(row) {
            var route = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            var matchIndex = route.indexOf(searchText);
            if (matchIndex !== -1) {
                row.style.display = 'table-row';
                // Highlight matching text
                var textBefore = row.querySelector('td:nth-child(2)').textContent.substring(0, matchIndex);
                var textMatch = row.querySelector('td:nth-child(2)').textContent.substring(matchIndex, matchIndex + searchText.length);
                var textAfter = row.querySelector('td:nth-child(2)').textContent.substring(matchIndex + searchText.length);
                row.querySelector('td:nth-child(2)').innerHTML = textBefore + '<span class="highlight">' + textMatch + '</span>' + textAfter;
            } else {
                row.style.display = 'none';
            }
        });
    }
});
