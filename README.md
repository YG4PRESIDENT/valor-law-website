# Valor Law Website

A simple, authentic website for Valor Law, LLC - a Grants Pass attorney practice.

## Tech Stack

- **Frontend:** Pure HTML + CSS + JavaScript (no framework)
- **Hosting:** Netlify (free tier)
- **Form Handling:** Netlify Forms (built-in)

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

## Deployment to Netlify

1. Push this repository to GitHub
2. Go to [Netlify](https://www.netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
6. Click "Deploy site"
7. Once deployed, configure your custom domain (carlclyde.com) in Netlify settings

## Form Submissions

Contact form submissions will automatically appear in your Netlify dashboard under "Forms". You can:
- View submissions online
- Set up email notifications
- Export submissions as CSV

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
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Notes

- The site uses a Grants Pass-inspired color palette (forest greens, river blues, warm earth tones)
- Fully responsive design (mobile-friendly)
- No external dependencies - pure vanilla HTML/CSS/JS
- SEO-friendly with proper meta tags

