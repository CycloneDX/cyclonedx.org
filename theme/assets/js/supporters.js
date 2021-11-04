function populateCards() {
    let supporters = document.getElementById("adopters-supporters");
    let organizations = document.getElementById("adopters-organizations");
    let projects = document.getElementById("adopters-projects");
    let supportersHtml = "";
    let organizationsHtml = "";
    let projectsHtml = "";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let members = JSON.parse(this.responseText);
            // Sort alphabetically by organization
            members.sort((a, b) => (a.organization > b.organization) ? 1 : -1);
            for (let i = 0; i < members.length; i++) {
                let member = members[i];
                let template = generateTemplate(member);
                for (let aa = 0; aa < member.categories.length; aa++) {
                    if (member.categories[aa] === "supporters") {
                        supportersHtml += template;
                    } else if (member.categories[aa] === "organizations") {
                        organizationsHtml += template;
                    } else if (member.categories[aa] === "projects") {
                        projectsHtml += template;
                    }
                }
            }
            supporters.insertAdjacentHTML('beforeend', supportersHtml);
            organizations.insertAdjacentHTML('beforeend', organizationsHtml);
            projects.insertAdjacentHTML('beforeend', projectsHtml);

        }
    };
    xmlhttp.open("GET", "/about/supporters/supporters.json", true);
    xmlhttp.send();
}

function generateTemplate(entity) {
    if (entity.logo.startsWith('https://'))
    {
        var logoUrl = entity.logo;
    }
    else
    {
        var logoUrl = "/theme/assets/images/logos/" + entity.logo;
    }
    return `
    <div class="logo-card-container">
      <div class="logo-card" style="overflow: visible;">
        <div class="logo-card-body"><a href="${entity.homepage}"><img class="adopter" src="${logoUrl}" alt="${entity.organization}" border="0"></a></div>
      </div>
    </div>  
    `;
}

populateCards();
