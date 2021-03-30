import React from 'react'

const Landing = () => {


  return (
    <div className='landing'>
      <div className='contact'>
        <div className='contact-left-side'>
          <p className='contact-statement'>Utilization Management (UM) staff are available from 8:00am - 5:00pm Monday through Friday to answer Member questions related to the authorization and referral processes. After-Hour nurse is available after 5:00pm Monday through Friday, Weekends and Holidays for urgent issues. You may also request a copy of the criteria used in the decision making process. UM staff are bilingual in Spanish or we can help set up an interpreter for you.</p>
        </div>
        <div className='contact-right-side'>
          <p className='contact-title'>Utilization Management</p>
          <p className='contact-info'>Direct line: (562) 206-1360</p>
          <p className='contact-info'>Toll-free: (562) 961-3022</p>
          <p className='contact-title'>Via Fax</p>
          <p className='contact-info'>(562) 206-1360</p>
          <p className='contact-title'>Via TDD/TYY</p>
          <p className='contact-info'>Call the TDD/TYY # on your Member ID card or dial 711 for Telecommunications Relay Service</p>
        </div>

      </div>

      <div className='aff-box'>
        <p className='aff-title'>AFFIRMATION STATEMENT</p>
        <p className='aff-statement'>
          Utilization Management (UM) decision making is based only on appropriateness of care and service and existence of coverage. Americo IPA does not specifically
          reward practitioners or other individuals for issuing denials of coverage or service
          care.
        {<br></br>}
          {<br></br>}
          Americo IPA does not offer financial incentives to UM decision makers that
          encourage decisions that result in underutilization.
          Our practitioners are ensured independence and impartiality in making referral
          decisions that will not influence hiring, compensation, termination, promotion or any other similar matters.
          </p>
      </div>



      <div className='claims-box'>
        <div className='claims'>
          <p className='claims-title'>Please submit claims to:</p>
          <p className='claims-address'>P.O. Box 11509, San Bernardino, CA 92423.</p>
        </div>
      </div>

      <div className='contact-box'>
        <p className='address'>12631 Imperial Highway, #A-106, Santa Fe Springs, CA  90670</p>
      </div>
    </div>
  )
}

export default Landing