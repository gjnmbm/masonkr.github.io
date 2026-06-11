<?php
// Name of the file where the count is stored
$file = 'counter.txt';

// Read the current count
$count = file_get_contents($file);

// Increment the count by 1
$count++;

// Save the new count back to the file
file_put_contents($file, $count);

document.getElementById("visitorCount").innerText = $count;
?>
