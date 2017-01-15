$(document).ready(function() {
$('.modalthumb').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
    var description = $(this).parent('a').attr("description");
  	$('.modal-description').html(description);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});

