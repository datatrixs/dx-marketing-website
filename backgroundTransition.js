// document.addEventListener('scroll', function() {
//     const headerSection = document.querySelector('.')
//     const cpaSection = document.querySelector('.cpa-section');
//     const technologySection = document.querySelector('.technology-section');
//     const financialServicesSection = document.querySelector('.financialServices-section');
//     const healthcareSection = document.querySelector('.healthcare-section');
//     const realEstateSection = document.querySelector('.realEstate-section');
//     const cpaSectionTop = cpaSection.getBoundingClientRect().top;
//     const techSectionTop = technologySection.getBoundingClientRect().top;
//     const financialSectionTop = financialServicesSection.getBoundingClientRect().top;
//     const healthSectionTop = healthcareSection.getBoundingClientRect().top;
//     const realEstateSectionTop = realEstateSection.getBoundingClientRect().top;


//     // Check if the user is viewing the CPA section
//     if (cpaSectionTop <= window.innerHeight / 3 && techSectionTop > window.innerHeight / 2) {
//         document.body.style.backgroundColor = '#C8DDF1';
//     }
//     // Check if the user is viewing the Technology section
//     else if (techSectionTop <= window.innerHeight / 3 && financialSectionTop > window.innerHeight / 2) {
//         document.body.style.backgroundColor = '#E9D2C3';
//     }
//     else if (financialSectionTop <= window.innerHeight / 3 && healthSectionTop > window.innerHeight / 2) {
//         document.body.style.backgroundColor = '#CAECCA';
//     }
//     else if (healthSectionTop <= window.innerHeight / 3 && realEstateSectionTop > window.innerHeight / 2) {
//         document.body.style.backgroundColor = '#D3FFFB';
//     }
//     else if (realEstateSectionTop <= window.innerHeight / 3 && realEstateSectionTop < window.innerHeight / 2) {
//         document.body.style.backgroundColor = '#CAECCA';
//     }
// });

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const sectionColors = [

        "#C8DDF1", // CPA Section color
        "#E9D2C3", // Technology Section color
        "#CAECCA", // Third Section color (e.g., red)
        "#D3FFFB", // Fourth Section color (e.g., light green)
        "#FED6BA",  // Fifth Section color (e.g., medium purple)
        "transparant", // CPA Section color

    ];

    sections.forEach((section, index) => {
        const scrollPos = window.scrollY;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Adjust to check if the section is fully or partially in view
        if (scrollPos >= sectionTop - window.innerHeight / 2 && scrollPos < sectionTop + sectionHeight - window.innerHeight / 2) {
            document.body.style.backgroundColor = sectionColors[index];
        }
    });
});

