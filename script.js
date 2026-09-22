// Copy-to-clipboard for the email button in the footer.
(function () {
  var btn = document.getElementById('copyBtn');
  var note = document.getElementById('copiedNote');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var email = 'aguilarjohnlaurence02@gmail.com';

    var showCopied = function () {
      note.textContent = 'Copied ' + email + ' to your clipboard.';
      setTimeout(function () { note.textContent = ''; }, 3500);
    };

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied).catch(function () {
          note.textContent = email;
        });
      } else {
        note.textContent = email;
      }
    } catch (err) {
      note.textContent = email;
    }
  });
})();
