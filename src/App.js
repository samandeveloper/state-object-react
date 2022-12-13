import React from "react"
import "./style.css"

import profilePic from "./images/user.png"
import starLogoEmpty from "./images/star-empty.png"
import starLogoFilled from "./images/star-filled.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
     
    // let starIcon = contact.isFavorite ? "./images/star-filled.png" : "./images/star-empty.png"
    let starIcon = contact.isFavorite ? starLogoFilled : starLogoEmpty

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevState => {
            return {...prevState, isFavorite : !prevState.isFavorite}
        })
    }
    return (
        <main>
            <article className="card">
                <img src={profilePic} className="card--image" />
                <div className="card--info">
                    <img 
                        
                        // src={`../images/star-filled.png`} 
                        src={`${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {/* John Doe */}
                        {contact.firstName} {contact.lastName}
                    </h2>
                    {/* <p className="card--contact">+1 (719) 555-1212</p> */}
                    <p className="card--contact">{contact.phone}</p>
                    {/* <p className="card--contact">itsmyrealname@example.com</p> */}
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
