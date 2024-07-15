const statusDropdown = document.querySelector('#login-form');


document.getElementById('statusDropdown').addEventListener('change', function() {
    const selectedStatus = this.value;
    Application.forEach(app => {
        if (app.status === selectedStatus) {
            app.status = selectedStatus;
        }
    });
    const updatedHtml = template({ Application });
    document.getElementById('tableContainer').innerHTML = updatedHtml;
});