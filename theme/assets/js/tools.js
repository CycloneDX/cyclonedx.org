$('#button-container button').click((e)=>{
  let category = e.target.getAttribute('data-category')
  $("#category-description").text(e.target.getAttribute('title'))
  $(".card-container").hide()
  $(`.card-container[data-categories*='${category}']`).show();
})