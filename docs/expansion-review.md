# C&A website review - 3 November 2026

Review only. Reuses draft PR #1 and preview/industry-india-expansion-20261101, based on refreshed head f650269504418094090ffae9065fb4bebd6445a4. Do not merge or publish without Abhishek's approval. Main, production, DNS, form notifications and access settings are unchanged.

## Corrected implementation

- India services now cover registration, filings, ongoing compliance, changes and closure. The user confirmed this scope; earlier advisory-only assumptions and filing exclusions are superseded.
- Rebuilt `/india`, retained and rewrote `/india/tax-planning`, `/india/business-finance`, `/india/setup-controls`, `/india/cross-border`. Added substantive `/india/gst`, `/india/mca-compliance` and `/india/import-export-customs` pages, with reciprocal service navigation, human FAQs and inquiry links.
- Updated homepage practice card, shared navigation/footer, about, industries, nonprofit/fund crosslinks, inquiry option, HTML directory, JSON-LD, social metadata, sitemap and llms.txt. Removed corporate-status lectures and repeated artificial process copy.
- India audit, assurance, attestation and certification are excluded as offerings. Historical professional engagements and original reviews keep their attribution. International accounting, bookkeeping, CFO/FP&A, reporting, models, technical model review and transaction work remain intact. Chahat remains Finance & International Tax Professional.
- No new credentials, partnerships, testimonials, results, pricing or professional signing authority are asserted. Country-level location and confirmed business mailboxes remain.
- Preview build transformation and runtime hostname guard remain. Preview forms cannot submit; no real submissions or private inquiries were accessed. Production source stays indexable; only draft build output receives noindex metadata and headers.

## Official requirements reviewed on 3 November 2026

The content describes operational services without claiming reserved professional authority. No tax rates, deadlines or blanket eligibility tables are published.

- Income Tax Department authorisation manual: https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/authorise-another-person-act-behalf-self-UM . Return preparation is distinct from the applicable verification/authorisation process. The tax page asks for approval and the required verification before submission.
- GST portal GSTR-1 manual: https://tutorial.gst.gov.in/userguide/returns/Creation_of_Outward_Supplies_Return_in_GSTR-1.htm . Filing includes the authorised signatory and DSC/EVC process. The GST page reflects the appropriate portal process without claiming GST practitioner enrolment.
- CBIC registration/authentication rules: https://cbic-gst.gov.in/gst-registration-rules.html . Electronic authentication follows the relevant signatory capacity; a non-CA-firm label is not a blanket ban on operational compliance support.
- MCA LLP Form 24 kit: https://www.mca.gov.in/content/dam/mca-aem-forms/instructionkits/Instruction_Kit_LLP_Form_No_24.pdf . Closure has conditions and supporting-document/signatory requirements; copy promises review and application support, not automatic closure.
- MCA MSC-4 kit: https://www.mca.gov.in/content/dam/formsanddocuments/mca-aem-forms/msc-4/Instruction_Kit_MSC-4.pdf . Professional digital signature requirements vary by form and entity. MCA page identifies a separate eligible appointment where a form requires it. C&A does not advertise certification.
- DGFT IEC manual: https://content.dgft.gov.in/Website/IEC%20Manual%20V2.0_Updated.pdf . Covers applying, modifying and surrendering IEC with relevant applicant authentication. Older operational manual, refreshed at execution; not a current fee/deadline source. IEC need is assessed for the activity rather than asserted for every service exporter.
- Customs operational procedure: https://mumbaicustomszone3.gov.in/procedure-for-imported-goods and ICEGATE roles: https://www.icegate.gov.in/sites/default/files/2023-12/User%20Manual-Enquiries%20Module_V.1.01-compressed.pdf . Customs document support is distinct from importer self-filing and an appointed licensed broker's clearance role. No broker licence or partner arrangement is implied.
- ICAI current code index: https://disc.icai.org/code-of-ethics/ and 2026 Volume I: https://resource.cdn.icai.org/92475coe2026v1.pdf . Reviewed the current edition and relevant website/professional-capacity provisions. This implementation does not determine C&A's entity form, individual practising status or constitute a legal clearance. No legal entity reclassification was made.

## Verification

- `scripts/check-site.py`: all 38 HTML pages, 36 indexable canonical URLs; local routes and fragments, unique titles/descriptions/H1s, JSON-LD, labels, sitemap and llms coverage, email/location and prohibited-copy regressions, social metadata parity and India offering boundaries.
- `scripts/check-interactions.mjs`: calculator boundaries and forecast continuity, India compliance inquiry preselection, preview no-send, mocked production success/failure. No actual messages.
- Preview output checks: every HTML page noindex, every submit button disabled, Netlify form attributes stripped and noindex response headers present. Runtime hostname guard also remains.
- Hosted verification and browser results are recorded below after preview deployment. No claims of full accessibility certification or search-engine indexing are made.

## Publication remains a separate approval

After approval, merge through the normal owner process. Then verify production routes, form detection and a controlled receipt test before changing any notification settings. Use existing verified Search Console and Bing properties to submit the sitemap. No crawler submissions or DNS changes were made during this preview. robots.txt permissions remain unchanged. llms.txt is a supplemental directory and does not guarantee AI inclusion.

## Hosted and browser verification completed

Preview: https://deploy-preview-1--canda-advisory.netlify.app/india . Netlify deploy 6ae91f268b353186a677743c is ready for source a672bfb565deda183947acc7da6df63889527987.

All 36 canonical routes returned HTTP 200 with noindex response headers and metadata. Hosted HTML has no Netlify form-capture attributes and submit buttons remain disabled. Representative new .html aliases and trailing-slash routes resolve, and a missing route returns 404.

Desktop browser inspection covered the India hub, GST route and homepage inquiry. Enter expands the GST FAQ with the corrected affirmative filing answer. The India CTA preselects India compliance and advisory, with submission visibly disabled. No inquiry was sent.

Responsive browser QA used local copies of the preview output in 390px-wide iframes: homepage, India hub and GST page. Headings and service navigation wrap, service cards stack and the menu opens and closes with Escape. GST document scroll width equals its 375px content viewport (390px frame including scrollbar). This is browser rendering at mobile width, not physical-device testing.

Production deploy remains 6ad20b134a0490225918a524, unchanged from the pre-edit snapshot. Draft PR remains open for review. No publication or notification-setting approval is implied.
