//function to hold the delete task function
function createOnClickListenerRemove() {
$(".ui-icon-close").click(function(){
    $(this).parent().remove();
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
        if (selector == "Margin Top 20%"){
            keepMarginTop();
        }
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

function fillGrid (){
    $(data.ProductData).each( function (i){
        SKU = data.ProductData[i].SKU;
        ProductName = data.ProductData[i].ProductName;
        Picture = data.ProductData[i].Picture;
        SubCat = data.ProductData[i].SubCat;
        Color = data.ProductData[i].Color;
        Style = data.ProductData[i].Style;
        Wash = data.ProductData[i].Wash;
        Vendor = data.ProductData[i].Vendor;
        MarginNum = data.ProductData[i].MarginNum;
        MarginGroup = data.ProductData[i].MarginGroup;
        VolumeNum = data.ProductData[i].VolumeNum;
        VolumeGroup = data.ProductData[i].VolumeGroup;
        appendComponent();
})
}

//helper function to construct component 
function appendComponent(){
    var productImage = $('<img>'); 
    productImage.attr('src', Picture);
    var title = $('<p class="productName"></p>').text(ProductName);
    var skuNum = $('<p></p>').text("SKU# " + SKU);
    var margin = $('<p></p>').text("Margin %: " + MarginNum);
    $('<li class="gridTile"></li>').appendTo("#productGrid").append(productImage, title, skuNum, margin);
}

fillGrid();

function keepMarginTop(){
    $(".gridTile").remove();
    $(data.ProductData).each( function (i){
        if (data.ProductData[i].MarginGroup == "Top"  ){
        SKU = data.ProductData[i].SKU;
        ProductName = data.ProductData[i].ProductName;
        Picture = data.ProductData[i].Picture;
        SubCat = data.ProductData[i].SubCat;
        Color = data.ProductData[i].Color;
        Style = data.ProductData[i].Style;
        Wash = data.ProductData[i].Wash;
        Vendor = data.ProductData[i].Vendor;
        MarginNum = data.ProductData[i].MarginNum;
        MarginGroup = data.ProductData[i].MarginGroup;
        VolumeNum = data.ProductData[i].VolumeNum;
        VolumeGroup = data.ProductData[i].VolumeGroup;
        appendComponent();
        }
    }
    )
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