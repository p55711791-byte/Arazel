// TSWW site script
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('copyBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy') || 'tsww.ir:6360';
      function done() {
        var old = btn.textContent;
        btn.textContent = '\u2713 \u06a9\u067e\u06cc \u0634\u062f';
        setTimeout(function(){ btn.textContent = old; }, 1500);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function(){ fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });
  }
  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    cb();
  }
  var contact = document.getElementById('contactLink');
  if (contact && contact.getAttribute('href') === '#contact') {
    contact.title = 'لینک تماس هنوز تنظیم نشده است (PlaceHolder)';
  }
});
