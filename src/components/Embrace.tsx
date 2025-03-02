import Flower from '../assets/flower-god-friends.png'

const Embrace = () => {
    return (
        <>
            <section className="embrace-container" id='About-Book'>
                <h1 className="embrace-header">Embrace The Journey</h1>
                <div className="embrace-text">
                    <p className="embrace-p">Uncover the essence of truly divine friendships in "God Friends." This book delves into the profound difference between everyday friendships and those deeply rooted in spiritual connection. Learn how to recognize, nurture, and celebrate relationships that connect you closer to the heart of God through:</p>
                </div>
                <div className="embrace-list-container">
                    <section className="embrace-list">
                        <h3 className="embrace-list-header">.01</h3>
                        <h5 className="embrace-list-subheader">Good Friend vs. God Friend</h5>
                        <p className="embrace-list-p">Understand the difference between everyday friendships and those divinely inspired. We delve into biblical teachings and share how these timeless principles apply today.</p>
                        <h3 className="embrace-list-header">.02</h3>
                        <h5 className="embrace-list-subheader">Characteristics of God-centered Friendships</h5>
                        <p className="embrace-list-p">Explore the defining traits of friendships that are built around faith and mutual spiritual growth, with guidance on fostering these qualities in your own relationships.</p>
                        <h3 className="embrace-list-header">.03</h3>
                        <h5 className="embrace-list-subheader">Step-by-Step Guidance</h5>
                        <p className="embrace-list-p">Each chapter concludes with practical steps to deepen your sacred friendships through prayerful engagements and meaningful conversations, enhancing spiritual vitality in your connections.</p>
                    </section>
                    <img src={Flower} alt="Flower" className="embrace-flower" />
                </div>
            </section>
        </>
    );
}

export default Embrace;
