# TechFlow - Modern React Single Page Application

TechFlow is a professional, high-performance single-page website built with React and Tailwind CSS. It features a modern design system, smooth animations, and a fully responsive layout suitable for business or agency portfolios.


## 🚀 Features

### 1. **Responsive Navigation Bar**
- **Sticky Positioning**: Stays at the top of the viewport while scrolling.
- **Dynamic Styling**: Transitions from transparent to a solid white background with shadow upon scrolling.
- **Mobile Menu**: Fully functional hamburger menu with a smooth slide-in animation for mobile devices.
- **Active State**: Automatically highlights the current section link based on the scroll position.
- **Smooth Scroll**: Clicking links smoothly scrolls to the corresponding section.

### 2. **Immersive Hero Section**
- **Entrance Animations**: Text and images fade in and slide up upon page load.
- **Interactive Elements**: 
  - Primary and secondary CTA buttons with hover scaling and shadow effects.
  - Floating "Growth Rate" badge with a bouncing animation.
- **Visuals**: High-quality imagery with a hover zoom effect and decorative background elements.

### 3. **Services Grid**
- **Responsive Layout**: Adapts from 1 column on mobile to 3 columns on desktop.
- **Interactive Cards**:
  - Cards lift up and cast a larger shadow on hover.
  - Service titles change color to blue on hover for clear feedback.
  - "Learn More" link appears/animates on hover.
- **Scroll Functionality**: "View All Services" button smoothly scrolls the user back to the top of the grid.

### 4. **Contact Section**
- **Functional Form**: 
  - Real-time state management for all inputs.
  - **Validation**: Checks for required fields and valid email formats with error messages.
  - **Success State**: Displays a success message upon simulated submission.
  - **Loading State**: Shows a spinner while the form is "submitting".
- **Info Sidebar**: A sticky sidebar displaying contact details (Address, Phone, Email, Hours) with a modern gradient background.

### 5. **Comprehensive Footer**
- **Multi-Column Layout**: Organized sections for Brand, Company Links, Services, and Newsletter.
- **Newsletter Form**: Interactive subscription form with success feedback.
- **Social Media**: SVG icons for major social platforms with hover effects.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG Icons
- **State Management**: React Hooks (`useState`, `useEffect`)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/techflow.git
   cd techflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The project uses a custom Tailwind configuration. You can modify the primary colors in `index.html` (script tag) or `tailwind.config.js` if you choose to extract it.

- **Primary**: Blue (`#3B82F6`)
- **Secondary**: Green (`#10B981`)
- **Dark**: Gray (`#1F2937`)

### Content
- **Services**: Edit the `services` array in `src/components/Services.jsx`.
- **Contact Info**: Update the `contactInfo` array in `src/components/Contact.jsx`.
- **Footer Links**: Modify the `footerLinks` object in `src/components/Footer.jsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
