
document.onload = () => {}

var books = document.querySelectorAll( '#book-list .name');
Array.from(books).forEach(function(book){
    book.textContent += 
    'making changes';
});

/*TEX 2 SAINSBUR'S AND TESCO*/
var books2 = document.querySelectorAll( '#book-list2 .name2');
Array.from(books2).forEach(function(book){
    book.textContent += 
    'making other changes';
});

//


// START OF SIDE SLIDE IN SLIDE OUT TRANSPORT
//BUS 38
function slideInbus38(el){
  var elem = document.getElementById(el);
  elem.style.transition = "left 500ms ease-in 0s" ;
  elem.style.left = "0vh" 
  
}

function slideOutbus38(el){  
  var elem = document.getElementById(el); 
  elem.style.transition =  "left 600ms ease-out 0s"; 
  elem.style.left = "-100%"
}

// NIGHT BUS 38
function slideInbusn38(el){
  var elem = document.getElementById(el);
  elem.style.transition = "left 500ms ease-in 0s" ;
  elem.style.left = "0vh" 
  
}

function slideOutbusn38(el){
  var elem = document.getElementById(el); 
  elem.style.transition =  "left 600ms ease-out 0s";
  elem.style.left = "-100%"
}

function slideInbusn39(el){
  var elem = document.getElementById(el);
  elem.style.transition = "left 500ms ease-in 0s" ;
  elem.style.left = "0vh" 
  
}

function slideOutbusn39(el){
  var elem = document.getElementById(el); 
  elem.style.transition =  "left 600ms ease-out 0s";
  elem.style.left = "-100%"
}
//END  OF SIDE SLIDE IN SLIDE OUT TRANSPORT
 
//SHOW HIDE THE MAIN CONTENT ON OPEN CLOSE

/*$(document).ready(function(){
  $('.second_hamburger').on('click', function(){
   $('#open__buton').hide()
  });
 });*/
 
  /*$(document).ready(function(){
  $('#firstopen__buton').on('click', function(){
   $('#open__buton').show()
  });
 }); */
/*THIS IS SUBSTITUTED BY*/

//
/* THIS...<div   class="main__wrapper-btn">
  <button id="firstopen__buton" class="theme-btn active" > 
    MENU</button> id="open__btn-premiercars"
</div>
<div   class="main__wrapper-btn">
<button class="theme-btn" 
  onclick="document.getElementById('open__buton').style.display='block'">
  MENU
  </button>
</div>*/

// MERCHANDISE POPUP MODAL
/*var modalBtns = document.querySelectorAll('.modal__open-btn');

modalBtns.forEach(function (btn) {
btn.onclick = function() {
  var modal = btn.getAttribute('data-modal'); 

  document.getElementById('modal1').style.display = "block";
};
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest(".modal__popup-wrapper").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "modal__popup-wrapper") {
  e.target.style.display = "none";  
}
};*/

//START OF BARS MENU POPUP SCRIPT FOR UPPER CLOSING

function drinkoutNav() {
  document.getElementById("drinkoutNav").style.display = "flex";
  }
  
  function cldrinkoutNav() {
  document.getElementById("drinkoutNav").style.display = "none";
  } 
//
  function costacoffeeNav() {
    document.getElementById("costacoffeeNav").style.display = "flex";
    }
    
    function clcostacoffeeNav() {
      document.getElementById("costacoffeeNav").style.display = "none";
      }


    

// START DRINKS POP UP CONTENT FUNCTION DISABLED IN HTML
 // SHOW UP PREVIOUS WINDOW WHEN CURRENT CLOSE
/*$(document).ready(function(){
  $('#button__close-londonwrapper9').on('click', function(){
   $('#bydrink4').show()
  });
 });*/
// SHOW UP PREVIOUS WINDOW WHEN CURRENT CLOSE

//MAIN POP UP BUTTON PUBS

var i=0;
  function chdrink4(){
      if(!i){
          document.getElementById("bydrink4").style.display = "flex";
          document.getElementById("chdrink4").style.background = "blue";
          document.getElementById("chdrink4").style.color = "white";
          document.getElementById("chdrink4").style.padding = "0.2em";
          document.getElementById("chdrink4").style.fontWeight = "bold";
          document.getElementById("chdrink4").style.fontSize = "1.3rem";
          document.getElementById("chdrink4").style.letterSpacing = "0.1rem";
          document.getElementById("chdrink4").innerHTML = "PUBS";
          i=1;
      }
      else {
          document.getElementById("bydrink4").style.display = "none";
          document.getElementById("chdrink4").style.background = "blue";
          document.getElementById("chdrink4").style.color = "lime";
          document.getElementById("chdrink4").style.padding = "0.2em";
          document.getElementById("chdrink4").style.fontWeight = "bold";
          document.getElementById("chdrink4").style.fontSize = "1.3rem)";
          document.getElementById("chdrink4").style.letterSpacing = "0.1rem";
          document.getElementById("chdrink4").style.border = "3px solid lime";
          document.getElementById("chdrink4").innerHTML = "PUBS";
          i=0; 
      }
  }

// START OF THE PUB 1 YORK

var modalBtns = document.querySelectorAll('.modal__pub-drink1');
  
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('id'); 
  document.getElementById('pubsread1').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-pubsout1');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#pubsread1").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "moreText") {
  e.target.style.display = "none";  
}
};

  // START OF THE PUB 2 KINGS HEAD THEATER
  var modalBtns = document.querySelectorAll('.modal__pub-drink2');
  
  modalBtns.forEach(function (btn) {
  btn.onclick = function() {
    //var modal = btn.getAttribute('id'); 
    document.getElementById('pubsread2').style.display = "flex";
  };
  });
  
  var closeBtns = document.querySelectorAll('.modal-pubsout2');
  closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = (btn.closest("#pubsread2").style.display = "none")
  };
  });
  
  window.onclick = function(e) {
  if (e.target.className === "moreText") {
    e.target.style.display = "none";  
  }
  };

   // START OF THE PUB 3 THE NARROWBOAT
   var modalBtns = document.querySelectorAll('.modal__pub-drink3');
  
   modalBtns.forEach(function (btn) {
   btn.onclick = function() {
     //var modal = btn.getAttribute('id'); 
     document.getElementById('pubsread3').style.display = "flex";
   };
   });
   
   var closeBtns = document.querySelectorAll('.modal-pubsout3');
   closeBtns.forEach(function(btn) {
   btn.onclick = function() {
     var modal = (btn.closest("#pubsread3").style.display = "none")
   };
   });
   
   window.onclick = function(e) {
   if (e.target.className === "moreText") {
     e.target.style.display = "none";  
   }
   };

 
//END OF PUBS MENU POPUP SCRIPT 

//START OF BARS MENU POPUP SCRIPT 

//MAIN POP UP BUTTON BARS

var i=0;
  function chdrink5(){
      if(!i){
          document.getElementById("bydrink5").style.display = "flex";
          document.getElementById("chdrink5").style.background = "blue";
          document.getElementById("chdrink5").style.color = "white";
          document.getElementById("chdrink5").style.padding = "0.2em";
          document.getElementById("chdrink5").style.fontWeight = "bold";
          document.getElementById("chdrink5").style.fontSize = "1.3rem";
          document.getElementById("chdrink5").style.letterSpacing = "0.1rem";
          document.getElementById("chdrink5").innerHTML = "BARS";
          i=1;
      }
      else {
          document.getElementById("bydrink5").style.display = "none";
          document.getElementById("chdrink5").style.background = "blue";
          document.getElementById("chdrink5").style.color = "lime";
          document.getElementById("chdrink5").style.padding = "0.2em";
          document.getElementById("chdrink5").style.fontWeight = "bold";
          document.getElementById("chdrink5").style.fontSize = "1.3rem)";
          document.getElementById("chdrink5").style.letterSpacing = "0.1rem";
          document.getElementById("chdrink5").style.border = "3px solid lime";
          document.getElementById("chdrink5").innerHTML = "BARS";
          i=0; 
      }
  }

  // START BAR 1

  var modalBtns = document.querySelectorAll('.modal__open-bars1');
  
  modalBtns.forEach(function (btn) {
  btn.onclick = function() {
    //var modal = btn.getAttribute('data-modal'); 
    document.getElementById('barsread1').style.display = "flex";
  };
  });
  
  var closeBtns = document.querySelectorAll('.modal-barsout1');
  closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = (btn.closest("#barsread1").style.display = "none")
  };
  });
  
  window.onclick = function(e) {
  if (e.target.className === "moreText") {
    e.target.style.display = "none";  
  }
  };

// START BAR 2

var modalBtns = document.querySelectorAll('.modal__open-bars2');
  
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('barsread2').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-barsout2');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#barsread2").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "moreText") {
  e.target.style.display = "none";  
}
};

//END OF BARS MENU POPUP SCRIPT 

//START OF COFEE SHOPS MENU POPUP SCRIPT

var i=0;
  function chdrink6(){
      if(!i){
          document.getElementById("bydrink6").style.display = "flex";
          document.getElementById("chdrink6").style.background = "blue";
          document.getElementById("chdrink6").style.color = "white";
          document.getElementById("chdrink6").style.padding = "0.2em";
          document.getElementById("chdrink6").style.fontWeight = "bold";
          document.getElementById("chdrink6").style.fontSize = "1.3rem";
          document.getElementById("chdrink6").style.letterSpacing = "0.1rem";
          document.getElementById("chdrink6").innerHTML = "COFEE SHOPS";
          i=1;
      }
      else {
          document.getElementById("bydrink6").style.display = "none";
          document.getElementById("chdrink6").style.background = "blue";
          document.getElementById("chdrink6").style.color = "lime";
          document.getElementById("chdrink6").style.padding = "0.2em";
          document.getElementById("chdrink6").style.fontWeight = "bold";
          document.getElementById("chdrink6").style.fontSize = "1.3rem";
          document.getElementById("chdrink6").style.letterSpacing = "0.1rem";
          document.getElementById("chdrink6").style.border = "3px solid lime";
          document.getElementById("chdrink6").innerHTML = "COFEE SHOPS";
          i=0; 
      }
  }

 // START COFEE SHOP 1 COSTA 1

var modalBtns = document.querySelectorAll('.modal__cofee-drink1');
  
  modalBtns.forEach(function (btn) {
  btn.onclick = function() {
    //var modal = btn.getAttribute('data-modal'); 
    document.getElementById('costacoffeeNav').style.display = "flex";
  };
  });
  
  var closeBtns = document.querySelectorAll('.modal-cofeeout1');
  closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = (btn.closest("#costacoffeeNav").style.display = "none")
  };
  });
  
  window.onclick = function(e) {
  if (e.target.className === "drinks__drinkout") {
    e.target.style.display = "none";  
  }
  };

   // END COFEE SHOP 1 COSTA 1

   // START COFEE SHOP 1 COSTA 2

  var modalBtns = document.querySelectorAll('.modal__cofee-drink12');
  
  modalBtns.forEach(function (btn) {
  btn.onclick = function() {
    //var modal = btn.getAttribute('data-modal'); 
    document.getElementById('costacoffeeNaveat').style.display = "flex";
  };
  });
  
  var closeBtns = document.querySelectorAll('.modal-cofeeout12');
  closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = (btn.closest("#costacoffeeNaveat").style.display = "none")
  };
  });
  
  window.onclick = function(e) {
  if (e.target.className === "drinks__drinkout") {
    e.target.style.display = "none";  
  }
  };

   // END COFEE SHOP 1 COSTA 2

// START COFEE SHOP 2

var modalBtns = document.querySelectorAll('.modal__cofee-drink2');
  
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('cofeeread2').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-cofeeout2');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#cofeeread2").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "drinks__drinkout") {
  e.target.style.display = "none";  
}
};

// START COFEE SHOP 3

var modalBtns = document.querySelectorAll('.modal__cofee-drink3');
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('cofeeread3').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-cofeeout3');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#cofeeread3").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "drinks__drinkout") {
  e.target.style.display = "none";  
}
};

// START COFEE SHOP 4 NERO

var modalBtns = document.querySelectorAll('.modal__cofee-drink4');
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('cofeeread4').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-cofeeout4');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#cofeeread4").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "drinks__drinkout") {
  e.target.style.display = "none";  
}
};

// START COFEE SHOP 5 PAUL

var modalBtns = document.querySelectorAll('.modal__cofee-drink5');
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('cofeeread5').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-cofeeout5');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#cofeeread5").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "drinks__drinkout") {
  e.target.style.display = "none";  
}
};

// START COFEE SHOP 6 EUPHORIUM

var modalBtns = document.querySelectorAll('.modal__cofee-drink6');
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('cofeeread6').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-cofeeout6');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#cofeeread6").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "drinks__drinkout") {
  e.target.style.display = "none";  
}
};
// END COFEE SHOP 6 EUPHORIUM

// START COFEE SHOP 6 OTHER COFEE

var modalBtns = document.querySelectorAll('.modal__cofee-drink7');
modalBtns.forEach(function (btn) {
btn.onclick = function() {
  //var modal = btn.getAttribute('data-modal'); 
  document.getElementById('cofeeread7').style.display = "flex";
};
});

var closeBtns = document.querySelectorAll('.modal-cofeeout7');
closeBtns.forEach(function(btn) {
btn.onclick = function() {
  var modal = (btn.closest("#cofeeread7").style.display = "none")
};
});

window.onclick = function(e) {
if (e.target.className === "drinks__drinkout") {
  e.target.style.display = "none";  
}
};
// END COFEE SHOP 6 OTHER COFEE

//END OF COFEE SHOPS MENU POPUP SCRIPT 

//START OF EAT OUT MENU POPUP SCRIPT 
//FIRST MAIN BUTTON SCRIPT
function eatoutNav() {
  document.getElementById("eatoutNav").style.display = "flex";
  }
  
  function cleatoutNav() {
  document.getElementById("eatoutNav").style.display = "none";
  } 

//KEEP OPEN MENU SCRIPT EAT OUT

$(document).ready(function(){
  $('#button__close-londonwrapper13').on('click', function(){
   $('#open__buton').show()
  });
 });

//KEEP OPEN MENU SCRIPT EAT OUT
//END OF EAT OUT MENU POPUP SCRIPT

//START OF SHOPPING MENU POPUP SCRIPT
function shoppingNav() {
  document.getElementById("shoppingNav").style.display = "flex";
}

function clshoppingNav() {
  document.getElementById("shoppingNav").style.display = "none";
} 
//KEEP OPEN MENU SCRIPT 
$(document).ready(function(){
  $('#button__close-londonwrapper6').on('click', function(){
   $('#open__buton').show()
  });
 });
//END OF SHOPPING MENU POPUP SCRIPT


// CHOOSE BY NAME / BRAND BUTTON SCRIPT
var i=0;
function chbrand4(){
    if(!i){
        document.getElementById("bybrand4").style.display = "flex";
        document.getElementById("chbrand4").style.background = "blue";
        document.getElementById("chbrand4").style.color = "white";
        document.getElementById("chbrand4").style.padding = "0.2em";
        document.getElementById("chbrand4").style.fontWeight = "bold";
        document.getElementById("chbrand4").style.fontSize = "1.3rem";
        document.getElementById("chbrand4").style.letterSpacing = "0.1rem";
        document.getElementById("chbrand4").innerHTML = "CHOOSE BY NAME / BRAND";
        i=1;
    }
    else {
        document.getElementById("bybrand4").style.display = "none";
        document.getElementById("chbrand4").style.background = "blue";
        document.getElementById("chbrand4").style.color = "lime";
        document.getElementById("chbrand4").style.padding = "0.2em";
        document.getElementById("chbrand4").style.fontWeight = "bold";
        document.getElementById("chbrand4").style.fontSize = "1.3rem";
        document.getElementById("chbrand4").style.letterSpacing = "0.1rem";
        document.getElementById("chbrand4").style.border = "3px solid lime";
        document.getElementById("chbrand4").innerHTML = "CHOOSE BY NAME / BRAND";
        i=0; 
    }
}

// CHOOSE BY NAME / BRAND BUTTON SCRIPT

var i=0;
function chbrand5(){
    if(!i){
        document.getElementById("bybrand5").style.display = "flex";
        document.getElementById("chbrand5").style.background = "blue";
        document.getElementById("chbrand5").style.color = "white";
        document.getElementById("chbrand5").style.padding = "0.2em";
        document.getElementById("chbrand5").style.fontWeight = "bold";
        document.getElementById("chbrand5").style.fontSize = "1.3rem";
        document.getElementById("chbrand5").style.letterSpacing = "0.1rem";
        document.getElementById("chbrand5").innerHTML = "ISLINGTON SQUARE";
        i=1;
    }
    else {
        document.getElementById("bybrand5").style.display = "none";
        document.getElementById("chbrand5").style.background = "blue";
        document.getElementById("chbrand5").style.color = "lime";
        document.getElementById("chbrand5").style.padding = "0.2em";
        document.getElementById("chbrand5").style.fontWeight = "bold";
        document.getElementById("chbrand5").style.fontSize = "1.3rem";
        document.getElementById("chbrand5").style.letterSpacing = "0.1rem";
        document.getElementById("chbrand5").style.border = "3px solid lime";
        document.getElementById("chbrand5").innerHTML = "ISLINGTON SQUARE";
        i=0; 
    }
}

//END OF EAT OUT MENU POPUP SCRIPT 


//DROPDOWN TEXT MENU MUSEUMS BUTTONS
var i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display = "flex";
        document.getElementById("read").style.background = "blue";
        document.getElementById("read").style.color = "white";
        document.getElementById("read").innerHTML = "MUSEUMS";
        i=1;
       
    }
    else {
        document.getElementById("more").style.display = "none";
        document.getElementById("read").style.background = "blue";
        document.getElementById("read").style.color = "white";
        document.getElementById("read").innerHTML = "MUSEUMS";
        i=0; 
    }
}
//
var i=0;
function read2(){
    if(!i){
        document.getElementById("more2").style.display = "flex";
        document.getElementById("read2").style.background = "bue";
        document.getElementById("read2").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        document.getElementById("read2").innerHTML = "CINEMAS";
        i=1;
    }
    else {
        document.getElementById("more2").style.display = "none";
        document.getElementById("read2").style.background = "blue";
        document.getElementById("read2").style.color = "white";
        //document.getElementById("dots").style.display = "flex";
        document.getElementById("read2").innerHTML = "CINEMAS";
        i=0; 
    }
}

//
var i=0;
function read3(){
    if(!i){
        document.getElementById("more3").style.display = "flex";
        document.getElementById("read3").style.background = "blue";
        document.getElementById("read3").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        document.getElementById("read3").innerHTML = "ENTERTAINMENT";
        i=1;
    }
    else {
        document.getElementById("more3").style.display = "none";
        document.getElementById("read3").style.background = "blue";
        document.getElementById("read3").style.color = "white";
        //document.getElementById("dots").style.display = "flex";
        document.getElementById("read3").innerHTML = "ENTERTAINMENT";
        i=0; 
    }
}
//
var i=0;
function read4(){
    if(!i){
        document.getElementById("more4").style.display = "flex";
        document.getElementById("read4").style.background = "blue";
        document.getElementById("read4").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read4").innerHTML = "PHONES";
        i=1;
    }
    else {
        document.getElementById("more4").style.display = "none";
        document.getElementById("read4").style.background = "blue";
        document.getElementById("read4").style.color = "lime";
        document.getElementById("read4").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read4").innerHTML = "PHONES";
        i=0; 
    }
}
//
var i=0;
function read5(){
    if(!i){
        document.getElementById("more5").style.display = "flex";
        document.getElementById("read5").style.background = "yellow";
        document.getElementById("read5").style.color = "red";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read5").innerHTML = "HOUSEKEEPING";
        i=1;
    }
    else {
        document.getElementById("more5").style.display = "none";
        document.getElementById("read5").style.background = "yellow";
        document.getElementById("read5").style.color = "red";
        document.getElementById("read5").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read5").innerHTML = "HOUSEKEEPING";
        i=0; 
    }
}

//
var i=0;
function ctdnsamenity4(){
    if(!i){
        document.getElementById("ctdnsamenity").style.display = "flex";
        document.getElementById("ctdnsamenity4").style.background = "blue";
        document.getElementById("ctdnsamenity4").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read5").innerHTML = "HOUSEKEEPING";
        i=1;
    }
    else {
        document.getElementById("ctdnsamenity").style.display = "none";
        document.getElementById("ctdnsamenity4").style.background = "blue";
        document.getElementById("ctdnsamenity4").style.color = "lime";
        document.getElementById("ctdnsamenity4").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read5").innerHTML = "HOUSEKEEPING";
        i=0; 
    }
}

// FINANCIALS SECTION SCRIPT
var i=0;
function training6(){
    if(!i){
        document.getElementById("training").style.display = "flex";
        document.getElementById("training6").style.background = "blue";
        document.getElementById("training6").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read6").innerHTML = "X";
        i=1;
    }
    else {
      document.getElementById("training").style.display = "none";
      document.getElementById("training6").style.background = "blue";
      document.getElementById("training6").style.color = "lime";
      document.getElementById("training6").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read6").innerHTML = "-";
        i=0; 
    }
}

// HEALTH AND SAFETY SECTION SCRIPT
var i=0;
function traininghs7(){
    if(!i){
        document.getElementById("healthsft").style.display = "flex";
        document.getElementById("traininghs7").style.background = "green";
        document.getElementById("traininghs7").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read6").innerHTML = "X";
        i=1;
    }
    else {
      document.getElementById("healthsft").style.display = "none";
      document.getElementById("traininghs7").style.background = "green";
      document.getElementById("traininghs7").style.color = "lime";
      document.getElementById("traininghs7").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read6").innerHTML = "-";
        i=0; 
    }
}

var i=0;
function traininghs12(){
    if(!i){
        document.getElementById("healthsft2").style.display = "flex";
        document.getElementById("traininghs12").style.background = "green";
        document.getElementById("traininghs12").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read6").innerHTML = "X";
        i=1;
    }
    else {
      document.getElementById("healthsft2").style.display = "none";
      document.getElementById("traininghs12").style.background = "green";
      document.getElementById("traininghs12").style.color = "lime";
      document.getElementById("traininghs12").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read6").innerHTML = "-";
        i=0; 
    }
}

// MAINTENANCE SECTION SCRIPT
/*var i=0;
function maintenance6(){
    if(!i){
        document.getElementById("maintenance").style.display = "flex";
        document.getElementById("maintenance6").style.background = "blue";
        document.getElementById("maintenance6").style.color = "white";
    
        i=1;
    }
    else {
      document.getElementById("maintenance").style.display = "none";
      document.getElementById("maintenance6").style.background = "blue";
      document.getElementById("maintenance6").style.color = "lime";
      document.getElementById("maintenance6").style.border = "3px solid lime";
      
        i=0; 
    }
}*/

// COMPUTER 7 SECTION SCRIPT
var i=0;
function computer7(){
    if(!i){
        document.getElementById("subcomp71").style.display = "flex";
        document.getElementById("computer7").style.background = "blue";
        document.getElementById("computer7").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read6").innerHTML = "X";
        i=1;
    }
    else {
      document.getElementById("subcomp71").style.display = "none";
      document.getElementById("computer7").style.background = "blue";
      document.getElementById("computer7").style.color = "lime";
      document.getElementById("computer7").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read6").innerHTML = "-";
        i=0; 
    }
}

// END COMPUTER 7 SECTION SCRIPT

// COMPUTER 8 SECTION SCRIPT
var i=0;
function computer8(){
    if(!i){
        document.getElementById("subcomp81").style.display = "flex";
        document.getElementById("computer8").style.background = "blue";
        document.getElementById("computer8").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read6").innerHTML = "X";
        i=1;
    }
    else {
      document.getElementById("subcomp81").style.display = "none";
      document.getElementById("computer8").style.background = "blue";
      document.getElementById("computer8").style.color = "lime";
      document.getElementById("computer8").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read6").innerHTML = "-";
        i=0; 
    }
}

//END COMPUTER 8 SECTION SCRIPT

//GUEST SERVICE
var i=0;
function training9(){
    if(!i){
        document.getElementById("").style.display = "flex";
        document.getElementById("training9").style.background = "blue";
        document.getElementById("training9").style.color = "white";
        //document.getElementById("dots").style.display = "none";
        //document.getElementById("read6").innerHTML = "X";
        i=1;
    }
    else {
      document.getElementById("").style.display = "none";
      document.getElementById("training9").style.background = "blue";
      document.getElementById("training9").style.color = "lime";
      document.getElementById("training9").style.border = "3px solid lime";
        //document.getElementById("dots").style.display = "flex";
        //document.getElementById("read6").innerHTML = "-";
        i=0; 
    }
}

//PARCELS
/*var i=0;
function parcels()
{
if(!i) {
  document.getElementById("read32").style.display = "flex";
  document.getElementById("read32").innerHTML = "PARCELS";
  return i=1
   
}

else {
  
  document.getElementById("read32").style.display = "none";
   document.getElementById("parcels").innerHTML = "PARCELS";
  i=0;
  document.getElementById("read32").style.background = "green";
  document.getElementById("read32").style.color = "orange";  
}
}*/

// START OF CITADINES ASR  SCRIPT
var i=0;
function setup14()
{
if(!i) {
  document.getElementById("setup14").style.display = "flex";
  document.getElementById("setup").style.background = "blue";
        document.getElementById("setup").style.color = "white";
  //document.getElementById("documents").innerHTML = "DOCUMENTS";
  i=1;
}
else {
  document.getElementById("setup14").style.display = "none";
  document.getElementById("setup").style.background = "blue";
  document.getElementById("setup").style.color = "lime";
  document.getElementById("setup").style.border = "3px solid lime";
   //document.getElementById("documents").innerHTML = "DOCUMENTS";
  i=0;
 
}
}

// END OF CITADINES ASR  SCRIPT

// START OF CITADINES DOCUMENTS  SCRIPT
var i=0;
function documents8()
{
if(!i) {
  document.getElementById("documents8").style.display = "flex";
  document.getElementById("documents").style.background = "blue";
        document.getElementById("documents").style.color = "white";
  //document.getElementById("documents").innerHTML = "DOCUMENTS";
  i=1;
}
else {
  document.getElementById("documents8").style.display = "none";
  document.getElementById("documents").style.background = "blue";
  document.getElementById("documents").style.color = "lime";
  document.getElementById("documents").style.border = "3px solid lime";
   //document.getElementById("documents").innerHTML = "DOCUMENTS";
  i=0;
 
}
}

// END  OF CITADINES DOCUMENTS  SCRIPT


// START OF CITADINES DOCUMENTS SCRIPT OLD CODE
/*var b=1;
function show_hide()
{
if(b==1) {
  document.getElementById("read21").style.display = "flex";
  return b=0
}

else {
  document.getElementById("read21").style.display = "none";
  return b=1
}
}*/

// END  OF CITADINES DOCUMENTS SCRIPT OLD CODE

// START OF CITADINES PASSWORDS SCRIPT
var i=0;
function passwords7()
{
if(!i) {
  document.getElementById("passwords7").style.display = "flex";
  document.getElementById("passwords").style.background = "blue";
  document.getElementById("passwords").style.color = "white";
  //document.getElementById("passwords").innerHTML = "PASSWORDS";
  return i=1 
}

else {
  document.getElementById("passwords7").style.display = "none";
  document.getElementById("passwords").style.background = "blue";
  document.getElementById("passwords").style.color = "lime";
  document.getElementById("passwords").style.border = "3px solid lime";
   //document.getElementById("passwords").innerHTML = "PASSWORDS / CREDIT CARDS";
  i=0;
   
}
}
// END OF CITADINES PASSWORDS SCRIPT

// START OF CITADINES ROTAS SCRIPT
var i=0;
function rotas9()
{
if(!i) {
  document.getElementById("rotas9").style.display = "flex";
  document.getElementById("rotas").style.background = "green";
  document.getElementById("rotas").style.color = "white";
  //document.getElementById("rotas").innerHTML = "ROTAS";
  return i=1
}

else {
  document.getElementById("rotas9").style.display = "none";
  document.getElementById("rotas").style.background = "green";
  document.getElementById("rotas").style.color = "lime"; 
  document.getElementById("rotas").style.border = "3px solid lime"; 
  // document.getElementById("rotas").innerHTML = "ROTAS";
  i=0;
 
}
}
// END OF CITADINES ROTAS SCRIPT

// START OF CITADINES POSITIONS SCRIPT
var i=0;
function positions11()
{
if(!i) {
  document.getElementById("positions11").style.display = "flex";
  document.getElementById("positionsctdn").style.background = "red";
  document.getElementById("positionsctdn").style.color = "white";
  //document.getElementById("rotas").innerHTML = "ROTAS";
  return i=1
}

else {
  document.getElementById("positions11").style.display = "none";
  document.getElementById("positionsctdn").style.background = "red";
  document.getElementById("positionsctdn").style.color = "lime"; 
  document.getElementById("positionsctdn").style.border = "3px solid lime"; 
  // document.getElementById("rotas").innerHTML = "ROTAS";
  i=0;
 
}
}
// END OF CITADINES POSITIONS SCRIPT

// START OF CITADINES HOLIDAYS SCRIPT
var i=0;
function holidays11()
{
if(!i) {
  document.getElementById("holidays11").style.display = "flex";
  document.getElementById("holidays").style.background = "blue";
  document.getElementById("holidays").style.color = "white";
  //document.getElementById("holidays").innerHTML = "HOLIDAYS";
  return i=1
}

else {
  document.getElementById("holidays11").style.display = "none";
  document.getElementById("holidays").style.background = "blue";
  document.getElementById("holidays").style.color = "lime"; 
  document.getElementById("holidays").style.border = "3px solid lime";
   //document.getElementById("holidays").innerHTML = "HOLIDAYS";
  i=0;
  
}
}
// END OF CITADINES HOLIDAYS SCRIPT

// START OF CITADINES PAYSLIPS SCRIPT
var i=0;
function payslips12()
{
if(!i) {
  document.getElementById("payslips12").style.display = "flex";
  document.getElementById("payslips").style.background = "blue";
  document.getElementById("payslips").style.color = "white";
  //document.getElementById("payslips").innerHTML = "PAYSLIPS";
  return i=1
}

else {
  document.getElementById("payslips12").style.display = "none";
  document.getElementById("payslips").style.background = "blue";
  document.getElementById("payslips").style.color = "lime";
  document.getElementById("payslips").style.border = "3px solid lime";
  //document.getElementById("payslips").innerHTML = "PAYSLIPS";
 i=0;
 
}
}
// END OF CITADINES PAYSLIPS SCRIPT

// START OF CITADINES EVENTS GALLERY SCRIPT
var i=0;
function eventsgallery13()
{
if(!i) {
  document.getElementById("eventsgallery13").style.display = "flex";
  document.getElementById("eventsgallery").style.background = "blue";
  document.getElementById("eventsgallery").style.color = "white";
  //document.getElementById("eventsgallery").innerHTML = "EVENTS/GALLERY";
  return i=1
}

else {
  document.getElementById("eventsgallery13").style.display = "none";
  document.getElementById("eventsgallery").style.background = "blue";
  document.getElementById("eventsgallery").style.color = "lime"; 
  document.getElementById("eventsgallery").style.border = "3px solid lime";
  //document.getElementById("eventsgallery").innerHTML = "EVENTS/GALLERY";
 i=0;

}
}
// END OF CITADINES EVENTS GALLERY SCRIPT

// BUTTON CLOSE IN TEST
    /*$(document).ready(function(){
      $('.read-more-btn').on('click', function(){
       $('#read21').hide()
      });
     });*/   
//

  //CLOSING MAIN MENU FILM
  $(document).ready(function(){
  $('.active').on('click', function(){
   $('#open__buton').hide()
  });
 });

//KEEPING MAIN MENU OPEN WHEN SUBMENUS ARE CLOSING

 $(document).ready(function(){
  $('#button__close-londonwrapper').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper2').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper3').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper4').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper5').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper7').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper8').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper9').on('click', function(){
   $('#open__buton').show()
  });
 });

 /*button__close-londonwrapper9*/

 $(document).ready(function(){
  $('#button__close-londonwrapper12').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-londonwrapper14').on('click', function(){
   $('#open__buton').show()
  });
 });

 $(document).ready(function(){
  $('#button__close-sportwrapper2').on('click', function(){
   $('#open__buton').show()
  });
 });

// START WORKING TIME CHANGE SECTION
var books = document.querySelectorAll( '#wtime  .wrtime-1 ');
Array.from(books).forEach(function(book){
    book.textContent += 
    '08 am - 6:30pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-2 ');
Array.from(books).forEach(function(book){
    book.textContent += 
    '11 am - 11 pm';
});
//

var books = document.querySelectorAll( '#wtime .wrtime-3 ');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 12 pm - 3 pm ';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-4');
Array.from(books).forEach(function(book){
    book.textContent += 
    '& 5 pm - 10 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-5');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 12 pm - 10 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-6');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 12 pm - 11 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-7');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 5 pm - 10 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-8');
Array.from(books).forEach(function(book){
    book.textContent += 
    '& 5 pm - 11 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-9');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 7 am - 11 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-10');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 6 am - 12 am';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-11');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 6 am - 11 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-13');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 12 pm - 6 pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-12');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 9 am - 6pm';
});
//

var books = document.querySelectorAll( '#wtime .wrtime-14');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' 9 am - 5pm';
});
//
var books = document.querySelectorAll( '#wtime .wrtime-50');
Array.from(books).forEach(function(book){
    book.textContent += 
    ' Closed';
});
// END WORKING TIME CHANGE SECTION

//START OF TASKS INPUT SCRIPT

var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput() 
            {
                var isEmpty = false,
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
            
                if(fname === ""){
                    //alert("You may want to enter room with edit button");
                    isEmpty = false;
                }
                else if(lname === ""){
                    //alert("You may want to enter time with edit button");
                    isNotEmpty = false;
                }
                else if(age === ""){
                    alert("Please enter message in mesage bracket");
                    isEmpty = true;
                }
                return isEmpty;
            };

                // add Row
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                function addHtmlTableRow()
                {
                if(!checkEmptyInput())
                {
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
   
                cell1.innerHTML = fname;
                cell2.innerHTML = lname;
                cell3.innerHTML = age;
          
                // call the function to set the event to the new row #ffffcc
                selectedRowToInput();
                document.getElementById("table").style.color = "#red";
                document.getElementById("table").style.fontSize = "16px";
                document.getElementById("table").style.letterSpacing = "0.8px";
                document.getElementById("table").style.borderBottom = "2px solid #660066"; 

            }
          }
            
            // display selected row data into input text
            function selectedRowToInput() {
               
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("fname").value = this.cells[0].innerHTML;
                      document.getElementById("table").value = this.cells[0].style.background = "#db70b8";
                      document.getElementById("lname").value = this.cells[1].innerHTML;
                      document.getElementById("table").value = this.cells[1].style.background = "#db70b8";
                      document.getElementById("age").value = this.cells[2].innerHTML;
                      document.getElementById("table").value = this.cells[2].style.background = "#db70b8";
                    };
                }
              }

            //selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;

                   
                      
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = fname;
                table.rows[rIndex].cells[1].innerHTML = lname;
                table.rows[rIndex].cells[2].innerHTML = age;
                table.rows[rIndex].cells[0].style.background = "none";
                table.rows[rIndex].cells[1].style.background = "none";
                table.rows[rIndex].cells[2].style.background = "none";
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // remove input text
                document.getElementById("fname").value = "";
                document.getElementById("lname").value = "";
                document.getElementById("age").value = "";
                
            }

            function clearInputFields() {
                document.getElementById("lname").value = "";
                document.getElementById("fname").value = "";
                document.getElementById("age").value = "";
              
                table.rows[rIndex].cells[0].style.background = "none";
                table.rows[rIndex].cells[1].style.background = "none";
                table.rows[rIndex].cells[2].style.background = "none";
            }

           
//END OF TASKS INPUT SCRIPT



//START OF PARCELS INPUT SCRIPT

var rIndex,
                table2 = document.getElementById("table2");
            
            // check the empty input
            function checkEmptyInput2()
            {
                var isEmpty = false,
                    number1 = document.getElementById("number1").value,
                    time = document.getElementById("time").value,
                    message = document.getElementById("message").value;
            
                if(number1 === ""){
                    //alert("You may want to enter room with edit button");
                    isEmpty = false;
                }
                else if(time === ""){
                    //alert("You may want to enter time with edit button");
                    isNotEmpty = false;
                }
                else if(message === ""){
                    alert("Please enter message in mesage bracket");
                    isEmpty = true;
                }
                return isEmpty;
            };
            
            // add Row
            function addHtmlTableRow2()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table2.insertRow(table2.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    number1 = document.getElementById("number1").value,
                    time = document.getElementById("time").value,
                    message = document.getElementById("message").value;
                    
                    
                cell1.innerHTML = number1;
                cell2.innerHTML = time;
                cell3.innerHTML = message;
                // call the function to set the event to the new row
                selectedRowToInput2();
                document.getElementById("table2").style.color = "#ffffcc";
                document.getElementById("table2").style.fontSize = "16px";
                document.getElementById("table2").style.letterSpacing = "0.8px";
                document.getElementById("table2").style.borderBottom = "2px solid #660066"; 
                 
                 
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput2()
            {
                
                for(var i = 1; i < table2.rows.length; i++)
                {
                    table2.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("number1").value = this.cells[0].innerHTML;
                      document.getElementById("table2").value = this.cells[0].style.background = "#db70b8";
                      document.getElementById("time").value = this.cells[1].innerHTML;
                      document.getElementById("table2").value = this.cells[1].style.background = "#db70b8";
                      document.getElementById("message").value = this.cells[2].innerHTML;
                      document.getElementById("table2").value = this.cells[2].style.background = "#db70b8";
                    };
                }
            }
            //selectedRowToInput();
            
            function editHtmlTbleSelectedRow2()
            {
                var number1 = document.getElementById("number1").value,
                    time = document.getElementById("time").value,
                    message = document.getElementById("message").value;
                      
               if(!checkEmptyInput()){;
                table2.rows[rIndex].cells[0].innerHTML = number1;
                table2.rows[rIndex].cells[1].innerHTML = time;
                table2.rows[rIndex].cells[2].innerHTML = message; 
                table2.rows[rIndex].cells[0].style.background = "none";
                table2.rows[rIndex].cells[1].style.background = "none";
                table2.rows[rIndex].cells[2].style.background = "none";
              }

            }
            
            function removeSelectedRow2()
            {
                table2.deleteRow(rIndex);
                // remove input text
                document.getElementById("number1").value = "";
                document.getElementById("time").value = "";
                document.getElementById("message").value = "";
                
            }

            function clearInputFields2() {
                document.getElementById("time").value = "";
                document.getElementById("number1").value = "";
                document.getElementById("message").value = "";
                table2.rows[rIndex].cells[0].style.background = "none";
                table2.rows[rIndex].cells[1].style.background = "none";
                table2.rows[rIndex].cells[2].style.background = "none";
            }
          
          
//END OF PARCELS INPUT SCRIPT

//START OF LONG STAY INPUT SCRIPT

var rIndex,
                table3 = document.getElementById("table3");
            
            // check the empty input
            function checkEmptyInput3()
            {
                var isEmpty = false,
                    number2 = document.getElementById("number2").value,
                    time2 = document.getElementById("time2").value,
                    message2 = document.getElementById("message2").value;
            
                if(number2 === ""){
                    //alert("You may want to enter room with edit button");
                    isEmpty = false;
                }
                else if(time2 === ""){
                    //alert("You may want to enter time with edit button");
                    isNotEmpty = false;
                }
                else if(message2 === ""){
                    alert("Please enter message in mesage bracket");
                    isEmpty = true;
                }
                return isEmpty;
            };
            
            // add Row
            function addHtmlTableRow3()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table3.insertRow(table3.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    number2 = document.getElementById("number2").value,
                    time2 = document.getElementById("time2").value,
                    message2 = document.getElementById("message2").value;
                    
                    
                cell1.innerHTML = number2;
                cell2.innerHTML = time2;
                cell3.innerHTML = message2;
                // call the function to set the event to the new row
                selectedRowToInput3();
                document.getElementById("table3").style.color = "#ffffcc";
                document.getElementById("table3").style.fontSize = "16px";
                document.getElementById("table3").style.letterSpacing = "0.8px";
                document.getElementById("table3").style.borderBottom = "2px solid #660066"; 
                      
            }
          }
         
            //localStorage.setItem('tasks', JSON.stringify(number1 + ' ' + time + ' ' + message));

/*const addStudent = document.getElementById("table3");

const number = newRow["number2"];
const dtlField = newRow["message2"];
const text = newRow["time2"];

            const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (  number2, message2, time2) => {
  students.push({
    number2,
    message2,
    time2,
  });

  localStorage.setItem("tasks", JSON.stringify(students));

  return {   number2, message2, time2 };
};
studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    number.value,
    dtlField.value,
    text.value
  );
} */    
           
        

            
         

  //localStorage.setItem('tasks', JSON.stringify(number1 + ' ' + time + ' ' + message));
            /*var new_data = ' ' + document.getElementById('number2').value;
            if(localStorage.getItem('data') === null){
              localStorage.setItem('data', '[]'); 
            
            }
            var old_data = JSON.parse(localStorage.getItem("data")) || [];
            old_data.push(new_data);
        
           localStorage.setItem('data', JSON.stringify(old_data));
            
          }
          if (localStorage.getItem("data") != null) {
            document.getElementById("tasks_section").innerHTML = JSON.parse(localStorage.getItem('data'));
         }

         
          var new_data = ' ' + document.getElementById('message2').value;
          if(localStorage.getItem('data2') === null){
            localStorage.setItem('data2', '[]'); 
          
          }
          var old_data = JSON.parse(localStorage.getItem("data2")) || [];
          old_data.push(new_data);
      
         localStorage.setItem('data2', JSON.stringify(old_data));
        

         if (localStorage.getItem("data2") != null) {
          document.getElementById("tasks_section2").innerHTML = JSON.parse(localStorage.getItem('data2'));
       }

         

         var new_data = ' ' + document.getElementById('message2').value;
          if(localStorage.getItem('data2') === null){
            localStorage.setItem('data2', '[]'); 
          
          }
          var old_data = JSON.parse(localStorage.getItem("data2")) || [];
          old_data.push(new_data);
      
         localStorage.setItem('data2', JSON.stringify(old_data));
          
        
        
     

          if (localStorage.getItem("data") != null) {
            document.getElementById("tasks_section").innerHTML = JSON.parse(localStorage.getItem('data'));
         }

         if (localStorage.getItem("data2") != null) {
          document.getElementById("tasks_section2").innerHTML = JSON.parse(localStorage.getItem('data2'));
       }*/


      
         
      
           
            // display selected row data into input text
            function selectedRowToInput3()
            {
                
                for(var i = 1; i < table3.rows.length; i++)
                {
                    table3.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("number2").value = this.cells[0].innerHTML;
                      document.getElementById("table3").value = this.cells[0].style.background = "#db70b8";
                      document.getElementById("time2").value = this.cells[1].innerHTML;
                      document.getElementById("table3").value = this.cells[1].style.background = "#db70b8";
                      document.getElementById("message2").value = this.cells[2].innerHTML;
                      document.getElementById("table3").value = this.cells[2].style.background = "#db70b8";
                    };
                }
            }
            //selectedRowToInput();

            /*var new_data = ' ' + document.getElementById('number2').value;
            if(localStorage.getItem('data') === null){
              localStorage.setItem('data', '[]'); 
            }
      
            var old_data = JSON.parse(localStorage.getItem("data")) || [];
            old_data.push(new_data);
          
           localStorage.setItem('data', JSON.stringify(old_data));
           
           
           var new_data = ' ' + document.getElementById('mwssage2').value;
            if(localStorage.getItem('data2') === null){
              localStorage.setItem('data2', JSON.stringify([]));
            }
          
            var old_data = JSON.parse(localStorage.getItem("data2")) || [];
            old_data.push(new_data);
          
            localStorage.setItem('data2', JSON.stringify(old_data));
         

            
            var new_data = ' ' + document.getElementById('time2').value;
            if(localStorage.getItem('data3') === null){
              localStorage.setItem('data3', '[]');
            }
            var old_data = JSON.parse(localStorage.getItem("data3")) || [];
            old_data.push(new_data);
          
            localStorage.setItem('data3', JSON.stringify(old_data));

           
             
          if (localStorage.getItem("data") != null) {
              document.getElementById("undertable").innerHTML = JSON.parse(localStorage.getItem('data'));
           }
               
         if (localStorage.getItem("data2") != null) {
             document.getElementById("tasks_section").innerHTML = JSON.parse(localStorage.getItem('data2'));
           }
               

           getData();*/

            
            function editHtmlTbleSelectedRow3()
            {
                var number2 = document.getElementById("number2").value,
                    time2 = document.getElementById("time2").value,
                    message2 = document.getElementById("message2").value;
                      
               if(!checkEmptyInput()){;
                table3.rows[rIndex].cells[0].innerHTML = number2;
                table3.rows[rIndex].cells[1].innerHTML = time2;
                table3.rows[rIndex].cells[2].innerHTML = message2; 
                table3.rows[rIndex].cells[0].style.background = "none";
                table3.rows[rIndex].cells[1].style.background = "none";
                table3.rows[rIndex].cells[2].style.background = "none";
              }
             // localStorage.setItem('tasks', JSON.stringify(number1 + ' ' + time + ' ' + message));
            }
            
            function removeSelectedRow3()
            {
                table3.deleteRow(rIndex);
                // remove input text
                document.getElementById("number2").value = "";
                document.getElementById("time2").value = "";
                document.getElementById("message2").value = "";
                
            }

            function clearInputFields3() {
                document.getElementById("time2").value = "";
                document.getElementById("number2").value = "";
                document.getElementById("message2").value = "";
                table3.rows[rIndex].cells[0].style.background = "none";
                table3.rows[rIndex].cells[1].style.background = "none";
                table3.rows[rIndex].cells[2].style.background = "none";
            }
//END OF LONG STAY INPUT SCRIPT

/*START OF CITADINES CENTRAL SECTION BLACK LIST PICTURES VIDEOS SCRIPT POPUP WINDOW*/
//START OF PICTURES SLIDER
//

/*var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "flex";  
}*/


/*var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "flex";  
}*/


/*var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "flex";  
}



var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex4-1].style.display = "flex";  
}


var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex5-1].style.display = "flex";  
}*/

//



//
/*START COSTA COFFEE 1*/

var slideIndex8 = 1;
showDivs8(slideIndex8);

function plusDivs8(n) {
  showDivs8(slideIndex8 += n);
}

function showDivs8(n) {
  var i;
  var x = document.getElementsByClassName("mySlides8");
  if (n > x.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex8-1].style.display = "flex";  
}


/*END COSTA COFFEE 1*/

/*START COSTA COFFEE EAT OUT 2*/

var slideIndex8 = 1;
showDivs28(slideIndex8);

function plusDivs28(n) {
  showDivs28(slideIndex8 += n);
}

function showDivs28(n) {
  var i;
  var x = document.getElementsByClassName("mycostaSlides8");
  if (n > x.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex8-1].style.display = "flex";  
}


/*END COSTA COFFEE EAT OUT 2*/



//
/*PAUL COFFEE*/
var slideIndex12 = 1;
showDivs12(slideIndex12);

function plusDivs12(n) {
  showDivs12(slideIndex12 += n);
}

function showDivs12(n) {
  var i;
  var x = document.getElementsByClassName("mySlides12");
  if (n > x.length) {slideIndex12 = 1}
  if (n < 1) {slideIndex12 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex12-1].style.display = "flex";   
}
/*WAYNE LEE*/

/*var slideIndex13 = 1;
showDivs13(slideIndex13);

function plusDivs13(n) {
  showDivs13(slideIndex13 += n);
}

function showDivs13(n) {
  var i;
  var x = document.getElementsByClassName("mySlides13");
  if (n > x.length) {slideIndex13 = 1}
  if (n < 1) {slideIndex13 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex13-1].style.display = "flex";   
}*/
//

/*END OF CITADINES CENTRAL SECTION BLACK LIST PICTURES  VIDEOS SCRIPT POPUP WINDOW*/



 /*CLOCK 1 SCRIPT*/

 /*function clock(){
  var time = new Date()
  var hr = time.getHours()
  var min = time.getMinutes()
  var sec = time.getSeconds()
  if (hr < 10){
  hr = " " + hr
  }
  if (min < 10){
  min = "0" + min
  }
  if (sec < 10){
  sec = "0" + sec
  }
  document.clockForm.clockButton.value = hr + ":" + min + ":" + sec
  setTimeout("clock()", 1000)
  }
  clock();

  function showDate(){
  var d = new Date();
  var date = new Date()
  var year = date.getYear()
  if(year < 1000){
  year += 1900
}  

  var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", 
      "October", "November", "December")

  }
  window.onload=clock;
 
  function setNewImage() {
    document.getElementById("calendarstdn").style.display = "flex";
  }
  function setOldImage() {
    document.getElementById("calendarstdn").style.display = "none";
    
  }
    const lang = navigator.language;
    let date = new Date();

    Date.now();
  
    let dayNumber  = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString(lang,{weekday: 'long'})
    let monthName = date.toLocaleString(lang,{month: 'long'})
    let year = date.getFullYear()
  
    document.getElementById('monthName').innerHTML = monthName;
    document.getElementById('dayName').innerHTML = dayName;
    document.getElementById('dayNumber').innerHTML = dayNumber;
    document.getElementById('year').innerHTML = year; */


/*END OF CLOCK 1 SCRIPT*/  



 /* jQuery(function($){
    $.datepicker.regional['en-GB'] = {
      closeText: 'Done',
      prevText: 'Prev',
      nextText: 'Next',
      currentText: 'Today',
      monthNames: ['January','February','March','April','May','June',
      'July','August','September','October','November','December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
      weekHeader: 'Wk',
      dateFormat: 'dd/mm/yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['en-GB']);
  });*/

  /*START OF CLOCK 2 FRONT PAGE SCRIPT*/  

function renderTime(){
  var mydate = new Date();
  var year = mydate.getYear();
  if(year < 1000){
      year += 1900;
  }
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  var dayarray = new Array("Sun ","Mon ","Tue ","Wed ","Thu ","Fri ","Sat ");
  var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

  var currentTime = new Date();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
    if(h == 24){
        h = 0;
    }else if(h > 12){
        h = h - 0;
    }
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
      m = "0" + m;
  }
  if(s < 10){
      s = "0" + s;
  }
  var myClock = document.getElementById('clockDisplay');
  myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
  myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

  setTimeout("renderTime()", 1000);
}
renderTime();

   /* END OF CLOCK 2 FRONT PAGE SCRIPT */

    



//START HIDE NAVBAR peopletopwrap stdnspeople

var lastScrollTop = 0;
navbar = document.getElementById("peopletopwrap");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.opacity = "0";
  }else {
    navbar.style.opacity = "1";
  }
  lastScrollTop = scrollTop;
});

const boody = document.body;
let lastScroll = 0;

/*window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);

  LastScroll = currentScroll;
})*/
//END HIDE NAVBAR
// END CITADINES ISLINGTON PEOPLE   SCRIPT

   /*START OF LOCAL STORAGE INPUT SCRIPT*/

const storageInput = document.querySelector('.bandslist-wrap');
const text = document.querySelector('.text-roomsinfo');
const button = document.querySelector('.button-stdns');
const storedInput = localStorage.getItem('KEYtext');

if(storageInput) {
    text.textContent = storedInput
 
}

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('KEYtext', text.textContent);
    console.log(JSON.parse(localStorage.getItem('KEYtext'))) || [];
}

button.addEventListener('click', saveToLocalStorage);



//localStorage.clear();

   /*END OF LOCAL STORAGE SCRIPT*/


/*START OF DAILY TASKS LOCAL  STORAGE SCRIPT*/

showtask();
let adddateinput = document.getElementById("adddateinput");
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let webtask = localStorage.getItem("todotask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':addtaskinputval, 'completeStatus':false});
        localStorage.setItem("todotask", JSON.stringify(taskObj));
        addtaskinput.value = '';
    }
    showtask();
});

function showtask(){
    let webtask = localStorage.getItem("todotask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index, ) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td class="under-completed">${item.task_name}</td>`;
        }
        html += `<tr class="table-wrapp">         
        ${taskCompleteValue}    
   </tr>
  
        <tr class="buttons__task-wrapp">
        <td class="dummy_line-wrapp"></td>
        <td class="line-wrapp">
        <button type="button" class="text-success" id=${index}>&nbsp;<i id="icons-todoapp" class="fas fa-check"></i>&nbsp;</button>
        <button type="button" onclick="edittask(${index})" class="text-primary"><i id="icons-todoapp" class="fa fa-edit"></i>Edit</button>    
        <p type="time" name="time" class="text-primary" id=${index}></p>
        <button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i></button>
        </td>        
        </tr> `;
    });

    addedtasklist.innerHTML = html;
}

//console.log(JSON.parse(localStorage.getItem('todotask'))) || []; 

function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;

    let webtask = localStorage.getItem("todotask");
    let taskObj = JSON.parse(webtask); 
    addtaskinput.value = taskObj[index]['task_name'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}

let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("todotask");
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value;
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addtaskinput.value;
        }
      }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("todotask", JSON.stringify(taskObj));
    addtaskinput.value='';
    showtask();
})

function deleteitem(index){
    let confirmDel = confirm("Did you complete the task? Are you sure you want to Delete This Task?");
    if (confirmDel == false) {
        let notes = localStorage.getItem("todotask");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 0);
        localStorage.setItem("todotask", JSON.stringify(notesObj));
        showNotes();
    }
    
    let webtask = localStorage.getItem("todotask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("todotask", JSON.stringify(taskObj));
    showtask();
}

let addedtasklist = document.getElementById("addedtasklist");

    addedtasklist.addEventListener("click", function(e){
        let webtask = localStorage.getItem("todotask");
        let taskObj = JSON.parse(webtask);
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling; 
            for (keys in taskObj[mytargetid]) {
                if(keys == 'completeStatus' && taskObj[mytargetid][keys]==true){
                    taskObj[mytargetid].completeStatus = false;
                }else if(keys == 'completeStatus' && taskObj[mytargetid][keys]==false){
                    taskObj[mytargetid].completeStatus = true;
                }
              }
        localStorage.setItem("todotask", JSON.stringify(taskObj));
        showtask();
    }
    })
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
});

//RESIZER function

/*const box = document.querySelector(".to-do-output")
const container = document.querySelector(".container")
const observer = new ResizeObserver(entries=>{
const boxElement = entries[0]
const isSmall = boxElement.contentRect.height < 400
boxElement.target.style.backgroundColor = isSmall ? "green" : "red"
})

observer.observe(box)
observer.observe(container)*/


/*END OF DAILY TASKS LOCAL STORAGE SCRIPT*/

/*START OF PARCELS LOCAL  STORAGE SCRIPT*/

showtask2();
let addtaskinput2 = document.getElementById("addtaskinput2");
let addtaskbtn2 = document.getElementById("addtaskbtn2");
addtaskbtn2.addEventListener("click", function(){
    addtaskinput2val = addtaskinput2.value;
    if(addtaskinput2val.trim()!=0){
        let webtask2 = localStorage.getItem("todotask2");
        if(webtask2 == null){
            task2Obj = [];
        }
        else{
            task2Obj = JSON.parse(webtask2);
        }
        task2Obj.push({'task_name':addtaskinput2val, 'completeStatus2':false});
        localStorage.setItem("todotask2", JSON.stringify(task2Obj));
        addtaskinput2.value = '';
    }
    showtask2();
})

function  showtask2(){
  let webtask2 = localStorage.getItem("todotask2");
  if(webtask2 == null){
      task2Obj = [];
  }
  else{
      task2Obj = JSON.parse(webtask2);
  }
  
  let html = '';
  let addedtasklist2 = document.getElementById("addedtasklist2");
  task2Obj.forEach((item, index) => {

      if(item.completeStatus2 == true){
          task2CompleteValue = `<td class="completed">${item.task_name}</td>`;
      }else{
          task2CompleteValue = `<td class="under-completed">${item.task_name}</td>`;
      }
      html += `<tr class="table-wrapp">     
      ${task2CompleteValue}    
 </tr>

      <tr class="buttons__task-wrapp">
      <td class="dummy_line-wrapp"></td>
      <td class="line-wrapp">
      <button type="button" class="text-success" id=${index}>&nbsp;<i id="icons-todoapp" class="fas fa-check"></i> &nbsp;</button>
      <button type="button" onclick="edittask2(${index})" class="text-primary"><i id="icons-todoapp" class="fa fa-edit"></i>Edit</button>
      <p type="time" name="time" class="text-primary" id=${index}></p>
      <button type="button" onclick="deleteitem2(${index})" class="text-danger"><i class="fa fa-trash"></i></button>
      </td>
      </tr> `;
  });

  addedtasklist2.innerHTML = html;
}

function edittask2(index){
    let saveindex2 = document.getElementById("saveindex2");
    let addtaskbtn2 = document.getElementById("addtaskbtn2");
    let savetaskbtn2 = document.getElementById("savetaskbtn2");
    saveindex2.value = index;

    let confirmDel = confirm("Edit This Note?");
    if (confirmDel == false) {
        let notes = localStorage.getItem("todotask2");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 0);
        localStorage.setItem("todotask2", JSON.stringify(notesObj));
        showNotes();
    }

    let webtask2 = localStorage.getItem("todotask2");
    let task2Obj = JSON.parse(webtask2); 
    addtaskinput2.value = task2Obj[index]['task_name'];
    addtaskbtn2.style.display="none";
    savetaskbtn2.style.display="block";
}

let savetaskbtn2 = document.getElementById("savetaskbtn2");
savetaskbtn2.addEventListener("click", function(){
    let addtaskbtn2 = document.getElementById("addtaskbtn2");
    let webtask2 = localStorage.getItem("todotask2");
    let task2Obj = JSON.parse(webtask2); 
    let saveindex2 = document.getElementById("saveindex2").value;
    for (keys in task2Obj[saveindex2]) {
        if(keys == 'task_name'){
            task2Obj[saveindex2].task_name = addtaskinput2.value;
        }
    }

   savetaskbtn2.style.display="none";
    addtaskbtn2.style.display="block";
    localStorage.setItem("todotask2", JSON.stringify(task2Obj));
    addtaskinput2.value='';
    showtask2();
})

function deleteitem2(index){
    let confirmDel = confirm("Delete This Note?");
    if (confirmDel == false) {
        let notes2 = localStorage.getItems("todotask2");
        if (notes2 == null) {
            notes2Obj = [];
        } else {
            notes2Obj = JSON.parse(notes2);
        }
        notes2Obj.splice(index, 0);
        localStorage.setItem("todotask2", JSON.stringify(notes2Obj));
        showNotes2();
    }
    
    let webtask2 = localStorage.getItem("todotask2");
    let task2Obj = JSON.parse(webtask2);
    task2Obj.splice(index, 1);
    localStorage.setItem("todotask2", JSON.stringify(task2Obj));
    showtask2();
}

function completetask2(index){
    let webtask2 = localStorage.getItem("todotask2");
    let task2Obj = JSON.parse(webtask2);
    task2Obj[index] = '<span style="text-decoration:line-through">' + task2Obj[index] + '</span>';
    let addedtasklist2 = document.getElementById("addedtasklist2");
    addedtasklist2.addEventListener("click", function(e){
        console.log(addedtasklist2)
    })
    localStorage.setItem("todotask2", JSON.stringify(task2Obj));
    showtask2();
}

let addedtasklist2 = document.getElementById("addedtasklist2");

    addedtasklist2.addEventListener("click", function(e){
        let webtask2 = localStorage.getItem("todotask2");
        let task2Obj = JSON.parse(webtask2);
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            for (keys in task2Obj[mytargetid]) {
                if(keys == 'completeStatus2' && task2Obj[mytargetid][keys]==true){
                    task2Obj[mytargetid].completeStatus2 = false;
                }else if(keys == 'completeStatus2' && task2Obj[mytargetid][keys]==false){
                    task2Obj[mytargetid].completeStatus2 = true;
                }
              }        
        localStorage.setItem("todotask2", JSON.stringify(task2Obj));
        showtask2();
    }
    })

let searchtextbox2 = document.getElementById("searchtextbox2");

searchtextbox2.addEventListener("input", function(){
    let trlist2 = document.querySelectorAll("tr");
    Array.from(trlist2).forEach(function(item){
        let searchedtext2 = item.getElementsByTagName("td")[0].innerText;
        let searchtextbox2val = searchtextbox2.value;
        let re2 = new RegExp(searchtextbox2val, 'gi');
        if(searchedtext2.match(re2)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})

/*END OF PARCELS LOCAL STORAGE SCRIPT*/

/*START OF REMINDER LOCAL  STORAGE SCRIPT*/

showtask3();
let addtaskinput3 = document.getElementById("addtaskinput3");
let addtaskbtn3 = document.getElementById("addtaskbtn3");

addtaskbtn3.addEventListener("click", function(){
    addtaskinput3val = addtaskinput3.value;
    if(addtaskinput3val.trim()!=0){
        let webtask3 = localStorage.getItem("todotask3");
        if(webtask3 == null){
            task3Obj = [];
        }
        else{
            task3Obj = JSON.parse(webtask3);
        }
        task3Obj.push({'task_name':addtaskinput3val, 'completeStatus3':false});
        localStorage.setItem("todotask3", JSON.stringify(task3Obj));
        addtaskinput3.value = '';
    }
    showtask3();
})

function  showtask3(){
  let webtask3 = localStorage.getItem("todotask3");
  if(webtask3 == null){
      task3Obj = [];
  }
  else{
      task3Obj = JSON.parse(webtask3);
  }
  let html = '';
  let addedtasklist3 = document.getElementById("addedtasklist3");
  task3Obj.forEach((item, index) => {

      if(item.completeStatus3 == true){
          taskComplete3Value = `<td class="completed">${item.task_name}</td>`;
      }else{
          taskComplete3Value = `<td class="under-completed">${item.task_name}</td>`;
      }
      html += `<tr class="table-wrapp">        
      ${taskComplete3Value}       
 </tr>
      <tr class="buttons__task-wrapp">
      <td class="dummy_line-wrapp"></td>
      <td class="line-wrapp">
      <button type="button" class="text-success" id=${index}>&nbsp;<i id="icons-todoapp" class="fas fa-check"></i> &nbsp;</button>
      <button type="button" onclick="edittask3(${index})" class="text-primary"><i id="icons-todoapp" class="fa fa-edit"></i>Edit</button>
      <p type="time" name="time" class="text-primary" id=${index}></p>
      <button type="button" onclick="deleteitem3(${index})" class="text-danger"><i class="fa fa-trash"></i></button>
      </td>
      </tr>`;
  });
  addedtasklist3.innerHTML = html;
}

//console.log(JSON.parse(localStorage.getItem('todotask3'))) || []; 

function edittask3(index){
    let saveindex3 = document.getElementById("saveindex3");
    let addtaskbtn3 = document.getElementById("addtaskbtn3");
    let savetaskbtn3 = document.getElementById("savetaskbtn3");
    saveindex3.value = index;

    let confirmDel = confirm("Edit This Note?");
    if (confirmDel == false) {
        let notes = localStorage.getItem("todotask3");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 0);
        localStorage.setItem("todotask3", JSON.stringify(notesObj));
        showNotes();
    }
    
    let webtask3 = localStorage.getItem("todotask3");
    let task3Obj = JSON.parse(webtask3); 
    addtaskinput3.value = task3Obj[index]['task_name'];
    addtaskbtn3.style.display="none";
    savetaskbtn3.style.display="block";
  }

let savetaskbtn3 = document.getElementById("savetaskbtn3");
savetaskbtn3.addEventListener("click", function(){
    let addtaskbtn3 = document.getElementById("addtaskbtn3");
    let webtask3 = localStorage.getItem("todotask3");
    let task3Obj = JSON.parse(webtask3); 
    let saveindex3 = document.getElementById("saveindex3").value;
    
    for (keys in task3Obj[saveindex3]) {
        if(keys == 'task_name'){
            task3Obj[saveindex3].task_name = addtaskinput3.value;
        }
    }

   savetaskbtn3.style.display="none";
    addtaskbtn3.style.display="block";
    localStorage.setItem("todotask3", JSON.stringify(task3Obj));
    addtaskinput3.value='';
    showtask3();
})

function deleteitem3(index){
    let confirmDel = confirm("Delete This Note?");
    if (confirmDel == false) {
        let notes3 = localStorage.getItems("todotask3");
        if (notes3 == null) {
            notes3Obj = [];
        } else {
            notes3Obj = JSON.parse(notes3);
        }
        notes3Obj.splice(index, 0);
        localStorage.setItem("todotask3", JSON.stringify(notes3Obj));
        showNotes3();
    }
    
    let webtask3 = localStorage.getItem("todotask3");
    let task3Obj = JSON.parse(webtask3);
    task3Obj.splice(index, 1);
    localStorage.setItem("todotask3", JSON.stringify(task3Obj));
    showtask3();
}

let addedtasklist3 = document.getElementById("addedtasklist3");
    addedtasklist3.addEventListener("click", function(e){
        let webtask3 = localStorage.getItem("todotask3");
        let task3Obj = JSON.parse(webtask3);
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling; 
       
            for (keys in task3Obj[mytargetid]) {
                if(keys == 'completeStatus3' && task3Obj[mytargetid][keys]==true){
                    task3Obj[mytargetid].completeStatus3 = false;
                  
                }else if(keys == 'completeStatus3' && task3Obj[mytargetid][keys]==false){
                    task3Obj[mytargetid].completeStatus3 = true;
                }
              }
              
        localStorage.setItem("todotask3", JSON.stringify(task3Obj));
        showtask3();
    }
    })

let deleteallbtn3 = document.getElementById("deleteallbtn3");
deleteallbtn3.addEventListener("click", function(){
    let confirmDel = confirm("Delete All Notes??");
if (confirmDel == false) {
    let notes3 = localStorage.getItem("todotask3");
    if (notes3 == null) {
        notes3Obj = [];
    } else {
        notes3Obj = JSON.parse(notes3);
    }
    notes3Obj.splice(index, 0);
    localStorage.setItem("todotask3", JSON.stringify(notes3Obj));
    showNotes3();
}

    let savetaskbtn3 = document.getElementById("savetaskbtn3");
    let addtaskbtn3 = document.getElementById("addtaskbtn3");
    let webtask3 = localStorage.getItem("todotask3");
    let task3Obj = JSON.parse(webtask3);
    if(webtask3 == null){
        task3Obj = [];
    }
    else{
        task3Obj = JSON.parse(webtask3);
        task3Obj = [];
    }
    savetaskbtn3.style.display="none";
    addtaskbtn3.style.display="block";
    localStorage.setItem("todotask3", JSON.stringify(task3Obj));
    showtask3();

})

let searchtextbox3 = document.getElementById("searchtextbox3");
searchtextbox3.addEventListener("input", function(){
    let trlist3 = document.querySelectorAll("tr");
    Array.from(trlist3).forEach(function (item){
        let searchedtext3 = item.getElementsByTagName("td")[0].innerText;
        let searchtextbox3val = searchtextbox3.value;
        let re3 = new RegExp(searchtextbox3val, 'gi');
        if(searchedtext3.match(re3)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})

/*END OF REMINDER LOCAL STORAGE SCRIPT*/

/*START OF DAYS BETWEEN DATES CALCULATION  SCRIPT*/

function calculateDays() {
  var d1 = document.getElementById("daycalc1").value;
  var d2 = document.getElementById("daycalc2").value;
  const dateOne = new Date(d1);
  const dateTwo = new Date(d2);
  const time = Math.abs(dateTwo - dateOne);
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  document.getElementById("daycalcout").innerHTML=days;
  document.getElementById("daycalcout"). style.background = "burlywood";


}

localStorage.setItem("dateset", JSON.stringify(value));
let dateOne = JSON.parse(value);

/*END OF DAYS BETWEEN DATES CALCULATION  SCRIPT*/

/*START OF DATE WITH ADDED DAY CALCULATION  SCRIPT*/
     /*param {Date} date
     param {Number} period*/

    const addDays = (date, period) => {
    date.setDate(date.getDate() + period);
     };

  let date = new Date();
  console.log(date);

  addDays(date, 5);
  console.log(date);

/*END OF DATE WITH ADDED DAY CALCULATION  SCRIPT*/