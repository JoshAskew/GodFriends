import Authors from '../assets/Author-god-friends.png'

const Embrace = () => {
    return (
        <>
            <section className="author-container" id='Authors'>
                <h1 className="author-header">Meet The Authors</h1>
                <div className="author-list-container">
                    <img src={Authors} alt="Authors" className="author-pic" />
                    <section className="author-list">
                        <p className="author-p">Londa Lundstrom is an evangelist, pastor, disciple maker, speaker, author, worship leader, teacher, motivator, songwriter, award-winning composer, and producer. As the oldest of Lowell and Connie Lundstrom’s four children, she spent over 300 days a year traveling nationwide with her family's ministry from a young age. Londa has led numerous events and evangelistic meetings globally, inspiring tens of thousands of people to commit their lives to Jesus Christ. Her life mission is to train and empower individuals to overcome all obstacles and fulfill their God-given assignments.
                            <br /> <br />
                            Sandy Scipioni loves children and has spent her career in education. She has written, directed and acted in a variety of dramatic endeavors. At church you will find her on the prayer team. At home you’ll find her in her favorite role as, “Grandma Sandy.”</p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Embrace;
