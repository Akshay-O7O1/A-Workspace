// Personal Information - Update this with your details
const personalInfo = {
    name: "Akshay Pandey",
    role: "Full Stack Developer",
    description: "Passionate about creating innovative web solutions and bringing ideas to life through code.",
    email: "akshaypandey0701@gmail.com",
    phone: "+91 7048806614",
    location: "Vadodara, Gujarat, India",
    profileImage: "images/profile.jpg", // Add your profile image path here
    
    // Social Links - Update with your actual profiles
    socialLinks: {
        github: "https://github.com/Akshay-O7O1",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        email: "mailto: akshaypandey0701@gmail.com"
    },
    
    // About section
    aboutDescription: "I'm a passionate developer with experience in creating dynamic web applications. I love solving complex problems and learning new technologies. With a strong foundation in both frontend and backend development, I enjoy building complete solutions that make a difference.",
    
    // Stats
    stats: {
        projectsCount: "5+",
        experienceYears: "4+",
        technologiesCount: "20+"
    }
};

// Skills Data - Add your skills here
const skills = [
    {
        name: "HTML5",
        icon: "fab fa-html5",
        description: "Semantic markup"
    },
    {
        name: "CSS3",
        icon: "fab fa-css3-alt",
        description: "Modern styling"
    },
    {
        name: "JavaScript",
        icon: "fab fa-js-square",
        description: "ES6+ features"
    },
    {
        name: "React",
        icon: "fab fa-react",
        description: "Component-based UI"
    },
    {
        name: "Node.js",
        icon: "fab fa-node-js",
        description: "Server-side JS"
    },
    {
        name: "Python",
        icon: "fab fa-python",
        description: "Backend development"
    },
    {
        name: "Git",
        icon: "fab fa-git-alt",
        description: "Version control"
    },
    {
        name: "Database",
        icon: "fas fa-database",
        description: "SQL & NoSQL"
    },
    {
        name: "AWS",
        icon: "fab fa-aws",
        description: "Cloud services"
    },
    {
        name: "Docker",
        icon: "fab fa-docker",
        description: "Containerization"
    }
];

// Projects Data - Add your projects here
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
        image: "🛒",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveLink: "https://your-project-live-link.com",
        githubLink: "https://github.com/Akshay-O7O1"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        image: "📋",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        liveLink: "https://your-project-live-link.com",
        githubLink: "https://github.com/Akshay-O7O1"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather application with location-based forecasts and interactive charts.",
        image: "🌤️",
        technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
        liveLink: "https://your-project-live-link.com",
        githubLink: "https://github.com/Akshay-O7O1"
    },
    {
        title: "Portfolio Website",
        description: "A dynamic portfolio website showcasing projects and skills with smooth animations.",
        image: "💼",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        liveLink: "https://your-portfolio-link.com",
        githubLink: "https://github.com/yourusername/portfolio"
    },
    {
        title: "Blog Platform",
        description: "A content management system with markdown support, user authentication, and SEO optimization.",
        image: "📝",
        technologies: ["Next.js", "Prisma", "MySQL", "Tailwind"],
        liveLink: "https://your-blog-link.com",
        githubLink: "https://github.com/yourusername/blog-platform"
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with multiple rooms, file sharing, and emoji support.",
        image: "💬",
        technologies: ["React", "Socket.io", "Node.js", "Redis"],
        liveLink: "https://your-chat-app-link.com",
        githubLink: "https://github.com/yourusername/chat-app"
    }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { personalInfo, skills, projects };
}