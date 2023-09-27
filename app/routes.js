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

  // recieve applications - if "answer is yes"

  router.post('/recieve-applications-answer', function (req, res) {

    // Get the answer from session data
    const r2recieveApplications = req.session.data['r2-receive-apps']
  
    if (r2recieveApplications === 'yes') {
      res.redirect('/r2/questions/review-questions')
    } else {
      res.redirect('/r2/questions/closing-date')
    }
  })


// ROUTES FOR V4 of Volunteering

  // choose address - if answer is 'my address is not on the list'

  router.post('/select-address-answer', function (req, res) {

    // Get the answer from session data
    const v4selectAddress = req.session.data['v4-select-address']
  
    if (v4selectAddress === 'My address is not on this list') {
      res.redirect('/v4/application/manual-address')
    } else {
      res.redirect('/v4/application/email')
    }
  })
  

// r3 BRANCHING

// Add your routes here - above the module.exports line

  // remote - then go to address if 'no'

  router.post('/r3-remote-answer', function (req, res) {

    // Get the answer from session data
    const r3remote = req.session.data['r3-remote']
  
    if (r3remote === 'no') {
      res.redirect('/r3/questions/address')
    } else {
      res.redirect('/r3/questions/availability')
    }
  })
  
  module.exports = router;

// choose address - if "the address is not listed here"

router.post('/r3-choose-address-answer', function (req, res) {

    // Get the answer from session data
    const r3chooseAddress = req.session.data['r3-choose-address']
  
    if (r3chooseAddress === 'not-listed') {
      res.redirect('/r3/questions/manual-address')
    } else {
      res.redirect('/r3/questions/another-location')
    }
  })

// add another location - if "answer is yes"

router.post('/r3-another-location-answer', function (req, res) {

    // Get the answer from session data
    const r3anotherLocation = req.session.data['r3-another-location']
  
    if (r3anotherLocation === 'yes') {
      res.redirect('/r3/questions/address')
    } else {
      res.redirect('/r3/questions/check-location')
    }
  })

  // contact details - if "answer is no"

router.post('/r3-contact-details-answer', function (req, res) {

  // Get the answer from session data
  const r3contactDetails = req.session.data['r3-contact-details']

  if (r3contactDetails === 'no') {
    res.redirect('/r3/questions/contact-details-change')
  } else {
    res.redirect('/r3/task-list-fixed')
  }
})

  // recieve applications - if "answer is yes"

  router.post('/r3-recieve-applications-answer', function (req, res) {

    // Get the answer from session data
    const r3recieveApplications = req.session.data['r3-receive-apps']
  
    if (r3recieveApplications === 'yes') {
      res.redirect('/r3/questions/review-questions')
    } else {
      res.redirect('/r3/questions/alt-closing-date')
    }
  })  

    // alt-closing-date-answer - if "answer is yes"

    router.post('/r3-closing-date-answer', function (req, res) {

      // Get the answer from session data
      const r3closingDate = req.session.data['r3-closing-date']
    
      if (r3closingDate === 'yes') {
        res.redirect('/r3/questions/alt-closing-date-answer')
      } else {
        res.redirect('/r3/task-list-fixed')
      }
    })  

module.exports = router;



