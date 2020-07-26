function populateCards() {
  let toolsDiv = document.getElementById("tools");
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let tools = JSON.parse(this.responseText);
      // Sort alphabetically by tool name
      tools.sort((a, b) => (a.name > b.name) ? 1 : -1);
      for (let i = 0; i < tools.length; i++) {
        let tool = tools[i];
        let classes = tool.categories.join(" ");
        let categoryTemplate = "";
        for (let aa = 0; aa < tool.categories.length; aa++) {
          categoryTemplate += formatCategoryLabel(tool.categories[aa]);
        }
        let template = `
          <div class="card-container ${classes}">
              <div class="card" onmouseup="window.location.href='${tool.websiteUrl}'">
                <div class="card-header">${categoryTemplate}</div>
                <div class="card-title">${tool.name}</div>
                <div class="card-publisher">${tool.publisher}</div>
                <div class="card-body">${truncate(tool.description, 250)}</div>
                <div class="card-footer">
                  <img src="https://img.shields.io/github/forks/CycloneDX/cyclonedx-dotnet.svg?style=social&label=Fork">&nbsp;
                  <img src="https://img.shields.io/github/stars/CycloneDX/cyclonedx-dotnet.svg?style=social&label=Stars">
                </div>
              </div>
          </div> 
        `;
        toolsDiv.insertAdjacentHTML('beforeend', template);
      }
      filterSelection("all");
    }
  };
  xmlhttp.open("GET", "tools.json", true);
  xmlhttp.send();
}

function formatCategoryLabel(category) {
  let categoryClass = "card-category-" + category.toLowerCase();
  return `<span class="label card-category ${categoryClass}">${category}</span>`;
}

function truncate(str, n) {
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("card-container");
  if (c === "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

populateCards();
// Add active class to the current control button (highlight it)
let btnContainer = document.getElementById("button-container");
let buttons = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
