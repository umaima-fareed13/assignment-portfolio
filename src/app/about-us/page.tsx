import Header from "../components/header";
export default function about() {
    return (
        <div>
            <Header/>
            <div className="myselfContainer">
            <div>
                <h1 className="aboutMe">About Myself</h1>
            </div>
            <div className="aboutMeContent">        
                    <p>I am a passionate and dedicated 
                    software developer student at governor House 
                    I am a student of o'Level i have so much interest
                    in web developing, Coding and in ethical Hacking
                    my hobbies are coding, sports, reading, outing 
                    I love to do a travelling to explore world</p>
            </div>
            </div>
            <div className="images">
            <img src={"./programming.jpg"} />
            </div>
            <div className="myself">
                <img src={"./capture.jpg"}/>
            </div>
            <div className="travelling">
            <img src={"./travelling.jpg"} />
            </div>
        </div>
    )
}