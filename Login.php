<?php
	// get values from app
	$myki = $_GET["myki"];
	$pin = md5($_GET["pin"]);
	
	// validate login
    if(file_exists('users/' . $myki . '.xml')){
        $xml = new SimpleXMLElement('users/' . $myki . '.xml', 0, true);
        if($pin == $xml->password){
            echo "{ \"success\" : true }";
        }
        else echo "{ \"success\" : false }";
    }
    
	else {
		echo "{ \"success\" : false }";
	}
	
?>