/*===============================================
SCRIPTS.JS
===============================================*/
"use strict";

var myTreehouseProjects = function() {
	/*===============================================
	MY VARIABLES
	===============================================*/
	var width = window.innerWidth;
	var height = window.innerHeight;

	var projWrap = document.getElementsByClassName("projWrap");

	// NAV VARIABLES
	var nav = document.getElementsByTagName("nav")[0];
	var burgerWrap = document.getElementsByClassName("burgerWrap")[0];
	var burgerPattyText = document.getElementsByClassName("burgerPattyText")[0];
	var navItem = document.getElementsByClassName("navItem");
	
	// BOOLEAN TO TRACK NAV OPEN STATE
	var navOpen = false;

	var arrowWrap = document.getElementsByClassName("arrowWrap");
	var arrowLeft = document.getElementsByClassName("arrowLeft")[0];
	var arrowRight = document.getElementsByClassName("arrowRight")[0];

	// PROJ IMAGE VARIBALES
	var lgProjImage = document.getElementsByClassName("lgProjImage");
	var smProjImage = document.getElementsByClassName("smProjImage");
	var projOpen = document.getElementsByClassName("projOpen");
	var projInfo = document.getElementsByClassName("projInfo");
	var projCode = document.getElementsByClassName("projCode");

	// PROJ DESCRIPTION VARIBALES
	var projDescriptionWrap = document.getElementsByClassName("projDescriptionWrap");
	var projTechWrap = document.getElementsByClassName("projTechWrap");
	var projInfo = document.getElementsByClassName("projInfo");
	var projSectionTitleAbout = document.getElementsByClassName("projSectionTitleAbout");
	var projSectionTitleSkills = document.getElementsByClassName("projSectionTitleSkills");
	
	// BOOLEAN TO TRACK PROJ INFO OPEN STATE
	var descriptionOn = false;

	// COUNTER VARIABLE TO TRACK CURRNET PROJ DISPLAYED 
	var counter = 0;
	//* ========================================= *//



	/*===============================================
	NAV
	================================================*/
	var doTheNav = function() {

		// OPEN AND CLOSE NAV
		burgerWrap.onclick = function() {
			if (!navOpen) {
				nav.classList.toggle("openNav", true);
				
				burgerPattyText.innerHTML = "Close";
				
				navOpen = true;
			} else if (navOpen) {
				nav.classList.toggle("openNav", false);
				
				burgerPattyText.innerHTML = "";
				
				navOpen = false;
			}
		}
		
		// LOOP THROUGH NAV ITEMS
		for (var i = 0; i < navItem.length; i++) {
			
			// STICK A NUMBERED MARKER ON EACH NAV LI
			navItem[i].marker = i;
			
			// MAKE ITEMS IN PROJ MENU CLICKABLE, DISPLAY MATCHING PROJECT ON PAGE, AND HANDLE NECESSARY BOOLEANS AND COUNTERS
			navItem[i].onclick = function() {
				for (var j = 0; j < projWrap.length; j++) {
					projWrap[j].classList.toggle("showProjWrap", false);
				}
				projWrap[0].classList.toggle("showFirstProj", false);
				
				projWrap[this.marker].classList.toggle("showProjWrap", true);
				
				nav.classList.toggle("openNav", false);
				
				burgerPattyText.innerHTML = "";
				
				navOpen = false;
				
				counter = this.marker;
			};
		}
	};

	doTheNav();

	// STICKY NAV
	var stickyNav = function() {
		
		// VARIABLES TO GET SCROLL DISTANCE FOR ALL BROWSERS
		var distance = document.getElementsByTagName("html")[0].scrollTop;
		var distance2 = document.body.scrollTop;
		
		// MAKE RESPONSIVE NAV STICK ON SCROLL
		if (width < 400) {
			if (distance > 310 || distance2 > 310) {
				arrowWrap[0].classList.toggle("arrowFixed", true);
				arrowWrap[1].classList.toggle("arrowFixed", true);
			} else if (distance < 311 || distance2 < 311) {
				arrowWrap[0].classList.toggle("arrowFixed", false);
				arrowWrap[1].classList.toggle("arrowFixed", false);
			}
		} else if (width > 400 && width < 1000) {
		if (distance > 300 || distance2 > 300) {
				arrowWrap[0].classList.toggle("arrowFixed", true);
				arrowWrap[1].classList.toggle("arrowFixed", true);
			} else if (distance < 301 || distance2 < 301) {
				arrowWrap[0].classList.toggle("arrowFixed", false);
				arrowWrap[1].classList.toggle("arrowFixed", false);
			}
		}
		
		
	};

	window.onscroll = function() {stickyNav()};
	//* ========================================= *//



	/*===============================================
	ARROWS
	===============================================*/
	// ARROWS INCREMENT THROUGH PROJECTS AND TOGGLE DISPLAY ON / OFF
	var arrowsAreGreat = function() {

		// LEFT ARROW
		arrowLeft.onclick = function() {
			
		
			// HIDE INITIAL PROJ
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
				
				// HANDLE FOCUS STATE FOR CURRENT PROJ INFO BUTTON
				if (descriptionOn) {
					projInfo[0].blur();
					projInfo[counter].focus();
				}	
			} else {
				counter -= 1;
				projWrap[counter + 1].classList.toggle("showProjWrap", false);
				projWrap[counter].classList.toggle("showProjWrap", true);
				
				// HANDLE FOCUS STATE FOR CURRENT PROJ INFO BUTTON
				if (descriptionOn) {
					projInfo[counter + 1].blur();
					projInfo[counter].focus();
				}
			}
		};

		arrowRight.onclick = function() {
		
			// HIDE INITIAL PROJ		
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
				
				// HANDLE FOCUS STATE FOR CURRENT PROJ INFO BUTTON
				if (descriptionOn) {
					projInfo[projWrap.length - 1].blur();
					projInfo[counter].focus();
				}
			} else {
				counter += 1;
				projWrap[counter - 1].classList.toggle("showProjWrap", false);
				projWrap[counter].classList.toggle("showProjWrap", true);
				
				// HANDLE FOCUS STATE FOR CURRENT PROJ INFO BUTTON
				if (descriptionOn) {
					projInfo[counter - 1].blur();
					projInfo[counter].focus();
				}
			}
		};
	};

	arrowsAreGreat();
	//* ========================================= *//



	/*==============================================
	PROJ WRAP HOVER EFFECTS
	===============================================*/
	var projWrapHover = function() {
		
		// LOOP THROUGH PROJ WRAPS AND HOVER EFFECTS
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
	MAKE PROJ IMG CLICKABLE
	===============================================*/
	var imgClicker = function() {
		for (var i = 0; i < projInfo.length; i++) {
			
			// STICK A NUMBERED MARKER ON EACH PROJ INFO BUTTON
			lgProjImage[i].marker = i;
			smProjImage[i].marker = i;
			
			lgProjImage[i].onclick = function() {
				window.open(projOpen[this.marker].getAttribute("href"));
			};
			
			smProjImage[i].onclick = function() {
				window.open(projOpen[this.marker].getAttribute("href"));
			};
		}
	};
	
	imgClicker();
	//* ========================================= *//
	
	
	
	/*==============================================
	HELPER FUNCTION FOR TOGGLING CLASSES TO OPEN AND CLOSE INFO 
	===============================================*/
	var toggleInfoClasses = function() {
		// LOOP THROUGH PROJS
		for (var j = 0; j < projInfo.length; j++) {

			// TOGGLE CLASS TO SHOW/HIDE ALL PROJ INFO AND TOGGLE TEXT ON ALL PROJ INFO BUTTON
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
	};
	


	/*==============================================
	// INFO BUTTON
	===============================================*/
	var getThatInfoButton = function() {

		// LOOP THROUGH PROJS
		for (var i = 0; i < projInfo.length; i++) {
			
			// STICK A NUMBERED MARKER ON EACH PROJ INFO BUTTON
			projInfo[i].marker = i;

			// OPEN AND CLOSE PROJ WRAP WITH LOGIC FOR ALL OCCASIONS
			projInfo[i].onclick = function() {
				
				// HELPER FUNCTION
				toggleInfoClasses();
				
				// TOGGLE CLASS TO SHOW/HIDE CURRENT PROJ INFO AND TOGGLE TEXT ON CURRENT PROJ INFO BUTTON
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
	// MAKE "SKILLS" AND "ABOUT" HEADERS CLICKABLE FOR EASIER UI
	===============================================*/
	var skillsAndAbout = function() {

		if (width > 624) {
			
			// LOOP THROUGH PROJS
			for (var i = 0; i < projInfo.length; i++) {
				
				// STICK A NUMBERED MARKER ON EACH PROJ INFO BUTTON
				projSectionTitleAbout[i].marker = i;
				projSectionTitleSkills[i].marker = i;

				// OPEN AND CLOSE PROJ WRAP WITH LOGIC FOR ALL OCCASIONS
				projSectionTitleAbout[i].onclick = function() {
					
					// HELPER FUNCTION
					toggleInfoClasses();
					
					// TOGGLE CLASS TO SHOW/HIDE CURRENT PROJ INFO AND TOGGLE TEXT ON CURRENT PROJ INFO BUTTON
					if (!descriptionOn) {
						projDescriptionWrap[this.marker].classList.toggle("openProjInfo", true);
						projTechWrap[this.marker].classList.toggle("openProjInfo", true);
						projInfo[this.marker].focus();
						descriptionOn = true;
					} else if (descriptionOn) {
						projDescriptionWrap[this.marker].classList.toggle("closeProjInfo", true);
						projTechWrap[this.marker].classList.toggle("closeProjInfo", true);
						projInfo[this.marker].blur();
						descriptionOn = false;
					}
				};
				
				projSectionTitleSkills[i].onclick = function() {
					
					// HELPER FUNCTION
					toggleInfoClasses();
					
					// TOGGLE CLASS TO SHOW/HIDE CURRENT PROJ INFO AND TOGGLE TEXT ON CURRENT PROJ INFO BUTTON
					if (!descriptionOn) {
						projDescriptionWrap[this.marker].classList.toggle("openProjInfo", true);
						projTechWrap[this.marker].classList.toggle("openProjInfo", true);
						projInfo[this.marker].focus();
						descriptionOn = true;
					} else if (descriptionOn) {
						projDescriptionWrap[this.marker].classList.toggle("closeProjInfo", true);
						projTechWrap[this.marker].classList.toggle("closeProjInfo", true);
						projInfo[this.marker].blur();
						descriptionOn = false;
					}
				};
			}
		}
	};

	skillsAndAbout();
	//* ========================================= *//
};

myTreehouseProjects();