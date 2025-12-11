# Valor Law Website

A simple, authentic website for Valor Law, LLC - a Grants Pass attorney practice.

## Tech Stack

- **Frontend:** Pure HTML + CSS + JavaScript (no framework)
- **Hosting:** GitHub Pages (free)
- **Form Handling:** Formspree (free tier) - see setup instructions below

## Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## Deployment to GitHub Pages

1. Push this repository to GitHub (already done!)
2. Go to your repository on GitHub: `https://github.com/YG4PRESIDENT/valor-law-website`
3. Click **Settings** → **Pages**
4. Under "Source", select **GitHub Actions**
5. The site will automatically deploy when you push to the `master` branch
6. Your site will be live at: `https://YG4PRESIDENT.github.io/valor-law-website`
7. To use a custom domain (carlclyde.com):
   - In Pages settings, add your custom domain
   - Update your domain's DNS to point to GitHub Pages (instructions will appear)

## Form Setup (Formspree)

The contact form uses Formspree for submissions. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form - you'll get a form ID (looks like `xqwerty123`)
3. In `index.html`, replace `YOUR_FORM_ID` on line 103 with your actual Formspree form ID
4. Formspree will email you submissions (free tier: 50 submissions/month)

Alternatively, you can remove the form and just use the phone/email links displayed.

## Customization

- **Colors:** Edit CSS variables in `css/styles.css` (`:root` section)
- **Content:** Edit HTML files directly
- **Logo:** Replace `images/valor_law_logo.jpeg` with your logo (keep the same filename or update references)

## File Structure

```
.
├── index.html          # Home page
├── about.html          # About Carl
├── services.html       # Services page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   └── valor_law_logo.jpeg
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── README.md           # This file
```

## Notes

- The site uses a Grants Pass-inspired color palette (forest greens, river blues, warm earth tones)
- Fully responsive design (mobile-friendly)
- No external dependencies - pure vanilla HTML/CSS/JS
- SEO-friendly with proper meta tags

