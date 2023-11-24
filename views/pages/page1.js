document.addEventListener('DOMContentLoaded', () => {
    const yearDropdown = document.getElementById('yearDropdown');
  
    // Add event listener for dropdown change event
    yearDropdown.addEventListener('change', async () => {
      const selectedYear = yearDropdown.value;
  
      try {
        console.log(selectedYear);
        // Make an asynchronous request to the server to fetch updated information
        const response = await fetch(`/http://127.0.0.1:5500/page1.html/${selectedYear}`);
        const data = await response.json();
  
        if (response.ok) {
          // Handle the response data, e.g., update the table or other UI elements
          console.log('client js file came');
          console.log('Updated data:', data);
        } else {
            console.log('here');
          console.error('Failed to fetch updated data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching updated data:', error);
      }
    });
  });
  