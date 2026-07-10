# Rousan Ali – AI/ML Engineer Portfolio

[![Website](https://img.shields.io/badge/Website-Live-blue?style=for-the-badge&logo=vercel)](https://your-portfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-black?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourusername)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<div align="center">
  <img src="assets/images/preview.png" alt="Portfolio Preview" width="800" />
</div>

---

## About

A **modern, responsive, and high-performance** professional portfolio showcasing AI/ML expertise, projects, and professional achievements. Built with **HTML, CSS, and JavaScript** with a focus on performance, accessibility, and user experience.

### Key Highlights

-  **Excellent Core Web Vitals** – LCP: 0.96s, CLS: 0.00, INP: 8ms
-  **Fully Responsive** – Works on all devices
-  **Glass-morphism UI** – Modern, clean design
-  **Optimized Performance** – 60 FPS animations
-  **Accessible** – Keyboard navigation, ARIA labels
-  **Fast Loading** – Lazy loading, optimized assets

---

##  Features

### Sections
| Section | Description |
|---------|-------------|
| **Hero** | Professional introduction with animated background |
| **Professional Summary** | Detailed overview with highlight cards |
| **Core Competencies** | 9 skill categories with interactive tags |
| **Featured Projects** | 6 projects with click-to-expand details |
| **Work Experience** | Professional journey with key achievements |
| **Certifications** | Professional certifications |
| **Education** | Academic background |
| **Testimonials** | Client/manager recommendations |
| **Contact** | Easy way to connect |

### Interactive Elements
-  **Skill Tags** – Click to highlight skills
-  **Project Cards** – Click to expand and view details
-  **Particle Animation** – Dynamic background in hero section
-  **Responsive Design** – Seamless experience across all devices
-  **Smooth Animations** – Scroll-triggered and hover effects

---

##  Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Styling** | CSS Modules, Glass-morphism, CSS Variables |
| **Animations** | CSS Animations, Canvas API, Intersection Observer |
| **Content** | YouTube API (Background Video) |
| **Performance** | Lazy Loading, Code Splitting, Optimized Assets |

---

## Project Structure
``` text
portfolio/
├── index.html # Main entry point
├── css/
│ ├── main.css # Main CSS (imports all)
│ ├── base.css # Reset, variables, base styles
│ ├── components/ # Section-specific styles
│ │ ├── hero.css
│ │ ├── summary.css
│ │ ├── skills.css
│ │ ├── projects.css
│ │ ├── experience.css
│ │ ├── certifications.css
│ │ ├── education.css
│ │ ├── achievements.css
│ │ ├── testimonials.css
│ │ └── contact.css
│ └── utils/
│ ├── animations.css
│ └── responsive.css
├── js/
│ ├── main.js # Application entry point
│ ├── loaders/
│ │ └── section-loader.js # Dynamic section loader
│ ├── interactions/
│ │ ├── scroll-reveal.js # Scroll animations
│ │ └── tilt.js # 2D hover effects
│ └── components/
│ ├── hero.js # Particle animation
│ ├── skills.js # Skill tag interactions
│ └── projects.js # Project expansion
├── sections/ # HTML for each section
│ ├── hero.html
│ ├── summary.html
│ ├── skills.html
│ ├── projects.html
│ ├── experience.html
│ ├── certifications.html
│ ├── education.html
│ ├── achievements.html
│ ├── testimonials.html
│ └── contact.html
├── assets/
│ ├── images/ # Images and icons
│ └── favicon/ # Favicon files
└── .gitignore
```


---

##  Getting Started

### Prerequisites
- Any modern web browser
- VS Code (recommended)
- Live Server extension

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio

   ### Open with Live Server

  # VS Code: Right-click index.html → Open with Live Server
# OR
python3 -m http.server 8000
# Then visit: http://localhost:8000

### 2. **Start developing**

# All changes auto-reload with Live Server

Performance Metrics
Metric	Score	Status
LCP	0.96s	 Excellent
CLS	0.00	 Excellent
INP	8ms Excellent
FCP	< 1s	 Good
TTI	< 2s	Good
Lighthouse Scores
Category	Score
Performance	95+
Accessibility	100
Best Practices	100
SEO	100
📱 Responsive Breakpoints
Device	Width	Columns
Desktop	> 1024px	3 columns
Tablet	768px - 1024px	2 columns
Mobile	< 768px	1 column

Deployment
Deploy to Vercel (Recommended)
bash
npm install -g vercel
vercel --prod

Browser Support
Browser	Version
Chrome	90+
Firefox	88+
Safari	14+
Edge	90+
Opera	76+
 License
This project is licensed under the MIT License – see the LICENSE file for details.

## Contact
Email: rousan.ali.it@gmail.com

LinkedIn: linkedin.com/in/rousanali

GitHub: github.com/89184


