# Customization Guide

## Quick Start - Minimal Changes

To get your portfolio up and running quickly, you only need to edit ONE file:

### 1. Edit `src/data/portfolio.js`

Replace all placeholder content with your information:

```javascript
// Your personal info
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your tagline',
  description: 'Your description',
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  location: 'City, State',
  resume: '/resume.pdf',
};

// About section
export const aboutData = {
  intro: 'Your about text...',
  interests: ['Interest 1', 'Interest 2', ...],
  highlights: [
    { label: '5+', description: 'Your metric' },
    ...
  ],
};

// Skills
export const skillsData = {
  programming: {
    title: 'Programming',
    skills: ['Your', 'Skills', 'Here'],
  },
  // ... other categories
};

// Projects
export const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Short description',
    longDescription: 'Detailed description',
    image: '/projects/image.jpg',
    category: 'Category',
    technologies: ['Tech1', 'Tech2'],
    features: ['Feature 1', 'Feature 2'],
    link: 'https://github.com',
    demo: 'https://demo.com',
  },
  // ... more projects
];

// Experience, Education, Certificates...
```

## Advanced Customization

### 1. Modify Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  // Primary colors
  cyan: {
    400: '#2bc9e3',      // Change this
    500: '#06b6d4',      // Change this
    // ... other shades
  },
  electric: '#0066ff',  // Change this
  neon: {
    purple: '#a855f7',   // Change this
    // ... other colors
  },
  dark: {
    900: '#111827',      // Dark background
    // ... other shades
  }
}
```

### 2. Modify Typography

In `tailwind.config.js`:

```javascript
fontFamily: {
  sans: [
    'Your Font Name',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'sans-serif'
  ],
}
```

Add Google Fonts to `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap"
  rel="stylesheet"
/>
```

### 3. Modify Animations

Edit `src/utils/animations.js`:

```javascript
export const fadeInUp = {
  initial: { opacity: 0, y: 30 }, // Change y value for distance
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }, // Change duration
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};
```

### 4. Modify Section Layout

Each section is in `src/components/sections/`:

#### Example: Modify Hero Section

Edit `src/components/sections/Hero.jsx`:

```jsx
// Change background animation
<motion.div
  animate={{
    x: [0, 50, 0],      // Change motion
    y: [0, 30, 0],      // Change motion
  }}
  transition={{ duration: 8, repeat: Infinity }}
  className="... bg-cyan-500/30 ..."  // Change color
/>

// Change CTA buttons
<motion.button onClick={() => handleScroll('projects')}>
  Custom Button Text
</motion.button>

// Change typewriter words
<Typewriter
  words={[
    'Your Word 1',
    'Your Word 2',
    'Your Word 3',
  ]}
/>
```

### 5. Modify Navigation

Edit `src/components/layout/Navbar.jsx`:

```javascript
// Add new nav items in src/data/portfolio.js
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'New Section', href: '#new-section' },
  // ...
];

// Customize navbar styling
className={`fixed top-0 w-full z-50 transition-all ${
  isScrolled
    ? 'bg-dark-900/80 backdrop-blur-lg ...'  // Modify these
    : 'bg-transparent'
}`}
```

### 6. Add New Section

1. Create new file: `src/components/sections/MySection.jsx`

```jsx
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

const MySection = () => {
  return (
    <section id="my-section" className="py-20 md:py-28 relative">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Section Title
        </motion.h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default MySection;
```

2. Import in `src/App.jsx`:

```jsx
import MySection from "./components/sections/MySection";

function App() {
  return (
    <main className="pt-16 md:pt-20">
      <Hero />
      {/* ... other sections */}
      <MySection />
      {/* ... */}
    </main>
  );
}
```

3. Add nav link in `src/data/portfolio.js`:

```javascript
export const navLinks = [
  // ...
  { label: "My Section", href: "#my-section" },
];
```

### 7. Customize Icons

Replace React Icons imports:

```javascript
// Old
import { FaGithub } from "react-icons/fa";

// New (using different icon set)
import { FiGithub } from "react-icons/fi";
// Or use another provider like Material Design Icons
import { MdGithub } from "react-icons/md";
```

Available icon libraries in `react-icons`:

- `fa` - Font Awesome
- `fi` - Feather Icons
- `md` - Material Design Icons
- `bi` - Bootstrap Icons
- `si` - Simple Icons
- And many more...

### 8. Modify Form Fields

Edit `src/components/sections/Contact.jsx`:

```javascript
// Add new field
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(), // New field
  subject: z.string().min(5),
  message: z.string().min(10),
});

// In form JSX:
<input id="phone" type="tel" placeholder="Your phone" {...register("phone")} />;
```

### 9. Change Global Styles

Edit `src/index.css`:

```css
/* Modify base styles */
@layer base {
  h1 {
    @apply text-5xl md:text-6xl font-bold text-white;
    /* Add custom styling */
    letter-spacing: -0.02em;
    text-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
  }
}

/* Modify component utilities */
@layer components {
  .card-glass {
    @apply bg-white/5 backdrop-blur-md;
    /* Add custom styling */
    border-radius: 20px;
  }
}
```

### 10. Add Custom CSS Classes

In `src/index.css`:

```css
@layer components {
  .my-custom-class {
    @apply px-4 py-2 rounded-lg text-white;
    background: linear-gradient(135deg, #06b6d4, #0066ff);
    transition: all 0.3s ease;
  }

  .my-custom-class:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
  }
}
```

Then use in components:

```jsx
<div className="my-custom-class">Content</div>
```

## Theme Templates

### Dark Mode (Current)

Already implemented with dark-900, dark-800, etc.

### Light Mode

```javascript
// In tailwind.config.js, add light mode palette
colors: {
  light: {
    50: '#ffffff',
    100: '#f9fafb',
    // ...
  }
}
```

### Purple Theme

```javascript
colors: {
  primary: '#a855f7',
  secondary: '#ec4899',
  dark: { /* purple-tinted */ }
}
```

### Green Theme

```javascript
colors: {
  primary: '#10b981',
  secondary: '#06b920',
  dark: { /* green-tinted */ }
}
```

## Component Library Customization

### Buttons

Update in `src/index.css`:

```css
.btn-primary {
  @apply px-6 py-3 bg-gradient-to-r;
  background-color: linear-gradient(135deg, #06b6d4, #0066ff);
  font-weight: 700;
  border-radius: 12px;
  /* Add more custom styles */
}
```

### Cards

Update card styles:

```javascript
// In component
className = "p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5";
```

### Gradients

Define custom gradients in `tailwind.config.js`:

```javascript
backgroundImage: {
  'gradient-custom': 'linear-gradient(135deg, #06b6d4, #0066ff)',
  'gradient-hover': 'linear-gradient(135deg, #a855f7, #ec4899)',
}
```

Use in components:

```jsx
className = "bg-gradient-custom hover:bg-gradient-hover";
```

## Responsive Design Customization

Modify breakpoint behavior:

```jsx
// Mobile first approach (already implemented)
className="text-3xl md:text-4xl lg:text-5xl"

// Add custom breakpoints in tailwind.config.js
screens: {
  'xs': '375px',
  'sm': '640px',
  'md': '1024px',
  'lg': '1280px',
  'xl': '1536px',
}
```

## Performance Optimization

### 1. Lazy Load Images

```jsx
<img src={project.image} loading="lazy" />
```

### 2. Code Splitting

Done automatically by Vite. Components load on demand.

### 3. Optimize Animations

Reduce animation count for better performance:

```javascript
// For mobile, disable some animations
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

// Use in components
{
  !isMobile && <AnimatedComponent />;
}
```

## Accessibility Customization

### Add ARIA Labels

```jsx
<button aria-label="Close navigation menu" onClick={closeMenu}>
  ✕
</button>
```

### Add Skip Links

```jsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### Add Focus Styles

```css
@layer components {
  button:focus {
    @apply ring-2 ring-offset-2 ring-cyan-400;
  }
}
```

## SEO Customization

Update in `index.html`:

```html
<meta name="title" content="Your Name - Your Title" />
<meta name="description" content="Your description" />
<meta name="keywords" content="keywords, here" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://yoursite.com/og-image.png" />
```

## Getting Help

- Check component source code in `src/components/`
- Review data structure in `src/data/portfolio.js`
- Read Framer Motion docs: https://www.framer.com/motion/
- Read Tailwind docs: https://tailwindcss.com/
- Ask in community forums

---

**Customization is endless - make it your own!**
