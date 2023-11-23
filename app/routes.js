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

  // receive applications - if "answer is yes"

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
    res.redirect('/r3/task-list-section-1-completed')
  }
})

  // receive applications - if "answer is yes"

  router.post('/r3-recieve-applications-answer', function (req, res) {

    // Get the answer from session data
    const r3recieveApplications = req.session.data['r3-receive-apps']
  
    if (r3recieveApplications === 'yes') {
      res.redirect('/r3/questions/application-limits')
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
        res.redirect('/r3/task-list-completed')
      }
    })  

module.exports = router;


// r4 BRANCHING

// Add your routes here - above the module.exports line

  // remote - then go to address if 'no'

  router.post('/r4-remote-answer', function (req, res) {

    // Get the answer from session data
    const r4remote = req.session.data['r4-remote']
  
    if (r4remote === 'no') {
      res.redirect('/r4/questions/address')
    } else {
      res.redirect('/r4/questions/availability')
    }
  })
  
  module.exports = router;

// choose address - if "the address is not listed here"

router.post('/r4-choose-address-answer', function (req, res) {

    // Get the answer from session data
    const r4chooseAddress = req.session.data['r4-choose-address']
  
    if (r4chooseAddress === 'not-listed') {
      res.redirect('/r4/questions/manual-address')
    } else {
      res.redirect('/r4/questions/check-location')
    }
  })

// add another location - if "answer is yes"

router.post('/r4-another-location-answer', function (req, res) {

    // Get the answer from session data
    const r4anotherLocation = req.session.data['r4-another-location']
  
    if (r4anotherLocation === 'yes') {
      res.redirect('/r4/questions/address')
    } else {
      res.redirect('/r4/questions/availability')
    }
  })

  // contact details - if "answer is no"

router.post('/r4-contact-details-answer', function (req, res) {

  // Get the answer from session data
  const r4contactDetails = req.session.data['r4-contact-details']

  if (r4contactDetails === 'no') {
    res.redirect('/r4/questions/contact-details-change')
  } else {
    res.redirect('/r4/task-list-section-1-completed')
  }
})

  // receive applications - if "answer is yes"

  router.post('/r4-recieve-applications-answer', function (req, res) {

    // Get the answer from session data
    const r4recieveApplications = req.session.data['r4-receive-apps']
  
    if (r4recieveApplications === 'yes') {
      res.redirect('/r4/questions/application-limits')
    } else {
      res.redirect('/r4/questions/alt-closing-date')
    }
  })  

    // alt-closing-date-answer - if "answer is yes"

    router.post('/r4-closing-date-answer', function (req, res) {

      // Get the answer from session data
      const r4closingDate = req.session.data['r4-closing-date']
    
      if (r4closingDate === 'yes') {
        res.redirect('/r4/questions/alt-closing-date-answer')
      } else {
        res.redirect('/r4/task-list-completed')
      }
    })  

// V5 Branching for EDI questions 

// equality-questions - if answer is "yes"

router.post('/v5-equality-questions-answer', function (req, res) {

  // Get the answer from session data
  const v5equalityQuestions = req.session.data['v5-equality-questions']

  if (v5equalityQuestions === 'yes') {
    res.redirect('/v5/edi/dob')
  } else {
    res.redirect('v4/application/submitted')
  }
})

// health-conditions - if answer is "yes"

router.post('/v5-health-conditions-answer', function (req, res) {

  // Get the answer from session data
  const v5healthConditions = req.session.data['v5-health-conditions']

  if (v5healthConditions === 'yes') {
    res.redirect('/v5/edi/day-activities')
  } else {
    res.redirect('v5/edi/ethnic-group')
  }
})

// ethnic group branching

router.post('/v5-ethnic-group-answer', function (req, res) {

  // Get the answer from session data
  const v5ethnicGroup = req.session.data['v5-ethnic-group']

  if (v5ethnicGroup === 'white') {
    res.redirect('/v5/edi/background-white')
  } else if (v5ethnicGroup === 'mixed-multiple') {
    res.redirect('v5/edi/background-mixed-multiple')
  } else if (v5ethnicGroup === 'asian') {
    res.redirect('v5/edi/background-asian')
  } else if (v5ethnicGroup === 'black') {
    res.redirect('v5/edi/background-black')
  } else if (v5ethnicGroup === 'other-ethnic') {
    res.redirect('v5/edi/background-other')
  } else {
    res.redirect('v5/edi/religion')
  }
})

// sex - if answer is "Male" or "Female"

router.post('/v5-sex-answer', function (req, res) {

  // Get the answer from session data
  const v5sex = req.session.data['v5-sex']

  if (v5sex != 'prefer-not-say') {
    res.redirect('/v5/edi/gender-identity')
  } else {
    res.redirect('v5/edi/sexual-orientation')
  }
})

module.exports = router;



