// V25 results filtering (K5): the 14 unique opportunities from the v24/v25 results
// pages (pages 2/3 duplicated Silver Line and Deafblind — deduplicated here).
// Titles, locations, orgs, tags and descriptions are VERBATIM page copy.
// Filter attributes (setting/types/audiences/minAge/availability) are inferred
// from that copy — the inference log and flagged guesses live in
// docs/opportunity-attribute-mapping.md, pending Aqib's sign-off.
// distanceMiles marked "assigned" were invented to place roles with real but
// distant locations on the distance scale — also flagged in the mapping doc.

module.exports = [
  {
    id: 'trolley-st-james',
    title: "Trolley Volunteer, Beckett Wing, St James's Hospital",
    href: '../volunteering/role-profile-2',
    location: 'Leeds, LS9 7TF',
    org: 'Leeds Hospitals Charity',
    locationType: 'local',
    distanceMiles: 0.5,
    setting: ['hospital'],
    types: ['trolley'],
    audiences: [],
    minAge: 21,
    availability: ['weekday'],
    tags: ['Need a criminal record check', 'No experience needed', 'Public facing', 'Suitable from age 21', 'Evening availability'],
    descriptionHtml: `<ul class="nhsuk-list nhsuk-list--bullet">
      <li>If you enjoy connecting with people, listening, and offering a friendly face, this role is for you.</li>
      <li>Our Trolley Service supports patients and families in hospital by providing comfort, conversation,
        refreshments, and small essentials during difficult times. The service also helps people facing
        financial hardship, ensuring support is available when it is needed most.</li>
      <li>Shifts run <strong>Monday to Friday afternoons</strong>, offering a flexible and rewarding way to
        make a genuine difference in your community.</li>
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
    tags: ['No experience needed', 'Experience with computers', 'Need a criminal record check'],
    descriptionHtml: `<p>As an Aphasia Café volunteer, you'll help create a warm, welcoming, and supportive space for people
      living with Aphasia and their loved ones.
      You'll encourage conversation, connection, and confidence in a friendly community setting.
      <br>
      <br>
      No experience is necessary and full training is provided.
    </p>`
  },
  {
    id: 'menopause-cancer-support',
    title: 'Community Support Group Session Volunteer',
    href: '../volunteering/role-profile-1',
    location: 'Leeds',
    org: 'Menopause and Cancer',
    locationType: 'local',
    distanceMiles: 3.5,
    setting: ['community'],
    types: [],
    audiences: ['life-limiting-illness'],
    minAge: null,
    availability: [],
    tags: ['Public facing', 'Need a car', 'Need a criminal record check'],
    descriptionHtml: `<p>We are looking for a volunteer to support another volunteer in delivering a<strong> monthly 1.5-hour
        support session</strong> for people navigating menopause after a cancer diagnosis.
      Sessions will take place in meeting rooms, cancer support centres, or community venues, providing a safe
      and welcoming space for support, discussion, and shared experiences.
      Experience of working in a supporting role is required.</p>`
  },
  {
    id: 'peertalk-facilitator',
    title: 'PeerTalk - Support Group Facilitator - Leeds',
    href: '../volunteering/role-profile-1',
    location: 'Leeds LS8 3QT',
    org: 'PeerTalk',
    locationType: 'local',
    distanceMiles: 3.8,
    setting: ['community'],
    types: [],
    audiences: ['mental-health'],
    minAge: null,
    availability: ['weekday'],
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
    minAge: 25,
    availability: ['weekday', 'weekend'],
    tags: ['Need a criminal record check', 'Public facing', 'No experience needed', 'Suitable from age 25', 'Experience of computers'],
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
    minAge: 21,
    availability: [],
    tags: ['Public facing', 'Suitable from age 21', 'Need a car'],
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
    tags: ['Public facing', 'Need a car', 'Need a criminal record check'],
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
    availability: ['weekday', 'weekend'],
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
    minAge: 21,
    availability: ['weekday'],
    tags: ['No experience needed', 'Need a criminal record check', 'Suitable for over age 21'],
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
    tags: ['No experience required'],
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
    availability: [],
    tags: [],
    descriptionHtml: `<p>As a Befriender, you'll visit a homebound, isolated client in <strong>Calderdale</strong>
      and <strong>Huddersfield</strong> offering companionship and friendship. By spending
      just 1 hour a week, you'll make a meaningful impact on their life, helping reduce
      loneliness and improve their wellbeing. This role is flexible, fitting around both you
      and the client. It's a truly rewarding opportunity to make a difference.</p>`
  },
  {
    id: 'volunteer-car-driver',
    title: 'Volunteer Car Driver',
    href: '#',
    location: 'Rochdale, OL16 1QN',
    org: 'Northern Care Alliance NHS Foundation Trust',
    locationType: 'local',
    distanceMiles: 29.6,
    setting: ['community'],
    types: ['driving'],
    audiences: [],
    minAge: null,
    availability: [],
    tags: [],
    descriptionHtml: `<p>Assisting to take our passengers to hospital in your own car to Rochdale, Bury, and
      Stockport. Passengers can get in and out of a car without assistance, transport is
      normally a return journey. Volunteers are not expected to get people into the hospital,
      etc. It is helpful if someone can help once a month or once a week, we work around
      volunteers.</p>`
  }
]
