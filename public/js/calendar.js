document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2024-07-07',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: []
    });

    calendar.render();

    document.getElementById('application-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var title = document.getElementById('interviewPositionInput').value;
        var date = document.getElementById('interviewDateInput').value;
        var time = document.getElementById('interviewTimeInput').value;
        var videoLink = document.getElementById('interviewVideoLinkInput').value;

        var formattedDate = formatDate(date);
        var start = formattedDate + 'T' + time;

        // Check if videoLink is not empty and does not start with 'http://'
        if (videoLink && !videoLink.startsWith('http://') && !videoLink.startsWith('https://')) {
            videoLink = 'https://' + videoLink; // Prepend 'https://' if not already present
        }

        calendar.addEvent({
            title: title,
            start: start,
            url: videoLink  // Ensure videoLink is the full URL
        });

        document.getElementById('interviewPositionInput').value = '';
        document.getElementById('interviewDateInput').value = '';
        document.getElementById('interviewTimeInput').value = '';
        document.getElementById('interviewVideoLinkInput').value = '';

        alert('Interview added successfully!');

        calendar.render();
    });

    function formatDate(inputDate) {
        var date = new Date(inputDate);
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        var year = date.getFullYear();

        return [year, month, day].join('-');
    }
});