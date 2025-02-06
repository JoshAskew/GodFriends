import Authors from '../assets/Author-god-friends.png'

const Embrace = () => {
    return (
        <>
            <section className="author-container">
                <h1 className="author-header">Meet The Authors</h1>
                <div className="author-list-container">
                    <img src={Authors} alt="Authors" className="author-pic" />
                    <section className="author-list">
                        <p className="author-p">Londa Lundstrom and Sandy Scipioni bring a unique blend of expertise and heartfelt passion to "God Friends: How to Be One and How to Find One." Londa, with decades of experience in ministry, specializes in building spiritual communities and nurturing deep, faith-based relationships. Her practical insights and personal stories enrich the book's guidance on fostering divine friendships.
                            <br /> <br />
                            Sandy complements this with her background in counseling and spiritual practices, offering practical advice that is both accessible and inspiring. Together, they provide a comprehensive manual on cultivating profound spiritual connections, making "God Friends" an essential resource for anyone looking to deepen their relational and spiritual life. Join them to explore how these divine friendships can transform your everyday experiences.</p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Embrace;
