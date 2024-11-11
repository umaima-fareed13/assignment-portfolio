import Header from "../components/header";
import Image from "next/image"; // Import Next.js Image component

export default function About() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="profile">
                    <div className="profile_container">
                        <div className="profile_profileImg">
                            {/* Using next/image instead of img */}
                            <Image
                                src="/profile.jpg"
                                alt="Umaima Fareed"
                                width={200}
                                height={200}
                                className="profile_img"
                            />
                        </div>
                        <div>
                            <h1 className="profile_name">
                                <span className="profile_name_firstName">Umaima</span>
                                <span className="profile_name_lastName"> Fareed</span>
                            </h1>
                            <p className="profile_title">Software Developer</p>
                            <p className="description">
                                I am a student at Governor House and learning Artificial Intelligence Web 3.0 and Metaverse. I have a strong foundation in programming languages such as HTML, Java, and C++.
                            </p>
                            <a className="downloadBtn" href="./cv.pdf" download="Resume.pdf">Download Btn</a>
                        </div>
                    </div>
                </div>

                {/* Group 1 */}
                <div className="group-1">
                    <div className="expertise">
                        <h3 className="title">Skills</h3>
                        <ul className="skill_list description">
                            <li>Typescript</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                            <li>Ms Word</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="Reference">
                        <h3 className="title">Reference</h3>
                        <ul className="reference_name description">
                            <li>Sir Kamran Khan Tessori</li>
                            <li>Sir Anas Mirza</li>
                            <li>Sir Ubaid Ur Rehman</li>
                        </ul>
                    </div>
                    <div className="edu">
                        <h3 className="title">Education</h3>
                        <div className="edu_item">
                            <p className="item_pretittle description">O&apos;Levels (ongoing)</p>
                            <h4 className="item_title description">
                                <span className="color">Artificial Intelligence Web 3.0 & Metaverse</span>
                            </h4>
                            <p className="item_subsubtitle description">
                                Governor House Karachi
                            </p>
                        </div>
                    </div>
                </div>

                {/* Group 2 */}
                <div className="group-2">
                    <div className="exp">
                        <h3 className="title">Experience</h3>
                        <div className="exp_item">
                            <p className="description">Seeking an opportunity as a fresh candidate to start my professional career</p>
                        </div>
                    </div>
                    <div className="certification">
                        <h3 className="title">Certification</h3>
                        <div className="certification_item description">
                            Artificial Intelligence, Web 3.0 & Metaverse
                        </div>
                    </div>
                    <div className="interest">
                        <h3 className="title">Interest</h3>
                        <div className="interest_items">
                            <div className="interest_item">
                                <span>Books</span>
                            </div>
                            <div className="interest_item">
                                <span>Coding</span>
                            </div>
                            <div className="interest_item">
                                <span>Music</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Group 3 */}
                <div className="group-3">
                    <div className="contact">
                        <h3 className="titleFooter">Contact</h3>
                        <div className="contact_info">
                            <p className="description">
                                Bahria Town Karachi
                            </p>
                            <p className="description">
                                +92 321 8318143
                            </p>
                            <p className="description">
                                umaimafareed07@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="socials">
                        <h3 className="titleFooter">Socials</h3>
                        <div className="social_items">
                            <a href="#" className="social_item">
                                <i data-feather="instagram"></i>
                                <span>/umaima-x-fareed</span>
                            </a>
                            <a href="#" className="social_item">
                                <i data-feather="github"></i>
                                <span>/umaimafareed07</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
