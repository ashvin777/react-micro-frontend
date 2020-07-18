import path from 'path';

function injectScript({ filePath, name, host }) {
  const scriptId = `microfrontend-script-${name}-${filePath}`;

  if (document.getElementById(scriptId)) {
    return;
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';

    script.id = scriptId;
    script.src = path.join(host, filePath);
    script.defer = true;
    script.async = true;
    script.onload = () => resolve();

    document.body.appendChild(script);
  });
}

function injectStyle({ filePath, name, host }) {
  const linkId = `microfrontend-style-${name}-${filePath}`;

  if (document.getElementById(linkId)) {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';

  link.id = linkId;
  link.href = path.join(host, filePath);

  document.head.appendChild(link);
}

export default async function injectAssets({ manifest, name, host }) {
  let entrypoints = manifest?.entrypoints || [];

  for (let entry of entrypoints) {
    if (entry.match('.js')) {
      await injectScript({ filePath: entry, name, host });
    } else {
      await injectStyle({ filePath: entry, name, host });
    }
  }
}
