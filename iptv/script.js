document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("openLinkBtn");

  // Fetch JSON file
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      // Get the first link from the JSON data
      const link = data.links[0];
      
      // Handle button click event
      button.addEventListener("click", function() {
        // Open the link in a new tab
        window.open(link);
      });
    })
    .catch(error => {
      console.error("Error fetching JSON:", error);
    });
});
