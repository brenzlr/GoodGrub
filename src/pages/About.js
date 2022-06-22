import "../App.css";
import img from '../img/cookingwithlove.png';
export function About() {
  return (
    <div className="about">
      <div className="container" style={{ "textAlign": "left" }}>
        <div>
          <header>
            <h1>About Us</h1>
            <img src={img} style={{width:"20%", float:"right"}} alt="img"></img>
          </header>{" "}
          <br /> <br />
        </div>
        <div>
          <h4>OUR MISSION</h4>
          <p>
            To guide our clients into having an easier and efficient way of
            cooking.
          </p>
          <h4>OUR VISION </h4>
          <p>
            Our goal is to be one for the most visited website all over the
            world while providing the best software for all of you.
          </p>
          <h4>Our Mission & Vision</h4>
          <p>
            The fixings are prepared on the counter, trusting that master hands
            will shape them. It isn't simply a question of natural substances,
            timing and capacity. The genuine wonder is imparting one's spirit,
            to give character. Remembering the visitors for the inventive flow
            which is a fine art, similar to the shades of a range, the pliancy
            of a figure, the concordance of a melody, and the flavor of
            enthusiasm. Thus starts the excursion to the revelation of flavors
            that convey the information on a valuable culture and populace.
          </p>
          <h4>MOTIVATIONS</h4>
          <p>
            "Cooking with love provides FOOD for the SOUL"<br/>
            "No one is born a great COOK, one learns by DOING"<br/>
            "A recipe has no soul. You as the COOK, must bring soul to the RECIPE"<br/>
          </p>
        </div>
      </div>
    </div>
  );
}
