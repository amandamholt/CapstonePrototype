//function to hold the delete task function
function createOnClickListenerRemove() {
$(".ui-icon-close").click(function(){
    $(this).parent().remove();
    
    console.log($(this).parent());
    
    console.log(elementsToSort);
    
    var selector = $($(this).parent()).text();
    var idx = elementsToSort.indexOf(selector);
    elementsToSort.splice(idx, 1);
    
    console.log(elementsToSort);
    
    sortShowindData(elementsToSort);
});
};


createOnClickListenerRemove();  


//sortable and draggable 
$( function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    $( ".draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid",
      stack: "#sortable li", 
      start: function(e, ui){
        $(ui.helper).addClass("breadcrumbs").children().removeClass("ui-icon-grip-dotted-vertical").addClass("ui-icon-close");
        createOnClickListenerRemove();},
        
     stop: function(e, ui){
        var selector = $(ui.helper).text();
         
        elementsToSort.push(lookUpFilter[selector]);
        sortShowindData(elementsToSort);
        
     }
    });
    
    $( "ul, li" ).disableSelection();
    
  } );

//doing stuff with JSON

function proofData() {
    console.log(data.ProductData[0].Vendor);
}

proofData();

var SKU
var ProductName
var Picture
var SubCat
var Color
var Style
var Wash
var Vendor
var MarginNum
var MarginGroup
var VolumeNum
var VolumeGroup


var dataShowing = [];
var elementsToSort = [];


function fillGrid (){
    $(data.ProductData).each( function (i){
        appendComponent(data.ProductData[i]);
        dataShowing.push(data.ProductData[i]);
})
}

//helper function to construct component 
function appendComponent(data){
    var productImage = $('<img>'); 
    productImage.attr('src', data.Picture);
    var title = $('<p class="productName"></p>').text(data.ProductName);
    var skuNum = $('<p></p>').text("SKU# " + data.SKU);
    var margin = $('<p></p>').text("Margin %: " + data.MarginNum);
    $('<li class="gridTile"></li>').appendTo("#productGrid").append(productImage, title, skuNum, margin);
}

fillGrid();


function sortShowindData(sortElements){
    $(".gridTile").remove();
     var auxiliarArray = [];
    $(data.ProductData).each( function (i){
        var howManyAreTrue = 0;
        for (var j = 0; j < sortElements.length; j++){
            if (data.ProductData[i][sortElements[j].type] == sortElements[j].info  ){
                howManyAreTrue = howManyAreTrue +1;
            }
        }
        if(howManyAreTrue == sortElements.length){
            auxiliarArray.push(data.ProductData[i]);
        }
    }   
    )
    
    dataShowing = [];
    dataShowing = auxiliarArray;
    
    //SORT DATA SHOWING ARRAY!!
    //dataShowing.sort(function(a,b){return a.SKU < b.SKU});
    
    for(var i = 0; i < dataShowing.length; i++){
        appendComponent(dataShowing[i]);
    }
}

//keepMarginTop();



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
    console.log('dropped');
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


//////Scripts for Timeline/////////////

var selectedBoxes = [];
//this function is called when the selection process has completed
$( ".selectable" ).on( "selectableselected", function( event, ui ) {
  var selectedBox = ui.selected.id;
  selectedBoxes.push(selectedBox);
  console.log(selectedBoxes)

} );

//button click listeners
$("#yearsBtn").click(function() {
   $("#weeks").hide("fast");
   $("#seasons").hide("fast");
   $("#years").show("fast");
});
$("#seasonsBtn").click(function() {
  $("#weeks").hide("fast");
  $("#years").hide("fast");
  $("#seasons").show("fast");
 });
$("#weeksBtn").click(function() {
  $("#years").hide("fast");
  $("#seasons").hide("fast");
  $("#weeks").show("fast");  
});
//display weeks by default
$(document).ready(function() {
  $("#years").hide("fast");
  $("#seasons").hide("fast");
  $("#weeks").show("fast");  
});

$( function() {
    $( ".selectable").selectable();
  } );
  $( function() {
    $( ".selectable li" ).hover(
    function() {
      $( this ).removeClass( "ui-state-default" ).addClass( "ui-state-hover" );
    }, function() {
      $( this ).removeClass( "ui-state-hover" ).addClass( "ui-state-default" );
    }
  );
  });
