// Allows for easy non-page-switching of content, don't alter this unless we're adding a new page
const contentData = {
    entertainment: {
        title: "PlayStation's Insane Week in a Nutshell",
        description: "HOW DID THIS ALL HAPPEN SO CLOSE TOGETHER?!<span id='dots'>...</span><span id='more'><br><br> 🔔 Subscribble for more viddles!<br> ►    / @circletoonshd  <br><br>🔔 Check out my other channel!  ►    / @circletoonslive  <br><br>🃏 My Card Game!!!! ► www.foolsblade.com<br>👕 Merch! ► https://circletoonshd.com/<br>💜 Twitch! ►   / circletoonshd<br>📸 Instagram! ►   / circletoonsig<br>🐤 Twitter! ►   / circletoonshd</span>",
        videoUrl: "https://www.youtube.com/embed/ulQwxmDig8Y?si=oi09Iv3N7fXUmZHS"
    },
    hiphop: {
        title: "Hidden Meanings Behind Kendrick Lamar's \"Not Like Us\" Music Video Explained",
        description: "Breaking down all the references in Kendrick Lamar's long awaited music video for \"Not Like Us\", a video that seems like<span id='dots'>...</span><span id='more'> the last chapter of the beef between him and Drake. Lamar released the video on Independence Day, and previously held a concert called \"The Pop Out\" on Juneteenth, where he performed \"Not Like Us\" six times. The video had received over 13 million views as of Friday morning.</span>",
        videoUrl: "https://www.youtube.com/embed/Ibm77a8Am_8?si=K5CXuWmL_NR3qOg1"
    },
    gaming: {
        title: "Arcane: Season 2 | Official Trailer",
        description: "Watch it all burn.<br>The award-winning series returns for the final chapter, this November only on Netflix.<span id='dots'>...</span><span id='more'><br> Watch on Netflix.<br>Subscribe: https://bit.ly/33okaL0 <br><br> About Netflix:<br><br>Netflix is one of the world's leading entertainment services, with 278 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.</span>",
        videoUrl: "https://www.youtube.com/embed/s4cqzF6tMBQ?si=DCqlLwoKev5HqRHO"
    },
    sports: {
        title: "Funniest Moments in Sports...",
        description: "These are the most funny moments in sports caught on camera! From football fails to unlucky athletes. Try not to laugh at these funny moments in sports. For<span id='dots'>...</span><span id='more'> copyright matters, please contact: [email protected]</span>",
        videoUrl: "https://www.youtube.com/embed/ZwQqkuUS1Nk?si=3Lgn0Z8VYQrE-zvk"
    },
    education: {
        title: "Why Fentanyl Is So Incredibly Dangerous",
        description: "In this video, Justin from the Institute of Human Anatomy discusses what opioids, and more specifically fentanyl does to the body. Resources for<span id='dots'>...</span><span id='more'> help:<br><br>SAMSHA National Helpline<br>1-800-662-4357<br>https://www.samhsa.gov/find-help/national-helpline<br>CDC<br>https://www.cdc.gov/overdose-prevention/treatment/opioid-addiction.html?<br>CDC<br>https://www.cdc.gov/drugoverdose/featured-topics/treatment-recovery.html<br><br>U.S. Department of Health and Human Services\nhttps://www.hhs.gov/opioids/treatment/index.html</span>",
        videoUrl: "https://www.youtube.com/embed/LxyyvW_fcqw?si=7yPyvavXtrP08g1t"
    }
};

function handleDropdownChange() {
    const selectedValue = document.getElementById('navigationDropdown').value;
    updateContent(selectedValue);
}

// Update with the data that matches the category we're trying to access
function updateContent(category) {
    const data = contentData[category];
    document.getElementById('title').innerHTML = `<a href="${data.videoUrl}">${data.title}</a>`;
    document.getElementById('description').innerHTML = data.description;
    document.getElementById('youtube-video').src = data.videoUrl;
    document.getElementById('navigationDropdown').value = category;
}

// Has to be manually added, read more button after a certain extent of text, then replaces it with
// a read less button to collapse the description
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

document.addEventListener('DOMContentLoaded', function() {
    // Initialize with entertainment content
    updateContent('entertainment');

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

    // Handle theme toggle
    const themeSelector = document.getElementById('theme-selector');
    const htmlElement = document.documentElement;
    
    themeSelector.addEventListener('change', function(evnt) {
        const selectedTheme = document.getElementById('body');
        /* Do NOT change this, it will not work, I promise you, whatever you changed that
        blew up the code, revert it. Do not even think about tweaking this. */
        const datavar = evnt.target.selectedOptions[0].value
        console.log(evnt.target.selectedOptions[0].value);
        htmlElement.setAttribute('data-theme', datavar);
        localStorage.setItem('selectedTheme', datavar); // Save theme preference
    });

    // We need a default theme, so we'll change it based on what the user's system preference is
    function themeSysPref() {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const theme = darkModeMediaQuery.matches ? 'dark' : 'light'; // I had help for this one, actually. That ? is an "if", I guess?
        htmlElement.setAttribute('data-theme', theme);
        themeSelector.value = theme;
        localStorage.setItem('selectedTheme', theme);
    }

        // Load saved theme preference or set based on system preference
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            themeSelector.value = savedTheme;
        } else {
            setThemeBasedOnSystemPreference();
        }
    
        // Listen for changes in system color scheme
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addListener((e) => { // addListener is decepricated, we should use something else
            if (!localStorage.getItem('selectedTheme')) {
                setThemeBasedOnSystemPreference();
            }});

        // Get the elements by their IDs
        const openFormButton = document.getElementById('openFormButton');
        const preferenceForm = document.getElementById('preferenceForm');
        const savePreferenceButton = document.getElementById('savePreference');
        
        // Show the form when the button is clicked
        openFormButton.onclick = function() {
            if (preferenceForm.style.display === 'none' || preferenceForm.style.display === '') {
                preferenceForm.style.display = 'block';
            } else {
                preferenceForm.style.display = 'none';
            }
        }

        // Handle form submission and save to local storage
        savePreferenceButton.onclick = function() {
            // Get the user's name, email, and selected theme
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // This is Validation code, for later.
            // // Define our Regex
            // const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
              
            // Check that inputs are not empty
            if (name && email) {
                // Store the selected theme in local storage
                localStorage.setItem('userPreferences', JSON.stringify({
                    name: name,
                    email: email,
                }));
                
                // Store these in variables, print them to the console to display what we got
                let result = JSON.parse(localStorage.getItem('userPreferences'))
                let usrname = result.name
                let usrmail = result.email
                let usrtheme = localStorage.getItem('selectedTheme') // QUOTES MATTER! WOW, this took FOREVER.
                // Print!
                console.log("Username: " + usrname)
                console.log("Email: " + usrmail)
                console.log("Theme: " + usrtheme)

                // Hide the form and show a success message, or tell the user to stop being stupid
                preferenceForm.style.display = 'none';
                alert('Preferences saved successfully!');
            } else {
                alert('Please fill out all fields.');
            }
        }