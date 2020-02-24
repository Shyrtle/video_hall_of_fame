var delayTimer;
$('#id_search_term').keyup(function(){
  clearTimeout(delayTimer);
  $('#search_results').text('Loading...');
  delayTimer = setTimeout(function() {
    $.ajax({
      url: '/video/search/',
      data: {
        'search_term':'hello'
      },
      dataType: 'json',
      success: function(data) {
        $('search_results').text('AJAX OK');
      }
    });
  }, 100);
});
