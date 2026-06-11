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
  let count = localStorage.getItem('page_view');
    if (count) {
      count = Number(count) + 1;
    } else {
      count = 1;
    }
    localStorage.setItem('page_view', count);
    document.getElementById('count').innerText = count;
}

