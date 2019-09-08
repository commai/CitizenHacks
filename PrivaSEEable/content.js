var elements = document.querySelectorAll('p, li, span, h1, h2, h3, h4, h5, h6');
var textlength = elements.length;
var flip = false;

function toggler(type) {
  if (!flip) {
	switch (type) {
		case 'RandomText':
			randomizer();
			break;
		case 'BlurText':
			blurrer();
			break;
		default:
			randomizer();
	}
    flip = true;
  } else if (flip) {
    location.reload(false);
    flip = false;
  }
}

function randomizer(){
	for(var i = 0; i < textlength; ++i) {
		var element = elements[i];

		for(var j = 0; j < element.childNodes.length; ++j){
			var  node = element.childNodes[j];
			var yeet = ['Xloremx', 'Xlmaox', 'Xipsumx', 'Xdongerasx', 'Xolorx',
			'Xyeetx','Xtarantinox','Xkawabungax','Xflamzx', 'Xitetsix', 'Xcordonizyx', 'Xutopic'];
			var rand = yeet[Math.floor(Math.random() * yeet.length)];
			if (node.nodeType === 3) {    
				var text = node.nodeValue;
				var replacedText = text.replace(/ /g, (' '+rand+' '));
				if (replacedText != text){
					element.replaceChild(document.createTextNode(replacedText), node);
				}
			}
		}
	}
}

chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
    	toggler();
    }
});
