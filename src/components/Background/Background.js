import "./Background.css";
import video from "../../assets/video.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background1 fade-in" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="" />;
  }
};
export default Background;
