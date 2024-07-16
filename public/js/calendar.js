/*
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
      events: [
        {
            title: 'Instagram Interview',
            url: 'https://instagram.com/',
            start: '2024-07-17T19:00:00'
        },
        {
            title: 'Github Interview',
            url: 'https://github.com/',
            start: '2024-07-20T13:00:00'
        },
        {
            title: 'Google Interview',
            url: 'https://google.com/',
            start: '2024-07-25T07:00:00'
        }
      ]
    });
  
    calendar.render();
  });
*/

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
    events: [
      {
          title: 'Instagram Interview',
          url: 'https://instagram.com/',
          start: '2024-07-17T19:00:00'
      },
      {
          title: 'Github Interview',
          url: 'https://github.com/',
          start: '2024-07-20T13:00:00'
      },
      {
          title: 'Google Interview',
          url: 'https://google.com/',
          start: '2024-07-25T07:00:00'
      }
    ]
  });

  calendar.render();

  document.getElementById('submitEventBtn').addEventListener('click', function(event) {
    event.preventDefault();

    var dateInput = document.getElementById('interviewDateInput').value;
    var timeInput = document.getElementById('interviewTimeInput').value;
    var videoLinkInput = document.getElementById('interviewVideoLinkInput').value;

    var startDateTime = dateInput + 'T' + timeInput;

    if (dateInput && timeInput && videoLinkInput) {
      calendar.addEvent({
        title: 'Custom Interview',
        start: startDateTime,
        url: videoLinkInput
      });

      document.getElementById('interviewDateInput').value = '';
      document.getElementById('interviewTimeInput').value = '';
      document.getElementById('interviewVideoLinkInput').value = '';

      calendar.render();
    } else {
      alert('Please fill out all fields.');
    }
  });
});