
//--------------------------------- Result //
//Map codes from : https://www.embedgooglemap.net/
var restaurants = [
	{
		name:'Hakushu Teppanyaki',
		hours:'17:30 - 22:00',
		website:'https://hakushutokyo.business.site/',
		address:'17-10 Sakuragaokacho MCD Bldg. B1F, Shibuya 150-0031 Tokyo prefektur',
		map:'<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Hakushu%20Teppanyaki%2C%20%EF%BC%AD%EF%BC%A3%EF%BC%A4%E3%83%93%E3%83%AB%20B1F%2017%20Sakuragaokacho%2C%20Shibuya%20City%2C%20Tokyo%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>'
	},
	{
		name:'Uobei',
		hours:'11:00 - 22:00',
		website:'https://www.genkisushi.co.jp/en/',
		address:'1F The 6th Central Bld.2-29-11 Dogenzaka,Shib uyaku, Tokyo 150-00 43',
		map:'<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Uobei%2C%20%E7%AC%AC%E5%85%AD%E3%82%BB%E3%83%B3%E3%83%88%E3%83%A9%E3%83%AB%E3%83%93%E3%83%AB%201F%202%20Chome-29%20Dogenzaka%2C%20Shibuya%20City%2C%20Tokyo%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>'
	},
	{
		name:'Saido',
		hours:'12:00 - 15:00<br>18:00 - 22:00',
		website:'https://saido.tokyo/',
		address:'Meguro-ku, Jiyūgaoka, 2 Chome−15-10, Tokyo, Japan, 152-0035',
		map:'<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Saido%2C%202%20Chome-15-10%20Jiyugaoka%2C%20Meguro%20City%2C%20Tokyo%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="123movies-i.net">123movies apk</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>'
	},
	{
		name:'Ballon',
		hours:'11:00 - 18:00',
		website:'https://www.ballontokyo.com/',
		address:'Nakameguro, 3 Chome-2, Komazawa Dori, Tokyo, Japan, 153-0061',
		map:'<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Japan%2C%20Tokyo%2C%20Meguro%20City%2C%20Nakameguro%2C%203%20Chome%E2%88%922%E2%88%9219%20Ballon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="123movies-i.net">123movies apk</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>'
	},
	{
		name:'Falafel brothers',
		hours:'11:00 - 19:30',
		website:'https://www.falafelbrothers.jp/',
		address:'1F Kadogan Bldg, 5-1-10 Roppongi, Minato, Tokyo, Japan, 106-0032',
		map:'<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%20FALAFEL%20BROTHERS%7C%E3%83%95%E3%82%A1%E3%83%A9%E3%83%95%E3%82%A7%E3%83%AB%E3%83%96%E3%83%A9%E3%82%B6%E3%83%BC%E3%82%BA%20Japan%2C%20Tokyo%2C%20Shibuya%20City%2C%20Hiroo1%20Chome%E2%88%921%E2%88%9236%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="123movies-i.net">123movies apk</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>'
	}
];

var suggestions = {
	Japanese:"1,2,3",
	NonJapanese:"4,5",
	Meat:"1,2",
	Vegetarian:"2,3,4,5",
	Vegan:"3,4,5",
	Low:"2,4",
	Medium:"3,5",
	High:"1,3"
}

var inputs = [];
var suggested = [];

function containing(arr ,key){
	for(let i=0;i<arr.length;i++){
		if(arr[i] == key){
			return true;
		}
	}
	return false;
}

//--------------------------------- Modal //
//CREDIT base of modal: https://codepen.io/Ayn_/pen/vmVKZV

$(document).ready(function() {
  prep_modal();
});

function prep_modal()
{
  $(".modal").each(function() {

  var element = this;
	var pages = $(this).find('.modal-split');

  if (pages.length != 0)
  {
    	pages.hide();
    	pages.eq(0).show();

    	var b_button = document.createElement("button");
                b_button.setAttribute("type","button");
          			b_button.setAttribute("class","btn btn-primary");
          			b_button.setAttribute("style","display: none;");
          			b_button.innerHTML = "Back";

    	var n_button = document.createElement("button");
                n_button.setAttribute("type","button");
          			n_button.setAttribute("class","btn btn-primary");
          			n_button.innerHTML = "Next";

    	$(this).find('.modal-footer').append(b_button).append(n_button);


    	var page_track = 0;

    	$(n_button).click(function() {
        
        this.blur();

    		if(page_track == 0)
    		{
    			$(b_button).show();
    		}

    		if(page_track == pages.length-2)
    		{
    			$(n_button).text("Submit");
    		}

        if(page_track == pages.length-1)
        {
          $(element).find("form").submit();
        }

    		if(page_track < pages.length-1)
    		{
    			page_track++;

    			pages.hide();
    			pages.eq(page_track).show();
    		}


    	});

    	$(b_button).click(function() {

    		if(page_track == 1)
    		{
    			$(b_button).hide();
    		}

    		if(page_track == pages.length-1)
    		{
    			$(n_button).text("Next");
    		}

    		if(page_track > 0)
    		{
    			page_track--;

    			pages.hide();
    			pages.eq(page_track).show();
    		}


    	});

  }

  });
}

$(document).ready(function () {
  $('.radio-group .radio').click(function () {
  $('.selected .fa').removeClass('fa-check');
  $('.radio').removeClass('selected');
  $(this).addClass('selected');
  });
  });

function suggest(index){
	document.getElementById("name").innerHTML = "";
	document.getElementById("hours").innerHTML = "";
	document.getElementById("website").innerHTML = "";
	document.getElementById("address").innerHTML = "";
	document.getElementById("map").innerHTML = ""; 
	let numbers = suggestions[index].split(",");
	for(let i=0;i<numbers.length;i++){
		inputs.push(Number(numbers[i]));
	}
	if(index == "Low" || index == "Medium" || index == "High"){
		for(let i=0;i<inputs.length;i++){
			let count = 0;
			for(let j=0;j<inputs.length;j++){
				if(inputs[i] == inputs[j]){
					count++;
				}
			}
			if(count == 3 && containing(suggested,inputs[i]) == false){
				suggested.push(inputs[i]);
			}
		}
		var random = suggested[Math.floor(Math.random() * suggested.length)] - 1;
		document.getElementById("name").innerHTML = "<b>Name : </b>" + restaurants[random].name;
		document.getElementById("hours").innerHTML = "<b>Opening hours : </b>" + restaurants[random].hours;
		document.getElementById("website").innerHTML = "<b>Website : </b>" + restaurants[random].website;
		document.getElementById("address").innerHTML = "<b>Address : </b>" + restaurants[random].address;
		document.getElementById("map").innerHTML = restaurants[random].map;
		inputs = [];
		suggested = [];
	}
}

//--------------------------------- Tabs //
  //CREDIT tabs: https://www.w3schools.com/howto/howto_js_tabs.asp //

  function openCategory(evt, cityName) {
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
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }

  	document.getElementById("defaultOpen").click();