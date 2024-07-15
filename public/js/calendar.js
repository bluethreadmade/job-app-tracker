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