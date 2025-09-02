# Elite Decorators Website

A professional, responsive website for decoration and event management services, similar to Choudhary Decorators NCR.

## 🌟 Features

### **Modern Design**
- Elegant and professional layout
- Responsive design for all devices
- Beautiful animations and transitions
- Premium color scheme with gold accents

### **Complete Sections**
- **Hero Section**: Eye-catching banner with call-to-action
- **About Us**: Company information and experience
- **Services**: Detailed service offerings with icons
- **Gallery**: Filterable image gallery with lightbox
- **Testimonials**: Customer reviews carousel
- **Contact**: Contact information and call-to-action

### **Interactive Features**
- Smooth scrolling navigation
- Image gallery with filtering
- Lightbox for image viewing
- Scroll-to-top button
- WhatsApp integration
- Mobile-responsive navigation

### **Services Included**
- Wedding Decoration
- Birthday Parties
- Corporate Events
- Engagement Ceremonies
- House Warming
- Festival Decorations

## 🚀 Quick Start

1. **Open the website**: Open `index.html` in your web browser
2. **Add your images**: Place your decoration photos in the `images/` folder
3. **Customize content**: Edit the HTML to match your business details
4. **Update contact info**: Change phone numbers, email, and address

## 📁 File Structure

```
Decorators Website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling and animations
├── js/
│   └── script.js      # Interactive functionality
├── images/
│   ├── gallery/       # Gallery images folder
│   └── README.md      # Image requirements guide
└── README.md          # This file
```

## 🎨 Customization Guide

### **1. Business Information**
Edit these sections in `index.html`:
- Company name: Change "Elite Decorators" to your business name
- Contact details: Update phone numbers, email, and address
- About section: Modify the company description
- Services: Add/remove services as needed

### **2. Colors and Branding**
In `css/style.css`, modify these CSS variables:
```css
:root {
    --primary-color: #d4af37;    /* Gold color */
    --secondary-color: #8b4513;  /* Brown color */
    --accent-color: #ff6b6b;     /* Accent color */
}
```

### **3. Images**
- Add your hero image as `images/hero-decoration.jpg`
- Add gallery images in `images/gallery/` folder
- Follow the naming convention in `images/README.md`

### **4. Contact Integration**
- **WhatsApp**: Update the phone number in `js/script.js`
- **Phone Links**: Update `tel:` links in HTML
- **Email Links**: Update `mailto:` links in HTML

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🔧 Technical Features

### **Built With**
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Playfair Display + Poppins)

### **Performance Optimized**
- Lightweight code
- Optimized images
- Smooth animations
- Fast loading times

### **SEO Ready**
- Semantic HTML structure
- Meta tags for search engines
- Proper heading hierarchy
- Alt tags for images

## 🎯 Business Features

### **Lead Generation**
- Prominent call-to-action buttons
- WhatsApp integration for instant contact
- Phone number click-to-call
- Contact form (ready for backend integration)

### **Portfolio Showcase**
- Filterable gallery by service type
- Lightbox for detailed image viewing
- Professional presentation of work

### **Trust Building**
- Customer testimonials
- Experience badges
- Professional design
- Service guarantees

## 🚀 Deployment Options

### **1. Simple Hosting**
- Upload all files to any web hosting service
- Works with shared hosting, VPS, or cloud hosting

### **2. Free Hosting Options**
- **GitHub Pages**: Free hosting for static websites
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect with GitHub for automatic deployment

### **3. Domain Setup**
- Purchase a domain name (e.g., yourdecorators.com)
- Point domain to your hosting service
- Enable SSL certificate for security

## 📞 Contact Integration Setup

### **WhatsApp Business**
1. Get WhatsApp Business account
2. Update phone number in `js/script.js`
3. Customize the default message

### **Google My Business**
1. Create Google My Business listing
2. Add your business address and photos
3. Encourage customer reviews

### **Social Media**
- Update social media links in footer
- Add your actual Facebook, Instagram handles
- Consider adding social media feeds

## 🎨 Customization Examples

### **Change Company Name**
Find and replace "Elite Decorators" with your business name in:
- `index.html` (multiple locations)
- Page title and meta tags
- Navigation brand
- Footer

### **Add New Service**
In the services section, add:
```html
<div class="col-lg-4 col-md-6">
    <div class="service-card">
        <div class="service-icon">
            <i class="fas fa-your-icon"></i>
        </div>
        <h4>Your Service Name</h4>
        <p>Service description...</p>
        <ul class="service-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
    </div>
</div>
```

### **Update Contact Information**
Replace these placeholders:
- Phone: `+91 98765 43210`
- Email: `info@elitedecorators.com`
- Address: `123 Decoration Street, New Delhi`

## 🔍 SEO Optimization

### **Already Included**
- Meta description and keywords
- Proper heading structure (H1, H2, H3)
- Alt tags for images
- Semantic HTML elements

### **Additional Steps**
1. Add Google Analytics
2. Submit sitemap to Google Search Console
3. Optimize images with descriptive filenames
4. Add local business schema markup
5. Create Google My Business listing

## 📈 Analytics Setup

Add Google Analytics code before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Maintenance

### **Regular Updates**
- Add new gallery images regularly
- Update testimonials with recent reviews
- Keep contact information current
- Add seasonal promotions or offers

### **Performance Monitoring**
- Check website speed regularly
- Optimize images as needed
- Monitor mobile responsiveness
- Test contact forms and links

## 📞 Support

For customization help or technical support:
- Check the code comments for guidance
- Refer to Bootstrap 5 documentation
- Use browser developer tools for debugging

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to launch your decoration business online! 🎉**

Remember to:
1. ✅ Add your actual business images
2. ✅ Update all contact information
3. ✅ Customize colors and branding
4. ✅ Test on mobile devices
5. ✅ Set up hosting and domain