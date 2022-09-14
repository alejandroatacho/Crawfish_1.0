function changeCrop($type){
	x = $($type + "X").val() - -1;
	x = x > 3 ? 1 : x;
	$($type + "X").val(x);
	
	y = $($type + "Y").val();
	y = x == 1 ? (y - -1) : y;
	$($type + "Y").val(y);
	
	if (y > 3){
		y = x = 0;
		$($type + "X").val(0);
		$($type + "Y").val(0);
	}
	
	$($type + "Icon").attr("src", icons16x16 + "crop_" + x + y + ".png");
}

function check_boxes(){
	$("#functions_delete, #functions_edit").attr("class","locked");
	$("input.box").each(function(){if (this.checked){$("#functions_delete, #functions_edit").attr("class","unlocked");}});
}

function changeUploadSettings(){
	idSetting = $("#uploadSettings").val();
	if (idSetting && uploadSettings){
		for (var key in uploadSettings[idSetting]){
			$("#" + key + ":text").val(uploadSettings[idSetting][key]);
			$("#" + key + ":hidden").val(uploadSettings[idSetting][key]);
			if (uploadSettings[idSetting][key] == 1){
				$("#" + key + ":checkbox").check();
			}else{
				$("#" + key + ":checkbox").uncheck();
			}
		}
		
		xThumb = uploadSettings[idSetting]['thumbCropX'];
		yThumb = uploadSettings[idSetting]['thumbCropY'];
		xImage = uploadSettings[idSetting]['imageCropX'];
		yImage = uploadSettings[idSetting]['imageCropY'];
		
		$("#thumbCropIcon").attr("src",icons16x16 + "crop_" + xThumb + yThumb + ".png");
		$("#imageCropIcon").attr("src",icons16x16 + "crop_" + xImage + yImage + ".png");
	}
}

function functionDeleteMultiple(deleteType){
	if ($("#functions_delete").attr("class") == "unlocked"){
		delete_message = '';
		switch (deleteType){
			case "1": 	delete_message = '<p>If you confirm deletion the items ';
						delete_message += 'will be deleted.</p>';
						delete_message += '<p>Are you sure you want to delete the items?</p>';
						break;
			case "2": 	delete_message = '<p>If you confirm deletion the items will be deleted. ';
						delete_message += 'All related items will be updated to ';
						delete_message += 'their default value.</p>';
						delete_message += '<p>Are you sure you want to delete the items?</p>';
						break;
			case "3": 	delete_message = '<p>If you confirm deletion the items ';
						delete_message += 'and all their related will be deleted.</p>';
						delete_message += '<p>Are you sure you want to delete the items?</p>';
						break;
		}	
		if (delete_message != ''){
			popup('Delete Multiple Items', delete_message);
			$('div#popup .popup_ok').click(functionSaveChanges);
			$('div#popup .popup_cancel').click(cancelPopup);
		}else{
			$('#list_form').submit();
		}
	}	
}

function functionSaveChanges(){
	if ($("#functions_save").attr("class") == "unlocked"){
		$("input.box").checked(0);
		$("#list_form").submit();
	}
}

function functionToAddPage(url){
	if ($("#functions_add").attr("class") == "unlocked"){
		window.location = url;
	}
}

function functionEditMultiple(url){
	if ($("#functions_delete").attr("class") == "unlocked"){
		$("#list_form").attr("action", url);
		$("#list_form").submit();
	}
}

function functionToListPage(url){
	if ($("#functions_list").attr("class") == "unlocked"){
		window.location = url;
	}
}

function functionToMediaPage(url){
	if ($("#functions_media").attr("class") == "unlocked"){
		window.location = url;
	}
}

function functionEditToList(url){
	if ($("#functions_edittolist").attr("class") == "unlocked"){
		$("#edit_form").attr("action", url);
		$("#edit_form").submit();
	}
}

function functionAddToAdd(){
	if ($("#functions_addtoadd").attr("class") == "unlocked"){
		$("#add_form").submit();
	}
}

function functionAddToList(url){
	if ($("#functions_addtolist").attr("class") == "unlocked"){
		$("#add_form").attr("action", url);
		$("#add_form").submit();
	}
}

function functionSaveListing(url){
	if ($("#functions_savelisting").attr("class") == "unlocked"){
		sendPost('savelisting', 'save', url);
	}	
}

function functionResetListing(url){
	if ($("#functions_resetlisting").attr("class") == "unlocked"){
		sendPost('savelisting', 'reset', url);
	}
}

function changeCheckbox(id){
	element = document.getElementById(id);
	element.value = (element.value == 0) ? 1 : 0;
	document.getElementById("img" + id).src = icons16x16 + "checkbox" + element.value + ".png";
}

// Cancel popup
function cancelPopup() {
	$('div#popup').fadeOut(600);
	$('div#popup .popup_ok').click(function(){});
	$('div#popup .popup_cancel').unbind('click', cancelPopup);
}

// Remove an added row out of the list
function removerow(number){
	var rowtodelete = number;
	lastindex = -1;
	for (var loop in currentrows){
		if (number == loop){
			lastindex = currentrows[number];
		}
	}
	currentrows.splice(lastindex, 1);
	for (x in thearray){
		if (thearray[x] < number){
			rowtodelete = rowtodelete - 1; 
		}
	}
	var tbl = document.getElementById("table_list");
	tbl.deleteRow(rowtodelete);
	thearray.push(number);
}

// Show popup 
function popup(popup_title, popup_message){
	$("div#popup").fadeIn(600);
	$("div#popup .popup_title").html(popup_title);
	$("div#popup .popup_message").html(popup_message);
}

// Add a counter the string
function counter_in_string(stringvalue){
	outp = '';
	returnstring = '';
	for (i=stringvalue.length; i>=0; i--){
		if (!isNaN(stringvalue.charAt(i)) && stringvalue.charAt(i)!=' '){
			outp = stringvalue.charAt(i) + outp;
		}else if (outp != ''){
			break;
		}
	}
	
	part1 = stringvalue.substring(0, (i+1));
	part2 = stringvalue.substr(i+1);
	newoutp = outp - (-1);
	newoutp = newoutp + '';
	counterlength = -(newoutp.length) - -(outp.length);
	for (i=0; counterlength>i; i++){
		newoutp = '0' + newoutp;
	}
	outp = outp + '';
	returnstring = part1 + part2.replace(outp,newoutp);
	return returnstring;
}

// Get the right form
function get_desired_form(){
	if (document.getElementById("list_form")){
		convertform = document.getElementById("list_form");
	}else if(document.getElementById("edit_form")){
		convertform = document.getElementById("edit_form");
	}else if(document.getElementById("add_form")){
		convertform = document.getElementById("add_form");
	}
	return convertform;
}

// Set the desired date to a timestamp
function to_timestamp(elementname, type){
	
	convertform = get_desired_form();
	
	y = convertform.elements['temp_' + elementname + '[y]'].value;
	m = stripLeadingZeroes(convertform.elements['temp_' + elementname + '[m]'].value);
	d = stripLeadingZeroes(convertform.elements['temp_' + elementname + '[d]'].value);
	h = stripLeadingZeroes(convertform.elements['temp_' + elementname + '[h]'].value);
	i = stripLeadingZeroes(convertform.elements['temp_' + elementname + '[i]'].value);
	s = stripLeadingZeroes(convertform.elements['temp_' + elementname + '[s]'].value);
	timenow = new Date(Date.UTC(y, (m-1) , d, h, i ,s));
	timestamp = ((timenow.getTime()/1000.0)-timezone);
	timestamp = timestamp <= 0 ? 0 : timestamp-7200;
	convertform.elements[elementname].value = timestamp;
	switch (type){
		case "datetime" : timestring = addLeadingZeroes(d) + "-" + addLeadingZeroes(m) + "-" + y + " " + addLeadingZeroes(h) + ":" + addLeadingZeroes(i) + ":" + addLeadingZeroes(s); break;
		case "date" : timestring = addLeadingZeroes(d) + "-" + addLeadingZeroes(m) + "-" + y; break;
		case "time" : timestring = addLeadingZeroes(h) + ":" + addLeadingZeroes(i) + ":" + addLeadingZeroes(s); break;
	}
	timestring = timestamp <= 0 ? "No time set" : timestring;
	convertform.elements['temp_' + elementname + '[date]'].value = timestring;
}

// Set the desired datefields to a timestamp
function from_timestamp(elementname, timestamp, type){
	convertform = get_desired_form();
	timenow = new Date((timestamp + timezone) * 1000);
	year = timenow.getYear();
	timestamp = timestamp <= 0 ? 0 : timestamp;

	y = (year < 2000) ? (year + 1900) : year;
	y = timestamp == 0 ? "0000" : y;
	d = timestamp == 0 ? "00" : addLeadingZeroes(timenow.getDate());
	m = timestamp == 0 ? "00" : addLeadingZeroes((timenow.getMonth()+1));
	h = timestamp == 0 ? "00" : addLeadingZeroes(timenow.getHours());
	i = timestamp == 0 ? "00" : addLeadingZeroes(timenow.getMinutes());
	s = timestamp == 0 ? "00" : addLeadingZeroes(timenow.getSeconds());

	convertform.elements['temp_' + elementname + '[d]'].value = d;
	convertform.elements['temp_' + elementname + '[m]'].value = m;
	convertform.elements['temp_' + elementname + '[y]'].value = y;
	convertform.elements['temp_' + elementname + '[h]'].value = h;
	convertform.elements['temp_' + elementname + '[i]'].value = i; 
	convertform.elements['temp_' + elementname + '[s]'].value = s;
	
	switch (type){
		case "datetime" : timestring = d + "-" + m + "-" + y + " " + h + ":" + i + ":" + s; break;
		case "date" : timestring = d + "-" + m + "-" + y; break;
		case "time" : timestring = h + ":" + i + ":" + s; break;
	}
	
	timestring = timestamp == 0 ? "No time set" : timestring;
	convertform.elements['temp_' + elementname + '[date]'].value = timestring;
	convertform.elements[elementname].value = timestamp;
}


// Toggle visibility
function show_hide(elementname){
	changestyle = document.getElementById(elementname).style;
	changestyle.display = changestyle.display == "" ? "block" : changestyle.display;
	changestyle.visibility = changestyle.visibility == "" ? "visible" : changestyle.visibility;
	changestyle.display = changestyle.display != "block" ? "block" : "none";
	changestyle.visibility = changestyle.visibility != "visible" ? "visible" : "hidden";
}

// Remove zeroes
function stripLeadingZeroes(input){
	if((input.length > 1) && (input.substr(0,1) == "0")){
		return input.substr(1);
	}else{
		return input;
	}
}

// Add zeroes
function addLeadingZeroes(input){
	input = input + "";
	if(input.length < 2){
		return "0" + input.substr(0);
	}else{
		return input;
	}
}

// Handle a post
function sendPost(post_key, post_value, page){
	var sendinput = document.createElement("input");
	sendinput.setAttribute("type", "hidden");
	sendinput.setAttribute("name", post_key);
	sendinput.setAttribute("value", post_value);
	document.sendform.action = page;
	document.sendform.appendChild(sendinput);
	document.sendform.submit();
}

// Delete files
function deleteFiles(){
	popup_title = "Delete all files"
	popup_message = '<p>If you confirm deletion all the files will be completely ';
	popup_message += 'deleted from the server.</p>';
	popup_message += '<p>Are you sure you want to delete the files?</p>';
	popup('Delete ' + popup_title, popup_message);
	$('div#popup .popup_ok').click(function(){sendPost('delete', 'all', '')});
	$('div#popup .popup_cancel').click(cancelPopup);
}

// Delete an item
function deleteItem(deleteType, list_id, list_currentpage, list_section_name_id, list_value){
	delete_name = document.list_form.elements['edit[' + list_id + '][' + list_section_name_id + ']'] ? 
	document.list_form.elements['edit[' + list_id + '][' + list_section_name_id + ']'].value : list_value;
	popup_title = delete_name.length > 20 ? delete_name.substr(0, 20) + ' ...' : delete_name;
	popup_message = '<p>If you confirm deletion this item will be deleted.</p><p>Are you sure you want to delete the items?</p>';
	switch (deleteType){
		case "1": 	popup_message = '<p>If you confirm deletion <b>' + delete_name + '</b> will be deleted.</p>'; 
					popup_message += '<p>Are you sure you want to delete the item?</p>'; break;
		case "2": 	popup_message = '<p>If you confirm deletion <b>' + delete_name + '</b> will be deleted.';
					popup_message += 'All related items will be updated to their default value.</p>';
					popup_message += '<p>Are you sure you want to delete the items?</p>'; break;
		case "3": 	popup_message = '<p>If you confirm deletion <b>' + delete_name + '</b>';
					popup_message += ' and all its related will be deleted.</p>';
					popup_message += '<p>Are you sure you want to delete the items?</p>'; break;
	}
	popup('Delete ' + popup_title, popup_message);
	
	$('div#popup .popup_ok').click(function(){sendPost("delete", list_id, list_currentpage)});
	$('div#popup .popup_cancel').click(cancelPopup);
}