function changeSidebarModeDecoration(sidebar, mode, ceiling) {
	var modeToSet = null;
	ceiling = ceiling ? ceiling : 2;
	var sbc = {
		top:    document.getElementById("top-basic"),
		right:  document.getElementById("basic-right"),
		bottom: document.getElementById("bottom-basic"),
		left:   document.getElementById("basic-left"),
	}
	var currentRe = new RegExp(".*\\b(app-sbm-" + sidebar + "-(\\w+))\\b", "g");
	var current = currentRe.exec(sbc[sidebar].className);
	if(current && !isNaN(current[2])) {
		if(mode === "bigger") {
			if(parseInt(current[2]) < ceiling) {
				modeToSet = parseInt(current[2]) + 1;
			} else {
				modeToSet = ceiling;
			}
		} else if(mode === "smaller") {
			if(parseInt(current[2]) > 0) {
				modeToSet = parseInt(current[2]) - 1;
			} else {
				modeToSet = 0;
			}
		}
	}
	if(modeToSet === null) {modeToSet = mode;}
	if(current) {sbc[sidebar].classList.remove(current[1]);}
	sbc[sidebar].classList.add("app-sbm-" + sidebar + "-" + modeToSet);
}
