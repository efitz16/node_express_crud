$(document).ready(function() {
  $.getJSON('api', updateFeedback);

  $('.feedback-form').submit(function(e){
    e.preventDefault();
    $.post('/api', {
    	name: $('#feedback-form-name').val(),
    	message: $('#feedback-form-message').val()
    }, updateFeedback) //when this is done run updateFeedback
  });

  $('.fedback-messages').on("click", function(e) {
    if(e.target.className == 'delete-button') {
      $.ajax({
      	url: 'api/' + e.target.children[0].id,
      	type: 'DELETE',
      	success: updateFeedback
      })
    }
  });

  function updateFeedback(data) {
  	var output = "";
  	$.each(data, function(key, item) {
      output +='<div><span>' + item.name + '</span>';
      output += '<p>' + item.message + '</p>';
      output += '<button class="delete-button"><span id=' + key + '></span>Delete</button></div>'
  	});
  	$('.fedback-messages').html(output);
  	$('#feedback-form-name').val("");
  	$('#feedback-form-message').val("")
  }
});