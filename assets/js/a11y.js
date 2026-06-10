/**
 * Shared accessibility utilities — WCAG 2.2 AA / EN 301 549
 * Used across Nord-Fron kyrkjelege fellesråd pages.
 */
(function () {
  'use strict';

  var HTML_LANG_MAP = {
    bok: 'nb',
    nyn: 'nn',
    eng: 'en',
    ukr: 'uk',
    rus: 'ru'
  };

  window.A11y = {
    htmlLang: function (lang) {
      document.documentElement.lang = HTML_LANG_MAP[lang] || lang || 'nn';
    },

    announce: function (message, priority) {
      var region = document.getElementById('liveAnnouncer');
      if (!region) {
        region = document.createElement('div');
        region.id = 'liveAnnouncer';
        region.className = 'live-region';
        region.setAttribute('aria-live', priority || 'polite');
        region.setAttribute('aria-atomic', 'true');
        region.setAttribute('role', 'status');
        document.body.appendChild(region);
      }
      region.setAttribute('aria-live', priority || 'polite');
      region.textContent = '';
      window.setTimeout(function () {
        region.textContent = message;
      }, 50);
    },

    setExpanded: function (el, expanded) {
      if (el) el.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    },

    migrateLang: function (stored) {
      if (!stored) return 'nyn';
      if (HTML_LANG_MAP[stored]) return stored;
      for (var key in HTML_LANG_MAP) {
        if (HTML_LANG_MAP[key] === stored) return key;
      }
      return 'nyn';
    },

    trapFocus: function (container) {
      if (!container) return null;
      var query = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      var focusable = Array.prototype.slice.call(container.querySelectorAll(query));
      if (focusable.length === 0) return null;

      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      function handler(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }

      container.addEventListener('keydown', handler);
      first.focus();
      return function () {
        container.removeEventListener('keydown', handler);
      };
    },

    bindDialog: function (overlay, options) {
      if (!overlay) return;
      var content = overlay.querySelector('.modal-content') || overlay;
      var releaseFocus = null;
      var trigger = options && options.trigger;

      function close() {
        overlay.style.display = 'none';
        overlay.setAttribute('aria-hidden', 'true');
        if (releaseFocus) {
          releaseFocus();
          releaseFocus = null;
        }
        if (trigger) trigger.focus();
      }

      function open() {
        overlay.style.display = 'flex';
        overlay.setAttribute('aria-hidden', 'false');
        releaseFocus = window.A11y.trapFocus(content);
      }

      var api = { open: open, close: close };

      overlay.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') api.close();
      });

      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) api.close();
      });

      return api;
    }
  };
})();