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
        events: loadEventsFromStorage(), 
    });

    calendar.render();

    document
        .getElementById('application-form')
        .addEventListener('submit', function (e) {
            e.preventDefault();

            let title = document.getElementById('interviewPositionInput').value;
            let date = document.getElementById('interviewDateInput').value;
            let time = document.getElementById('interviewTimeInput').value;
            let videoLink = document.getElementById('interviewVideoLinkInput').value;

            let formattedDate = formatDate(date);
            let start = formattedDate + 'T' + time;

            if (videoLink && !videoLink.startsWith('http://') && !videoLink.startsWith('https://')) {
                videoLink = 'https://' + videoLink;
            }

            let newEvent = {
                title: title,
                start: start,
                url: videoLink,
            };

            calendar.addEvent(newEvent);
            saveEventToStorage(newEvent); // Save event to localStorage

            // Clear input fields
            document.getElementById('interviewPositionInput').value = '';
            document.getElementById('interviewDateInput').value = '';
            document.getElementById('interviewTimeInput').value = '';
            document.getElementById('interviewVideoLinkInput').value = '';

            alert('Interview added successfully!');
        });

    function formatDate(inputDate) {
        let date = new Date(inputDate);
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        let year = date.getFullYear();

        return [year, month, day].join('-');
    }

    function loadEventsFromStorage() {
        let events = localStorage.getItem('calendarEvents');
        return events ? JSON.parse(events) : [];
    }

    function saveEventToStorage(event) {
        let events = loadEventsFromStorage();
        events.push(event);
        localStorage.setItem('calendarEvents', JSON.stringify(events));
    }
});
