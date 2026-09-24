'use strict';

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.status');
    if (button.disabled) return;
    button.disabled = true;
    status.textContent = 'Sending your message…';
    const fields = new FormData(form);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          source: 'Website: ' + location.pathname,
          name: fields.get('name'), email: fields.get('email'), message: fields.get('message')
        }),
        signal: AbortSignal.timeout(20000)
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Message not confirmed');
      status.textContent = 'Thanks—your message has been sent. We’ll be in touch.';
      form.reset();
    } catch {
      status.textContent = 'We couldn’t confirm your message was sent. Please email dustin@actoradvisory.com or call 603-748-1647.';
    } finally {
      button.disabled = false;
    }
  });
});
const loginDialog = document.querySelector('#login-dialog');
document.querySelector('#login-open')?.addEventListener('click', () => loginDialog?.showModal());
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog')?.close());
});
