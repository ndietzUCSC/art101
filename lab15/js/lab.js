// index.js - Is mercury in retrograde api call
// Author: Norah Dietz 
// Date: 12/12/2025

// Constants
var clicked = false;
// Functions
var dateVal = "";

//check today's date for retrograde status, can only be clicked once.
$('#button').click(function () {
  if (clicked) return;          // prevent multiple clicks
  clicked = true;

  $.ajax({
    url: 'https://mercuryretrogradeapi.com',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      var isRetrograde = data.is_retrograde;

      if (isRetrograde) {
        $('#output').append(
          "<p>Yes, Mercury is in retrograde today.</p>"
        );
      } else {
        $('#output').append(
          "<p> No, Mercury is not in retrograde today. </p>"
        );
      }
    },
    error: function (xhr, status, error) {
      console.error('AJAX error:', error);
    },
  });
});


//date grabber for the input field
$('#date').on('change', function() {
        dateVal = $(this).val();
        console.log("Selected date: " + dateVal);
    });
    
//date specfic function. Can be called multiple times, to check different dates.
$('#date-button').click(function () {
  var rawDate = $('#date').val();        // e.g., "2025-01-05"
  console.log(rawDate);

  // Convert to readable format
  var formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  $.ajax({
    url: 'https://mercuryretrogradeapi.com',
    method: 'GET',
    data: { date: rawDate },
    dataType: 'json',
    success: function (data) {
      var isRetrograde = data.is_retrograde;

      if (isRetrograde) {
        $('#output-date').append(
          "<p>Yes, Mercury is in retrograde on: " + formattedDate + "</p>"
        );
      } else {
        $('#output-date').append(
          "<p>No, Mercury is not in retrograde on: " + formattedDate + "</p>"
        );
      }
    },
    error: function (xhr, status, error) {
      console.error('AJAX error:', error);
    }
  });
});
