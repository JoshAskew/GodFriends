import Flower from '../assets/flower-god-friends.png'

const Embrace = () => {
    return (
        <>
            <section className="embrace-container">
                <h1 className="embrace-header">Embrace The Journey</h1>
                <div className="embrace-text">
                    <p className="embrace-p">Hello, dear reader! We’re thrilled to guide you through this explorative journey into the heart of spiritually enriched friendships. This book isn't just a read; it's an invitation to dive into the profound depths of what it means to have a God Friend—those rare, divine connections that transform and enrich your spiritual journey. Here’s a glimpse of what you’ll find:</p>
                </div>
                <div className="embrace-list-container">
                    <section className="embrace-list">
                        <h3 className="embrace-list-header">.01</h3>
                        <h5 className="embrace-list-subheader">The Essence of Godly Friendships</h5>
                        <p className="embrace-list-p">Understand the difference between everyday friendships and those divinely inspired. We delve into biblical teachings and share how these timeless principles apply today.</p>
                        <h3 className="embrace-list-header">.02</h3>
                        <h5 className="embrace-list-subheader">Stories That Inspire</h5>
                        <p className="embrace-list-p">Join us as we share our personal experiences and those of others who have found their spiritual counterparts. These stories not only inspire but also illustrate the real-life impact of God Friends.</p>
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
