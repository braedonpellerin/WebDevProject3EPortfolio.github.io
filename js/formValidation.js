/******w*************
    Project 3
    Name: Braedon Pellerin
    Date: April 15, 2022
    Description: Project 3: Website Development and Deployment
********************/

document.addEventListener("DOMContentLoaded", load);

/*
 * Handles the load event of the document.
 */
function load()
{
	hideErrors();

	//submit button
	document.getElementById("submit").addEventListener("click", validate);

	document.getElementById("clear").addEventListener("click", resetForm);
}

/*
 * Handles the submit event of the form.
 *
 * param e  A reference to the event object
 * return   True if no validation errors; 
 *			False if the form has validation errors
 */
function validate(e)
{
	hideErrors();

	if(formHasErrors())
	{
		e.preventDefault();
		return false;
	}

	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen;
 *			False prevents the browser from resetting the form.
 */
function resetForm(e)
{
	if ( confirm('Clear form?') )
	{		
		hideErrors();
		
		return true;
	}

	e.preventDefault();
	
	return false;	
}

/*
 * Hides all of the error elements.
 */
function hideErrors()
{
	let error = document.getElementsByClassName("form_error");

	for ( let i = 0; i < error.length; i++ )
	{
		error[i].style.display = "none";
	}
}

/*
 * Does all the error checking for the inputs on the form.
 *
 * return True if an error was found;
 *		  False if no errors were found
 */
function formHasErrors()
{
	let errorFlag = false;

	let formFields = ["fullname", "phone", "email", "comments"];
	let regExEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);	
	let regExPhone = new RegExp(/^\d{10}$/);

	for (let i = 0; i < formFields.length; i++)
	{
		if (document.getElementById(formFields[i]).value == "")
		{
			document.getElementById(formFields[i] + "_error").style.display = "block";

			if (!errorFlag)
			{
				document.getElementById(formFields[i]).focus();
			}

			errorFlag = true;
		}

		if (!regExPhone.test(document.getElementById("phone").value) && 
		   (document.getElementById("phone").value != ""))
		{
			document.getElementById("phoneformat_error").style.display = "block";

			if (!errorFlag)
			{
				document.getElementById("phone").focus();
				document.getElementById("phone").select();
			}

			errorFlag = true;
		}

		if (!regExEmail.test(document.getElementById("email").value) && 
		   (document.getElementById("email").value != ""))
		{
			document.getElementById("emailformat_error").style.display = "block";

			if (!errorFlag)
			{
				document.getElementById("email").focus();
				document.getElementById("email").select();
			}

			errorFlag = true;
		}
	}

	return errorFlag;
}