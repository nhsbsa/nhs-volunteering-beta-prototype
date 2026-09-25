// V26 results filtering (K5): the 14 unique opportunities from the v24/v25/v26 results
// pages (pages 2/3 duplicated Silver Line and Deafblind — deduplicated here).
// Titles, locations, orgs and descriptions are VERBATIM page copy.
// Opportunities added since (Sept 2026 onwards) use content supplied by Aqib
// and have their own role profile page in v26/volunteering.
// tags must only use values a recruiter can pick in r22/questions/tags.html,
// and minAge only values from "Which ages is this opportunity suitable for?"
// in r22/questions/choose-search-filters.html (13-17 or 18 and over).
// Filter attributes (setting/types/audiences/minAge/availability) are inferred
// from that copy — the inference log and flagged guesses live in
// docs/opportunity-attribute-mapping.md, pending Aqib's sign-off.
// distanceMiles marked "assigned" were invented to place roles with real but
// distant locations on the distance scale — also flagged in the mapping doc.

module.exports = [
  {
    id: 'trolley-volunteer',
    title: 'Trolley Volunteer',
    href: '../volunteering/role-profile-trolley-volunteer',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 18 },
    location: 'Leeds, LS9 7TF',
    org: "St James's University Hospital",
    locationType: 'local',
    distanceMiles: 0.5,
    setting: ['hospital'],
    types: ['trolley', 'companionship', 'with-people'],
    audiences: [],
    minAge: 18,
    availability: ['weekday', 'afternoon'], // Monday to Friday afternoons
    tags: ['DBS check will take place', 'No experience needed', 'Public facing', 'Suitable from age 18'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you enjoy connecting with people, listening and offering a friendly face, this role could be for you.</li>
      <li>Our Trolley Service supports patients and visitors by providing refreshments, conversation and
        companionship during their hospital stay.</li>
      <li>Monday to Friday afternoon shifts offer a rewarding way to make a positive difference to patients and
        families.</li>
    </ul>`
  },
  {
    id: 'aphasia-cafe',
    title: 'Aphasia Cafe Volunteer',
    href: '../volunteering/role-profile-1',
    location: 'Leeds, LS26 0PG',
    org: 'Aphasia Support',
    locationType: 'local',
    distanceMiles: 1.7,
    setting: ['community'],
    types: [],
    audiences: [],
    minAge: 16, // under-18-friendly (Aqib-approved inference, 22 Jul 2026)
    availability: [],
    tags: ['No experience needed', 'Experience with computers', 'DBS check will take place'],
    descriptionHtml: `<p>As an Aphasia Café volunteer, you'll help create a warm, welcoming, and supportive space for people
      living with Aphasia and their loved ones.
      You'll encourage conversation, connection, and confidence in a friendly community setting.
      <br>
      <br>
      No experience is necessary and full training is provided.
    </p>`
  },
  {
    id: 'volunteer-car-driver-leeds',
    title: 'Volunteer Car Driver',
    href: '../volunteering/role-profile-volunteer-car-driver',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 18, licence: 'driving' },
    location: 'Leeds, LS10 2QW',
    org: 'Voluntary Action Leeds',
    locationType: 'local',
    // assigned (LS10 from LS9), flagged for review
    distanceMiles: 2.2,
    setting: ['community'],
    types: ['driving'],
    audiences: [],
    minAge: 18,
    availability: ['weekday', 'weekend', 'flexible'],
    tags: ['DBS check will take place', 'Need a car', 'Need a driving licence', 'Public facing', 'Suitable from age 18'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you enjoy driving and meeting new people, this role could be for you.</li>
      <li>Volunteer Car Drivers help patients attend healthcare appointments by providing transport using their
        own vehicle. You'll offer a friendly, reliable service that helps people access the care and support
        they need.</li>
      <li>Flexible volunteering hours are available throughout the week, making it easy to fit volunteering
        around your existing commitments.</li>
    </ul>`
  },
  {
    id: 'emergency-department-volunteer',
    title: 'Emergency Department Volunteer',
    href: '../volunteering/role-profile-emergency-department-volunteer',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 18 },
    location: 'Leeds, LS1 3EX',
    org: 'Southmead Hospital',
    locationType: 'local',
    // assigned (LS1 from LS9)
    distanceMiles: 1.5,
    setting: ['hospital'],
    types: ['meet-and-greet', 'with-people'],
    audiences: [],
    minAge: 18,
    availability: ['weekday', 'weekend', 'evening'],
    tags: ['DBS check will take place', 'No experience needed', 'Public facing', 'Evening availability', 'Suitable from age 18'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you enjoy helping people and can remain calm in busy environments, this role could be for you.</li>
      <li>Emergency Department Volunteers support patients and visitors by providing directions, answering
        questions and offering reassurance while they wait.</li>
      <li>Evening and weekend shifts are available, providing a rewarding opportunity to support patient
        experience in a fast-paced setting.</li>
    </ul>`
  },
  {
    id: 'community-befriender-volunteer',
    title: 'Community Befriender Volunteer',
    href: '../volunteering/role-profile-community-befriender-volunteer',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 21 },
    location: 'Leeds, LS18 4LB',
    org: 'Leeds Community Central',
    locationType: 'local',
    // assigned (Horsforth from LS9)
    distanceMiles: 4.6,
    setting: ['community'],
    types: ['companionship', 'with-people'],
    audiences: [],
    minAge: 18, // profile says 21 or over; 18 is the highest age the filters support
    availability: ['flexible', 'morning', 'afternoon'], // Flexible daytime hours
    // no age tag: recruiter tags stop at "Suitable from age 18", which would contradict the profile
    tags: ['DBS check will take place', 'No experience needed', 'Public facing'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you enjoy listening and building positive relationships, this role could be for you.</li>
      <li>Community Befriender Volunteers provide companionship and social support to people who may be
        feeling isolated through regular visits, phone calls or community meetups.</li>
      <li>Flexible daytime volunteering is available, helping people feel more connected to their local
        community.</li>
    </ul>`
  },
  {
    id: 'volunteer-visitor-guide',
    title: 'Volunteer Visitor Guide',
    href: '../volunteering/role-profile-volunteer-visitor-guide',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 18, distance: { miles: 20, postcode: 'LS1 2TW' } },
    location: 'Leeds, LS1 2TW',
    org: "Queen's Medical Centre",
    locationType: 'local',
    // assigned (LS1 from LS9)
    distanceMiles: 1.4,
    setting: ['hospital'],
    types: ['meet-and-greet', 'with-people'],
    audiences: [],
    minAge: 18,
    availability: ['morning', 'afternoon'],
    tags: ['No experience needed', 'Public facing', 'Suitable from age 18'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you enjoy helping people and giving directions, this role could be for you.</li>
      <li>Volunteer Visitor Guides welcome patients and visitors to the hospital, helping them find wards,
        clinics and departments across the site.</li>
      <li>Volunteers must live within 20 miles of the hospital and be available for at least one regular
        shift each week.</li>
    </ul>`
  },
  {
    id: 'hospital-volunteer-buddy',
    title: 'Hospital Volunteer Buddy',
    href: '../volunteering/role-profile-hospital-volunteer-buddy',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 18 },
    location: 'Leeds, LS7 4SA',
    org: 'Leeds Royal Infirmary',
    locationType: 'local',
    // assigned (LS7 from LS9)
    distanceMiles: 2.1,
    setting: ['hospital'],
    types: ['with-people'],
    audiences: [],
    minAge: 18,
    availability: ['weekday', 'flexible'],
    tags: ['Experience needed', 'Experience with computers', 'Suitable from age 18'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you have previous volunteering experience and enjoy supporting others, this role could be for you.</li>
      <li>Hospital Volunteer Buddies help new volunteers settle into their role, answer questions and signpost
        them to the right support and resources.</li>
      <li>Regular weekday volunteering is available, helping create a welcoming and inclusive experience for
        new volunteers.</li>
    </ul>`
  },
  {
    id: 'hospital-youth-volunteer',
    title: 'Hospital Youth Volunteer',
    href: '../volunteering/role-profile-hospital-youth-volunteer',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 16 },
    location: 'Leeds, LS7 4SA',
    org: 'Leeds Royal Infirmary',
    locationType: 'local',
    // assigned, same site as hospital-volunteer-buddy so same distance
    distanceMiles: 2.1,
    setting: ['hospital'],
    types: ['meet-and-greet', 'admin', 'with-people'],
    audiences: [],
    minAge: 16,
    availability: ['weekday', 'afternoon', 'evening'], // After school, evenings and school holidays
    tags: ['No experience needed', 'Public facing', 'Evening availability', 'Suitable from age 16'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you're interested in gaining experience and supporting your local hospital, this role could be
        for you.</li>
      <li>Hospital Youth Volunteers help welcome visitors, support events and assist with non-clinical
        activities under staff supervision.</li>
      <li>After-school, evening and holiday shifts are available, providing valuable experience while making a
        positive difference to patients and visitors.</li>
    </ul>`
  },
  {
    id: 'community-support-group-session-volunteer',
    title: 'Community Support Group Session Volunteer',
    href: '../volunteering/role-profile-community-support-group-session-volunteer',
    // pre-application questions asked after Apply when no r22 recruiter journey is in the session
    preApplication: { age: 18 },
    location: 'Community venues across Leeds',
    org: 'Menopause and Cancer',
    locationType: 'varied',
    // filtering only, never displayed (Leeds community venues from LS9)
    distanceMiles: 3.5,
    setting: ['community'],
    types: ['with-people'],
    audiences: ['life-limiting-illness'], // people navigating menopause following a cancer diagnosis
    minAge: 18,
    availability: [], // One 1.5-hour session each month: no day or time stated
    tags: ['DBS check will take place', 'Experience needed', 'Public facing', 'Need a car', 'Suitable from age 18'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you have experience supporting people in group or community settings, this role could be for you.</li>
      <li>Community Support Group Session Volunteers help deliver monthly support sessions for people navigating
        menopause following a cancer diagnosis.</li>
      <li>Sessions take place at community venues across Leeds, providing a welcoming space where people can
        connect, share experiences and access peer support.</li>
    </ul>`
  },
  {
    id: 'peertalk-facilitator',
    title: 'PeerTalk - Support Group Facilitator - Leeds',
    href: '../volunteering/role-profile-1',
    location: 'Leeds, LS8 3QT',
    org: 'PeerTalk',
    locationType: 'local',
    distanceMiles: 3.8,
    setting: ['community'],
    types: [],
    audiences: ['mental-health'],
    minAge: null,
    availability: ['weekday', 'evening'], // Tuesdays, 6.30-8pm
    tags: ['No experience needed'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>PeerTalk groups support people living with depression, anxiety, and emotional distress.</li>
      <li>Volunteer facilitators use listening and facilitation skills to help groups run smoothly.</li>
      <li>Leeds sessions meet <strong>Tuesdays, 6.30-8pm</strong>.</li>
    </ul>`
  },
  {
    id: 'dementia-walking-champion',
    title: 'Young Onset Dementia Walking Champion',
    href: '../volunteering/role-profile-2',
    location: 'Leeds, LS6 9EL',
    org: 'Leeds Teaching Hospitals NHS Foundation Trust',
    locationType: 'local',
    distanceMiles: 4.1,
    setting: ['community'],
    types: [],
    audiences: ['older-people'],
    minAge: 18,
    availability: ['weekday', 'weekend'],
    tags: ['DBS check will take place', 'Public facing', 'No experience needed', 'Suitable from age 18', 'Experience with computers'],
    descriptionHtml: `<p>Young onset dementia refers to <strong>any form of dementia diagnosed before the age of 65</strong>.
      <br>
      <br>
      The admiral nurse service in Wakefield provides specialist support for people living with dementia, as
      well as their families and carers.
      <br>
      <br>
      A walking champion will help by encouraging gentle physical activity, leading supportive walks,
      promoting social connection, and helping individuals build confidence and wellbeing through regular
      outdoor activity and conversation.
      <br>
      <br>
      We are looking for someone who is patient and supportive.
      Walks take place every Wednesday and Saturday.
      <br>
      <br>
      <strong>Physical activity is required for this role</strong>.
    </p>`
  },
  {
    id: 'sue-ryder-wheatfields',
    title: 'Sue Ryder Wheatfields Hospice',
    href: '../volunteering/role-profile-1',
    location: 'Leeds, LS4 2AE',
    org: 'Sue Ryder',
    locationType: 'local',
    distanceMiles: 4.9,
    setting: ['hospital'],
    types: ['companionship'],
    audiences: ['life-limiting-illness', 'older-people'],
    minAge: 18,
    availability: [],
    tags: ['Public facing', 'Suitable from age 18', 'Need a car'],
    descriptionHtml: `<p>Support hospice dementia volunteers by offering:</p>
    <ul class="nhsuk-list nhsuk-list--bullet">
      <li>comfort</li>
      <li>conversation</li>
      <li>companionship</li>
    </ul>`
  },
  {
    id: 'wakefield-dementia-care-home',
    title: 'Dementia Care Home Support Volunteer with Wakefield Hospice',
    href: '../volunteering/role-profile-1',
    location: 'Care facilities and home visits in the Wakefield area',
    org: 'Wakefield Hospice',
    locationType: 'varied',
    // filtering only, never displayed — assigned (Wakefield area from LS9), flagged for review
    distanceMiles: 9.8,
    setting: ['hospital', 'community'],
    types: ['companionship'],
    audiences: ['older-people'],
    minAge: 16, // under-18-friendly (Aqib-approved inference, 22 Jul 2026)
    availability: [],
    tags: ['Public facing', 'Need a car', 'DBS check will take place'],
    descriptionHtml: `<p><strong>Summary of Role:</strong></p>
    <p>To support the Hospice Dementia Care Home Support volunteer team in ensuring people using the service
      are comforted, safe and cared for during your visit.
      Team work is essential and tasks may include:
      · Listen and talk with the person, supporting them in activities and reminiscence therapy (Training is
      provided)
    </p>`
  },
  {
    id: 'swyp-activity-volunteer',
    title: 'Activity Volunteer',
    href: '../volunteering/role-profile-1',
    location: 'Wakefield WF2 9AF, Wakefield WF1 3SP',
    org: 'South West Yorkshire Partnership NHS Foundation Trust',
    locationType: 'varied',
    // filtering only, never displayed — assigned (Wakefield area from LS9), flagged for review
    distanceMiles: 9.2,
    setting: ['hospital'],
    types: [],
    audiences: ['mental-health'],
    minAge: 16, // under-18-friendly (Aqib-approved inference, 22 Jul 2026)
    availability: [],
    tags: ['Public facing', 'Experience needed'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>Engage with participants</li>
      <li>Assist in activities such as games</li>
      <li>Assist alongside OT staff in service user events to enhance the service user experience (if
        volunteering on ward)</li>
      <li>Run a small group alongside other staff</li>
      <li>Contribute to ideas for activities</li>
      <li>Prepare for activities and events</li>
      <li>Comply with all safety and security aspects of the role</li>
    </ul>`
  },
  {
    id: 'silver-line-helpline',
    title: 'Age UK Silver Line Helpline Volunteer',
    href: '../volunteering/role-profile-canine-befriender',
    location: 'Any location in England',
    org: 'Age UK',
    locationType: 'remote',
    distanceMiles: null,
    setting: ['remote'],
    types: ['telephone'],
    audiences: ['older-people'],
    minAge: null,
    availability: ['weekday', 'weekend', 'morning', 'afternoon', 'evening'], // day or night
    tags: ['Experience with computers'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>Are you able to listen with empathy, understanding and without judgement?</li>
      <li>If so, you could play an important role as a volunteer for The Silver Line Helpline by offering
        friendship over the phone to an older person day or night that may feel lonely, isolated and in need
        of support. We are always in need of dedicated volunteers to joun our growing service.</li>
    </ul>`
  },
  {
    id: 'deafblind-helpline',
    title: 'Helpline Volunteer',
    href: '../volunteering/role-profile-canine-befriender',
    location: 'Any location in England',
    org: 'Deafblind UK',
    locationType: 'remote',
    distanceMiles: null,
    setting: ['remote'],
    types: ['telephone'],
    audiences: ['physical-disabilities'],
    minAge: 18,
    availability: ['weekday', 'morning', 'afternoon'], // 9am to 5pm, Monday to Friday
    tags: ['No experience needed', 'DBS check will take place', 'Suitable from age 18'],
    descriptionHtml: `<p>In this role, you will be assisting with the incoming calls coming into the Deafblind UK National
      Helpline. Duties would be varied ranging from dealing with basic incoming contact, updating our
      information library or carrying out research to support our work helping those with sight and hearing
      loss.
      Shifts are available from 9am to 5pm, Monday to Friday.</p>`
  },
  {
    id: 'airedale-hospital',
    title: 'Volunteer at Airedale Hospital',
    href: '#',
    location: 'Steeton, BD23 6TG',
    org: 'Airedale NHS Foundation Trust',
    locationType: 'local',
    distanceMiles: 21.4,
    setting: ['hospital', 'remote'],
    types: [],
    audiences: [],
    minAge: 16, // under-18-friendly (Aqib-approved inference, 22 Jul 2026)
    availability: ['weekday', 'weekend'],
    tags: ['No experience needed'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>How you will support this organisation will vary according to their needs</li>
      <li>A variety of shifts are available</li>
      <li>Everyone is welcome to volunteer but we would encourage people to do it long-term</li>
      <li>Remote options available</li>
    </ul>`
  },
  {
    id: 'yorkshire-ambulance',
    title: 'Volunteer with Yorkshire Ambulance Service',
    href: '#',
    location: 'Wakefield WF2 1JH, Leeds LS10 7TY',
    org: 'Yorkshire Ambulance Service NHS Trust',
    locationType: 'remote',
    distanceMiles: null,
    setting: ['remote'],
    types: ['trustee'],
    audiences: [],
    minAge: null,
    availability: [],
    tags: ['Experience with computers'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>Represent the interests of your local community, attend online board meetings, and help hold the
        trust's non-executive directors to account.</li>
      <li>A variety of shifts are available.</li>
      <li>Ensure the ambulance trust is running transparently and meeting local healthcare priorities.</li>
    </ul>`
  },
  {
    id: 'home-visiting-befriender',
    title: 'Home Visiting Befriender',
    href: '#',
    location: 'Huddersfield, HD1 2RT',
    org: 'Calderdale and Huddersfield NHS Foundation Trust',
    locationType: 'local',
    distanceMiles: 15.8,
    setting: ['community'],
    types: ['companionship'],
    audiences: ['older-people'],
    minAge: null,
    availability: ['flexible'], // This role is flexible
    tags: [],
    descriptionHtml: `<p>As a Befriender, you'll visit a homebound, isolated client in <strong>Calderdale</strong>
      and <strong>Huddersfield</strong> offering companionship and friendship. By spending
      just 1 hour a week, you'll make a meaningful impact on their life, helping reduce
      loneliness and improve their wellbeing. This role is flexible, fitting around both you
      and the client. It's a truly rewarding opportunity to make a difference.</p>`
  }
]
