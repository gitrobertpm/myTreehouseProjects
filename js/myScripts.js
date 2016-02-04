/*===============================================
SCRIPTS.JS
===============================================*/
"use strict";

var width = window.innerWidth;
var height = window.innerHeight;

//alert("test");

//* ========================================= *//

var projWrap = document.getElementsByClassName("projWrap");
var nav = document.getElementsByTagName("nav")[0];
var burgerWrap = document.getElementsByClassName("burgerWrap")[0];
var burgerPattyText = document.getElementsByClassName("burgerPattyText")[0];
var navItem = document.getElementsByClassName("navItem");

// SET BOOLEAN
var navOpen = false;


var arrowLeft = document.getElementsByClassName("arrowLeft")[0];
var arrowRight = document.getElementsByClassName("arrowRight")[0];
//var projWrap = document.getElementsByClassName("projWrap");


//var projWrap = document.getElementsByClassName("projWrap");
var smProjImage = document.getElementsByClassName("smProjImage");
var projOpen = document.getElementsByClassName("projOpen");
var projInfo = document.getElementsByClassName("projInfo");
var projCode = document.getElementsByClassName("projCode");

var projDescriptionWrap = document.getElementsByClassName("projDescriptionWrap");
var projTechWrap = document.getElementsByClassName("projTechWrap");
var projInfo = document.getElementsByClassName("projInfo");

// SET BOOLEAN
var descriptionOn = false;

var counter = 0;


/*===============================================
NAV
================================================*/
var doTheNav = function() {

	// OPEN AND CLOSE NAV
	burgerWrap.onclick = function() {
		if (!navOpen) {
			nav.classList.toggle("closeNav", false);
			nav.classList.toggle("openNav", true);
			burgerPattyText.innerHTML = "Close";
			navOpen = true;
		} else if (navOpen) {
			nav.classList.toggle("openNav", false);
			nav.classList.toggle("closeNav", true);
			
			burgerPattyText.innerHTML = "";
			
			navOpen = false;
		}
	}
	
	for (var i = 0; i < navItem.length; i++) {
		// STICK A NUMBERED MARKER ON EACH NAV LI
		navItem[i].marker = i;
		
		// MAKE ITEMS IN PROJ MENU CLICKABLE AND DISPLAY MATCHING PROJECT
		navItem[i].onclick = function() {
			for (var j = 0; j < projWrap.length; j++) {
				projWrap[j].classList.toggle("showProjWrap", false);
			}
			projWrap[0].classList.toggle("showFirstProj", false);
			
			projWrap[this.marker].classList.toggle("showProjWrap", true);
			nav.classList.toggle("openNav", false);
			nav.classList.toggle("closeNav", true);
			
			burgerPattyText.innerHTML = "";
			
			navOpen = false;
			
			counter = this.marker;
		};
	}
};

doTheNav();


var stickyNav = function() {
	
	var distance = document.getElementsByTagName("html")[0].scrollTop;
	
	// MAKE RESPONSIVE NAV STICK ON SCROLL
	if (width < 400) {
		if (distance > 310) {
			arrowLeft.classList.toggle("arrowFixed", true);
			arrowRight.classList.toggle("arrowFixed", true);
		} else if (distance < 311) {
			arrowLeft.classList.toggle("arrowFixed", false);
			arrowRight.classList.toggle("arrowFixed", false);
		}
	} else if (width > 400) {
		if (distance > 265) {
			arrowLeft.classList.toggle("arrowFixed", true);
			arrowRight.classList.toggle("arrowFixed", true);
		} else if (distance < 266) {
			arrowLeft.classList.toggle("arrowFixed", false);
			arrowRight.classList.toggle("arrowFixed", false);
		}
	}
	
	
};

window.onscroll = function() {stickyNav()};
//* ========================================= *//



/*===============================================
ARROWS
===============================================*/
var arrowsAreGreat = function() {

	arrowLeft.onclick = function() {
	
	projWrap[0].classList.toggle("showFirstProj", false);
	
		if (descriptionOn) {
			for (var i = 0; i < projWrap.length; i++) {
				projDescriptionWrap[i].classList.toggle("openProjInfo", false);
				projTechWrap[i].classList.toggle("openProjInfo", false);
			}
		} else if (!descriptionOn) {
			for (var j = 0; j < projWrap.length; j++) {
				projDescriptionWrap[j].classList.toggle("closeProjInfo", false);
				projTechWrap[j].classList.toggle("closeProjInfo", false);
			}
		}
		
		if (counter < 1) {
			counter = projWrap.length - 1;
			projWrap[0].classList.toggle("showProjWrap", false);
			projWrap[counter].classList.toggle("showProjWrap", true);
		} else {
			counter -= 1;
			projWrap[counter + 1].classList.toggle("showProjWrap", false);
			projWrap[counter].classList.toggle("showProjWrap", true);
		}
	};

	arrowRight.onclick = function() {
		
	projWrap[0].classList.toggle("showFirstProj", false);
		
		if (descriptionOn) {
			for (var i = 0; i < projWrap.length; i++) {
				projDescriptionWrap[i].classList.toggle("openProjInfo", false);
				projTechWrap[i].classList.toggle("openProjInfo", false);
			}
		} else if (!descriptionOn) {
			for (var j = 0; j < projWrap.length; j++) {
				projDescriptionWrap[j].classList.toggle("closeProjInfo", false);
				projTechWrap[j].classList.toggle("closeProjInfo", false);
			}
		}
		
		if (counter === projWrap.length - 1) {
			counter = 0;
			projWrap[projWrap.length - 1].classList.toggle("showProjWrap", false);
			projWrap[counter].classList.toggle("showProjWrap", true);
		} else {
			counter += 1;
			projWrap[counter - 1].classList.toggle("showProjWrap", false);
			projWrap[counter].classList.toggle("showProjWrap", true);
		}
	};
	
};

arrowsAreGreat();

//* ========================================= *//



/*==============================================
PROJ WRAP HOVER EFFECTS
===============================================*/
var projWrapHover = function() {

	for (var i = 0; i < projWrap.length; i++) {
		
		// STICK A NUMBERED MARKER ON EACH PROJ WRAP
		projWrap[i].marker = i;
		
		projWrap[i].onmouseover = function() {
			if (width < 625) {
				smProjImage[this.marker].classList.toggle("smProjImgHover", true);
				projInfo[this.marker].style.color = "rgb(120,180,120)";
			} else if (width > 624) {
					projInfo[this.marker].style.color = "rgb(120,180,120)";
			}
		};
		
		projWrap[i].onmouseout = function() {
			if (width < 625) {
				smProjImage[this.marker].classList.toggle("smProjImgHover", false);
				projInfo[this.marker].style.color = "rgb(245,245,245)";
			} else if (width > 624) {
				projInfo[this.marker].style.color = "rgb(245,245,245)";
			}
		};
	}
};

projWrapHover();
//* ========================================= *//



/*==============================================
// INFO BUTTON
===============================================*/
var getThatInfoButton = function() {

	// LOOP THROUGH PROJS
	for (var i = 0; i < projInfo.length; i++) {
		
		// STICK A NUMBERED MARKER ON EACH SWITCH
		projInfo[i].marker = i;

		// SET BEHAVIOR OF CLICKABLE PROJ INFO BUTTON
		projInfo[i].onclick = function() {

			for (var j = 0; j < projInfo.length; j++) {

				// TOGGLE CLASS TO SHOW/HIDE PROJ INFO AND TOGGLE TEXT ON PROJ INFO BUTTON
				if (!descriptionOn) {
					projInfo[j].innerHTML = "Shrink <span class='book2 bookCover2'></span><span class='book2 bookBack2'></span>";
					
					projDescriptionWrap[j].classList.toggle("closeProjInfo", false);
					projDescriptionWrap[j].classList.toggle("keepProjInfoClosed", false);
					projDescriptionWrap[j].classList.toggle("keepProjInfoOpen", true);
					
					
					projTechWrap[j].classList.toggle("closeProjInfo", false);
					projTechWrap[j].classList.toggle("keepProjInfoClosed", false);
					projTechWrap[j].classList.toggle("keepProjInfoOpen", true);
					
				} else if (descriptionOn) {
					projInfo[j].innerHTML = "View Project Info <span class='book2 bookCover2'></span><span class='book2 bookBack2'></span>";
					
					projDescriptionWrap[j].classList.toggle("openProjInfo", false);
					projDescriptionWrap[j].classList.toggle("keepProjInfoOpen", false);
					projDescriptionWrap[j].classList.toggle("keepProjInfoClosed", true);
					
					projTechWrap[j].classList.toggle("openProjInfo", false);
					projTechWrap[j].classList.toggle("keepProjInfoOpen", false);
					projTechWrap[j].classList.toggle("keepProjInfoClosed", true);
					
					// REMOVE FOCUS FROM PROJ INFO BUTTON
					projInfo[j].blur();
				}
			}
			
			
			
			if (!descriptionOn) {
				projDescriptionWrap[this.marker].classList.toggle("openProjInfo", true);
				projTechWrap[this.marker].classList.toggle("openProjInfo", true);
				descriptionOn = true;
			} else if (descriptionOn) {
				projDescriptionWrap[this.marker].classList.toggle("closeProjInfo", true);
				projTechWrap[this.marker].classList.toggle("closeProjInfo", true);
				descriptionOn = false;
			}
		};
	}
};

getThatInfoButton();
//* ========================================= *//



/*==============================================

===============================================*/

//* ========================================= *//