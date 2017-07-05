$(function () {
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
});

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
alert('Hello');
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
