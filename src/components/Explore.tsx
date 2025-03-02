import Book from '../assets/book-hero-image.png';

const Explore = () => {
  return (
    <section className="explore-container">
      <img src={Book} alt="Book Cover" className="explore-img" />
      <div className="explore-text">
        <h2 className="explore-header">God Friends: How to Be One and How to Find One</h2>
        <h5 className='explore-subheader'>Explore the Joy of a God Friend</h5>
        <p className="explore-p">Some friendships are supernatural, arriving just when you need them most, touching the deepest part of your soul, and changing your life. These aren't just good friends—they're God Friends. These are relationships orchestrated by God for His Kingdom purposes.</p>
        <a
          href="https://www.londalundstrom.com/shop/p/god-friends"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-btn2"
        >
          Buy Now
        </a>
      </div>
    </section>
  );
}

export default Explore;
