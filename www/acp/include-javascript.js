$(document).ready(function(){
	$("div#header").css("visibility","visible");
	$("div#loading").hide();
	$("div#notification").fadeIn(600);
	setTimeout(function(){$("div#notification").fadeOut(600);}, 3500);
	$('#uploadFile').click(function(){$('#uploadForm').submit();});
	$('.uploadExtraButton').click(function(){$('.uploadExtraButton').toggle();$('.uploadExtra').toggle();});
	$('.startHidden').hide();
	$("#checkAllBoxes").ready(function(){if ($("input.box").length == 0){$("#checkAllBoxes").hide();}});
	$("#checkAllBoxes").click(function(){$("input.box").checked(this.checked); check_boxes();});
	$("input.box").click(function(){check_boxes()});
	$("img#thumbCropIcon").click(function(){changeCrop("#thumbCrop")});
	$("img#imageCropIcon").click(function(){changeCrop("#imageCrop")});
	$("a#deleteAllFiles").click(function(){deleteFiles()});
	$("ul.item").mouseover(function(){$("#infotext, #infoimage").hide()});
	$("ul.item").mouseout(function(){$("#infotext, #infoimage").show()});
	$("#uploadSettings").change(changeUploadSettings);
	$("a.deleteItem").click(function(){eval("deleteItem" + this.name)});
	$("a.sendPost").click(function(){eval("sendPost" + this.name)});
	$("img.checkbox").click(function(){changeCheckbox(this.alt)});
	$("input, select").bind("keypress", function(e) {if (e.keyCode == 34) return false;});
	if (changeUploadSetting){changeUploadSettings();}
});