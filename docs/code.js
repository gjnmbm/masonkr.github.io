function on_load() {
    //Only works if onload is in the body function
    //This can allow me to load objects that need to remain the same on every page
    //I do not know if this is how I should do this, but it minimizes repetetive HTML code
    //So, I guess this is fine
    document.getElementById("navigation").innerHTML = 
    '<a href="index.html">Home</a> <a href="about.html">About Me</a> <a href="exhibit.html">Projects</a>';
}