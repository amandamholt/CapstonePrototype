//sortable and draggable 
$( function() {
    $( "#sortable" ).sortable({
      revert: true,
      cancel: ".ui-state-disabled"
    });
    $( ".draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid",
      stack: "#sortable li", 
    }).addClass("breadcrumbs");
    $( "ul, li" ).disableSelection();
  } );


/*$(function () {
    $(".selectoption").draggable({
        containment: '.mainpgelements',
        stack: '.mainpgelements',
        helper: 'clone',
        cursor: 'move',
        appendTo: 'body',
        revert: 'invalid'
    });
    $(".sortoption").draggable({
        containment: '.mainpgelements',
        stack: '.mainpgelements',
        helper: 'clone',
        cursor: 'move',
        appendTo: 'body',
        revert: 'invalid'
    });
    $("#time").droppable({
        drop: handleDrop
    });
    $("#gridspace").droppable({
        drop: handleDrop
    });
});*/

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function handleDrop(event, ui) {
console.log("dropped");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//collapsable menus
$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});