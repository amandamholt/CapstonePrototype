var data = {"ProductData":
    [
 {
   "SKU": 123456789,
   "ProductName": "Slim Light Flex Jean",
   "Picture": "http://bananarepublic.gap.com/webcontent/0013/194/314/cn13194314.jpg",
   "SubCat": "Jeans",
   "Color": "Blue",
   "Style": "Slim",
   "Wash": "Light",
   "Vendor": "XYZ Vendor",
   "MarginNum": 30,
   "MarginGroup": "None",
   "VolumeNum": 200,
   "VolumeGroup": "Bottom"
 },
 {
   "SKU": 223456789,
   "ProductName": "Slim Grey Flex Jean",
   "Picture": "http://bananarepublic.gap.com/webcontent/0013/691/633/cn13691633.jpg",
   "SubCat": "Jeans",
   "Color": "Grey",
   "Style": "Slim",
   "Wash": "Mid",
   "Vendor": "XYZ Vendor",
   "MarginNum": 55,
   "MarginGroup": "Top",
   "VolumeNum": 1000,
   "VolumeGroup": "Top"
 },
 {
   "SKU": 323456789,
   "ProductName": "Weekday Blue Jean",
   "Picture": "http://bananarepublic.gap.com/webcontent/0013/043/912/cn13043912.jpg",
   "SubCat": "Jeans",
   "Color": "Blue",
   "Style": "Straight",
   "Wash": "Mid",
   "Vendor": "ABC Vendor",
   "MarginNum": 42,
   "MarginGroup": "None",
   "VolumeNum": 800,
   "VolumeGroup": "Top"
 },
 {
   "SKU": 435456789,
   "ProductName": "Black Traveller Jean",
   "Picture": "http://bananarepublic.gap.com/webcontent/0012/983/269/cn12983269.jpg",
   "SubCat": "Jeans",
   "Color": "Black",
   "Style": "Slim",
   "Wash": "Rinse",
   "Vendor": "123 Vendor",
   "MarginNum": 53,
   "MarginGroup": "Top",
   "VolumeNum": 500,
   "VolumeGroup": "None"
 },
 {
   "SKU": 523456789,
   "ProductName": "Dark Salvaged Jean",
   "Picture": "http://bananarepublic.gap.com/webcontent/0012/946/337/cn12946337.jpg",
   "SubCat": "Jeans",
   "Color": "Blue",
   "Style": "Straight",
   "Wash": "Rinse",
   "Vendor": "789 Vendor",
   "MarginNum": 18,
   "MarginGroup": "Bottom",
   "VolumeNum": 300,
   "VolumeGroup": "Bottom"
 }
]}

var lookUpFilter = {
    "Jeans":{"type":"SubCat","info":"Jeans"},
    "Slacks":{"type":"SubCat","info":"Slacks"},
    "Sweatpants":{"type":"SubCat","info":"Sweatpants"},
    "Shorts":{"type":"SubCat","info":"Shorts"},
    
    "Volume Top 20%":{"type":"VolumeGroup","info":"Top"},
    "Volume Bottom 20%":{"type":"VolumeGroup","info":"Bottom"},
    
    "Margin Top 20%":{"type":"MarginGroup","info":"Top"},
    "Margin Bottom 20%":{"type":"MarginGroup","info":"Bottom"},
    
    "Black":{"type":"Color","info":"Black"},
    "White":{"type":"Color","info":"White"},
    "Grey":{"type":"Color","info":"Grey"},
    "Blue":{"type":"Color","info":"Blue"},
    "Green":{"type":"Color","info":"Green"},
    
    "Slim":{"type":"Style","info":"Slim"},
    "Straight":{"type":"Style","info":"Straight"},
    "Bootcut":{"type":"Style","info":"Bootcut"},
    "Ankle":{"type":"Style","info":"Ankle"},
    
    "Rinse":{"type":"Wash","info":"Rinse"},
    "Mid":{"type":"Wash","info":"Mid"},
    "Light":{"type":"Wash","info":"Light"},
    "Acid":{"type":"Wash","info":"Acid"},
    
    "XYZ Vendor":{"type":"Vendor","info":"XYZ Vendor"},
    "ABC Vendor":{"type":"Vendor","info":"ABC Vendor"},
    "123 Vendor":{"type":"Vendor","info":"123 Vendor"},
    "789 Vendor":{"type":"Vendor","info":"789 Vendor"},

}



