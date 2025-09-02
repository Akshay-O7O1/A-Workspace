# Personal Portfolio Website

A modern, responsive, and dynamic personal portfolio website to showcase your skills, projects, and contact information.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Content**: Easy to update your information through JavaScript data files
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated sections
- **Contact Form**: Functional contact form with validation
- **Social Links**: Direct links to your GitHub, LinkedIn, and other profiles
- **Project Showcase**: Display your projects with live demos and GitHub links
- **Skills Section**: Highlight your technical skills with icons

## Quick Start

1. Open `index.html` in your web browser to view the website
2. Customize your information in `js/data.js`
3. Replace placeholder links with your actual social media and project URLs

## Customization Guide

### Personal Information

Edit the `personalInfo` object in `js/data.js`:

```javascript
const personalInfo = {
    name: "Your Actual Name",
    role: "Your Job Title",
    description: "Your brief description",
    email: "your.actual.email@example.com",
    phone: "Your phone number",
    location: "Your City, Country",
    
    socialLinks: {
        github: "https://github.com/youractualusername",
        linkedin: "https://linkedin.com/in/youractualusername",
        twitter: "https://twitter.com/youractualusername",
        email: "mailto:your.actual.email@example.com"
    }
};
```

### Adding Your Skills

Update the `skills` array in `js/data.js`:

```javascript
const skills = [
    {
        name: "Your Skill",
        icon: "fab fa-icon-name", // FontAwesome icon class
        description: "Brief description"
    }
    // Add more skills...
];
```

### Adding Your Projects

Update the `projects` array in `js/data.js`:

```javascript
const projects = [
    {
        title: "Your Project Name",
        description: "Project description",
        image: "🚀", // Emoji or you can modify CSS to use actual images
        technologies: ["Tech1", "Tech2", "Tech3"],
        liveLink: "https://your-live-project-url.com",
        githubLink: "https://github.com/yourusername/your-repo"
    }
    // Add more projects...
];
```

### Styling Customization

- **Colors**: Edit the CSS variables in `css/style.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Modify the CSS grid and flexbox properties
- **Animations**: Adjust animation durations and effects in the CSS

### Adding Project Images

To use actual images instead of emojis for projects:

1. Create an `images` folder in the Project directory
2. Add your project screenshots
3. Modify the `project-image` class in CSS to display background images
4. Update the `image` property in your projects data to use image paths

## File Structure

```
Project/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and responsive design
├── js/
│   ├── data.js        # Your personal data (EDIT THIS)
│   └── script.js      # Website functionality
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Dynamic content loading and interactions
- **Font Awesome**: Icons for skills and social links
- **Google Fonts**: Typography (Poppins font family)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Deployment

You can deploy this website to:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the Project folder
- **Vercel**: Connect your GitHub repository
- **Any web hosting service**: Upload all files to your hosting provider

## Next Steps

1. **Replace placeholder content** with your actual information
2. **Add real project screenshots** to make it more professional
3. **Connect the contact form** to a backend service (EmailJS, Formspree, etc.)
4. **Add Google Analytics** for tracking visitors
5. **Optimize images** for better performance
6. **Add a blog section** if desired

## Support

If you need help customizing this portfolio:

1. Check the comments in the code files
2. Refer to the documentation for CSS Grid, Flexbox, and JavaScript
3. Use browser developer tools to inspect and modify styles

## License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**

Remember to update your information in `js/data.js` and replace all placeholder links with your actual profiles and projects.