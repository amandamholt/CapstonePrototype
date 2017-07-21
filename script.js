var selector; 


//function to hold the delete task function
function createOnClickListenerRemove() {
$(".ui-icon-close").click(function(){
    $(this).parent().remove();
    
    console.log($(this).parent());
    
    console.log(elementsToSort);

    var selector = $($(this).parent()).text();
    var idx = elementsToSort.indexOf(lookUpFilter[selector]);
    
    if (idx > -1){
    elementsToSort.splice(idx, 1);}
    
    
    var idxo = order.indexOf(selector);
    
    if (idxo > -1){
    order.splice(idxo, 1);}
    
    sortShowindData(elementsToSort,order);
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
        var temp = lookUpFilter[selector].type;
        if (temp.endsWith("Group") == true) {
            if (lookUpFilter[selector].info == "Top"){
                temp = temp.replace("Group", " High to Low");
                //console.log(temp);
                order.push(temp);
                } else if (lookUpFilter[selector].info == "Bottom"){
                    temp = temp.replace("Group", " Low to High");
                    //console.log(temp);
                    order.push(temp);
                };
         };
         
        
        sortShowindData(elementsToSort,order);
        
     }
    });
    $( ".draggableSort" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid",
      stack: "#sortable li", 
      start: function(e, ui){
        $(ui.helper).addClass("breadcrumbs").children().removeClass("ui-icon-grip-dotted-vertical").addClass("ui-icon-close");
        createOnClickListenerRemove();},
        
     stop: function(e, ui){
        var sorter = $(ui.helper).text();
        //console.log(sorter);
         
        order.push(sorter);
        sortShowindData(elementsToSort,order);
        
        
     }
        
     
        
    });
    
    
    $( "ul, li" ).disableSelection();
    
  } );

//doing stuff with JSON

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
var order = [];

////  This is the old fillGrid function (fills grid with ALL 70 products)
// function fillGrid (){
//     $(data.ProductData).each( function (i){
//         appendComponent(data.ProductData[i]);
//         dataShowing.push(data.ProductData[i]);
// })
// }

//This is the new fillGrid function, which SHOULD only fill the grid with items in the selected timeBox
function fillGrid (){
    $(dataShowing).each( function (i){
        appendComponent(dataShowing[i]);
       // dataShowing.push(data.ProductData[i]);
})
}

//helper function to construct component 
function appendComponent(data){
    var productImage = $('<img>'); 
    var imageLocation = "product_images/" + data.Picture;
    productImage.attr('src', imageLocation);
    var title = $('<p class="productName"></p>').text(data.ProductName);
    var skuNum = $('<p></p>').text("SKU# " + data.SKU);
    var toBeAdded = $('<li class="gridTile"></li>').appendTo("#productGrid").append(productImage, title, skuNum);
    
    if (order.length > -1) 
    {
           
        $(order).each(
                
                function(i){
                    var label = lookUpOrder[order[i]].type;
                    var value = data[label];
                    addLabel = "<p class='label'>" + label + ": " + value + "</p>";
                    toBeAdded.append(addLabel); 
               
                })}
   
 if (elementsToSort.length > -1){
            $(elementsToSort).each(
                function(i){
                    var label = elementsToSort[i].type;
                    console.log(label);
                    var value = data[elementsToSort[i].type];
                    //console.log(value);
                    if (label.endsWith("Group") == true) {
                        console.log("hi");
                    } else {
                    addLabel = "<p class='label'>" + label + ": " + value + "</p>";
                    toBeAdded.append(addLabel)};
                })}


}

//create a variable to store the currently selected timeframe in
var timeBox = "July31";


$(document).ready(function () {
  $('#July31').addClass('ui-selected');

  sortByTime(timeBox);

  fillGrid();

});




console.log(timeBox);

//fills the dataShowing array with only items that contain the selected time attribute
function sortByTime(selectedTime){
  $(".gridTile").remove();
  $(data.ProductData).each( function (i){
    if ( data.ProductData[i].Time == selectedTime ) {
        dataShowing.push(data.ProductData[i]);
    }
  })
};


function sortShowindData(sortElements, order){
    $(".label").remove(); 
    $(".gridTile").remove();
    $(".catHead").remove();
     var auxiliarArray = [];
    $(data.ProductData).each( function (i){
        var howManyAreTrue = 0;
        for (var j = 0; j < sortElements.length; j++){
            if (data.ProductData[i][sortElements[j].type] == sortElements[j].info  ){
                howManyAreTrue = howManyAreTrue +1;
            }
        }
        if((howManyAreTrue == sortElements.length) && (data.ProductData[i].Time == timeBox)){      //&& (data.ProductData[i].Time == timeBox))
            auxiliarArray.push(data.ProductData[i]);
            console.log("got it!");
        }
    }   
    )
    //clear old data
    dataShowing = [];
    //fill with new data
    dataShowing = auxiliarArray;
    

    for(var i = 0; i < order.length; i++){

        dataShowing.sort(

            function(a,b){

                if(lookUpOrder[order[i]].direction == "Descending"){
                    return b[lookUpOrder[order[i]].type] - a[lookUpOrder[order[i]].type];
                } else if(lookUpOrder[order[i]].direction == "Ascending"){
                    return a[lookUpOrder[order[i]].type] - b[lookUpOrder[order[i]].type];
                } else {
                    return ((a[lookUpOrder[order[i]].type] < b[lookUpOrder[order[i]].type]) ? -1 : ((a[lookUpOrder[order[i]].type] > b[lookUpOrder[order[i]].type]) ? 1 : 0));
                }

            }



        );
    }
    
    
    
    for(var i = 0; i < dataShowing.length; i++){
        for( var j = 0; j < order.length; j++){
            if (lookUpOrder[order[j]].direction == "Group"){
                if(i!=0){

                    if( dataShowing[i][lookUpOrder[order[j]].type] != dataShowing[i-1][lookUpOrder[order[j]].type]){
                        $('<div class="catHead"></div>').appendTo("#productGrid").append("<br><h1>"+dataShowing[i][lookUpOrder[order[j]].type]+"</h1>");
                    }
                }else{
                    $('<div class="catHead"></div>').appendTo("#productGrid").append("<h1>"+dataShowing[i][lookUpOrder[order[j]].type]+"</h1>");
                }
            }
        }
        
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

//////////////////////////////////////////////
////////////Timeline scripts//////////////////
//////////////////////////////////////////////

//this variable stores the selected time boxes
var selectedBoxes = [];

//this function empties the dataShowing and the selectedBoxes arrays when another selection is made
$( ".selectable" ).on( "selectableselecting", function( event, ui ) {

    //this ensures only the products with the selected time are in the array:
    dataShowing = [];
    //this ensures only the most recently selected time range is in the array:
    selectedBoxes = [];

});


//this function is called when the selection process has completed
$( ".selectable" ).on( "selectableselected", function( event, ui ) {

  var selectedBox = ui.selected.id;
  selectedBoxes.push(selectedBox);
  console.log(selectedBoxes);
  timeBox = selectedBoxes[(selectedBoxes.length) - 1]; //data.ProductData[0].Time)

  sortByTime(timeBox);
  //console.log(dataShowing)
  fillGrid();
  sortShowindData(elementsToSort,order);
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


