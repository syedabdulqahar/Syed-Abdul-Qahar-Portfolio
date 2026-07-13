# Quick Start Checklist

Complete this checklist to get your portfolio live!

## Phase 1: Setup (5 minutes)

- [ ] Clone or download this repository
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Open http://localhost:5173 in your browser
- [ ] Verify the default portfolio loads correctly

## Phase 2: Personalization (15 minutes)

### Edit Portfolio Data

Open `src/data/portfolio.js` and update:

- [ ] **personalInfo**
  - [ ] `name` - Your full name
  - [ ] `title` - Your professional title
  - [ ] `tagline` - Your catchphrase
  - [ ] `description` - Brief about you
  - [ ] `email` - Contact email
  - [ ] `phone` - Contact phone
  - [ ] `location` - Your location
  - [ ] `resume` - Path to resume PDF (place file in `public/` folder)

- [ ] **aboutData**
  - [ ] `intro` - Your about paragraph
  - [ ] `interests` - Your interests (list)
  - [ ] `highlights` - Your key metrics/achievements

- [ ] **skillsData**
  - [ ] Update programming languages
  - [ ] Update frontend skills
  - [ ] Update backend skills
  - [ ] Update tools & DevOps
  - [ ] Add/remove skill categories

- [ ] **techStackData**
  - [ ] Update with your technologies
  - [ ] Change icons if desired
  - [ ] Update categories

- [ ] **projectsData**
  - [ ] Replace with your 3-4 best projects
  - [ ] For each project:
    - [ ] Title
    - [ ] Description
    - [ ] Technologies used
    - [ ] Features
    - [ ] GitHub link
    - [ ] Live demo link

- [ ] **experienceData**
  - [ ] Update with your work history
  - [ ] For each role:
    - [ ] Title
    - [ ] Company name
    - [ ] Period
    - [ ] Description
    - [ ] Responsibilities

- [ ] **educationData**
  - [ ] Add your education
  - [ ] Add certifications

- [ ] **certificatesData**
  - [ ] Add your professional certificates
  - [ ] Include credential links

- [ ] **socialLinks**
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Twitter URL
  - [ ] Email address

## Phase 3: Content (20 minutes)

### Add Files

- [ ] **Resume**
  - [ ] Create `public/resume.pdf` with your resume
  - [ ] Verify resume link works in "Download Resume" button

- [ ] **Project Images**
  - [ ] Create `src/assets/projects/` folder
  - [ ] Add project screenshot images
  - [ ] Update image paths in projectsData

### Update Metadata

- [ ] Open `index.html`
- [ ] Update:
  - [ ] `<title>` - Your name and title
  - [ ] Meta description
  - [ ] Open Graph tags
  - [ ] Twitter cards

## Phase 4: Customization (10 minutes)

### Optional Styling Changes

- [ ] Color scheme (edit `tailwind.config.js`)
  - [ ] Primary color (currently cyan)
  - [ ] Accent color (currently electric blue)
  - [ ] Dark theme (currently dark-900)
- [ ] Fonts (edit `tailwind.config.js`)
  - [ ] Add Google Fonts if desired
  - [ ] Update font family names

- [ ] Animations (edit `src/utils/animations.js`)
  - [ ] Adjust animation durations
  - [ ] Modify animation distances
  - [ ] Change easing functions

### Optional Section Customization

- [ ] Hero section (edit `src/components/sections/Hero.jsx`)
  - [ ] Change background animation
  - [ ] Modify CTA button text
  - [ ] Update typewriter words

- [ ] Navigation (edit `src/components/layout/Navbar.jsx`)
  - [ ] Change logo text
  - [ ] Modify navigation styling

## Phase 5: Email Setup (Optional)

Choose ONE email service and set it up:

### Option A: EmailJS

- [ ] Sign up at https://emailjs.com
- [ ] Create email service
- [ ] Create email template
- [ ] Get Service ID, Template ID, Public Key
- [ ] Add to `.env.local`:
  ```
  VITE_EMAILJS_SERVICE_ID=...
  VITE_EMAILJS_TEMPLATE_ID=...
  VITE_EMAILJS_PUBLIC_KEY=...
  ```
- [ ] Uncomment EmailJS code in `src/components/sections/Contact.jsx`

### Option B: Resend

- [ ] Sign up at https://resend.com
- [ ] Get API key
- [ ] Add to `.env.local`:
  ```
  VITE_RESEND_API_KEY=...
  ```
- [ ] Implement Resend integration

### Option C: Custom Backend

- [ ] Create backend API endpoint
- [ ] Add endpoint URL to `.env.local`
- [ ] Update contact form submission

## Phase 6: Testing (10 minutes)

### Desktop Testing

- [ ] Open http://localhost:5173
- [ ] Scroll through entire page
- [ ] [ ] Animations look smooth
- [ ] Hover effects work on cards
- [ ] All links are clickable
- [ ] Contact form validates correctly
- [ ] Download resume works
- [ ] Social links go to correct places

### Mobile Testing

- [ ] Open on mobile device or use device emulation
- [ ] Navigation hamburger menu works
- [ ] All sections responsive
- [ ] Forms work on mobile
- [ ] Images load correctly
- [ ] Text is readable
- [ ] Touch animations work

### Cross-Browser Testing

- [ ] Chrome - ✓
- [ ] Firefox - ✓
- [ ] Safari - ✓
- [ ] Edge - ✓

## Phase 7: Build & Deploy (5 minutes)

### Build for Production

```bash
npm run build
```

- [ ] Build completes without errors
- [ ] `dist/` folder created
- [ ] Check bundle size is reasonable

### Choose Deployment Platform

- [ ] **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```
- [ ] **Netlify**
  ```bash
  npm install -g netlify-cli
  netlify deploy --prod --dir=dist
  ```
- [ ] **GitHub Pages**
  - Update `vite.config.js` with base path
  - Push to `gh-pages` branch
- [ ] **Other Platform** (AWS, Cloudflare, etc.)
  - Follow platform-specific instructions

### Post-Deployment

- [ ] Visit deployed URL
- [ ] Verify site looks correct
- [ ] Test all functionality
- [ ] Test on mobile
- [ ] Test contact form (if email setup)
- [ ] Run Lighthouse audit (target 90+)

## Phase 8: Optional Enhancements

After launching, consider:

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add smooth scrolling library (Lenis)
- [ ] Add 3D background with Three.js
- [ ] Set up analytics (Google Analytics)
- [ ] Add newsletter signup
- [ ] Add testimonials/reviews section
- [ ] Add video content
- [ ] Implement search functionality

## Common Issues & Solutions

### Issue: Site looks different locally vs deployed

**Solution:** Check environment variables, ensure paths are relative

### Issue: Contact form not working

**Solution:** Verify email service setup, check .env.local file, test with console

### Issue: Images not loading

**Solution:** Place images in `public/` folder, check paths, verify file exists

### Issue: Styles not applying

**Solution:** Clear cache, rebuild project, check Tailwind content paths

### Issue: Animations not smooth

**Solution:** Check browser performance, reduce animation count, use will-change CSS

## Performance Checklist

- [ ] Run Lighthouse audit
- [ ] Performance score 90+
- [ ] Accessibility score 95+
- [ ] Best Practices score 95+
- [ ] SEO score 100
- [ ] Core Web Vitals optimized
- [ ] Images optimized (consider WebP)
- [ ] Bundle size < 500KB gzipped

## SEO Checklist

- [ ] Meta title is descriptive
- [ ] Meta description present
- [ ] Open Graph tags set
- [ ] Twitter cards configured
- [ ] Favicon is set
- [ ] Heading hierarchy correct (h1, h2, h3)
- [ ] All links have descriptive text
- [ ] Mobile responsive
- [ ] Page loads fast (< 3s)
- [ ] No broken links

## Final Checklist

- [ ] All personal info updated
- [ ] All projects added
- [ ] All experience added
- [ ] All skills added
- [ ] Resume accessible
- [ ] Email working (if configured)
- [ ] Social links correct
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Deployed successfully
- [ ] Domain/URL accessible
- [ ] Updated social media profiles with new portfolio link

## Next Steps

1. Share your portfolio on social media
2. Add link to your resume/CV
3. Share in LinkedIn, Twitter, GitHub
4. Consider adding blog posts
5. Keep content updated regularly
6. Monitor analytics
7. Gather feedback from peers
8. Iterate and improve

---

**Congratulations! Your portfolio is live! 🎉**

For questions or issues, refer to:

- README_PORTFOLIO.md - Feature overview
- CUSTOMIZATION_GUIDE.md - How to customize
- DEPLOYMENT_GUIDE.md - Deployment instructions
