import BookAlt from '../assets/book-alt-img.png';

const Final = () => {
    return (
      <section className="explore-container">
        <img src={BookAlt} alt="Book Cover" className="explore-img"/>
        <div className="explore-text">
          <h2 className="explore-header">God Friends: How to Be One and How to Find One</h2>
          <p className="explore-p">Londa Lundstrom and Sandy Scipioni artfully blend enlightening anecdotes with practical advice. This compelling read invites you to explore the profound impact of spiritual friendships, offering a roadmap to forge connections that enrich, inspire, and deepen your spiritual journey.</p>
          <div className='price-container'>
          <p className='price'>$14.99</p>
          <button className="buy-btn2">Buy Now</button>
          </div>
        </div>
      </section>
    );
}

export default Final;
