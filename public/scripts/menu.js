/*jslint browser, es6, for */
window.addEventListener( 'load', function()
{   'use strict';
    MenuPunktAktiv();

});
/*----------menu----------*/
function MenuPunktAktiv()
{   'use strict';
    var current = "" + window.location;
    var nav = document.getElementById( 'HovedMenu' );
    var anchor = nav.getElementsByTagName( 'a' );

    if( current.search( ".html" ) == -1 )
    {
        current = current + "index.html";
    }
    for (var i = 0; i < anchor.length; i++ )
    {
        if( current.toLowerCase() == anchor[i].href.toLowerCase() )
        {
            anchor[i].className = "active";
        }
    }
}
function openNav() {
    document.getElementById("HovedMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("HovedMenu").style.width = "0";
}
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}