# Comprehensive Design Guidelines - 3D Interactive Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from cutting-edge creative portfolios (Awwwards winners, Bruno Simon's portfolio, Gary Sheng's 3D portfolio) combined with modern design systems for UI components. This portfolio demands bold, experimental design that showcases technical prowess while maintaining professional UX.

## Core Design Principles
- **Interactive First**: Every section should respond to user input (scroll, mouse movement, clicks)
- **3D Integration**: Seamlessly blend 3D elements with 2D UI for depth and intrigue
- **Controlled Chaos**: Bold, experimental layouts balanced with clear information hierarchy
- **Performance-Conscious**: Smooth 60fps animations despite complex interactions

## Typography System
- **Display Font**: Bold, geometric sans-serif for headlines (e.g., "Space Grotesk Bold", "Monument Extended")
- **Body Font**: Clean, readable sans-serif (e.g., "Inter", "DM Sans")
- **Code Font**: Monospace for technical details (e.g., "JetBrains Mono", "Fira Code")

**Hierarchy**:
- Hero Title: 72-96px (desktop), 40-48px (mobile), ultra-bold
- Section Headers: 48-56px, bold
- Project Titles: 32-40px, medium
- Body: 16-18px, regular
- Captions/Labels: 12-14px, uppercase, letter-spacing: 0.1em

## Layout System
**Spacing Units**: 4px base unit - primarily use 8, 16, 24, 32, 48, 64, 96, 128px increments

**Grid Structure**:
- Full-bleed sections (100vw) for immersive experiences
- Content constrained to 1400px max-width for readability
- Asymmetric layouts throughout - avoid centered symmetry
- Overlapping elements to create depth

## Page Structure

### 1. Hero Section (100vh)
- **3D Scene Background**: Abstract geometric 3D model (low-poly sphere, torus, or custom mesh) that rotates/morphs based on mouse position (parallax effect)
- **Floating Text Layout**: Name and title positioned off-center (left 20%, top 35%)
- **Animated Introduction**: Typewriter or glitch effect on tagline
- **Scroll Indicator**: Animated arrow or circular progress indicator at bottom
- **No hero image** - 3D canvas fills entire viewport

### 2. About Section (Auto Height)
- **Split Layout**: 60/40 asymmetric division
- **Left**: Large body text with morphing/gradient text animations on key words
- **Right**: Stacked skill badges or animated tech stack icons that float/pulse
- **Background**: Subtle animated gradient mesh or particle system
- **Section Padding**: 128px vertical on desktop, 64px mobile

### 3. Featured Projects Gallery (Auto Height, 96px padding)
- **Grid**: Irregular masonry-style layout with varying card sizes
- **Card Design**: 
  - Project thumbnail with 3D hover tilt effect (perspective transform)
  - Overlay appears on hover with gradient and project title
  - Tech stack tags at bottom
- **3-4 featured projects** with full project cards
- **Interaction**: Magnetic hover effect - cards subtly move toward cursor
- **Spacing**: 24px gaps between cards

### 4. Skills/Technologies Section (Auto Height, 80px padding)
- **Layout**: 3-4 column grid of skill categories
- **Animated Icons**: Custom-styled icons with hover grow/glow effects
- **Progress Visualization**: NOT traditional bars - instead use:
  - Circular progress rings
  - Animated percentage numbers counting up on scroll-in
  - Proficiency shown through icon size/opacity variations

### 5. Contact/CTA Section (80vh)
- **Centered Content**: Break the asymmetry rule here for emphasis
- **Large CTA**: "Let's Work Together" or similar - 56px text
- **Contact Options**: Email, LinkedIn, GitHub as large clickable cards with icons
- **Background**: Animated gradient or 3D particle field
- **Form Alternative**: Social links instead of traditional form for cleaner UX

## Custom Cursor Design
- **Default**: 12px circle outline following cursor
- **Hover State**: Expands to 40px circle with blur effect
- **Click State**: Ripple animation
- **Particle Trail**: 5-8 small particles fade behind cursor movement
- **Magnetic Effect**: Cursor pulls toward interactive elements within 100px radius

## Component Library

### Navigation
- **Fixed Top Bar**: 80px height, glass-morphism effect (semi-transparent with backdrop blur)
- **Logo**: Left-aligned, bold typography
- **Menu Items**: Right-aligned, uppercase, 14px, tracking-wide
- **Hover**: Underline animation from center expanding outward

### Project Cards
- **Aspect Ratio**: 16:9 for consistency
- **Border Radius**: 16px for modern feel
- **Shadow**: Elevated shadows that intensify on hover
- **Transform**: 3D perspective tilt on hover (rotateX/Y based on mouse position)

### Buttons/CTAs
- **Primary**: Filled with gradient, 48px height, 24px padding horizontal, 12px border-radius
- **Secondary**: Outline style with gradient border, same sizing
- **Hover**: Scale to 1.05, glow effect

### Skill Badges
- **Pill Shape**: Fully rounded (999px border-radius)
- **Size**: 40px height, 16px horizontal padding
- **Animation**: Pulse/glow on scroll-into-view

## Animation Strategy

**Scroll Animations**:
- Sections fade-in from bottom with 30px translateY
- Stagger child elements by 100ms delay
- Trigger at 20% into viewport

**3D Interactions**:
- Hero 3D model: Continuous slow rotation + mouse parallax (±15° max rotation)
- Project cards: Tilt on hover (max 10° rotation)
- Smooth transitions (0.3-0.6s ease-out)

**Cursor Animations**:
- Position: No transition (instant)
- Size/blur: 0.2s ease-out transition
- Particles: Spawn every 50ms, fade over 800ms

**Page Transitions**: Smooth scroll behavior with progress indicator showing current section

## Accessibility Considerations
- Reduced motion: Disable 3D rotations, keep only fade animations
- Cursor animations: Fallback to default cursor for touch devices
- Focus states: Visible 2px outline on all interactive elements
- Semantic HTML: Proper heading hierarchy, ARIA labels for 3D canvas
- Keyboard navigation: Tab through all interactive elements logically

## Images
**No traditional hero image** - replaced with 3D canvas. 

**Project Thumbnails**: 
- 4-6 high-quality project screenshots/mockups
- Dimensions: 1600x900px minimum for retina displays
- Style: Clean, modern device mockups or full-screen captures
- Placement: Within project cards in gallery section

**About Section** (Optional Enhancement):
- Personal photo or abstract graphic: 400x400px, positioned in right column with circular crop
- Style: Minimalist, professional

This portfolio breaks conventional patterns to create a memorable, technically impressive showcase that demonstrates both design sensibility and development capability.