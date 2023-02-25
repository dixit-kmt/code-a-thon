import logo from "../assets/images/logohackathon.jpg";
import avatar from "../assets/images/avatar.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function fun() {
  return (
    <>
    <Navbar></Navbar>
      <div className="about-section">
        <div>
          <h1 id="title">About Us</h1>
          <p id="titletext1">Small Steps, Big Gain</p>
          <p id="titletext2">
            To empower and inspire people to achieve their full potential and
            live happy, fulfilling lives.
          </p>
        </div>
        
      </div>

      <h2 className="heading">Our Mission</h2>
      <div className="missioncard">
        <h3>Focus on preventative health</h3>
        <p>
          The website could provide information on low-cost or free preventative
          health measures that people can take, such as exercise routines,
          healthy eating plans, and stress-reducing activities.
        </p>
        <h3>Offer low-cost healthcare options</h3>
        <p>
          The website could provide information on low-cost healthcare options,
          such as clinics that offer discounted or sliding-scale services, as
          well as information on how to access government-funded health
          programs.
        </p>
        <h3>Emphasize mental health support</h3>
        <p>
          The website could offer resources and information on low-cost mental
          health support services, such as counseling or support groups, as well
          as tips for managing stress and anxiety during difficult times.
        </p>
      </div>

      <h2 className="heading">Developers</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="image" src={avatar} alt="Jane"></img>
            <div className="container">
              <h2>Dixit Kumawat</h2>
              <p className="title">Team Leader</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>dixit@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="image" src={avatar} alt="Mike"></img>
            <div className="container">
              <h2>Abhishek Ojha</h2>
              <p className="title">Team Member</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>abhishek@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="image" src={avatar} alt="John"></img>
            <div className="container">
              <h2>Dipendra Raj Singh</h2>
              <p className="title">Team Member</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>dipendra@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="image" src={avatar} alt="Mike"></img>
            <div className="container">
              <h2>Prashan Buccha</h2>
              <p className="title">Team Member</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>prashan@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="image" src={avatar} alt="Mike"></img>
            <div className="container">
              <h2>Shahkar Ahmad</h2>
              <p className="title">Team Member</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>shahkar@gmail.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default fun;
