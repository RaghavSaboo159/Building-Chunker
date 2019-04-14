function urlRedirectTo(obj)
{
	document.getElementById('pi').innerHTML="Training Completed.";
	$(document).ready(function(){
			$("#accuracy").show();
			}); 
           
            //if('wordpress_version1' == obj)
	//window.location = 'https://wordpress.org/download/';
	//if('wordpress_version2' == obj)
	//window.location = 'https://wordpress.org/download/';
}
function answer()
{
	var x=document.getElementById('category').value;
	var y=document.getElementById('subcategory').value;
	var z=document.getElementById('sub_subcategory').value;
	var w=document.getElementById('sub_subbcategory').value;
	console.log(x);
	console.log(y);
	console.log(z);
	console.log(w);
	if(x=="English")
	{
		if(y=="1k")
		{
			if (z=="HMM")
			{
				if (w=="only lexicon") 
				{

					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">73.73</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">88.83</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">85.95</span>";
				}
			} 
			else if (z=="CRF")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">72.28</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">86.28</span>";
				}
				else  
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">86.75</span>";
				}
			} 
		}
		if(y=="10k")
		{
			if (z=="HMM")
			{
				if (w=="only lexicon") 
				{
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">84.21</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">90.91</span>";
				}
				else 
				{
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">88.46</span>";
				}
			} 
			else if (z=="CRF")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">84.23</span>";
				}
				else if (w=="only pos") 
				{
					 
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">92.61</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">93.43</span>";
				}
			} 
		}if(y=="100k")
		{
			if (z=="HMM")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">88.86</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">91.15</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">90.43</span>";
				}
			} 
			else if (z=="CRF")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">91.54</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">93.9</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">95.54</span>";
				}
			} 
		}if(y=="200k")
		{
			if (z=="HMM")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">89.84</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">91.18</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">91.35</span>";
				}
			} 
			else if (z=="CRF")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">92.91</span>";
				}
				else if (w=="only pos") 
				{
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">94.18</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">95.92</span>";
				}
			} 
		}

	}
	if(x=="Hindi")
	{
		if(y=="1k")
		{
			if (z=="HMM")
			{
				if (w=="only lexicon") 
				{
					 
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">74.14</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">85.2</span>";
				}
				else 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">82.17</span>";
				}
			} 
			else if (z=="CRF")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">88.9</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">90.88</span>";
				}
				else
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">90.06</span>";
				}
			} 
		}
		if(y=="10k")
		{
			if (z=="HMM")
			{
				if (w=="only lexicon") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">80.36</span>";
				}
				else if (w=="only pos") 
				{
					
					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">86.87</span>";
				}
				else { 
					
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">85.19</span>";
				}
			}
			else if (z=="CRF")
			{
				if (w=="only lexicon") 
				{

					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">80.48</span>";
				}
				else if (w=="only pos") 
				{

					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">95.1</span>";
				}
				else 
				{

					document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">95.45</span>";
				}
			} 
		} 
	if(y=="100k")
	{
		if (z=="HMM")
		{
			if (w=="only lexicon") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">86.14</span>";
			}
			else if (w=="only pos") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">87.74</span>";
			}
			else
			{
				 
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">89.34</span>";
			}
		} 
		else if (z=="CRF")
		{
			if (w=="only lexicon") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">90.9</span>";
			}
			else if (w=="only pos") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">96.49</span>";
			}
			else                 {
				 
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">98.02</span>";
			}
		} 
	}if(y=="200k")
	{
		if (z=="HMM")
		{
			if (w=="only lexicon") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">87.71</span>";
			}
			else if (w=="only pos") 
			{
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">87.83</span>";
			}
			else 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">90.27</span>";
			}
		} 
		else if (z=="CRF")
		{
			if (w=="only lexicon") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">92.23</span>";
			}
			else if (w=="only pos") 
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">97.04</span>";
			}
			else
			{
				
				document.getElementById('p1').innerHTML="Accuracy is: <span class=\"badge badge-primary badge-pill\">98.31</span>";
			}
		} 
	}

}

function dynamicdropdown(listindex)
{
    document.getElementById('pi').innerHTML="";
    document.getElementById('p1').innerHTML="";
    $(document).ready(function(){
            $("button").hide();
            }); 
           
	document.getElementById("sub_subcategory").length = 0;
	document.getElementById("sub_subcategory").options[0]=new Option("Please select the algorithm for training","");
    document.getElementById("sub_subbcategory").length = 0;
    document.getElementById("sub_subbcategory").options[0]=new Option("Please select the feature for training","");
	document.getElementById("subcategory").length = 0;
	switch (listindex)
	{
		case "English" :
		case "Hindi"    :
			document.getElementById("subcategory").options[0]=new Option("Please select the size of a corpus","");
			document.getElementById("subcategory").options[1]=new Option("1k","1k");
			document.getElementById("subcategory").options[2]=new Option("10k","10k");
			document.getElementById("subcategory").options[3]=new Option("100k","100k");
			document.getElementById("subcategory").options[4]=new Option("200k","200k");

			break;

		default:
			document.getElementById("subcategory").options[0]=new Option("Please select the size of a corpus","");
			break;
	}
	return true;
}

function dynamicdropdownone(listindex)
{
	document.getElementById("sub_subcategory").length = 0;
	switch (listindex)
	{
		case "1k" :
		case "10k" :
		case "100k" :
		case "200k" :
			document.getElementById("sub_subcategory").options[0]=new Option("Please select the algorithm for training","");
			document.getElementById("sub_subcategory").options[1]=new Option("HMM","HMM");
			document.getElementById("sub_subcategory").options[2]=new Option("CRF","CRF");
			break;


		default:
			document.getElementById("sub_subcategory").options[0]=new Option("Please select the algorithm for training","");
			break;
	}
	return true;
}

function dynamicdropdowntwo(listindex)
{
	document.getElementById("sub_subbcategory").length = 0;
	switch (listindex)
	{
		case "HMM" :
		case "CRF" :
			document.getElementById("sub_subbcategory").options[0]=new Option("Please select the feature for training","");
			document.getElementById("sub_subbcategory").options[1]=new Option("only lexicon","only lexicon");
			document.getElementById("sub_subbcategory").options[2]=new Option("only pos","only pos");
			document.getElementById("sub_subbcategory").options[3]=new Option("lexicon and pos","lexicon and pos");
			break;
		default:
			document.getElementById("sub_subbcategory").options[0]=new Option("Please select the feature for training","");
			break;
	}
	return true;
}