import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import heroimg from "../assets/images/hero.jpeg"
import news1 from "../assets/images/news1.jpg"
import news2 from "../assets/images/news2.jpg";
import news3 from "../assets/images/news3.jpg";
import "../App.css";

function HomePage(){
    return (
      <div>
        <Navbar />
        <section id="hero">
          <div className="row">
            <div className="col-md-6 pe-5 mb-5">
              <h1>
                Small Steps,
                <br /> <span> Big Gains.</span>
              </h1>
              <p>
                To empower and inspire people to achieve their full potential
                and live happy, fulfilling lives.
              </p>
            </div>
            <div className="col-md-6 hero-image-wrapper">
              <img src={heroimg} alt="" width="95%" />
            </div>
          </div>
        </section>

        <section id="call-to-action">
          <div className="heading-wrapper">
            <h2>Check How Fit You Are</h2>
          </div>
          <Button variant="outlined" href="/mental-health">
            Mentally
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button variant="outlined" href="/bmi">
            Physically
          </Button>
        </section>

        <section>
          <Carousel />
        </section>

        <section id="news">
          <div className="heading-wrapper">
            <h2>News</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3">
              <NewsSection
                imageUrl={news1}
                title="Recession hitting this June, predicted by Union Minister "
                content="A comment by Union Minister for Micro, Small and Medium Enterprises Narayan Rane on Monday (January 16) has created controversy. “There is a global recession and it is in many countries. This is what I have gathered from the discussion in the meetings of the Union government. The recession is expected to hit India after June,” Rane said after giving an inaugural speech at the two-day G20 Infrastructure Working Group (IWG) meeting in Pune."
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <NewsSection
                imageUrl={news2}
                title="Worst over for global economy, 'softer recession' likely: RBI governor"
                content="The global economy is expected to contract significantly this year but the worst seems to be behind us, both in terms of growth and inflation, Reserve Bank of India (RBI) Governor Shaktikanta Das said on Friday."
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <NewsSection
                imageUrl={news3}
                title="World Economy Is Headed for a Recession in 2023, Researcher Says"
                content="The world faces a recession in 2023 as higher borrowing costs aimed at tackling inflation cause a number of economies to contract, according to the Centre for Economics and Business Research."
              />
            </div>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </div>
    );
}

export default HomePage;