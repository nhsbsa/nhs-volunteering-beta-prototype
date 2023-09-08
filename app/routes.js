// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// R1 BRANCHING

  // remote - then go to address if 'no'

  router.post('/remote-answer', function (req, res) {

    // Get the answer from session data
    const r1remote = req.session.data['r1-remote']
  
    if (r1remote === 'yes') {
      res.redirect('/r1/questions/address')
    } else {
      res.redirect('/r1/questions/availability')
    }
  })
  
  module.exports = router;

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
    res.redirect('/r1/questions/support-volunteers')
  }
})

// R2 BRANCHING

// Add your routes here - above the module.exports line

  // remote - then go to address if 'no'

  router.post('/r2-remote-answer', function (req, res) {

    // Get the answer from session data
    const r2remote = req.session.data['r2-remote']
  
    if (r2remote === 'no') {
      res.redirect('/r2/questions/address')
    } else {
      res.redirect('/r2/questions/availability')
    }
  })
  
  module.exports = router;

// choose address - if "the address is not listed here"

router.post('/r2-choose-address-answer', function (req, res) {

    // Get the answer from session data
    const r2chooseAddress = req.session.data['r2-choose-address']
  
    if (r2chooseAddress === 'not-listed') {
      res.redirect('/r2/questions/manual-address')
    } else {
      res.redirect('/r2/questions/another-location')
    }
  })

// add another location - if "answer is yes"

router.post('/r2-another-location-answer', function (req, res) {

    // Get the answer from session data
    const r2anotherLocation = req.session.data['r2-another-location']
  
    if (r2anotherLocation === 'yes') {
      res.redirect('/r2/questions/address')
    } else {
      res.redirect('/r2/questions/check-location')
    }
  })

  // contact details - if "answer is yes"

router.post('/r2-contact-details-answer', function (req, res) {

  // Get the answer from session data
  const r2contactDetails = req.session.data['r2-contact-details']

  if (r2contactDetails === 'yes') {
    res.redirect('/r2/questions/contact-details-change')
  } else {
    res.redirect('/r2/task-list-fixed')
  }
})

module.exports = router;

