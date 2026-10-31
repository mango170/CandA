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

The inquiry form uses Netlify Forms. General inquiries use `hello@candaadvisory.com`; Abhishek's confirmed personal business mailbox is `abhishek@candaadvisory.com`. Production notification settings must be checked after publication approval. Do not test with real submissions on draft previews. Preview and branch builds disable forms and carry noindex headers through `scripts/prepare-preview.mjs`.

International accounting, CFO, reporting and financial-model services remain separate from the India consultation-and-advisory practice. India does not advertise signing, filing execution or representation. Do not imply that C&A is an Indian CA firm. Preserve existing URLs and professional attribution. See `docs/expansion-review.md` for review dependencies and post-approval checks.

The site includes the existing client reviews, company marks, sourced world map and browser-based cash-runway calculator. The calculator keeps inputs in the visitor's browser. Client marks and reviews identify the relevant client or professional experience; they should not be relabelled as new C&A engagements without checking their attribution.
