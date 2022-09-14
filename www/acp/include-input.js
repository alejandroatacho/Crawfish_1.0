	function add_option(value, selected, type){
		returntext = "<option value='" + value + "' " + selected + ">" + type + "</option>"; 
		return returntext;
	}
	
	function add_selectend(){
		returntext = "</select>";
		return returntext;
	}
	
	function add_text(name, value, attributes){
		returntext = "<input name='" + name + "' id='" + name + "' type='text' value='" + value + "' " + attributes + ">";
		return returntext;
	}
	
	function add_textarea(name, value, attributes){
		returntext = "<input name='" + name + "' id='" + name + " " + attributes + ">" + value + "</textarea>";
		return returntext;
	}
	
	function add_select(name, value, attributes){
		returntext = "<select name='" + name + "' id='" + name + "' value='" + value + "'" + attributes +  ">";
		return returntext;
	}
	function add_selectplus(name, value, attributes){
		returntext = "<select name='temp_" + name + "' id='" + name + "' value='" + value + "'" + attributes +  ">";
		return returntext;
	}
	function add_checkbox(name, value, attributes){
		returntext = "<input name='" + name + "' id='" + name + "' type='hidden' value='" + value + "' " + attributes + ">";
		returntext += "<center><img name='temp_" + name + "' src=\"" + icons16x16 + "checkbox" + value + ".png\" onClick='if (document.list_form.elements[\"" + name + "\"].value == 0){this.src = \"" + icons16x16 + "checkbox1.png\";document.list_form.elements[\"" + name + "\"].value = 1;}else{this.src = \"" + icons16x16 + "checkbox0.png\";document.list_form.elements[\"" + name + "\"].value = 0;}'></center>";
		return returntext;
	}
				
	function add_datetime(name, type, attributes){
		returnstring = "<input name='" + name + "' id='" + name + "' type='hidden' id='" + type + "' " + attributes + ">";
		returnstring += "<div id='set_" + name + "'></div><div id='show_" + name + "'></div>";
		return returnstring;
	}
	
	function add_date(name){
		returnstring = "<input type='text' class='twonumbers' maxlength='2' name='temp_" + name + "[d]'> - ";
		returnstring += "<input type='text' class='twonumbers' maxlength='2' name='temp_" + name + "[m]'> - ";
		returnstring += "<input type='text' class='fournumbers' maxlength='4' name='temp_" + name + "[y]'>&nbsp;&nbsp;";
		return returnstring;
	}
	
	function add_datehidden(name){
		returnstring = "<input type='hidden' name='temp_" + name + "[d]'>";
		returnstring += "<input type='hidden' name='temp_" + name + "[m]'>";
		returnstring += "<input type='hidden' name='temp_" + name + "[y]'>";		
		return returnstring;
	}
	
	function add_time(name){
		returnstring = "<input type='text' class='twonumbers' maxlength='2' name='temp_" + name + "[h]'> : ";
		returnstring += "<input type='text' class='twonumbers' maxlength='2' name='temp_" + name + "[i]'> : ";
		returnstring += "<input type='text' class='twonumbers' maxlength='2' name='temp_" + name + "[s]'>";			
		return returnstring;
	}
	
	function add_timehidden(){
		returnstring = "<input type='hidden' name='temp_" + name + "[h]'>";
		returnstring += "<input type='hidden' name='temp_" + name + "[i]'";
		returnstring += "<input type='hidden' name='temp_" + name + "[s]'>";
		return returnstring;
	}
	
	function datetimesave(name, type){
		returnstring = " <img src='" + icons16x16 + "save.png' onClick='to_timestamp(\"" + name + "\", \"" + type + "\"); show_hide(\"show_" + name + "\"); show_hide(\"set_" + name + "\");' /> ";
		return returnstring;		
	}
	
	function datetimediv(name, type, value, timestamp){
		showdiv = document.getElementById("show_" + name);
		showdiv.innerHTML += "<input type='text' value='' class='" + type + "' name='temp_" + name + "[date]' readonly='yes' /> ";
		showdiv.innerHTML += "<img src='" + icons16x16 + "edit.png' onClick='show_hide(\"show_" + name + "\"); show_hide(\"set_" + name + "\");'> ";
		showdiv.innerHTML += "<img src='" + icons16x16 + "timenow.png' onClick='from_timestamp(\"" + name + "\", " + timestamp + ", \"" + type + "\");'> ";
		showdiv.innerHTML += "<img src='" + icons16x16 + "notime.png' onClick='from_timestamp(\"" + name + "\", 0, \"" + type + "\");'>";
	}
	
	function add_newpositioner(name, top, bottom){
		returnstring = "<select name='" + name + "' id='" + name + "'><option value='0' " + bottom + ">Add as first</option><option value='9999999999' " + top + ">Add as last</option></select>";
		return returnstring;
	}