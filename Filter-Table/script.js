document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const dataTable = document.getElementById('dataTable');
    const rows = dataTable.getElementsByTagName('tr');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();

        for (let i = 1; i < rows.length; i++) {
            const name = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
            if (name.includes(searchText)) {
                rows[i].style.display = '';
                // You can add additional styling here, like highlighting matched text.
            } else {
                rows[i].style.display = 'none';
            }
        }
    });
});
