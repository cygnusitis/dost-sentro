# DOST-SENTRO Official Website
**Scholars' Empowered Nationalistic and Tactical Regional Organization**  
*The Official Organization of DOST Scholars in Region III - Central Luzon*

This repository contains the source code for the official DOST-SENTRO website. It is designed as a lightweight, purely static multi-page architecture optimized for zero-cost hosting, rapid loading, and seamless handover to future organizational maintainers.

## 🚀 Features
* **Zero-Cost Deployment:** Fully static architecture (HTML, CSS, JS) designed to be hosted directly on GitHub Pages.
* **Modern & Responsive UI:** Built with CSS Flexbox and Grid, ensuring perfect scaling and readability across desktop, tablet, and mobile devices without standard framework bloat.
* **Serverless Contact Form:** Integrated Form-as-a-Service (FaaS) routing, allowing users to send inquiries directly to the official DOST-SENTRO email without a backend database.
* **Centralized Directory:** A hierarchical visual structure mapping the Regional Executive Council, Committees, and Local Scholar Associations (SAOs) across Central Luzon.
* **Accessible Resources:** Direct routing to DOST Scholarship Examination Review Kits and official organizational initiatives.

## 💻 Tech Stack
* **HTML5:** Semantic structure and placeholder-driven architecture.
* **CSS3:** Custom styling featuring a subtle tech-grid background, modern typography (Poppins & Montserrat), and pure CSS media queries.
* **Vanilla JavaScript:** Lightweight DOM manipulation for mobile navigation toggling.

## 🛠️ Maintenance & Content Updates
This website is built with a strictly structured, placeholder-driven framework so future officers can update content without deep web development experience. 

To update text, links, or images:
1. Open the relevant `.html` file (e.g., `directory.html` to update officers).
2. Use `Ctrl+F` or `Cmd+F` to search for the specific edit tag. Every editable element is preceded by a searchable HTML comment:
   `<!-- EDIT: ELEMENT_NAME -->`
3. Replace the text, `src` URL, or `href` link immediately following the comment.
4. Commit and push your changes to the `main` branch. GitHub Pages will automatically rebuild and deploy the live site.

## 🌐 Local Development & Deployment
**To view locally:**
No local server or build steps are required. Simply download the repository and open `index.html` in any modern web browser.

**To deploy:**
1. Push the repository to GitHub.
2. Navigate to the repository **Settings** > **Pages**.
3. Under **Build and deployment**, set the Source to **Deploy from a branch**.
4. Select the `main` branch and `/root` folder, then click **Save**.
5. The website will be live at `https://[your-username].github.io/[repo-name]/`.

---
*Developed for DOST-SENTRO (Term 2026).*
