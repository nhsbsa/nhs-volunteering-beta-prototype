// "request a new code" on the R21 code pages, built to match the Azure B2C constraint:
// the new code is requested from a button (styled as a link) on the same page,
// with no page reload. The button is never disabled.
//
// Pressed after the wait: the success notification banner is put at the top of the
// page and focused, as the NHS DS notification banner JS does on page load
// (role="alert" plus focus so screen readers announce it and the viewport scrolls
// to it).
// Pressed too soon: the error summary goes in the same place instead and is
// focused, as the NHS DS error summary JS does on page load. Its link moves focus
// back to the button.
// Either one replaces whatever is showing, so a repeat press is announced again.
// The wait is 60 seconds from the last code sent (the first code was sent when the
// page opened). The too soon error says how many seconds are left at the time of
// the press. It is not a live countdown: the number only changes on the next press.
//
// Lockout (all resends used): every press shows the lockout error summary. Its link
// moves focus back to the button, like the too soon error, and its "Try another
// authentication method" link moves focus to that link in the expander. Pages
// without that link drop the item. The 15 minutes never counts down.
//
// The R21 index links open a page with a message already showing:
// ?resend=too-soon, ?resend=sent (both start the 60 seconds from page load) or
// ?resend=lockout (stays locked out).

(function () {
  var button = document.querySelector('[data-resend-code]')
  var mount = document.querySelector('[data-resend-code-mount]')
  var successTemplate = document.getElementById('resend-code-banner')
  var errorTemplate = document.getElementById('resend-code-error')
  var lockoutTemplate = document.getElementById('resend-code-lockout')
  if (!button || !mount || !successTemplate || !errorTemplate || !lockoutTemplate) return

  var state = new URLSearchParams(window.location.search).get('resend')
  var lockedOut = state === 'lockout'
  var waitSeconds = 60
  var lastSent = Date.now()

  function show(template) {
    var message = template.content.firstElementChild.cloneNode(true)
    mount.innerHTML = ''
    mount.appendChild(message)

    message.setAttribute('tabindex', '-1')
    message.addEventListener('blur', function () {
      message.removeAttribute('tabindex')
    }, { once: true })
    message.focus()
    return message
  }

  // Each error link goes to the element its href names, opening the expander first.
  // A link whose element is not on the page is dropped.
  function showError(template) {
    var summary = show(template)
    summary.querySelectorAll('a').forEach(function (link) {
      var target = document.getElementById(link.getAttribute('href').slice(1))
      if (!target) {
        link.closest('li').remove()
        return
      }
      link.addEventListener('click', function (event) {
        event.preventDefault()
        target.closest('details').open = true
        target.focus()
      })
    })
  }

  function press() {
    if (lockedOut) {
      showError(lockoutTemplate)
      return
    }
    var secondsLeft = Math.ceil(waitSeconds - (Date.now() - lastSent) / 1000)
    if (secondsLeft > 0) {
      errorTemplate.content.querySelector('[data-resend-code-wait]').textContent =
        secondsLeft + (secondsLeft === 1 ? ' second' : ' seconds')
      showError(errorTemplate)
    } else {
      lastSent = Date.now()
      show(successTemplate)
    }
  }

  button.addEventListener('click', press)

  if (state === 'sent') lastSent -= waitSeconds * 1000
  if (state === 'lockout' || state === 'too-soon' || state === 'sent') press()
})()
