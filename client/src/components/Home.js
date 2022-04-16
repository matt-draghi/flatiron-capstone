import { useEffect, useState } from "react"
import "../styles/Home.css"

function Home(){
    const [eotd, setEotd] = useState(localStorage.getItem('eotd'))

    useEffect(()=>{
        fetch('/api/exercises/daily')
        .then(response => response.json())
        .then(exercise => {
            setEotd(exercise)
            localStorage.setItem('eotd', exercise)
        })//console.log(exercise))
    },[])

    const homeDisplay = () => {
        if(eotd){
            return(
                <div className="eotd-container">

                    <h1>Exercise of the Day</h1>
                    <div className="eotd">
                        {/* placeholder for workout of the day video and information*/}
                        <div className="eotd-video">
                            <iframe width="100%" height="100%" src={eotd?.demo_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="eotd-description">
                            <h3>{eotd.name}</h3>
                            <p>{eotd.description}</p>
                        </div>
                    </div>
                </div>

            )
        }
        else{
           return  <h1>Loading...</h1>
        }
    }

    return(
        <div className="home-container">
            {homeDisplay()}
        </div>
    )

}

export default Home