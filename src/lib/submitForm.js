// Posts a form to Netlify Forms. The form name must match a form declared in
// public/__forms.html so Netlify registers it at build time. Works once the
// site is hosted on Netlify; submissions appear under Site → Forms.
export async function submitNetlifyForm(formName, data) {
  const body = new URLSearchParams({ 'form-name': formName, ...data }).toString();
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}
