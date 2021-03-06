//--------------------------------- Modal //
// CREDIT base of modal: https://codepen.io/Ayn_/pen/vmVKZV
// CREDIT maps: https://www.embedgooglemap.net/

var restaurants = [
  //1
  {
    name: "HAKUSHU TEPPANYAKI.",
    cuisine: "Steak",
    hours: "17:30 - 22:00",
    website: "<a href='https://hakushu-tokyo.business.site/' target='_blank'> Website </a>",
    address:
      "17-10 Sakuragaokacho, MCD Bldg. B1F, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Hakushu%20Teppanyaki%2C%20%EF%BC%AD%EF%BC%A3%EF%BC%A4%E3%83%93%E3%83%AB%20B1F%2017%20Sakuragaokacho%2C%20Shibuya%20City%2C%20Tokyo%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //2
  {
    name: "UOBEI.",
    cuisine: "Sushi",
    hours: "11:00 - 22:00",
    website: "<a href='https://www.genkisushi.co.jp/en/' target='_blank'> Website </a>",
    address:
      "2-29-11 Dogenzaka, 1F The 6th Central Bld., Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Uobei%2C%20%E7%AC%AC%E5%85%AD%E3%82%BB%E3%83%B3%E3%83%88%E3%83%A9%E3%83%AB%E3%83%93%E3%83%AB%201F%202%20Chome-29%20Dogenzaka%2C%20Shibuya%20City%2C%20Tokyo%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //3
  {
    name: "SAIDO.",
    cuisine: "Japanese fusion vegan",
    hours: "12:00 - 22:00",
    website: "<a href='https://saido.tokyo/' target='_blank'> Website </a>",
    address: "2−15-10, Jiyūgaoka, Meguro, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Saido%2C%202%20Chome-15-10%20Jiyugaoka%2C%20Meguro%20City%2C%20Tokyo%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="123movies-i.net">123movies apk</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //4
  {
    name: "BALLON.",
    cuisine: "Falafel",
    hours: "11:00 - 18:00",
    website: "<a href='https://www.ballontokyo.com/' target='_blank'> Website </a>",
    address: "3-2, Komazawa Dori, Nakameguro, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Japan%2C%20Tokyo%2C%20Meguro%20City%2C%20Nakameguro%2C%203%20Chome%E2%88%922%E2%88%9219%20Ballon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="123movies-i.net">123movies apk</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //5
  {
    name: "FALAFEL BROTHERS.",
    cuisine: "Falafel",
    hours: "11:00 - 19:30",
    website: "<a href='https://www.falafelbrothers.jp/' target='_blank'> Website </a>",
    address: "5-1-10 Roppongi, 1F Kadogan Bldg, Minato, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%20FALAFEL%20BROTHERS%7C%E3%83%95%E3%82%A1%E3%83%A9%E3%83%95%E3%82%A7%E3%83%AB%E3%83%96%E3%83%A9%E3%82%B6%E3%83%BC%E3%82%BA%20Japan%2C%20Tokyo%2C%20Shibuya%20City%2C%20Hiroo1%20Chome%E2%88%921%E2%88%9236%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="123movies-i.net">123movies apk</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //6
  {
    name: "HACIENDA DEL CIELO.",
    cuisine: "Mexican",
    hours: "11:30 - 23:00",
    website: "<a href='https://www.huge.co.jp/restaurant/modern-mexicano/hacienda' target='_blank'> Website </a>",
    address:
      "10−1, Sarugakucho, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=hacienda%20del%20cielo%20daikanyama&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //7
  {
    name: "MUGINAE.",
    cuisine: "Ramen",
    hours: "11:00 - 15:30",
    website: "<a href='https://twitter.com/Akihiro_Fukaya/' target='_blank'> Website </a>",
    address: "6-11-10 Minamiōi, Shinagawa, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=muginae%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //8
  {
    name: "KYOURAKUTEI.",
    cuisine: "Soba",
    hours: "11:30 - 20:30",
    website: "<a href='http://kyourakutei.com/' target='_blank'> Website </a>",
    address: "3-6 Kagurazaka Shinjuku, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=kyourakutei%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //9
  {
    name: "NARISAWA.",
    cuisine: "Japanese fine dining",
    hours: "12:00 - 22:00",
    website: "<a href='http://www.narisawa-yoshihiro.com/' target='_blank'> Website </a>",
    address: "2-6-15 Minamiaoyama, Minato City, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=narisawa%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //10
  {
    name: "AIN SOPH.",
    cuisine: "Vegetables",
    hours: "11:30 - 21:00",
    website: "<a href='https://www.ain-soph.jp/' target='_blank'> Website </a>",
    address: "4-12-1 Ginza, Chuo City, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=ain%20soph%20ginza&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //11
  {
    name: "BURGERS TOKYO.",
    cuisine: "Burgers",
    hours: "11:00 - 21:00",
    website: "<a href='https://www.burgerstokyo.com/' target='_blank'> Website </a>",
    address: "2-34-7 Kitazawa, Setagaya City, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=burgers%20tokyo%20setagaya&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //12
  {
    name: "KOTARO.",
    cuisine: "Izakaya",
    hours: "18:00 - 02:00",
    website: "<a href='https://ameblo.jp/kotaro-info/' target='_blank'> Website </a>",
    address: "28-2 Sakuragaokachō, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=kotaro%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //13
  {
    name: "TAMAWARAI.",
    cuisine: "Soba",
    hours: "11:30 - 20:00",
    website: "<a href='https://tabelog.com/en/tokyo/A1306/A130601/13129390/' target='_blank'> Website </a>",
    address: "5-23-3 Jingumae, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=tamawarai%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //14
  {
    name: "DEN.",
    cuisine: "Kaiseki fusion",
    hours: "18:00 - 20:00",
    website: "<a href='https://www.jimbochoden.com/en/' target='_blank'> Website </a>",
    address: "2-3-18 Jingumae, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=den%20restaurant%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //15
  {
    name: "YAKITORI IMAI.",
    cuisine: "Yakitori",
    hours: "12:00 - 22:30",
    website: "<a href='http://www.yakitoriimai.jp/' target='_blank'> Website </a>",
    address: "3 Jingumae, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=yakitori%20imai%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //16
  {
    name: "GEM BY MOTO.",
    cuisine: "Sake restaurant",
    hours: "13:00 - 21:00",
    website: "<a href='http://fsknet.co.jp/impression/moto_ebisu.php' target='_blank'> Website </a>",
    address: "1-30-9 Ebisu, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=gem%20by%20moto%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //17
  {
    name: "NOODLE STAND TOKYO.",
    cuisine: "Vegan ramen",
    hours: "11:30 - 21:00",
    website: "<a href='https://www.noodlestandtokyo.com/' target='_blank'> Website </a>",
    address: "1-23 Jingumae, Shibuya, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=noodle%20stand%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //18
  {
    name: "CITRON AOYAMA.",
    cuisine: "Vegan/vegetarian café",
    hours: "08:00 - 21:00",
    website: "<a href='https://citron.co.jp/' target='_blank'> Website </a>",
    address: "2−27−21 Minamiaoyama, Minato, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=citron%20aoyama%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //19
  {
    name: "L’EFFERVESCENCE.",
    cuisine: "French",
    hours: "11:30 - 23:00",
    website: "<a href='http://www.leffervescence.jp/' target='_blank'> Website </a>",
    address: "2-26-4 Nishiazabu, Minato, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=L%E2%80%99Effervescence%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  },
  //20
  {
    name: "NAKIRYU.",
    cuisine: "Ramen",
    hours: "11:30 - 21:00",
    website: "<a href='http://www12.plala.or.jp/nakiryu/' target='_blank'> Website </a>",
    address: "2-34-4 Minamiotsuka, Toshima, Tokyo",
    map:
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=nakiryu%20tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">youtube embed code</a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  }
];

var suggestions = {
  Japanese: "1,2,3,7,8,9,10,12,13,14,15,16,17,20",
  NonJapanese: "4,5,6,11,14,16,18,19",
  Meat: "1,2,6,7,8,9,11,12,13,14,15,16,19,20",
  Vegetarian: "2,3,4,5,6,10,12,13,14,15,16,17,18,19",
  Vegan: "3,4,5,10,15,17,18",
  Low: "2,4,7,8,11,12,13,15,17,20",
  Medium: "3,5,8,12,14,15,16",
  High: "1,3,6,9,10,18,19",
};

// Array to temporary store the values (So the last selection can be deleted in case "BACK" is pressed)
var selections = [];

var inputs = [];
var suggested = [];

function containing(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return true;
    }
  }
  return false;
}

$(document).ready(function () {
  prep_modal();
});

function prep_modal() {
  $(".modal").each(function () {
    var element = this;
    var pages = $(this).find(".modal-split");

    if (pages.length != 0) {
      pages.hide();
      pages.eq(0).show();

      var b_button = document.createElement("button");
      b_button.setAttribute("type", "button");
      b_button.setAttribute("class", "btn btn-light");
      b_button.setAttribute("style", "display: none;");
      b_button.innerHTML = "Back";

      var n_button = document.createElement("button");
      n_button.setAttribute("type", "button");
      n_button.setAttribute("class", "btn btn-light");
      n_button.setAttribute("id", "nextBtn");
      //Disable the NEXT button Until a selection is chose
      n_button.disabled = true;
      n_button.innerHTML = "Next";

      $(this).find(".modal-footer").append(b_button).append(n_button);

      var page_track = 0;

      $(n_button).click(function () {
        this.blur();
        //Disable the NEXT button until a selection is chose
        n_button.disabled = true;

        if (page_track == 0) {
          $(b_button).show();
        }

        if (page_track <= pages.length - 2) {
          //Push the selection in the Temporal Array (See HTML attribute "DATA-SUGGEST" on each selection)
          selections.push($(".selected").attr("data-suggest"));
          //Remove the selected class on every selection
          $(".radio").removeClass("selected");
        }

        if (page_track == pages.length - 2) {
          //When all three selections chose, loop through the temporal array to return a Suggestion
          selections.map(sel => {
            suggest(sel);
          });
          $(n_button).text("Finish");
          n_button.disabled = false;
        }

        if (page_track == pages.length - 1) {
          page_track = -1;
          $(n_button).text("Next");
          $(b_button).hide();
          $("#myModal").modal("hide");
          document.getElementById("name").innerHTML = "";
          document.getElementById("hours").innerHTML = "";
          document.getElementById("website").innerHTML = "";
          document.getElementById("address").innerHTML = "";
          document.getElementById("map").innerHTML = "";
          //Empty the global arrays when FINISH is pressed
          inputs = [];
          suggested = [];
          selections = [];
        }

        if (page_track < pages.length - 1) {
          page_track++;

          pages.hide();
          pages.eq(page_track).show();
        }
      });

      $(b_button).click(function () {
        //Empty the final arrays when BACK is pressed
        inputs = [];
        suggested = [];
        //Remove the last element in the temporal array
        selections.pop();
        //Disable the NEXT button everytime BACK is pressed
        n_button.disabled = true;
        if (page_track == 1) {
          $(b_button).hide();
        }

        if (page_track == pages.length - 1) {
          $(n_button).text("Next");
        }

        if (page_track > 0) {
          page_track--;

          pages.hide();
          pages.eq(page_track).show();
        }
      });
    }
  });
}

$(document).ready(function () {
  $(".radio-group .radio").click(function () {
    $(".selected .fa").removeClass("fa-check");
    $(".radio").removeClass("selected");
    $(this).addClass("selected");
    //Remove the disabled attribute of the NEXT button upon selection
    $("#nextBtn").prop("disabled", false);
  });
});

function suggest(index) {
  let numbers = suggestions[index].split(",");
  for (let i = 0; i < numbers.length; i++) {
    inputs.push(Number(numbers[i]));
  }
  if (index == "Low" || index == "Medium" || index == "High") {
    for (let i = 0; i < inputs.length; i++) {
      let count = 0;
      for (let j = 0; j < inputs.length; j++) {
        if (inputs[i] == inputs[j]) {
          count++;
        }
      }
      if (count == 3 && containing(suggested, inputs[i]) == false) {
        suggested.push(inputs[i]);
      }
    }
    var random = suggested[Math.floor(Math.random() * suggested.length)] - 1;
    document.getElementById("name").innerHTML =
      "<strong></strong>" + restaurants[random].name;
    document.getElementById("cuisine").innerHTML =
      "<i class='fas fa-utensils'></i>" + " " + restaurants[random].cuisine;  
    document.getElementById("hours").innerHTML =
      "<i class='far fa-clock'></i>" + " " + restaurants[random].hours;
    document.getElementById("website").innerHTML =
      "<i class='fas fa-laptop'></i>" + " " + restaurants[random].website;
    document.getElementById("address").innerHTML =
      "<i class='fas fa-map-marker-alt'></i>" + " " + restaurants[random].address;
    document.getElementById("map").innerHTML = restaurants[random].map;
  }
}


// Tabs top 3, Tokyo and food
// Credit for tabs: https://codepen.io/nickfazzpdx/pen/MRWrjJ)

function openTab(tabName) {
  let i;
  let tabContent;

  tabContent = document.getElementsByClassName("tab-content");

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "flex";
}

let designLinkEl = document.getElementById("DesignLink");
let progLinkEl = document.getElementById("ProgLink");
let musicLinkEl = document.getElementById("SupportLink");

designLinkEl.addEventListener(
  "click",
  function () {
    openTab("Design");
  },
  false
);
progLinkEl.addEventListener(
  "click",
  function () {
    openTab("Programming");
  },
  false
);
musicLinkEl.addEventListener(
  "click",
  function () {
    openTab("Support");
  },
  false
);

// Scrolling fade in
// CREDIT fade in: https://michalsnik.github.io/aos/
AOS.init();
