const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeImg");

const images = document.querySelectorAll('.image-section img');

images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.getElementById("loginBtn");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");
const signupLink = document.getElementById("signupLink");

loginBtn.onclick = function() {
    loginModal.style.display = "block";
};

closeLogin.onclick = function() {
    loginModal.style.display = "none";
};

signupLink.onclick = function() {
    signupModal.style.display = "block";
    loginModal.style.display = "none"; 
};

closeSignup.onclick = function() {
    signupModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById('homeLink');
    const articleLink = document.getElementById('articleLink');
    const aboutLink = document.getElementById('aboutLink');

    const homeSection = document.getElementById('homeSection');
    const articleSection = document.getElementById('articleSection');
    const aboutSection = document.getElementById('aboutSection');

    // Function to show a specific section and hide others
    function showSection(sectionToShow) {
        homeSection.style.display = 'none';
        articleSection.style.display = 'none';
        aboutSection.style.display = 'none';

        sectionToShow.style.display = 'block';
        if (sectionToShow === articleSection){
            document.body.style.overflow = 'auto'; // Meaning if this is scrollable or not
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    homeLink.addEventListener('click', () => showSection(homeSection));
    articleLink.addEventListener('click', () => showSection(articleSection));
    aboutLink.addEventListener('click', () => showSection(aboutSection));

    showSection(homeSection);
});
