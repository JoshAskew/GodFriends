import Star from '../assets/Stars.png';

const Rating = () => {
    return (
      <section className="rating-container" id='Reviews'>
        <div className="rating-one">
        <img src={Star} alt="Book Cover" className="star-img"/>
        <p className="rating-text">"I loved how this book inspired me—it reignited my desire to commit to friendships, showing me how to come together to support each other and honor God. The idea of Treasured notebooks is fantastic! God delights in relationships, and it's moving how He must feel seeing friends unite to glorify His kingdom. I really liked this book."</p>
        <p className="rating-author">— Gaye Lindfors</p>
        </div>
        <div className="rating-two">
        <img src={Star} alt="Book Cover" className="star-img"/>
        <p className="rating-text">"In Londa's and Sandy's book, you'll discover how the Holy Spirit guided them to each other. We all need a friend to lean on during tough times, and a friend's presence can be soothing in our busy lives. This story of "God Friends" will inspire you to forge a relationship that's as close as family. Dive into the journey of finding a God Friend or becoming one, and always remember that Jesus is our best friend."</p>
        <p className="rating-author">— John Poore</p>
        </div>
        
      </section>
    );
}

export default Rating;
