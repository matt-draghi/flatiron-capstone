import "../styles/Home.css"

function Home(){

    return(
        <div className="home-container">
            <div className="wotd-container">
                <h1>Workout of the Day</h1>
                <div className="wotd">
                    {/* placeholder for workout of the day video and information*/}
                    <div className="wotd-video"></div>
                    <div className="wotd-description">
                        <h3>Workout Name</h3>
                        <p>This is a sample description. It is just a placeholder but will be used to show users what the actual workout entails.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home