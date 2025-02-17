import Book from '../assets/book-hero-image.png';

const Explore = () => {
    return (
      <section className="explore-container">
        <img src={Book} alt="Book Cover" className="explore-img"/>
        <div className="explore-text">
          <h2 className="explore-header">God Friends: How to Be One and How to Find One</h2>
          <h5 className='explore-subheader'>Explore the Joy of Spiritual Friendships</h5>
          <p className="explore-p">Dive into a world where friendships enrich your spiritual life. "God Friends: How to Be One and How to Find One" offers a guide to creating deeply meaningful connections.</p>
          <button className="buy-btn2">Buy Now</button>
        </div>
      </section>
    );
}

export default Explore;
