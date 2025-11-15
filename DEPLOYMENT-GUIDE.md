# cPanel Deployment Guide for Aaravii Construction Website

## Overview
This guide provides step-by-step instructions for deploying the Aaravii Construction website to a cPanel hosting environment.

## Pre-Deployment Checklist

### Required Files:
- [x] `index.html` - Main homepage
- [x] `css/style.css` - Stylesheet
- [x] `js/script.js` - JavaScript functionality
- [x] `.htaccess` - Apache configuration
- [x] `robots.txt` - Search engine directives
- [x] `sitemap.xml` - XML sitemap
- [x] `images/` - Directory for website images
- [x] Placeholder files and documentation

### Required Images (to be added):
- [ ] `images/hero-bg.jpg` - Hero section background
- [ ] `images/project1.jpg` - Modern Villa project
- [ ] `images/project2.jpg` - Commercial Complex
- [ ] `images/project3.jpg` - Renovated Office Space
- [ ] `images/project4.jpg` - Luxury Apartment Complex
- [ ] `images/construction-team.jpg` - Team photo
- [ ] `images/favicon.ico` - Site favicon

## Deployment Steps

### Step 1: Access cPanel
1. Log into your cPanel hosting account
2. Navigate to the File Manager
3. Go to the `public_html` directory (or your domain's document root)

### Step 2: Upload Website Files
1. **Clear existing content** (if any) from `public_html`
2. **Upload all files** from the `aaravii-construction` directory:
   - `index.html`
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
   - `css/` folder with `style.css`
   - `js/` folder with `script.js`
   - `images/` folder with placeholders

### Step 3: Add Images
1. **Create the images folder** if not already uploaded
2. **Add your actual images**:
   - Use high-quality, professional construction photos
   - Optimize images for web (compress to reduce file size)
   - Follow the naming convention: `project1.jpg`, `project2.jpg`, etc.
   - Recommended sizes:
     - Hero background: 1920x1080px
     - Project images: 800x600px
     - Team photo: 800x600px
     - Favicon: 32x32px

### Step 4: Update Website Configuration
1. **Update sitemap.xml** with your actual domain:
   - Replace `https://www.aaravii.com/` with your actual domain
2. **Update contact information** if needed in `index.html`
3. **Add Google Analytics** (optional):
   - Insert your GA tracking code before `</head>` tag

### Step 5: Test Functionality
1. **Open your website** in a web browser
2. **Test navigation** - all menu items should scroll to correct sections
3. **Test mobile responsiveness** - check on different devices
4. **Test contact form** - ensure WhatsApp integration works
5. **Test quick contact buttons** - WhatsApp and phone buttons
6. **Check image loading** - ensure all images display properly

## Post-Deployment Tasks

### SEO Setup:
1. **Submit sitemap** to Google Search Console
2. **Verify website** in Google Search Console
3. **Submit robots.txt** for indexing
4. **Set up Google My Business** listing

### Security & Performance:
1. **Enable SSL certificate** (if not already enabled)
2. **Test website speed** using Google PageSpeed Insights
3. **Set up regular backups** of the website
4. **Configure security headers** (already included in .htaccess)

### Contact Integration:
1. **WhatsApp Business** setup with the phone number: +91 7676236208
2. **Email configuration** for info@aaravii.com
3. **Google My Business** listing for local SEO

## Troubleshooting Common Issues

### Images Not Loading:
- Check file names match exactly (case-sensitive)
- Ensure images are in the `images/` folder
- Verify file permissions are correct (644 for files, 755 for folders)

### CSS/JS Not Working:
- Check file paths are correct
- Ensure `.htaccess` is uploaded (enables mod_rewrite)
- Clear browser cache and test

### Mobile Issues:
- Test responsive design on actual devices
- Check viewport meta tag is present
- Verify CSS media queries are working

### Contact Form Issues:
- WhatsApp integration should work immediately
- If using email form backend, ensure PHP is enabled
- Check form validation in browser console

## Website Features Included

### ✅ Completed Features:
- Responsive design (mobile-first approach)
- Modern, professional styling
- Interactive navigation with smooth scrolling
- Quick contact buttons (WhatsApp & Phone)
- Comprehensive quote request form
- SEO optimization (meta tags, sitemap, robots.txt)
- Performance optimization (compression, caching)
- Accessibility features (alt text, semantic HTML)
- Cross-browser compatibility
- cPanel hosting compatibility

### 🔄 Future Enhancements:
- Individual pages for About, Services, Projects, Contact
- Content management system integration
- Online payment integration
- Project gallery with lightbox functionality
- Blog section for SEO content
- Client testimonial system
- Project progress tracking system

## Support & Maintenance

### Regular Updates:
- Keep contact information current
- Add new project images regularly
- Update sitemap when adding content
- Monitor website performance and fix issues

### Technical Support:
- Contact your hosting provider for server-related issues
- Website code modifications may require developer assistance
- Keep backups of all website files

## Contact Information for Website:
- **Company**: Aaravii Construction Private Limited
- **Phone**: +91 7676236208
- **Email**: info@aaravii.com
- **Address**: Ground Floor, Khata No.541, Salagame Road, Near MCF Space Quarters, Haralahalli Village, Vidyanagar Post, Hassan, Karnataka - 573202

### Legal Information:
- **Legal Entity**: ADARSHA S M & S AKSHAY KARLE
- **GST**: 29CQAPA2044J1Z5
- **Constitution**: Proprietorship
- **Established**: 13/06/2025

---

**Note**: This website is designed to be simple, fast, and compatible with standard cPanel hosting. No special server requirements or complex setup needed.