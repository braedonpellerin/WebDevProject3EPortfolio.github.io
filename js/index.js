/******w*************
    Project 3
    Name: Braedon Pellerin
    Date: April 15, 2022
    Description: Project 3: Website Development and Deployment
********************/

// Load event listener
document.addEventListener("DOMContentLoaded", load);

/*
 * Handles the load event of the document.
 */
function load()
{
    hideModules();

    document.getElementById("show_modules_programming").addEventListener("click",
        function()
        {
            showModules("modules_programming")
        });

    document.getElementById("show_modules_systemanalysis").addEventListener("click",
        function()
        {
            showModules("modules_systemanalysis")
        });

    document.getElementById("show_modules_database").addEventListener("click",
        function()
        {
            showModules("modules_database")
        });

    document.getElementById("show_modules_networking").addEventListener("click",
        function()
        {
            showModules("modules_networking")
        });

    document.getElementById("show_modules_webdev").addEventListener("click",
        function()
        {
            showModules("modules_webdev")
        });

    document.getElementById("show_modules_prodev").addEventListener("click",
        function()
        {
            showModules("modules_prodev")
        });
}

/*
 * Hides the list of a course's modules (upon load).
 */
function hideModules()
{
    let modules = document.getElementsByClassName("modules");

    for ( let i = 0; i < modules.length; i++ )
    {
        modules[i].style.display = "none";
    }
}

/*
 * Shows the list of a course's modules.
 */
function showModules(courseName)
{
    let course = document.getElementById(courseName);

    if(course.style.display = "none")
    {
        course.style.display = "block";
    }
}