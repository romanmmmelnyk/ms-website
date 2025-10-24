/* ========================================
   REUSABLE STYLES USAGE GUIDE
   ======================================== */

/*
This file contains reusable CSS classes and custom properties that can be used
throughout the application to maintain consistency and reduce code duplication.

USAGE EXAMPLES:

1. GLASS EFFECTS:
   <div class="glass-light">Light glass effect</div>
   <div class="glass-medium">Medium glass effect</div>
   <div class="glass-heavy">Heavy glass effect</div>

2. BORDER RADIUS:
   <div class="rounded-sm">Small radius</div>
   <div class="rounded-lg">Large radius</div>
   <div class="rounded-full">Full radius</div>

3. CARDS:
   <div class="card">Basic card</div>
   <div class="card-elevated">Elevated card with shadow</div>

4. FORM ELEMENTS:
   <input class="form-input-base" placeholder="Input field" />
   <textarea class="form-input-base" placeholder="Textarea"></textarea>

5. BUTTONS:
   <button class="btn-base">Base button</button>
   <button class="btn-base btn-sm">Small button</button>
   <button class="btn-base btn-lg">Large button</button>

6. SECTIONS:
   <section class="section-base">Default section</section>
   <section class="section-base section-sm">Small section</section>
   <section class="section-base section-lg">Large section</section>

7. TEXT STYLES:
   <h1 class="text-gradient">Gradient text</h1>
   <p class="text-muted">Muted text</p>
   <p class="text-subtle">Subtle text</p>

8. ANIMATIONS:
   <div class="animate-fade-in">Fade in animation</div>
   <div class="animate-slide-up">Slide up animation</div>
   <div class="animate-scale">Scale animation</div>

9. HOVER EFFECTS:
   <div class="hover-lift">Lifts on hover</div>
   <div class="hover-lift-lg">Lifts more on hover</div>

10. FOCUS STYLES:
    <input class="focus-ring" /> <!-- Adds focus ring -->

CUSTOM PROPERTIES AVAILABLE:
- --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-2xl, --radius-full
- --spacing-xs through --spacing-6xl
- --glass-bg-light, --glass-bg-medium, --glass-bg-heavy
- --glass-border-light, --glass-border-medium, --glass-border-heavy
- --text-opacity-muted, --text-opacity-subtle, --text-opacity-primary
- --blur-sm, --blur-md, --blur-lg
- --transition-fast, --transition-normal, --transition-slow, --transition-bounce

COMPONENT-SPECIFIC MIXINS:
- .modal-backdrop, .modal-content-base
- .nav-item-base
- .calculator-step-base
- .portfolio-card-base

RESPONSIVE BEHAVIOR:
All utility classes automatically adjust for mobile devices. The responsive
breakpoints are:
- 768px and below: Tablet adjustments
- 480px and below: Mobile adjustments

BEST PRACTICES:
1. Use utility classes for common patterns instead of writing custom CSS
2. Combine multiple utility classes for complex styling
3. Use custom properties for consistent spacing and colors
4. Prefer semantic class names over utility classes for complex components
5. Test responsive behavior on different screen sizes

EXAMPLE COMBINATIONS:
<div class="card glass-medium rounded-lg hover-lift">
  <h3 class="text-gradient">Title</h3>
  <p class="text-muted">Description</p>
  <button class="btn-base btn-sm">Action</button>
</div>
*/
