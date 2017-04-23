/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    var imageDiv = document.getElementById("image");
    // console.log(div.style.backgroundImage);
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    // console.log(div.style.backgroundImage);
    imageDiv.innerHTML = previewPic.alt;
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
		
	}
	
	/*validation*/
	function validateForm() {
    var name = document.forms["vform"]["fname"].value;
    var surname = document.forms["vform"]["lname"].value;
    var email = document.forms["vform"]["email"].value;
    var patt = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
	var checkbox = document.getElementById('checkbox'); 

    var result = true;
	
	/*Condition & alert message*/
    if (name == null || name == "") {
        alert("Name field cannot be empty!");
       result = false;
    }
    else if(name.length < 3)
    {  
    	  alert("Name must be at least 3 letters!");
       	result = false;

    } 

    if (surname == null || surname == "") {
        alert("Surname field cannot be empty!");
         result = false;
    }
    else if(surname.length < 5)
    {  
    	alert("Surname must be at least 5 letters!");
       	result = false;

    } 

    if (email == null || email == "") {
        alert("Email address cannot no be empty!");
         result = false;
    }
    else if (patt.test(email) != true ) {
        alert("Incorrect email format!");
       result = false;
    }
	
	if (checkbox.checked !=true){
        
		alert("Please tick that you would like to receive newsletters!")
			
			result = false;
	}
	
		 
	return result;
}