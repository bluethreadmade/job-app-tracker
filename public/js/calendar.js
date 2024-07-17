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
      ]
  });

  calendar.render();

  // Event listener for form submission
  document.getElementById('application-form').addEventListener('submit', function(e) {
      e.preventDefault();

      // Fetch form values
      var title = document.getElementById('interviewPositionInput').value;
      var date = document.getElementById('interviewDateInput').value;
      var time = document.getElementById('interviewTimeInput').value;
      var videoLink = document.getElementById('interviewVideoLinkInput').value;

      // Format date as yyyy-mm-dd for FullCalendar
      var formattedDate = formatDate(date);

      // Combine date and time into start in the required format
      var start = formattedDate + 'T' + time;

      // Add new event to FullCalendar events array
      calendar.addEvent({
          title: title,
          start: start,
          url: videoLink
      });

      // Clear form fields after submission (optional)
      document.getElementById('interviewPositionInput').value = '';
      document.getElementById('interviewDateInput').value = '';
      document.getElementById('interviewTimeInput').value = '';
      document.getElementById('interviewVideoLinkInput').value = '';

      // Display alert or confirmation (optional)
      alert('Interview added successfully!');

      // Render calendar to display the new event
      calendar.render();
  });

  // Helper function to format date as yyyy-mm-dd
  function formatDate(inputDate) {
      var date = new Date(inputDate);
      var month = '' + (date.getMonth() + 1);
      var day = '' + date.getDate();
      var year = date.getFullYear();

      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;

      return [year, month, day].join('-');
  }
});