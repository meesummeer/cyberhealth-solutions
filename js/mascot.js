(function () {
  var toggle = document.getElementById('mascotToggle');
  var panel = document.getElementById('mascotPanel');
  var closeBtn = document.getElementById('mascotClose');
  var form = document.getElementById('mascotForm');
  if (!toggle || !panel || !form) return;

  function onKeydown(e) {
    if (e.key === 'Escape') closePanel();
  }

  function onOutsideClick(e) {
    if (!panel.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
      closePanel();
    }
  }

  function openPanel() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.classList.add('is-open');
    var nameInput = document.getElementById('mascotName');
    if (nameInput) nameInput.focus();
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onOutsideClick, true);
  }

  function closePanel() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('is-open');
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onOutsideClick, true);
  }

  toggle.addEventListener('click', function () {
    if (panel.hidden) openPanel();
    else closePanel();
  });

  closeBtn.addEventListener('click', closePanel);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('mascotName').value.trim();
    var email = document.getElementById('mascotEmail').value.trim();
    var message = document.getElementById('mascotMessage').value.trim();

    var subject = encodeURIComponent('Website inquiry from ' + (name || 'a visitor'));
    var bodyLines = [message, '', '— ' + (name || 'a visitor'), email].join('\n');
    var body = encodeURIComponent(bodyLines);

    window.location.href = 'mailto:hello@cyberhealth-solutions.com?subject=' + subject + '&body=' + body;
    closePanel();
    form.reset();
  });
})();
