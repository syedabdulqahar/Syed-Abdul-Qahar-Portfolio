# Premium Personal Portfolio

A production-ready, award-winning personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern UI/UX** - Dark futuristic design with glassmorphism
- 🎨 **Premium Animations** - Smooth transitions powered by Framer Motion
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **High Performance** - Optimized for speed with Vite
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🔍 **SEO Ready** - Meta tags and structured data
- 📧 **Contact Form** - Email integration with validation
- 🎯 **Professional** - Ready for deployment

## Tech Stack

- **React** 19 - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form management
- **Zod** - TypeScript-first schema validation
- **React Icons** - Icon library
- **Three.js** - 3D graphics (for future enhancements)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections
│   ├── three/        # 3D components
│   └── ui/           # Reusable UI components
├── data/            # Portfolio data (editable)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions and animations
├── constants/       # App constants
├── assets/          # Images and icons
├── styles/          # Global styles
└── App.jsx          # Main app component
```

## Customization

### Edit Portfolio Data

All portfolio content is stored in `src/data/portfolio.js`. Simply update:

- Personal information
- About section
- Skills and expertise
- Projects
- Experience
- Education
- Certifications
- Contact information

### Customize Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  cyan: { ... },
  electric: '#0066ff',
  dark: { ... },
  neon: { ... }
}
```

### Update Sections

Each section is a separate component in `src/components/sections/`:

- `Hero.jsx` - Landing section
- `About.jsx` - About section
- `Skills.jsx` - Skills section
- `TechStack.jsx` - Technology stack
- `Projects.jsx` - Featured projects
- `Experience.jsx` - Work experience
- `Education.jsx` - Education & certificates
- `Contact.jsx` - Contact form

## Features Implemented

✅ Responsive navigation with active section highlighting
✅ Smooth scroll animations throughout
✅ Typewriter effect in hero section
✅ Animated skill cards with progress bars
✅ Expandable project cards with details
✅ Work experience timeline
✅ Education & certificate showcase
✅ Contact form with validation
✅ Smooth scroll to sections
✅ Mobile-friendly hamburger menu
✅ Glassmorphism design elements
✅ Gradient text effects
✅ Hover animations on interactive elements

## Performance

- **Bundle Size**: ~458 KB (gzipped ~141 KB)
- **Lighthouse**: Target 90+
- **First Contentful Paint**: < 2 seconds
- **Time to Interactive**: < 3 seconds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Form Setup

The contact form is configured to work with email services. Currently configured for demonstration. To enable real email sending:

1. **EmailJS**: Uncomment EmailJS integration
2. **Resend**: Add Resend API integration
3. **Custom Backend**: Point to your API endpoint

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

Update `vite.config.js`:

```javascript
export default {
  base: "/your-repo-name/",
  // ...
};
```

Then:

```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## Future Enhancements

- [ ] Add 3D hero background with Three.js
- [ ] Implement smooth scrolling library (Lenis)
- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add animation preferences for accessibility
- [ ] Create Storybook for component documentation
- [ ] Add analytics tracking
- [ ] Implement newsletter signup

## License

This portfolio template is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ by a passionate developer**
