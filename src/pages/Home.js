import Hero from '../components/Hero';
import Card from '../components/Card';
import data from '../shared/data';
const Home = () => {
  return (
    <>
      <Hero />
      <section className="cards">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default Home;
