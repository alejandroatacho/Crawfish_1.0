	</body>
	
	</html>
<div id="footertemp">
	This is djackbyron's site, all the contents on this site belong to him.<br/>
	Dj-site 2015-2016 &copy;
	</div>



	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
 	<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
			  <script>
			  $(function() {
			    var names = [ <?php
			    $query = "Select * from users";
			    $res=mysqli_query($connection,$query);
			    $num = mysqli_num_rows($res);
			    while($row=mysqli_fetch_array($res)){
			    	if($i == $num - 1){
			    		echo '"'.$row["username"].'"';}
			    		else{
			    		echo '"'.$row["username"].'", ';}
			    		$i++;}
			    	?> ];
			 
			    var accentMap = {
			      "á": "a",
			      "ö": "o",
			      "ú": "u",
			      "ç": "c"
			    };
			    var normalize = function( term ) {
			      var ret = "";
			      for ( var i = 0; i < term.length; i++ ) {
			        ret += accentMap[ term.charAt(i) ] || term.charAt(i);
			      }
			      return ret;
			    };
			 
			    $( "#developer" ).autocomplete({
			      source: function( request, response ) {
			        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
			        response( $.grep( names, function( value ) {
			          value = value.label || value.value || value;
			          return matcher.test( value ) || matcher.test( normalize( value ) );
			        }) );
			      }
			    });
			  });
			  </script>
