<?php

// Extend SimpleXMLElement to append XML to beginning of file
class ExtSimpleXMLElement extends SimpleXMLElement
{
    public function prependChild($name, $value)
    {
        $dom = dom_import_simplexml($this);

        $new = $dom->insertBefore(
            $dom->ownerDocument->createElement($name, $value),
            $dom->firstChild
        );

        return simplexml_import_dom($new, get_class($this));
    }
}

	// Get variables from app
	$v = $_GET["vchr"];
	
	$myki = $_GET["myki"];
	$ten = $_GET["ten"];
	$twenty = $_GET["twenty"];
	$fifty = $_GET["fifty"];
	
	
	// Validate voucher
	$xml = simplexml_load_file("vouchers.xml");
	$error = True;
	foreach($xml->children() as $child)
  	{
  		if($v == $child){
        
        	$error = False;
    	} 	
	
	}
  	
    if ($error == False) {
    	
    	// Load Top Up information
        $xmls = simplexml_load_file('topup.xml','ExtSimpleXMLElement');
        		
        // Filter XML by user and get most recent balance
   		$records = $xmls->xpath('//records'); 
   		$temp = array();
   				 
   		foreach($records as $records) {
   					
           	if ($records->myki == $myki) {
           				
                 $temp = $records->balance;
                 break;
       			}
   		}
   				
   		$balance = $temp;
        		
   		// Begin building new Top Up record
		$records = $xmls->prependChild('records', '');
   		$records->prependChild('description', 'App');
   		$records->prependChild('trntype', 'Top Up');
   		$records->prependChild('zone', '1');
   		$records->prependChild('service', 'App');
   				
   		// Apply Top Up amount to balance
		if($ten != ""){
    		$balance += $ten;
    		$records->prependChild('amount', '10');
    	} else
    	if($twenty != ""){
    		$balance += $twenty;
    		$records->prependChild('amount', '20');
    	} else
    	if($fifty != ""){
    		$balance += $fifty;
    		$records->prependChild('amount', '50');
    	}
    			
    	$t = date("H:i");
    	$records->prependChild('time', $t);
    	$d = date("m/d/Y");
    	$records->prependChild('date', $d);
		$records->prependChild('balance', $balance);
    	$records->prependChild('myki', $myki);
    			
    	// Save Record
    	$xmls->asXML('topup.xml');
        // Return Success to app
    	echo "{ \"success\" : true }";
    }
	else echo "{ \"success\" : false }";
?>