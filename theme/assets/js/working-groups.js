function populateCards() {
  let coreWG = document.getElementById("core-wg");
  let industryWG = document.getElementById("industry-wg");
  let coreWGhtml = "";
  let industryWGhtml = "";
  let coreWGcount = 0;
  let industryWGcount = 0;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let rowBegin = `<div class="row" style="margin-bottom: 6em">`;
      let rowEnd = `</div>`;
      let members = JSON.parse(this.responseText);
      // Sort alphabetically by tool name
      members.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
      for (let i = 0; i < members.length; i++) {
        let member = members[i];
        let template = generateTemplate(member);
        for (let aa = 0; aa < member.categories.length; aa++) {
          if (member.categories[aa] === "core") {
            if (coreWGcount === 0) {
              coreWGhtml += rowBegin + template;
            } else if (coreWGcount % 3 === 0) {
              coreWGhtml += rowEnd + rowBegin + template;
            } else {
              coreWGhtml += template;
            }
            coreWGcount++;
          } else if (member.categories[aa] === "industry") {
            if (industryWGcount === 0) {
              industryWGhtml += rowBegin + template;
            } else if (industryWGcount % 3 === 0) {
              industryWGhtml += rowEnd + rowBegin + template;
            } else {
              industryWGhtml += template;
            }
            industryWGcount++;
          }
        }
      }
      coreWGhtml += rowEnd;
      industryWGhtml += rowEnd;
      coreWG.insertAdjacentHTML('beforeend', coreWGhtml);
      industryWG.insertAdjacentHTML('beforeend', industryWGhtml);

    }
  };
  xmlhttp.open("GET", "working-groups.json", true);
  xmlhttp.send();
}

function generateTemplate(member) {
  return `
    <div class="col-sm-4 col-md-4">
      <div class="thumbnail">
        <img class="profile" src="/theme/assets/images/headshots/${member.headshot}">
        <div class="caption">
          ${generateName(member)}
          ${generateDescription(member)}
          <p class="profile-social">
            ${generateSocial(member)}  
          </p>
        </div>
      </div>
    </div>
  `;
}

function generateName(member) {
  if (member.organization) {
    if (member.homepage) {
      return `<h4 class="profile-name">${member.displayName}<br><span class="profile-org"><a href="${member.homepage}">${member.organization}</a></span></h4>`;
    } else {
      return `<h4 class="profile-name">${member.displayName}<br><span class="profile-org">${member.organization}</span></h4>`;
    }
  } else {
    return `<h4 class="profile-name">${member.displayName}</h4>`;
  }
}

function generateDescription(member) {
  if (member.description) {
    return `<p>${truncate(member.description, 250)}</p>`;
  } else {
    return "";
  }
}

function generateSocial(member) {
  let template = "";
  if (member.twitter) {
    template += `<a href="https://twitter.com/${member.twitter}" title="Twitter" target="_blank"><i class="icon icon--twitter"></i></a>`;
  }
  if (member.linkedin) {
    template += `<a href="https://www.linkedin.com/in/${member.linkedin}/" title="LinkedIn" target="_blank"><i class="icon icon--linkedin"></i></a>`;
  }
  if (member.github) {
    template += `<a href="https://github.com/${member.github}" title="GitHub" target="_blank"><i class="icon icon--github"></i></a>`;
  }
  return template;
}

function truncate(str, n) {
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

populateCards();
