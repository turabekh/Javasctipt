
var myForm = document.getElementById("myForm"); //form for getting age from user
var start = document.getElementById("start"); // start buttton to launch the app
var age = document.getElementById("age");  // input field for user provided age
var error = document.getElementById("error"); // validation error field 
var myLabel = document.getElementById("mylabel"); // label field if no error
var preschool = document.getElementById("preschool"); // result field if age under 13 years old
var adult = document.getElementById("adult"); // result field if age over 12 years old
var startOver = document.getElementById("start-over"); // start over button to bring back to the index page 


// List of links for books ranging from One year old to 12 year olds
var bookList = ["https://www.goodreads.com/list/show/839.Books_for_one_year_old_children",
				"https://www.goodreads.com/list/show/838.Books_for_two_year_old_children",
				"https://www.goodreads.com/list/show/837.Books_for_three_year_old_children",
				"https://www.goodreads.com/list/show/1631.Books_for_four_year_old_children",
				"https://www.goodreads.com/list/show/1632.Books_for_five_year_olds",
				"https://www.goodreads.com/list/show/1633.Books_for_six_year_olds",
				"https://www.goodreads.com/list/show/1634.Books_for_seven_year_olds",
				"https://www.goodreads.com/list/show/835.Books_for_eight_year_old_children",
				"https://www.goodreads.com/list/show/1635.Books_for_nine_year_olds",
				"https://www.goodreads.com/list/show/1636.Books_for_ten_year_olds",
				"https://www.goodreads.com/list/show/704.Books_for_eleven_year_old_children",
				"https://www.goodreads.com/list/show/447.Books_for_twelve_year_old_children"];
				

//start button fades out 
unfade(start);


//removes error red message from age field when user starts typing
age.onkeydown = function() 
{
	error.style.display = "none";
	myLabel.style.display = "block";
}

//main program starts when start button clicked. click event is bound to this function.
function myStart() 
{
	//when start clicked, the button fades in and displays the form to get input for age
	fade(start);
	start.style.display = "none";
	unfade(myForm);
	
	//when continue button clicked, this function is fired
	myContinue.onclick = function()
	{
		
		//validation if user entered input is positive integer
		if ((!parseInt(age.value)) || (parseInt(age.value) <= 0) )
		{
			error.style.display = "block";
			myLabel.style.display = "none";
			return false;
		}
		//at this point user entered positive integer. parse it to int from string input
		userAge = parseInt(age.value);
		
		// based on the age entered, if and else block shows different links from bookList array defined above
		if (userAge < 13)
		{
			myForm.style.display = "none";
			start.style.display = "none";
			
			var linkText = "<a href=" + bookList[userAge] + ">Books for " + userAge + " year olds can be found following this link.";
			preschool.innerHTML = linkText;
			preschool.style.display = "block";
			startOver.style.display = "block";
			
			return false;
		}
		else
		{
			preschool.style.display = "none";
			myForm.style.display = "none";
			start.style.display = "none";
			var linkAdult = "<a href='https://www.goodreads.com/shelf/show/books-for-adults'>Books for " + userAge + " year olds can be found following this link";
			adult.innerHTML = linkAdult;
			adult.style.display = "block";
			startOver.style.display = "block";
			return false;
		}

	}
}


//funciton for fading elements in. Takes an element as input
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
	

	//funciton for fading elements out. Takes an element as input
	
	function unfade(element) {
    var op = 0.01;  // initial opacity
	element.style.opacity = op;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05;
    }, 10);
}
