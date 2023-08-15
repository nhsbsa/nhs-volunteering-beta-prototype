// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// choose address - if "the address is not listed here"

router.post('/choose-address-answer', function (req, res) {

    // Get the answer from session data
    const r1chooseAddress = req.session.data['r1-choose-address']
  
    if (r1chooseAddress === 'not-listed') {
      res.redirect('/r1/questions/manual-address')
    } else {
      res.redirect('/r1/questions/another-location')
    }
  })

// add another location - if "answer is yes"

router.post('/another-location-answer', function (req, res) {

    // Get the answer from session data
    const r1anotherLocation = req.session.data['r1-another-location']
  
    if (r1anotherLocation === 'yes') {
      res.redirect('/r1/questions/address')
    } else {
      res.redirect('/r1/questions/check-location')
    }
  })

  // contact details - if "answer is yes"

router.post('/contact-details-answer', function (req, res) {

  // Get the answer from session data
  const r1contactDetails = req.session.data['r1-contact-details']

  if (r1contactDetails === 'yes') {
    res.redirect('/r1/questions/contact-details-change')
  } else {
    res.redirect('/r1/task-list-fixed')
  }
})

module.exports = router;

