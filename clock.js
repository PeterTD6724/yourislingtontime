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

// MERCHANDISE POPUP MODAL
var modalBtns = document.querySelectorAll('.modal__open-btn');

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
};

//START OF BARS MENU POPUP SCRIPT FOR UPPER CLOSING

function drinkoutNav() {
  document.getElementById("drinkoutNav").style.display = "flex";
  }
  
  function cldrinkoutNav() {
  document.getElementById("drinkoutNav").style.display = "none";
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

 // START COFEE SHOP 1 COSTA

var modalBtns = document.querySelectorAll('.modal__cofee-drink1');
  
  modalBtns.forEach(function (btn) {
  btn.onclick = function() {
    //var modal = btn.getAttribute('data-modal'); 
    document.getElementById('drinkscofee1').style.display = "flex";
  };
  });
  
  var closeBtns = document.querySelectorAll('.modal-cofeeout1');
  closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = (btn.closest("#drinkscofee1").style.display = "none")
  };
  });
  
  window.onclick = function(e) {
  if (e.target.className === "drinks__drinkout") {
    e.target.style.display = "none";  
  }
  };

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

//END OF COFEE SHOPS MENU POPUP SCRIPT  