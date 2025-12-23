# DentivaSystems

A high-converting landing page for DentivaSystems - the autonomous front desk system for dental practices. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Interactive Revenue Leak Calculator** - Real-time calculation with detailed breakdown:
  - No-Show Loss calculation
  - Admin Labor Leak ($1,200/month fixed cost)
  - Reactivation Gap (10% of monthly production)
  - Total monthly and annual revenue leak display
- **Dual Booking Options**:
  - Calendly inline widget for direct booking
  - Custom callback request form with validation
  - Toggle between both options seamlessly
- **Animated Sections** - Smooth Framer Motion animations throughout
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Multi-step Lead Capture** - React Hook Form integration with full validation
- **High-Ticket Positioning** - Strategic comparison to clinical equipment investments

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/app
  /layout.tsx        # Root layout with metadata
  /page.tsx          # Main landing page
  /globals.css       # Global styles and Tailwind imports
/components
  /Header.tsx                    # Sticky header with CTA
  /HeroSection.tsx               # Hero with headline and calculator
  /RevenueLeakCalculator.tsx     # Interactive calculator
  /ThreePillars.tsx              # Core features section
  /TechStackIntegration.tsx      # PMS integration showcase
  /HighTicketPositioning.tsx     # Investment comparison
  /BookingSection.tsx            # Discovery call booking form
  /Footer.tsx                    # Site footer
```

## Customization

### Colors
The design uses a "Trust Blue" color scheme. Modify in `tailwind.config.ts`:

```typescript
colors: {
  'trust-blue': {
    // Your custom blue shades
  }
}
```

### Booking Integration

**Calendly Setup:**
✅ Already configured with: `https://calendly.com/johnowolabi/dentiva-discovery-call`

To update:
1. Edit `components/CalendlyWidget.tsx:9`
2. Replace with your Calendly link
3. The widget will automatically load and display your calendar

**Form Integration:**
Update the form submission in `components/BookingSection.tsx:22` to integrate with:
- Your CRM (GoHighLevel, HubSpot, etc.)
- Email service (SendGrid, Mailgun, etc.)
- Custom webhook endpoint

### Logo Images
Add PMS logos to `/public/logos/` directory:
- dentrix.svg
- eaglesoft.svg
- opendental.svg

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily with:
- Vercel (recommended)
- Netlify
- Any hosting platform supporting Next.js

## License

Proprietary - DentivaSystems
