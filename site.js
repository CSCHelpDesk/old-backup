/* ===== CSC DESK: single source of truth. Edit here, every page updates. ===== */
const SITE = {
  name: "CSC Desk",            // change brand name here
  year: 2026,
  nav: [
    { label: "Home",        href: "index.html",        icon: "house" },
    { label: "All tools",   href: "index.html#tools",  icon: "toolbox" },
    { label: "Quick links", href: "index.html#links",  icon: "bolt" }
    // add About / Contact / Privacy here once those pages exist
  ],
  quickLinks: [   // official portals only; re-check URLs every few months
    ["Aadhaar", "UIDAI download & update", "id-card", "https://uidai.gov.in"],
    ["PAN card", "NSDL / UTIITSL", "address-card", "https://www.onlineservices.nsdl.com"],
    ["Ayushman card", "Eligibility & status", "shield-halved", "https://beneficiary.nha.gov.in"],
    ["Driving licence", "Parivahan Sarathi", "car", "https://sarathi.parivahan.gov.in"],
    ["Income tax", "e-Filing portal", "indian-rupee-sign", "https://www.incometax.gov.in"],
    ["UHBVN bill", "Haryana north zone", "bolt", "https://uhbvn.org.in"],
    ["DHBVN bill", "Haryana south zone", "bolt", "https://dhbvn.org.in"]
  ],
  cats: ["CSC counter", "Documents", "Photo & ID print", "PDF & image", "Calculators", "Utilities"],
  // [title, category, file, icon, description, live?]  -> add one line per new template.
  // live=1 shows "Ready"; live=0 shows "Soon" and is not clickable.
  tools: [
    ["Utility bill receipt", "CSC counter", "tools_bill_receipt_generator.html", "receipt", "Two half-A4 receipts: customer copy and office copy.", 1],
    ["Service rate list", "CSC counter", "csc-rate-list.html", "list-check", "Printable rate board for your counter.", 0],
    ["Counter stamp maker", "CSC counter", "csc-stamp-maker.html", "stamp", "Round and rectangle shop stamps.", 0],
    ["Invoice generator", "CSC counter", "invoice-generator.html", "file-invoice", "Simple GST-ready invoices.", 0],
    ["Visiting card maker", "CSC counter", "visiting-card-maker.html", "address-book", "Print-ready cards, 10 per A4.", 0],
    ["Resume builder", "Documents", "tools_resume_builder.html", "file-lines", "Bilingual A4 resumes with border styles and live preview.", 1],
    ["Marriage biodata", "Documents", "tools_biodata_maker.html", "ring", "Family details, horoscope and partner preferences.", 1],
    ["Rent agreement", "Documents", "tools_agreement_format_generator.html", "house", "Residential and commercial formats.", 1],
    ["Salary slip", "Documents", "tools_salary_slip_generator.html", "money-check-dollar", "Earnings, deductions and net pay.", 1],
    ["Affidavit formats", "Documents", "affidavit-format.html", "scale-balanced", "Common affidavit drafts.", 0],
    ["Cover letter", "Documents", "cover-letter.html", "envelope-open-text", "Job application letters.", 0],
    ["Bank application", "Documents", "bank-application.html", "building-columns", "Standard letters for bank work.", 0],
    ["Admit card holder", "Documents", "admit-card.html", "ticket", "Keep exam admit card details together.", 0],
    ["Passport photo sheet", "Photo & ID print", "tools_passport_photo_sheet.html", "image", "Passport and stamp photos on A4.", 1],
    ["PAN & ID card print", "Photo & ID print", "tools_pan_aadhaar_print.html", "print", "Front and back card scans at exact size.", 1],
    ["PVC card layout", "Photo & ID print", "pvc-card-print.html", "credit-card", "Fit cards to PVC printer sheets.", 0],
    ["Student ID card", "Photo & ID print", "student-id-card.html", "graduation-cap", "School and college ID layouts.", 0],
    ["Photo + name joiner", "Photo & ID print", "photo-name-joiner.html", "id-badge", "Add name and date strip for exam forms.", 0],
    ["Photo + signature joiner", "Photo & ID print", "photo-signature-joiner.html", "signature", "Combine photo and signature in one image.", 0],
    ["Image resizer", "PDF & image", "image-resizer.html", "up-right-and-down-left-from-center", "Resize to exact pixels or KB.", 0],
    ["Image compressor", "PDF & image", "image-compressor.html", "compress", "Reduce size for portal uploads.", 0],
    ["Image to PDF", "PDF & image", "image-to-pdf.html", "file-pdf", "Turn photos and scans into one PDF.", 0],
    ["PDF merge", "PDF & image", "pdf-merge.html", "object-group", "Join several PDFs.", 0],
    ["PDF split", "PDF & image", "pdf-split.html", "scissors", "Pull pages out of a PDF.", 0],
    ["Crop image", "PDF & image", "image-crop.html", "crop-simple", "Crop to standard form sizes.", 0],
    ["Age calculator", "Calculators", "tools_age_calculator.html", "cake-candles", "Exact age for exam forms.", 1],
    ["GST calculator", "Calculators", "tool-template.html", "percent", "Add or remove GST from a price.", 1],
    ["Loan EMI calculator", "Calculators", "loan-emi-calculator.html", "calculator", "Monthly EMI and total interest.", 0],
    ["Percentage / CGPA", "Calculators", "percentage-calculator.html", "chart-simple", "Marks percentage and CGPA conversion.", 0],
    ["Date difference", "Calculators", "date-calculator.html", "calendar-days", "Days between two dates.", 0],
    ["QR code generator", "Utilities", "qr-code-generator.html", "qrcode", "QR for links, UPI and text.", 0],
    ["Typing test", "Utilities", "typing-test.html", "keyboard", "English and Hindi typing speed.", 0],
    ["Gold & silver rate", "Utilities", "gold-silver-rate.html", "coins", "Daily rate reference.", 0],
    ["Notebook name sticker", "Utilities", "notebook-sticker.html", "book", "Printable name labels.", 0]
  ]
};

(function () {
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const here = location.pathname.split('/').pop() || 'index.html';
  const I = n => `<i class="fa-solid fa-${n}" aria-hidden="true"></i>`;

  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `<div class="nav">
      <a class="logo" href="index.html"><span class="logo-mark">${I('desktop')}</span>${esc(SITE.name)}</a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Menu">${I('bars')}</button>
      <ul class="nav-links" id="nav-links">${SITE.nav.map(n =>
        `<li><a href="${esc(n.href)}"${n.href === here ? ' aria-current="page"' : ''}>${I(n.icon)}${esc(n.label)}</a></li>`).join('')}</ul></div>`;
    const b = header.querySelector('.nav-toggle'), l = header.querySelector('.nav-links');
    b.addEventListener('click', () => b.setAttribute('aria-expanded', l.classList.toggle('open')));
  }
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `<p>&copy; ${SITE.year} ${esc(SITE.name)}. Free tools for CSC operators and cyber cafes.</p>
      <p>Not a government website. Quick links open official portals in a new tab.</p>`;
  }
  const q = document.getElementById('quick-links');
  if (q) q.innerHTML = SITE.quickLinks.map(([t, s, i, u]) =>
    `<a class="quick-card" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${I(i)}<div><h3>${esc(t)}</h3><p>${esc(s)}</p></div><span class="ext">${I('arrow-up-right-from-square')}</span></a>`).join('');

  const list = document.getElementById('tool-list');
  if (list) {
    const cats = document.getElementById('cats'), search = document.getElementById('tool-search');
    const all = ['All', ...SITE.cats]; let cat = 'All';
    const count = c => SITE.tools.filter(t => c === 'All' || t[1] === c).length;
    const stat = document.getElementById('stat-count');
    if (stat) stat.textContent = SITE.tools.filter(t => t[5]).length + ' ready, ' + SITE.tools.filter(t => !t[5]).length + ' coming';
    cats.innerHTML = all.map(c => `<button class="cat" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)} <small>${count(c)}</small></button>`).join('');
    const draw = () => {
      const term = search.value.trim().toLowerCase();
      const rows = SITE.tools.filter(t => (cat === 'All' || t[1] === cat) && (t[0] + ' ' + t[4] + ' ' + t[1]).toLowerCase().includes(term))
        .sort((a, b) => b[5] - a[5]);
      list.innerHTML = rows.length ? rows.map(([t, c, f, i, d, live]) => {
        const inner = `<span class="tool-ico">${I(i)}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div><span class="tag ${live ? 'live' : 'soon'}">${live ? 'Ready' : 'Soon'}</span>`;
        return live ? `<a class="tool" href="${esc(f)}">${inner}</a>` : `<div class="tool is-soon">${inner}</div>`;
      }).join('') : '<p class="empty">No tool found. Try another word, or pick All.</p>';
    };
    cats.addEventListener('click', e => {
      const b = e.target.closest('.cat'); if (!b) return; cat = b.dataset.c;
      cats.querySelectorAll('.cat').forEach(x => x.setAttribute('aria-pressed', x === b)); draw();
    });
    search.addEventListener('input', draw); draw();
  }
})();
