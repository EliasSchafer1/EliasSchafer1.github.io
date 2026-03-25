async function loadPartials() {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const name = el.dataset.include;
    try {
      const res = await fetch(`/partials/${name}.html`);
      if (!res.ok) throw new Error(`Failed to load partial: ${name} (${res.status})`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error(err);
    }
  }

  // Notify other scripts that partials were injected
  document.dispatchEvent(new Event('partialsLoaded'));
}

loadPartials();