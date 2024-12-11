// Select the navbar list
const navbarList = document.getElementById('navbar__list');

// Get all sections
const sections = document.querySelectorAll('section');

// Loop through each section to create navigation links
sections.forEach(section => {
    const sectionId = section.id;
    const sectionDataNav = section.getAttribute('data-nav');
    
    // Create a new list item
    const li = document.createElement('li');
    const link = document.createElement('a');

    // Set link attributes
    link.href = `#${sectionId}`;
    link.className = 'menu__link';
    link.textContent = sectionDataNav;

    // Append link to list item, and then to the navbar
    li.appendChild(link);
    navbarList.appendChild(li);
});

// Smooth scrolling
navbarList.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section with offset for fixed header
        const headerOffset = document.querySelector('.page__header').offsetHeight;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Smooth scroll to the target section
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
 
});
