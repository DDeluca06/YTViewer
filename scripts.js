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

function updateContent(category) {
    const data = contentData[category];
    document.getElementById('title').innerHTML = `<a href="${data.videoUrl}">${data.title}</a>`;
    document.getElementById('description').innerHTML = data.description;
    document.getElementById('youtube-video').src = data.videoUrl;
    document.getElementById('navigationDropdown').value = category;
}

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