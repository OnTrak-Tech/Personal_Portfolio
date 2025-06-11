// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Project Modal
const modal = document.getElementById('projectModal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');
const viewProjectBtns = document.querySelectorAll('.view-project');

// Project data - replace with your actual project data
const projects = [
    {
        id: 1,
        title: 'Project Title 1',
        category: 'category1',
        client: 'Client Name',
        date: 'January 2023',
        description: 'Detailed description of the project, including the problem solved, approach taken, and outcomes achieved.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: 'images/project1.jpg',
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Project Title 2',
        category: 'category2',
        client: 'Client Name',
        date: 'March 2023',
        description: 'Detailed description of the project, including the problem solved, approach taken, and outcomes achieved.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: 'images/project2.jpg',
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Project Title 3',
        category: 'category3',
        client: 'Client Name',
        date: 'June 2023',
        description: 'Detailed description of the project, including the problem solved, approach taken, and outcomes achieved.',
        technologies: ['Python', 'Django', 'PostgreSQL'],
        image: 'images/project3.jpg',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'Project Title 4',
        category: 'category1',
        client: 'Client Name',
        date: 'September 2023',
        description: 'Detailed description of the project, including the problem solved, approach taken, and outcomes achieved.',
        technologies: ['Vue.js', 'Express', 'MySQL'],
        image: 'images/project4.jpg',
        link: '#',
        github: '#'
    }
];

// Open modal with project details
viewProjectBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const project = projects[index];
        
        // Create modal content with Tailwind classes
        modalBody.innerHTML = `
            <div class="grid md:grid-cols-2 gap-8">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" class="rounded-lg shadow-md w-full h-auto">
                </div>
                <div class="project-info">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">${project.title}</h2>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="block text-sm text-gray-500">Category</span>
                            <span class="font-medium">${project.category}</span>
                        </div>
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="block text-sm text-gray-500">Client</span>
                            <span class="font-medium">${project.client}</span>
                        </div>
                        <div class="bg-gray-50 p-3 rounded">
                            <span class="block text-sm text-gray-500">Date</span>
                            <span class="font-medium">${project.date}</span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-primary mb-2">Project Description</h3>
                        <p class="text-gray-700">${project.description}</p>
                    </div>
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-primary mb-2">Technologies Used</h3>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `<span class="skill-pill">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <a href="${project.link}" class="px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors shadow-md flex items-center" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </a>
                        <a href="${project.github}" class="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors flex items-center" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Form submission would go here
        // For now, just show a success message
        alert('Message sent successfully!');
        contactForm.reset();
        
        // In a real implementation, you would send the form data to a server
        // Example with fetch API:
        /*
        fetch('your-form-handler-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
        */
    });
}

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();