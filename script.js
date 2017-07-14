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
        console.log(sorter);
         
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
var order = []


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
    $('<li class="gridTile"></li>').appendTo("#productGrid").append(productImage, title, skuNum).append(
        function (i){
            var addLabel;
            $(order).each(
                function(i){
                    var label = lookUpOrder[order[i]].type;
                    var value = data[label];
                    addLabel = "<p>" + label + ": " + value + "</p>";
                }
            )
          return addLabel;  
        }
        
    );
    
    
    
    
   /* $(order).each(
        function(i){
            var label = lookUpOrder[order[i]].type;
            console.log(label);
            var value = data.label;
            console.log(value);
            $('<p></p>').appendTo('li').append(label);
        });*/
    
    /*function addLabels (){
           for (var j = 0; j < elementsToSort.length; j++){
                   var label = lookUpFilter[j].type
                   var value = lookUpFilter[j].info
                   console.log(label);
                   console.log(value);
                }
            
            console.log(elementsToSort);
        }
    
    addLabels ();*/
    
    
}

fillGrid();


function sortShowindData(sortElements, order){
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
        if(howManyAreTrue == sortElements.length){
            auxiliarArray.push(data.ProductData[i]);
        }
    }   
    )
    
    dataShowing = [];
    dataShowing = auxiliarArray;
    

    for(var i = 0; i < order.length; i++){

        dataShowing.sort(

            function(a,b){

                if(lookUpOrder[order[i]].direction == "Descending"){
                    return a[lookUpOrder[order[i]].type] < b[lookUpOrder[order[i]].type];
                } else {
                    return a[lookUpOrder[order[i]].type] > b[lookUpOrder[order[i]].type];
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