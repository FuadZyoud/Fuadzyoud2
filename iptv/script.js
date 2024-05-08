document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("openLinkBtn");

  // Fetch XML file
  fetch("data.xml")
    .then(response => response.text())
    .then(text => {
      // Parse XML
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      
      // Get the first link from the XML data
      const link = xml.querySelector("link").textContent;
      
      // Handle button click event
      button.addEventListener("click", function() {
        // Open the link in a new tab
        window.open(link);
      });
    })
    .catch(error => {
      console.error("Error fetching XML:", error);
    });
});
