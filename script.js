document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        "How can I ensure this month's financial report is delivered on time?",
        "What tools can help streamline my client's financial reporting process?",
        "How can I effectively track my clients’ financial performance in real time?"
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