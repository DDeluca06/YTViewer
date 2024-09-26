document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('navigationDropdown');

    // Function to update the dropdown based on the current URL
    function updateDropdown() {
        const currentPath = window.location.pathname.split('/').pop(); // Extract the file name
        console.log('Current Path:', currentPath); // Debugging line

        // Iterate through dropdown options
        for (let i = 0; i < dropdown.options.length; i++) {
            console.log('Option Value:', dropdown.options[i].value); // Debugging line
            if (dropdown.options[i].value === currentPath) {
                dropdown.selectedIndex = i;
                break;
            }
        }
    }

    // Call the function to update dropdown on page load
    updateDropdown();

    // Event listener for dropdown change
    dropdown.addEventListener('change', function(event) {
        const selectedValue = event.target.value;
        console.log('Selected Value:', selectedValue); // Debugging line
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });

    // Handle YouTube video autoplay toggle
    const iframe = document.getElementById('youtube-video');
    const button = document.getElementById('toggle-autoplay');
    let autoplayEnabled = true;

    button.addEventListener('click', function() {
        autoplayEnabled = !autoplayEnabled;
        const autoplayParam = autoplayEnabled ? '1' : '0';
        const src = iframe.src.split('?')[0]; // Get the base URL
        iframe.src = `${src}?autoplay=${autoplayParam}`; // Set the new URL with autoplay parameter
    });
});

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readmore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }