import Star from '../assets/Stars.png';

const Rating = () => {
    return (
      <section className="rating-container" id='Reviews'>
        <div className="rating-one">
        <img src={Star} alt="Book Cover" className="star-img"/>
        <p className="rating-text">"An enlightening guide on spiritual friendships. Londa Lundstrom and Sandy Scipioni offer practical and profound insights. A must-read for deeper, more meaningful connections."</p>
        <p className="rating-author">- John Smith</p>
        </div>
        <div className="rating-two">
        <img src={Star} alt="Book Cover" className="star-img"/>
        <p className="rating-text">"This book is a gem, filled with wisdom on nurturing spiritual friendships. It’s practical and uplifting—a true guide to enriching your relationships."</p>
        <p className="rating-author">- Emma Clarkson</p>
        </div>
        
      </section>
    );
}

export default Rating;
