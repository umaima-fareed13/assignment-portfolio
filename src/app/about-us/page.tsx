import Header from "../components/header";
import Image from "next/image"; // Import next/image for image optimization

export default function About() {
    return (
        <div>
            <Header />
            <div className="myselfContainer">
                <div>
                    <h1 className="aboutMe">About Myself</h1>
                </div>
                <div className="aboutMeContent">        
                    <p>
                        I am a passionate and dedicated software developer student at Governor House. 
                        I am a student of O'Level. I have so much interest in web development, coding, 
                        and ethical hacking. My hobbies are coding, sports, reading, and outing. 
                        I love to travel to explore the world.
                    </p>
                </div>
            </div>
            <div className="images">
                <Image 
                    src={"/programming.jpg"} 
                    alt="Programming" 
                    width={600} 
                    height={400} 
                />
            </div>
            <div className="myself">
                <Image 
                    src={"/capture.jpg"} 
                    alt="Capture Image" 
                    width={600} 
                    height={400} 
                />
            </div>
            <div className="travelling">
                <Image 
                    src={"/travelling.jpg"} 
                    alt="Travelling" 
                    width={600} 
                    height={400} 
                />
            </div>
        </div>
    );
}
