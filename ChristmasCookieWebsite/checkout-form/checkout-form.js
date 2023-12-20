function openTab(event, contentName) {
  event.preventDefault();

  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(contentName).style.display = "block";
  event.currentTarget.className += " active";
}

//year select options
for (let y = 2023; y < 2044; y++) {
  let sel = document.getElementById("exp-year");
  sel.options[sel.options.length] = new Option(y, y);
}

//month select options
for (let m = 1; m <= 12; m++) {
  let name = m;
  if (m < 10) {
    name = `0${m}`;
  }
  let sel = document.getElementById("exp-month");
  sel.options[sel.options.length] = new Option(name, name);
}
