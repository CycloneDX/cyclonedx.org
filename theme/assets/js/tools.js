$('#button-container button').click((e)=>{
  let target = e.currentTarget
  filterTools(target);
})

function filterTools(target) {
  let category = target.getAttribute('data-category')
  
  $("#category-description").text(target.getAttribute('title'))
  
  // Hide all cards and show the filtered ones
  $(".card-container").hide()
  $(`.card-container[data-categories*='${category}']`).show();

  // Remove active class from all buttons
  // And add it back on the current button
  $('#button-container button').removeClass('active')
  $(target).addClass('active')
}

if (window.location.hash) {
  let dataCategory = window.location.hash.substr(1, window.location.hash.length);
  let fnTarget = $("#btn-" + dataCategory + "");
  if (fnTarget) {
    let target = fnTarget[0];
    filterTools(target);
  }
}