/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
  document.getElementById('image').innerHTML = previewPic.alt;
	}

	function unDo(){
    var z = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
		document.getElementById('image').innerHTML = z;
	}