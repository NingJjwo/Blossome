import "./card.css";
import menu from "../assets/menu.svg";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import violet from "../assets/violet.jpg";
import flowers from "../assets/flower.jpg";
import instagram from "../assets/ig.png";
import steam from "../assets/steam.png";
import linea from "../assets/line.png";
const Card = () => {
  return (
    <div className="cardbody">
      <div className="content">
        <div className="uppercontent">
          <div className="icons">
            <img src={circle1} className="circle1" />
            <img src={circle2} className="circle2" />
            <img src={circle3} className="circle3" />
          </div>
          <div className="detailsttitle">
            <h2 className="giantittle">について</h2>
          </div>
          <div className="tittle">
            <img src={menu} alt="menu" className="menuimage" />
            <p className="description">Blossome</p>
          </div>
        </div>
        <div className="lowercontent">
          <div className="about">
            <img src={violet} className="violetimage" />
            <p className="descriptionprofile">
              {" "}
              ☽ Blossome | 18 | Valorant Player | Explorer of life’s complexity,
              biology student.{" "}
            </p>
          </div>
          <div className="socials">
            <div className="tittlesocials">
              <h1>Socials</h1>
            </div>
            <div className="socialicons">
              <img src={instagram} className="ig" />
              <img src={steam} className="steam" />
            </div>
            <div className="linea">
              <img src={linea} className="line"/>
            </div>
            <div className="userstatus">
              <p className="citytittle"><strong>Current city:</strong> <br></br>Tokyo / Japan</p>
            </div>
          </div>
          <div className="profile">
            <img src={flowers} className="flowers" />
            <p className="details">
              <strong>Listening to:</strong> song{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
