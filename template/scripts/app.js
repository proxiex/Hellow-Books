// function of find element by id
function _(id){
	return document.getElementById(id);
}

var h = window.innerHeight;
_('container').style.height = (h-85)+'px';
