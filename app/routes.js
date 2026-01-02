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


// ROUTES FOR v9 of Volunteering

  // choose address - if answer is 'my address is not on the list'

  router.post('/select-address-answer', function (req, res) {

    // Get the answer from session data
    const v9selectAddress = req.session.data['v9-select-address']
  
    if (v9selectAddress === 'My address is not on this list') {
      res.redirect('/v9/application/manual-address')
    } else {
      res.redirect('/v9/application/email')
    }
  })

// ROUTES FOR v9 of Volunteering

  // choose address - if answer is 'my address is not on the list'

  router.post('/v9-select-address-answer', function (req, res) {

    // Get the answer from session data
    const v9selectAddress = req.session.data['v9-select-address']
  
    if (v9selectAddress === 'My address is not on this list') {
      res.redirect('/v9/application/manual-address')
    } else {
      res.redirect('/v9/application/email')
    }
  })
 
// ROUTES FOR of Volunteering

  // choose address - if answer is 'my address is not on the list'

  router.post('/v9-select-address-answer', function (req, res) {

    // Get the answer from session data
    const v9selectAddress = req.session.data['v9-select-address']
  
    if (v9selectAddress === 'My address is not on this list') {
      res.redirect('/v9/application/manual-address')
    } else {
      res.redirect('/v9/application/email')
    }
  })  


  // ROUTES FOR v9 of Volunteering

  // choose address - if answer is 'my address is not on the list'

  router.post('/v9-select-address-answer', function (req, res) {

    // Get the answer from session data
    const v9selectAddress = req.session.data['v9-select-address']
  
    if (v9selectAddress === 'My address is not on this list') {
      res.redirect('/v9/application/manual-address')
    } else {
      res.redirect('/v9/application/email')
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


// R5 Branching

// alt-closing-date-answer - if "answer is yes"

router.post('/r5-closing-date-answer', function (req, res) {

  // Get the answer from session data
  const r5closingDate = req.session.data['r5-closing-date']

  if (r5closingDate === 'yes') {
    res.redirect('/r5/manage-listing/questions/alt-closing-date-answer')
  } else {
    res.redirect('/r5/task-list-completed')
  }
})  

// v9 Branching for EDI questions 

// equality-questions - if answer is "yes"

router.post('/v9-equality-questions-answer', function (req, res) {

  // Get the answer from session data
  const v9equalityQuestions = req.session.data['v9-equality-questions']

  if (v9equalityQuestions === 'yes') {
    res.redirect('/v9/edi/dob')
  } else {
    res.redirect('v9/edi/equality-questions-skip')
  }
})

// v9 Branching for EDI questions 

// equality-questions - if answer is "yes"

router.post('/v9-equality-questions-answer', function (req, res) {

  // Get the answer from session data
  const v9equalityQuestions = req.session.data['v9-equality-questions']

  if (v9equalityQuestions === 'yes') {
    res.redirect('/v9/edi/dob')
  } else {
    res.redirect('v9/edi/equality-questions-skip')
  }
})

// health-conditions - if answer is "yes"

router.post('/v9-health-conditions-answer', function (req, res) {

  // Get the answer from session data
  const v9healthConditions = req.session.data['v9-health-conditions']

  if (v9healthConditions === 'yes') {
    res.redirect('/v9/edi/day-activities')
  } else {
    res.redirect('v9/edi/ethnic-group')
  }
})

// ethnic group branching

router.post('/v9-ethnic-group-answer', function (req, res) {

  // Get the answer from session data
  const v9ethnicGroup = req.session.data['v9-ethnic-group']

  if (v9ethnicGroup === 'white') {
    res.redirect('/v9/edi/background-white')
  } else if (v9ethnicGroup === 'mixed-multiple') {
    res.redirect('v9/edi/background-mixed-multiple')
  } else if (v9ethnicGroup === 'asian') {
    res.redirect('v9/edi/background-asian')
  } else if (v9ethnicGroup === 'black') {
    res.redirect('v9/edi/background-black')
  } else if (v9ethnicGroup === 'other-ethnic') {
    res.redirect('v9/edi/background-other')
  } else {
    res.redirect('v9/edi/religion')
  }
})

  // BSA Admin - if "answer is Search"

  router.post('/a1-recruiter-search-or-register-answer', function (req, res) {

    // Get the answer from session data
    const a1RecruiterSearchOrRegister = req.session.data['a1-recruiter-search-or-register']
  
  if (a1RecruiterSearchOrRegister === 'yes') {
    res.redirect('/bsa-admin/a1/search-organisation')
  } else {
    res.redirect('/bsa-admin/organisation')
  }
})

// choose address - if "the address is not listed here"

router.post('/a1-choose-address-answer', function (req, res) {

  // Get the answer from session data
  const a1chooseAddress = req.session.data['a1-trust-select-address']

  if (a1chooseAddress === 'not-listed') {
    res.redirect('/bsa-admin/a1/trust-manual-address')
  } else {
    res.redirect('/bsa-admin/a1/trust-address-check')
  }
})


module.exports = router;

// r6 BRANCHING

// Add your routes here - above the module.exports line

  // Edit Live Opportunity - remote - then go to address if 'no'

  router.post('/r6-remote-answer', function (req, res) {

    // Get the answer from session data
    const r6remote = req.session.data['r6-remote']
  
    if (r6remote === 'no') {
      res.redirect('/r6/questions/address')
    } else {
      res.redirect('/r6/questions/edit-opportunity-interstitial')
    }
  })
  
  module.exports = router;

// Edit Live Opportunity - choose address - if "the address is not listed here"

router.post('/r6-choose-address-answer', function (req, res) {

    // Get the answer from session data
    const r6chooseAddress = req.session.data['r6-choose-address']
  
    if (r6chooseAddress === 'not-listed') {
      res.redirect('/r6/questions/manual-address')
    } else {
      res.redirect('/r6/questions/check-location')
    }
  })

// Edit Live Opportunity - add another location - if "answer is yes"

router.post('/r6-another-location-answer', function (req, res) {

    // Get the answer from session data
    const r6anotherLocation = req.session.data['r6-another-location']
  
    if (r6anotherLocation === 'yes') {
      res.redirect('/r6/questions/address')
    } else {
      res.redirect('/r6/questions/edit-opportunity-interstitial')
    }
  })

// Edit Live Opportunity - contact details - if "answer is no"

router.post('/r6-contact-details-answer', function (req, res) {

  // Get the answer from session data
  const r6contactDetails = req.session.data['r6-contact-details']

  if (r6contactDetails === 'no') {
    res.redirect('/r6/questions/contact-details-change')
  } else {
    res.redirect('/r6/task-list-section-1-completed')
  }
})

    // Edit Live Opportunity - alt-closing-date-answer - if "answer is yes"

    router.post('/r6-closing-date-answer', function (req, res) {

      // Get the answer from session data
      const r6closingDate = req.session.data['r6-closing-date']
    
      if (r6closingDate === 'yes') {
        res.redirect('/r6/questions/alt-closing-date-answer')
      } else {
        res.redirect('/r6/questions/edit-opportunity-interstitial')
      }
    })  

    // Edit Live Opportunity - receive applications - if "answer is yes"

  router.post('/r6-recieve-applications-answer', function (req, res) {

    // Get the answer from session data
    const r6recieveApplications = req.session.data['r6-receive-apps']
  
    if (r6recieveApplications === 'yes') {
      res.redirect('/r6/questions/application-limits')
    } else {
      res.redirect('/r6/questions/edit-opportunity-interstitial')
    }
  })  

// r8 BRANCHING

// Add your routes here - above the module.exports line

  // Create a Live Opportunity - Recruiter location improvements

  router.post('/r8-location-answer', function (req, res) {

    // Get the answer from session data
    const r8location = req.session.data['r8-location']
  
    if (r8location === 'postcode') {
      res.redirect('/r8/questions/address')
    } else if (r8location === 'area') {
      res.redirect('r8/questions/check-location-area-name')
    } else {
      res.redirect('r8/questions/availability')
    }
  })

// Create a Live Opportunity - Recruiter location improvements - choose address - if "the address is not listed here"

router.post('/r8-choose-address-answer', function (req, res) {

// Get the answer from session data
  const r8chooseAddress = req.session.data['r8-choose-address']

  if (r8chooseAddress === 'not-listed') {
    res.redirect('/r8/questions/manual-address-larger-area')
  } else {
    res.redirect('/r8/questions/check-location-final')
  }
})

// BSA Admin iteration - Sprint 29 - Register an organisation

router.post('/a2-recruiter-search-or-register-answer', function (req, res) {

  // Get the answer from session data
  const a2RecruiterSearchOrRegister = req.session.data['a2-recruiter-search-or-register']

  if (a2RecruiterSearchOrRegister === 'search') {
    res.redirect('/bsa-admin/a2/search-organisation')
  } else if (a2RecruiterSearchOrRegister === 'register-recruiter') {
    res.redirect('/bsa-admin/organisation')
  } else {
    res.redirect('/bsa-admin/a2/register-organisation')
  }
})

router.post('/a2-parent-or-child-org-answer', function (req, res) {

  // Get the answer from session data
  const a2RecruiterSearchOrRegister = req.session.data['a2-parent-or-child-org']

  if (a2RecruiterSearchOrRegister === 'parent') {
    res.redirect('/bsa-admin/a2/parent-name')
  } else {
    res.redirect('/bsa-admin/a2/child-parent-org-association')
  }
})

// choose address - if "the address is not listed here"

router.post('/a2-choose-address-answer', function (req, res) {

  // Get the answer from session data
  const a2chooseAddress = req.session.data['a2-parent-select-address']

  if (a2chooseAddress === 'not-listed') {
    res.redirect('/bsa-admin/a2/parent-manual-address')
  } else {
    res.redirect('/bsa-admin/a2/parent-check-answers')
  }
})

// choose address - child organisation - if "the address is not listed here"

router.post('/a2-child-choose-address-answer', function (req, res) {

  // Get the answer from session data
  const a2ChildchooseAddress = req.session.data['a2-child-select-address']

  if (a2ChildchooseAddress === 'not-listed') {
    res.redirect('/bsa-admin/a2/child-manual-address')
  } else {
    res.redirect('/bsa-admin/a2/child-check-answers')
  }
})

// NHS or Non-NHS organisation

router.post('/a2-choose-nhs-org-answer', function (req, res) {

  // Get the answer from session data
  const a2chooseNHSorg = req.session.data['a2-choose-nhs-org']

  if (a2chooseNHSorg === 'nhs-org') {
    res.redirect('/bsa-admin/a2/parent-org-type')
  } else {
    res.redirect('/bsa-admin/a2/parent-declaration')
  }
})

// BSA Admin iteration - Sprint 35 - Register an organisation with image upload

router.post('/a3-recruiter-search-or-register-answer', function (req, res) {

  // Get the answer from session data
  const a3RecruiterSearchOrRegister = req.session.data['a3-recruiter-search-or-register']

  if (a3RecruiterSearchOrRegister === 'search') {
    res.redirect('/bsa-admin/a3/search-organisation')
  } else if (a3RecruiterSearchOrRegister === 'register-recruiter') {
    res.redirect('/bsa-admin/organisation')
  } else {
    res.redirect('/bsa-admin/a3/register-organisation')
  }
})

router.post('/a3-parent-or-child-org-answer', function (req, res) {

  // Get the answer from session data
  const a3RecruiterSearchOrRegister = req.session.data['a3-parent-or-child-org']

  if (a3RecruiterSearchOrRegister === 'parent') {
    res.redirect('/bsa-admin/a3/parent-name')
  } else {
    res.redirect('/bsa-admin/a3/child-parent-org-association')
  }
})

// choose address - if "the address is not listed here"

router.post('/a3-choose-address-answer', function (req, res) {

  // Get the answer from session data
  const a3chooseAddress = req.session.data['a3-parent-select-address']

  if (a3chooseAddress === 'not-listed') {
    res.redirect('/bsa-admin/a3/parent-manual-address')
  } else {
    res.redirect('/bsa-admin/a3/parent-org-logo')
  }
})

// choose address - child organisation - if "the address is not listed here"

router.post('/a3-child-choose-address-answer', function (req, res) {

  // Get the answer from session data
  const a3ChildchooseAddress = req.session.data['a3-child-select-address']

  if (a3ChildchooseAddress === 'not-listed') {
    res.redirect('/bsa-admin/a3/child-manual-address')
  } else {
    res.redirect('/bsa-admin/a3/child-check-answers')
  }
})

// NHS or Non-NHS organisation

router.post('/a3-choose-nhs-org-answer', function (req, res) {

  // Get the answer from session data
  const a3chooseNHSorg = req.session.data['a3-choose-nhs-org']

  if (a3chooseNHSorg === 'nhs-org') {
    res.redirect('/bsa-admin/a3/parent-org-type')
  } else {
    res.redirect('/bsa-admin/a3/parent-declaration')
  }
})
  
  module.exports = router;

    // What kind of opportunity are you looking for? - if "answer is 'An opportunity near me'"

router.post('/v9-opportunity-choice-answer', function (req, res) {

  // Get the answer from session data
  const v9OpportunitySelection = req.session.data['v9-opportunity-choice']

  if (v9OpportunitySelection === 'yes') {
    res.redirect('/v9/volunteering/postcode-search-v2')
  } else {
    res.redirect('/v9/volunteering/results_remote_opportunities')
  }
})

// Create Live Opportunity - r9 - contact details - if "answer is no"

router.post('/r9-contact-details-answer', function (req, res) {

  // Get the answer from session data
  const r6contactDetails = req.session.data['r9-contact-details']

  if (r6contactDetails === 'no') {
    res.redirect('/r9/questions/contact-details-change')
  } else {
    res.redirect('/r9/questions/tags')
  }
})

 // Create Live Opportunity - r9 - receive applications - if "answer is yes"

 router.post('/r9-receive-applications-answer', function (req, res) {

  // Get the answer from session data
  const r6recieveApplications = req.session.data['r9-receive-apps']

  if (r6recieveApplications === 'yes') {
    res.redirect('/r9/questions/application-limits')
  } else {
    res.redirect('/r9/questions/alt-closing-date')
  }
})  

  // Edit Live Opportunity - alt-closing-date-answer - if "answer is yes"

  router.post('/r9-closing-date-answer', function (req, res) {

    // Get the answer from session data
    const r6closingDate = req.session.data['r9-closing-date']
  
    if (r6closingDate === 'yes') {
      res.redirect('/r9/questions/alt-closing-date-answer')
    } else {
      res.redirect('/r9/task-list-completed')
    }
  })  

  // ROUTES FOR R9 user management MVP

  router.post('/r9-delete-user-answer', function (req, res) {

    // Get the answer from session data
    const r9DeleteUser = req.session.data['r9-delete-user']
  
    if (r9DeleteUser === 'no') {
      res.redirect('/r9/user-management-mvp/manage-users')
    } else {
      res.redirect('/r9/user-management-mvp/manage-users-user-deleted')
    }
  })  


  // ROUTES FOR R13 recruiter email selection for email updates

  router.post('/r12/questions/email-details', function (req, res) {

    // Get the answer from session data
    const recruiterEmail = req.session.data['recruiterEmail']
  
    if (recruiterEmail === 'Email address not listed') {
      res.redirect('/r12/questions/email-updates-manual-input')
    } else {
      res.redirect('/r12/questions/email-details')
    }
  })  


  // ROUTES FOR R13 deactivate user

  router.post('r12-deactivate-user-v2', function (req, res) {

    // Get the answer from session data
    const recruiterDeactivate = req.session.data['recruiterDeactivate']
  
    if (recruiterDeactivate === 'No') {
      res.redirect('/r12/user-management/recruiter-user-2')
    } else {
      res.redirect('/r12/user-management/deactivate-user-confirmation')
    }
  })  

  
  // ROUTES FOR R13 radio buttons for change email updates 

  router.post('/r12/questions/change-email-updates', function (req, res) {

    // Get the answer from session data
    const recruiterChange = req.session.data['recruiterChange']
  
    if (recruiterChange === 'No, I want to choose someone else') {
      res.redirect('/r12/questions/email-updates-answer')
    } else {
      res.redirect('/r12/task-list-email-completed')
    }
  })