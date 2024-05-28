import React from 'react';
import "./plivelihood.css";
import { Header, Navbar } from '../../component';

const PLivelihood = () => {
  return (
    <div className='livelihood-main'>
      <Navbar />
      <Header />
      <br />
      <div className='livelihood-main__heading'>
        Building Livelihoods, Transforming Lives
      </div>
      <div className='livelihood-main__content'>
        At MVEC Trust, we believe that empowering women is crucial for the overall development of society. Women play a fundamental role in the social and economic fabric of our communities, yet many face significant barriers such as limited access to education, vocational training, financial resources, and employment opportunities.

        Empowering women uplifts entire families and communities, creating a ripple effect that benefits future generations. Educated and financially independent women can provide better nutrition, healthcare, and education for their children, breaking the cycle of poverty.

        MVEC Trust is dedicated to promoting women empowerment through a multifaceted approach. Our initiatives address the various challenges women face and support them in achieving self-sufficiency and empowerment, ultimately fostering stronger, healthier communities.

        Here are the key initiatives MVEC Trust undertakes to promote women empowerment
      </div>
      {/* <br /> */}
      <div className='livelihood__section-main__heading'>
        What We Do ?
      </div>
      <div className='livelihood-main__container'>
        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title">Skill Development & Training</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Tailoring and Handicrafts </h6>
            <p className="card-text">We offer training programs in tailoring, embroidery, and handicrafts, enabling women to create and sell their products.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">IT and Digital Skills </h6>
            <p className="card-text"> Courses in basic computer skills, digital literacy, and information technology help women stay competitive in the job market.</p>
          </div>
        </div>

        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title">Entrepreneurship Support</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Business Training Workshops </h6>
            <p className="card-text">Conducting workshops on business management, financial literacy, and marketing to help women start and manage their own businesses successfully.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">Microfinance and Small Loans</h6>
            <p className="card-text"> Providing access to microfinance and small loans to give women the capital to kickstart their entrepreneurial ventures.</p>
          </div>
        </div>
        
        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title">Employment Opportunities</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Job Placement </h6>
            <p className="card-text">Partnering with local businesses and organizations to create employment opportunities for women in various sectors.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">Resume and Interview Skills</h6>
            <p className="card-text"> Organizing workshops to help women build effective resumes and develop strong interview skills to enhance job prospects.</p>
          </div>
        </div>

        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title">Self-Help Groups {"(SHGs)"}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">SHG Formation</h6>
            <p className="card-text">Facilitating the formation of self-help groups where women can support each other, save money, and access credit collectively.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">Financial Training</h6>
            <p className="card-text"> Providing training in financial management to help SHG members manage their finances, savings, and investments effectively.</p>
          </div>
        </div>

        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title">Legal and Social Awareness</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Legal Rights Education</h6>
            <p className="card-text">Educating women about their legal rights and providing access to legal assistance when needed to ensure they can protect and assert those rights.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">Health Programs</h6>
            <p className="card-text"> Running awareness programs on health, nutrition, and hygiene to ensure that women can take better care of themselves and their families.</p>
          </div>
        </div>

        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title"> Mentoring and Networking</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Mentorship</h6>
            <p className="card-text">Offering mentorship programs where experienced professionals provide guidance and support to women in their personal and professional lives.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">Networking Events</h6>
            <p className="card-text"> Organizing networking events to connect women with peers, mentors, and potential employers, fostering valuable relationships and opportunities.</p>
          </div>
        </div>

        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title"> Safe Spaces for Women</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Women's Centers</h6>
            <p className="card-text">Establishing centers where women can access resources, receive training, and find a supportive community in a safe and nurturing environment.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">Crisis Support</h6>
            <p className="card-text"> Providing support services for women in crisis, including counseling, legal aid, and safe shelters to ensure their safety and well-being.</p>
          </div>
        </div>

        <div className="card" style={{
          borderRadius: "18px",
          width: "15rem"
        }}>
          <div className="card-body">
            <h5 className="card-title"> Educational Support for Girls</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Scholarships</h6>
            <p className="card-text">Providing scholarships and financial aid to girls to ensure they have access to quality education and can continue their studies.</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">After-School Programs</h6>
            <p className="card-text">Offering after-school programs that provide academic support and extracurricular activities to keep girls engaged and motivated.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PLivelihood
