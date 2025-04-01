document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        "What areas of my business have the highest growth potential, and how can I capitalize on them?",
        "How can I predict and prepare for future cash flow fluctuations to maintain financial stability?",
        "How can I leverage data-driven insights to optimize my business operations and improve profitability?",
    ];
    
    let questionIndex = 0;
    const questionContainer = document.getElementById('question-carousel');
    
    function rotateQuestions() {
        questionContainer.innerHTML = `<h2>${questions[questionIndex]}</h2>`;
        questionIndex = (questionIndex + 1) % questions.length;
    }

    setInterval(rotateQuestions, 4000);  // Changes question every 3 seconds

    // Section reveal animations
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.features-section .section-box');
        const triggerHeight = window.innerHeight / 1.2;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerHeight) {
                section.classList.add('reveal');
            }
        });
    });
});

window.addEventListener("scroll", () => {
    const featuresSection = document.querySelector(".features-section");
    const scrollPos = window.scrollY + window.innerHeight; // Current scroll position
    const pageHeight = document.documentElement.scrollHeight; // Total page height
    const threshold = 900; // Adjust this value to control when the effect starts

    if (scrollPos >= pageHeight - threshold) {
        featuresSection.classList.add("radius-transition");
    } else {
        featuresSection.classList.remove("radius-transition");
    }
});

// GDPR

document.addEventListener("DOMContentLoaded", function () {

    const gdprPopup = document.getElementById("gdpr-popup");
    const gdprSettings = document.getElementById("gdpr-settings");
    const acceptAllButton = document.getElementById("accept-all");
    const managePreferencesButton = document.getElementById("manage-preferences");
    const savePreferencesButton = document.getElementById("save-preferences");

    // Accept All Cookies
    acceptAllButton.addEventListener("click", () => {
        localStorage.setItem("gdpr-consent", JSON.stringify({
            necessary: true,
            analytics: true,
            marketing: true,
        }));
        gdprPopup.style.display = "none";
    });

    // Show Settings
    managePreferencesButton.addEventListener("click", () => {
        gdprSettings.classList.remove("hidden");
    });

    // Save Preferences
    savePreferencesButton.addEventListener("click", () => {
        const analyticsCookies = document.getElementById("analytics-cookies").checked;
        const marketingCookies = document.getElementById("marketing-cookies").checked;

        localStorage.setItem("gdpr-consent", JSON.stringify({
            necessary: true,
            analytics: analyticsCookies,
            marketing: marketingCookies,
        }));

        gdprPopup.style.display = "none";
    });

    // Check if consent is already given
    if (!localStorage.getItem("gdpr-consent")) {
        setTimeout(() => {
            gdprPopup.style.display = "block";
        }, 20000); // 5-second delay
    } else {
        gdprPopup.style.display = "none";
    }

    // Check if consent is already given
    // if (localStorage.getItem("gdpr-consent")) {
    //     gdprPopup.style.display = "none";
    // }
});
