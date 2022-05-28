$('#button-container button').click((e)=>{
  let target = e.currentTarget
  let category = target.getAttribute('data-category')
  
  $("#category-description").text(target.getAttribute('title'))
  
  // Hide all cards and show the filtered ones
  $(".card-container").hide()
  $(`.card-container[data-categories*='${category}']`).show();

  // Remove active class from all buttons
  // And add it back on the current button
  $('#button-container button').removeClass('active')
  $(target).addClass('active')
})