import HeroImg from '../images/photo-grid.png';
const Hero = () => {
  return (
    <div className="px-5 pt-5 pb-3">
      <img className="hero--img mb-3" src={HeroImg} alt="Hero Banner" />
      <h1 className="mt-3">Online Exercises</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </div>
  );
};

export default Hero;
