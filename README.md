# Prodynix Website

Official website for Prodynix - Intelligent Business Automation Solutions

## Tech Stack

- React 18
- Tailwind CSS
- React Router DOM v6
- react-helmet-async (SEO)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/prodynix-website.git
cd prodynix-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The site will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment (Netlify)

This project is configured for easy Netlify deployment:

### Option 1: Connect GitHub Repository

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the repository
5. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

### Option 2: Manual Deploy

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### SPA Routing

The `_redirects` file and `netlify.toml` are configured to handle client-side routing properly.

## Project Structure

```
src/
├── assets/          # Images and static assets
│   └── logo.png
├── components/      # Reusable UI components
│   ├── Button.js
│   ├── Card.js
│   ├── Footer.js
│   ├── Layout.js
│   ├── Navbar.js
│   ├── SectionHeading.js
│   └── index.js
├── pages/           # Page components
│   ├── Home.js
│   ├── Solutions.js
│   ├── Products.js
│   ├── Services.js
│   ├── HowWeWork.js
│   ├── Work.js
│   ├── Contact.js
│   ├── Privacy.js
│   ├── Terms.js
│   └── index.js
├── App.js           # Main app with routing
├── index.js         # Entry point
└── index.css        # Global styles + Tailwind
```

## Pages

- **Home** - Hero, company intro, solution areas, founders section
- **Solutions** - Business automation, AI solutions, custom projects
- **Products** - Prodynix platform showcase
- **Services** - Custom development services
- **How We Work** - 5-step process, expectations, FAQ
- **Work** - Portfolio/case studies (Coming Soon)
- **Contact** - Contact form with validation
- **Privacy** - Privacy Policy
- **Terms** - Terms of Service

## Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  'forge-dark': '#0B0614',
  'forge-accent': '#4F46E5',
  // ...
}
```

### Contact Information

Update contact details in:
- `src/pages/Contact.js` - Email, phone, WhatsApp link
- `src/components/Footer.js` - Social links

### Logo

Replace `src/assets/logo.png` with your own logo.

## Environment Variables (Optional)

Create a `.env` file for environment-specific settings:

```
REACT_APP_API_URL=https://your-api.com
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Prodynix. All rights reserved.
