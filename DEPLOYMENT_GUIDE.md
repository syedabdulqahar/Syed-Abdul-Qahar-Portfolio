# Deployment Guide

## Before Deployment

1. **Update Personal Information**
   - Edit `src/data/portfolio.js` with your actual information
   - Update social links and contact details
   - Add your real projects and experiences
   - Update education and certificates

2. **Add Resume File**
   - Place your resume PDF in `public/resume.pdf`
   - Update the resume link in portfolio data

3. **Add Project Images**
   - Add project screenshots to `src/assets/projects/`
   - Update project image paths in portfolio data

4. **Update Meta Tags**
   - Edit `index.html` for your name and description
   - Add Open Graph images for social sharing

5. **Set Up Email**
   - Choose an email service (EmailJS, Resend, or custom backend)
   - Add credentials to `.env.local`
   - Test the contact form

## Deployment Platforms

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set production
vercel --prod
```

**Features:**

- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Environment variables support
- Analytics included

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
netlify deploy --prod --dir=dist
```

**Features:**

- Drag & drop deployment
- CI/CD integration
- Built-in redirects
- Edge functions support

### 3. GitHub Pages

```bash
# Add to vite.config.js:
# base: '/repository-name/'

npm run build
# Push dist to gh-pages branch
```

### 4. Cloudflare Pages

```bash
# Connect your GitHub repo
# Build command: npm run build
# Build output directory: dist
```

### 5. AWS S3 + CloudFront

```bash
npm run build

# Upload dist to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id ID --paths "/*"
```

## Environment Setup

### Email Configuration

#### Option 1: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a new service
3. Create a new template
4. Get your Service ID, Template ID, and Public Key
5. Add to `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Uncomment EmailJS code in Contact.jsx

#### Option 2: Resend

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:

```
VITE_RESEND_API_KEY=your_api_key
```

4. Implement Resend integration in backend

#### Option 3: Custom Backend

1. Create a backend API (Node.js, Python, etc.)
2. Add to `.env.local`:

```
VITE_API_URL=https://your-api.com
```

3. Update contact form to call your API

## Post-Deployment

### 1. Verify Deployment

- [ ] Site loads correctly
- [ ] All sections scroll smoothly
- [ ] Animations work properly
- [ ] Mobile responsive
- [ ] Links work (social, resume, projects)
- [ ] Contact form works
- [ ] Performance is acceptable

### 2. SEO Checklist

- [ ] Meta tags are correct
- [ ] Open Graph tags for social sharing
- [ ] Twitter card tags
- [ ] Favicon set correctly
- [ ] Sitemap.xml created
- [ ] robots.txt configured
- [ ] Page title is descriptive
- [ ] Meta description is present

### 3. Analytics Setup

Add Google Analytics or similar:

```javascript
// Add to main.jsx or App.jsx
import { useEffect } from "react";

useEffect(() => {
  // Add your analytics script
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR_GA_ID");
}, []);
```

### 4. Performance Optimization

Run Lighthouse audit:

```bash
# Using Chrome DevTools
# Lighthouse > Generate report

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 100
```

Optimize images:

```bash
# Use tools like:
# - TinyPNG
# - ImageOptim
# - WebP conversion
```

### 5. Security Headers

Add security headers in deployment config:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Monitoring & Maintenance

### Regular Updates

- Update dependencies: `npm outdated`
- Check for security vulnerabilities: `npm audit`
- Monitor site performance
- Update portfolio content regularly

### Automated Tasks

Consider setting up:

- [ ] Dependency update automation (Dependabot)
- [ ] Automated builds on push
- [ ] Scheduled backups
- [ ] Uptime monitoring
- [ ] Performance monitoring

## Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run build
```

### Styles Not Loading

- Check CSS imports in index.css
- Verify Tailwind config
- Clear browser cache
- Rebuild: `npm run build`

### Images Not Showing

- Check image paths are relative to public folder
- Verify image files exist
- Check console for 404 errors

### Contact Form Not Working

- Check environment variables
- Verify email service credentials
- Check browser console for errors
- Test with browser network tab

## Custom Domain

### Point Domain to Vercel

```
Domain: yourdomain.com
CNAME: cname.vercel.com
```

### Point Domain to Netlify

```
Domain: yourdomain.com
DNS Records:
  A: 75.2.60.5
  CNAME: yourdomain.netlify.app
```

## SSL/TLS

Most platforms provide free SSL certificates:

- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ Cloudflare: Automatic
- ✅ GitHub Pages: Automatic

## Scaling

If you need more features:

1. **Add Backend**
   - Express.js, Node.js, Python, etc.
   - Database for dynamic content
   - API endpoints for contact form

2. **Add CMS**
   - Contentful
   - Sanity
   - Strapi
   - HeadlessCMS

3. **Add Comments/Discussion**
   - Disqus
   - Commento
   - Custom implementation

## Support

For deployment issues:

- Check platform documentation
- Review logs in deployment dashboard
- Ask in community forums
- Open GitHub issue
