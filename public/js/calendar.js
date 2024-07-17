document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2024-07-07',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        events: [],
    });

    calendar.render();

    document
        .getElementById('application-form')
        .addEventListener('submit', function (e) {
            e.preventDefault();

            let title = document.getElementById('interviewPositionInput').value;
            let date = document.getElementById('interviewDateInput').value;
            let time = document.getElementById('interviewTimeInput').value;
            let videoLink = document.getElementById(
                'interviewVideoLinkInput'
            ).value;

            let formattedDate = formatDate(date);
            let start = formattedDate + 'T' + time;

            if (
                videoLink &&
                !videoLink.startsWith('http://') &&
                !videoLink.startsWith('https://')
            ) {
                videoLink = 'https://' + videoLink;
            }

            calendar.addEvent({
                title: title,
                start: start,
                url: videoLink, // Ensure videoLink is the full URL function below:
            });

            document.getElementById('interviewPositionInput').value = '';
            document.getElementById('interviewDateInput').value = '';
            document.getElementById('interviewTimeInput').value = '';
            document.getElementById('interviewVideoLinkInput').value = '';

            alert('Interview added successfully!');

            calendar.render();
        });

    function formatDate(inputDate) {
        let date = new Date(inputDate);
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        let year = date.getFullYear();

        return [year, month, day].join('-');
    }
});
