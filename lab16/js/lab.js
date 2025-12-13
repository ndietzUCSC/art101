// lab.js XKCD API 
// Author: Norah Dietz
// Date:12/12/2025

// Constants

// Functions 

$('#button').on('click', function () {

  $.ajax({
    url: 'https://corsproxy.io/https://xkcd.com/info.0.json',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      comicObj = data;

      // Section title using comicObj.title
      $('#comic-title').text(comicObj.title);

      // Image using comicObj.img, with alt text
      $('#comic-image')
        .attr('src', comicObj.img)
        .attr('alt', comicObj.alt)
    },
    error: function (xhr, status, error) {
      console.error('AJAX error:', error);
    },
    complete: function () {
      clicked = false;
    }
  });
});

