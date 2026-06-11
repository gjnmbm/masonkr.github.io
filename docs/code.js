function on_load() {
    //Only works if onload is in the body function
    //This can allow me to load objects that need to remain the same on every page
    //I do not know if this is how I should do this, but it minimizes repetetive HTML code
    //So, I guess this is fine
    document.getElementById("navigation").innerHTML = 
    '<h4><a href="index.html">Home</a>&emsp;<a href="about.html">About Me</a>&emsp;<a href="exhibit.html">Projects</a></h4>';
    count_visitors();
}


function count_visitors() {
  var counter = 0; // Initialize counter
  counter++; // Increase counter by 1
  document.getElementById("visitorCount").innerText = "Visitor Count: " + counter; // Display counter
  window.onload = count_visitors; // Call function on page load
}

