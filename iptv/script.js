document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("openLinkBtn");

  // Fetch JSON file
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      // Handle button click event
      button.addEventListener("click", function() {
        // Choose a random link from the JSON data
        const randomIndex = Math.floor(Math.random() * data.links.length);
        const randomLink = data.links[randomIndex];
        
        // Open the link in a new tab
        window.open(randomLink);
      });
    })
    .catch(error => {
      console.error("Error fetching JSON:", error);
    });
});
