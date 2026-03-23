(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'projects.html', label: 'Projects' },
    { href: 'blog.html',     label: 'Blog' },
    { href: 'about.html',    label: 'About' },
    { href: 'connect.html',  label: 'Connect' },
  ];

  const navLinks = links.map(({ href, label }) => {
    const isActive = page === href || (page === '' && href === 'index.html');
    return isActive
      ? `<a class="text-purple-800 font-bold border-b-2 border-purple-500/50 font-['Plus_Jakarta_Sans'] tracking-tight" href="${href}">${label}</a>`
      : `<a class="text-slate-600 hover:text-purple-600 transition-colors font-['Plus_Jakarta_Sans'] tracking-tight font-medium" href="${href}">${label}</a>`;
  }).join('');

  const navHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full">
      <nav class="bg-white/60 backdrop-blur-xl rounded-full mt-6 mx-auto max-w-fit px-6 py-2 shadow-[0_8px_32px_rgba(149,44,177,0.06)] flex items-center gap-8">
        <a href="index.html" class="text-2xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">Home</a>
        <div class="hidden md:flex items-center gap-6">${navLinks}</div>
        <a href="connect.html" class="bg-gradient-to-br from-[#952cb1] to-[#f1a6ff] text-white px-5 py-1.5 rounded-full text-sm font-semibold scale-95 hover:scale-100 active:scale-90 transition-transform duration-300">Resume</a>
      </nav>
    </header>`;

  const footerHTML = `
    <footer class="bg-[#f8f2f5] w-full py-12 mt-20 border-t border-[#b6b0b5]/20">
      <div class="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div>
          <a href="index.html" class="text-lg font-bold text-[#343136]">Home</a>
          <p class="text-sm text-[#625e62] mt-1">© 2026 Jan Krzyszkowski.</p>
        </div>
        <div class="flex gap-8 text-sm">
          ${links.map(({ href, label }) => `<a href="${href}" class="text-[#625e62] hover:text-[#952cb1] transition-colors">${label}</a>`).join('')}
        </div>
        <div class="flex gap-6 text-sm">
          <a href="https://github.com/dr3du4" target="_blank" rel="noopener" class="text-[#625e62] hover:text-[#952cb1] transition-colors">GitHub</a>
          <a href="https://4m4r3n4.itch.io/" target="_blank" rel="noopener" class="text-[#625e62] hover:text-[#952cb1] transition-colors">Itch.io</a>
          <a href="https://substack.com/@janwojtekkrzyszkowski" target="_blank" rel="noopener" class="text-[#625e62] hover:text-[#952cb1] transition-colors">Substack</a>
        </div>
      </div>
    </footer>`;

  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = navHTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
