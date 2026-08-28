// Live preview of the applicant-facing question on the recruiter (r20/r22) pre-application pages.
// Follows the character count approach: the visible preview updates as you type,
// a visually hidden aria-live="polite" copy is updated one second after typing stops.

(function () {
  var previews = document.querySelectorAll('[data-preview]')
  if (!previews.length) return

  Array.prototype.forEach.call(previews, function (preview) {
    var live = document.createElement('div')
    live.className = 'nhsuk-u-visually-hidden'
    live.setAttribute('aria-live', 'polite')
    preview.parentNode.insertBefore(live, preview.nextSibling)
    var timer = null

    function announce() {
      clearTimeout(timer)
      timer = setTimeout(function () {
        if (preview.hidden) return
        live.textContent = preview.textContent.replace(/\s+/g, ' ').trim()
      }, 1000)
    }

    Array.prototype.forEach.call(preview.querySelectorAll('[data-preview-value]'), function (span) {
      var input = document.getElementById(span.getAttribute('data-preview-value'))
      if (!input) return
      var fallback = span.getAttribute('data-preview-default') || ''
      input.addEventListener('input', function () {
        span.textContent = input.value.trim() || fallback
        announce()
      })
    })

    // Optional: only show this preview while a given radio value is selected
    var radioName = preview.getAttribute('data-preview-radio')
    if (radioName) {
      var radioValue = preview.getAttribute('data-preview-radio-value')
      var radios = document.querySelectorAll('input[type="radio"][name="' + radioName + '"]')
      function sync() {
        var checked = document.querySelector('input[type="radio"][name="' + radioName + '"]:checked')
        preview.hidden = !(checked && checked.value === radioValue)
        if (!preview.hidden) announce()
      }
      Array.prototype.forEach.call(radios, function (radio) {
        radio.addEventListener('change', sync)
      })
      sync()
    }
  })
})()
