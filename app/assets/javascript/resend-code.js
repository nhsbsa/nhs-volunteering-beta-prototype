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
// Prototype only: there is no real wait. Presses alternate, starting with the
// error (the first code was just sent when the page opened), so the next press
// after the error shows the success banner.
//
// Lockout (all resends used): every press shows the lockout error summary. Its link
// moves focus back to the button, like the too soon error.
//
// The R21 index links open a page with a message already showing:
// ?resend=too-soon (next press shows success), ?resend=sent (next press shows the
// too soon error) or ?resend=lockout (stays locked out).

(function () {
  var button = document.querySelector('[data-resend-code]')
  var mount = document.querySelector('[data-resend-code-mount]')
  var successTemplate = document.getElementById('resend-code-banner')
  var errorTemplate = document.getElementById('resend-code-error')
  var lockoutTemplate = document.getElementById('resend-code-lockout')
  if (!button || !mount || !successTemplate || !errorTemplate || !lockoutTemplate) return

  var state = new URLSearchParams(window.location.search).get('resend')
  var lockedOut = state === 'lockout'
  var tooSoon = true

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

  function showError(template, target) {
    var summary = show(template)
    var link = summary.querySelector('a')
    link.setAttribute('href', '#' + target.id)
    link.addEventListener('click', function (event) {
      event.preventDefault()
      target.closest('details').open = true
      target.focus()
    })
  }

  function press() {
    if (lockedOut) {
      showError(lockoutTemplate, button)
      return
    }
    if (tooSoon) {
      showError(errorTemplate, button)
    } else {
      show(successTemplate)
    }
    tooSoon = !tooSoon
  }

  button.addEventListener('click', press)

  if (state === 'sent') tooSoon = false
  if (state === 'lockout' || state === 'too-soon' || state === 'sent') press()
})()
