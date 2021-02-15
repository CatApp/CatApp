(function(){
$(window).on("resize", function(ev) {
  //console.info(window.innerWidth);
  if (window.innerWidth > 720) {
    $("nav ul").attr("style", "");
  }
});
function navHighlight(elem, home, active) {
    var url = location.href.split('/'),
        loc = url[url.length -1],
        link = document.querySelectorAll(elem);
    for (var i = 0; i < link.length; i++) {
        var path = link[i].href.split('/'),
            page = path[path.length -1];
        if (page == loc || page == home && loc == '') {
            link[i].parentNode.className += ' ' + active;
            document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));
            }
        }
    }
navHighlight('.mainNav ul li a', 'index.html', 'current'); /* menu link selector, home page, highlight class */
})();
function openTab(evt, findTab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(findTab).style.display = "block";
  evt.currentTarget.className += " active";
}

// Add products to <table>
function studentAdd() {

  
  // First check if a <tbody> tag exists, add one if not
  if ($("#student tbody").length == 0) {
      $("#student").append("<tbody></tbody>");
  }
  // Append product to the table
  $("#student tbody").append("<tr>" +
      "<td>3</td>" +
      "<td>4</td>" +
      '<td><button class = "studentbtn" >Theo</button></td>' +
      "<td>13/12/2000</td>"+
      "</tr>");  

  $("#student tbody").append("<tr>" +
  "<td>9</td>" +
  "<td>1</td>" +
  '<td><button class = "studentbtn" >Lauren</button></td>' +
  "<td>18/04/1996</td>"+
  "</tr>"); 

}

$(document).ready(function(){
  $(".studentbtn").click(function(){
      location.href = "/studentinfo"
  });
});


function addItem() {
  console.log("pls work");
	var changeworkul = document.getElementById("dynamic-list");
	var helpfulThing = document.getElementById("helpfulThing");
	var changeworkli = document.createElement("li");
  changeworkli.classList.add("changework");
  //testList.value = helpfulThing.value;
	changeworkli.setAttribute('id', helpfulThing.value);
	 changeworkli.appendChild(document.createTextNode(helpfulThing.value));
	changeworkul.appendChild(changeworkli);
}


function removeItem() {
	var ul = document.getElementById("dynamic-list");
	var helpfulThing = document.getElementById("helpfulThing");
	var item = document.getElementById(helpfulThing.value);
	ul.removeChild(item);
}


/*function viewAll (app, req, res) {
  console.info("View All controller");
  app
    .set("myDb")
    .collection("Student")
    .find({})
    .toArray(function (err, docs) {
      //console.dir(docs)
      if (err) {
        console.error(err);
      }
      return res.render("films", {
        title: "All Films",
        films: docs,
        login: req.session.login,
      });
    })};*/
