# CandA
Website C and A

## C&A Advisory Services website

This repository contains the Netlify-ready website for C&A Advisory Services. The site uses static HTML, CSS and JavaScript, with no framework build or package installation required.

### Deploy on Netlify

1. Import this GitHub repository into Netlify and select the `main` branch.
2. Leave the build command blank. The publish directory is `public`, as specified in `netlify.toml`.
3. Under Forms, enable form detection and redeploy. Confirm that `project-inquiry` appears, then submit a test inquiry.
4. Configure form submission email notifications in Netlify if required.
5. Add `candaadvisory.com` in Netlify domain management and use the DNS records provided there. Preserve email verification, MX, SPF and DKIM records when configuring the website domain.

### Repository layout

- `public/`: deployable pages, styling, JavaScript, images, downloads, sitemap and AI discovery text.
- `public/_redirects`: page routing for clean URLs.
- `public/_headers`: security and privacy response headers.
- `netlify.toml`: publish-directory configuration.

### Updating content

Edit the relevant files in `public/` and commit to `main`. Once the repository is connected to Netlify, pushes to the production branch can trigger deployment.

The inquiry form uses Netlify Forms rather than the previous host's database endpoint. Old inquiry records are not part of this repository. The public contact address remains `abhisheksachdeva.ca@gmail.com` until Zoho custom-domain email is configured and tested. When replacing it, update the form error message, privacy contact, visible contact links and structured metadata together.

The site includes the existing client reviews, company marks, sourced world map and browser-based cash-runway calculator. The calculator keeps inputs in the visitor's browser. Client marks and reviews identify the relevant client or professional experience; they should not be relabelled as new C&A engagements without checking their attribution.
