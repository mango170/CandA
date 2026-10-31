# C&A website expansion review — 1 November 2026

Status: preview only. Do not merge or publish without owner review. Main, production, DNS, notifications, form submissions and visitor-access settings are unchanged.

## Delivered source

- General contact email replaced everywhere in public source, including failure messages, privacy and JSON-LD. Personal email appears in Abhishek's profile.
- New `/industries` hub and nine pages: `/saas-finance`, `/ecommerce-finance`, `/professional-services-finance`, `/healthcare-finance`, `/retail-salon-finance`, `/construction-finance`, `/real-estate-finance`, `/manufacturing-finance`, `/energy-infrastructure-finance`.
- Existing nonprofit and venture-fund pages integrated without duplicate competitors. Original URLs, client attribution and international technical model-review content retained.
- New `/india` hub and `/india/tax-planning`, `/india/business-finance`, `/india/setup-controls`, `/india/cross-border`. India is consultation/advisory only, with no signing, filing execution, representation or reserved-service offers. No invented partner arrangements.
- Country-level location statement, shared navigation/footer, home-page practice choice, service inquiry options, social metadata, JSON-LD, HTML alias redirects, 33-URL sitemap and comprehensive directories.
- Search and training crawler permissions remain unchanged. Supplemental llms.txt is a directory, not a ranking promise. Draft deploys disable forms and carry noindex metadata/headers.

## Owner confirmations before publication

1. Review the four India advisory groups, especially GST consultation availability, NRI/DTAA/FEMA and NGO/charitable-registration readiness topics. These describe discussions and readiness work, not filing, representation or guaranteed eligibility. Remove any advisory topic you do not wish to accept.
2. Confirm whether any filing, portal execution or representation should ever be added in a later scope. None is offered by this preview; publication does not depend on adding them.
3. Review the industry copy and international/India distinction. Existing biographies and experience attribution have been preserved rather than expanded with unverified claims.

## Post-approval publication checklist

- Review and approve this PR, then merge through the normal owner process. The production branch remains main.
- Confirm all clean URLs and .html aliases on Netlify, response codes, mobile/keyboard navigation and structured data against visible text. Use Rich Results Test and Search Console URL Inspection after publication; no rich-result eligibility is promised.
- In Netlify Forms, confirm project-inquiry detection and set the real notification recipient to hello@candaadvisory.com. A controlled real submission and actual inbox receipt must be checked after approval. No private submissions were read.
- In an owner-verified Google Search Console property, submit https://candaadvisory.com/sitemap.xml and inspect `/industries`, `/india` and representative service pages. Use the existing property where available. If unverified, obtain the exact Google HTML-file or TXT token; never invent one or change DNS without authorisation.
- In owner-verified Bing Webmaster Tools, submit the same sitemap. IndexNow is deferred: verify the existing root key's provenance/ownership before reusing it, or generate and host a new supported key after approval, then submit only production URLs changed in this release. No URL submissions were made during preview.
- Check server/CDN access for the published provider search-crawler IP ranges. Search/retrieval controls (OAI-SearchBot, Claude-SearchBot, PerplexityBot) differ from training controls (GPTBot, ClaudeBot). Existing robots choices have not been changed.

## Official references consulted 1 November 2026

- Google: https://developers.google.com/search/docs/appearance/ai-features — normal SEO, crawl access, textual content and accurate schema remain relevant; no special AI file/schema is required.
- Bing/IndexNow: https://www.bing.com/indexnow/getstarted — key hosting and submission do not guarantee indexing.
- OpenAI: https://developers.openai.com/api/docs/bots — search and training crawler controls are separate.
- Anthropic: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler — distinct search, training and user-request agents.
- Perplexity: https://docs.perplexity.ai/docs/resources/perplexity-crawlers — search crawler and user fetcher behaviour.
- ICAI actual 2026 Code, Volume I: https://resource.cdn.icai.org/92475coe2026v1.pdf — website provisions 3.3, pp.152–157, and online third-party platform provision 3.4, p.157 reviewed. This is not a legal clearance of C&A's wider business structure or all inherited biography/marketing content. Owner should confirm that professional capacity and applicable ethical obligations fit the final site; the preview does not assume that an advisory label resolves those obligations.
- Income Tax: https://www.incometax.gov.in/iec/foportal/help/authorize-signatory-faq — authorisation depends on the relevant capacity and conditions; no execution authority is assumed.
- GST: https://cbic-gst.gov.in/pdf/faq-manual/faqs-gst-practitioner.pdf — practitioner authorisation and taxpayer responsibility. This older operational FAQ is not used as a current rates/deadlines source.
- MCA: https://www.mca.gov.in/LLP/pdf/HowToIncorporateLLP.pdf — incorporation has distinct professional and submission requirements; no statutory execution offer is made.

No current tax rates, filing deadlines, eligibility conclusions, remittance permissions, payroll statutory obligations or registration promises are published in the new pages. Those require fact-specific current official verification before future content is added. Search and AI inclusion cannot be guaranteed.

## Validation

See `scripts/check-site.py` (requires BeautifulSoup4 for local checks only; production remains buildless), `scripts/check-interactions.mjs` and the recorded results in this PR. Checks cover local targets/fragments, canonical and sitemap completeness, unique metadata/H1, parseable JSON-LD, labels, old contact/location strings and excluded India offerings. Browser QA limits and hosted preview status are recorded in the final handoff.
