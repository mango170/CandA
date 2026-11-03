(() => {
  const form = document.querySelector('#inquiry-form');
  if (!form) return;
  const ready = document.querySelector('#inquiry-ready');
  const status = document.querySelector('#inquiry-status');
  const button = form.querySelector('button[type=submit]');
  const selected = new URLSearchParams(location.search).get('service');
  if ([...form.elements.service.options].some(option => option.value === selected)) {
    form.elements.service.value = selected;
  }
  document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
      form.elements.service.value = link.dataset.service;
      ready.hidden = true;
    });
  });
  form.addEventListener('input', () => { ready.hidden = true; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!['candaadvisory.com', 'www.candaadvisory.com', 'canda-advisory.netlify.app'].includes(location.hostname)) {
      status.textContent = 'Review preview: inquiry submission is disabled. No message has been sent.';
      return;
    }
    if (!form.reportValidity() || button.disabled) return;
    button.disabled = true;
    button.textContent = 'Sending…';
    ready.hidden = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      const values = new FormData(form);
      values.set('form-name', 'project-inquiry');
      const response = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(values).toString(),
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission unavailable');
      status.textContent = 'Thank you. Your inquiry has been received. You can also book a consultation using the Calendly link.';
      form.reset();
    } catch (error) {
      status.textContent = error.name === 'AbortError'
        ? 'We could not confirm receipt. Your details are still here. Please email hello@candaadvisory.com or try again later.'
        : 'Your inquiry could not be sent. Your details are still here. Please retry or email hello@candaadvisory.com.';
    } finally {
      clearTimeout(timer);
      button.disabled = false;
      button.textContent = 'Send my inquiry';
      ready.hidden = false;
      ready.focus();
    }
  });
})();
