// Shared language detection (system language, English fallback) + switcher.
(function () {
  function codes() { return Object.keys(window.I18N); }

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved && window.I18N[saved]) return saved;
    var nav = (navigator.language || 'en').toLowerCase().split('-')[0];
    if (window.I18N[nav]) return nav;
    return 'en';
  }

  function buildSwitcher() {
    var sel = document.getElementById('langSwitch');
    if (!sel) return;
    codes().forEach(function (c) {
      var o = document.createElement('option');
      o.value = c;
      o.textContent = window.I18N[c].name;
      sel.appendChild(o);
    });
    sel.value = getLang();
    sel.addEventListener('change', function () {
      try { localStorage.setItem('lang', sel.value); } catch (e) {}
      apply(sel.value);
    });
  }

  function apply(lang) {
    lang = lang || getLang();
    var data = window.I18N[lang];
    document.documentElement.lang = lang;
    if (window.renderPage) window.renderPage(data);
  }

  if (document.readyState !== 'loading') { buildSwitcher(); apply(); }
  else document.addEventListener('DOMContentLoaded', function () { buildSwitcher(); apply(); });
})();
