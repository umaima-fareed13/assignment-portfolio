import Link from "next/link";
export default function Header() {
    return(
        <div className="parentContainer">
            <div className="childContainer">
                <ul className="headerText">
                    <Link href={"./"}>
                    <div className="home">Home</div>
                    </Link>
                    <Link href={"./about-us"}>
                    <div className="about">About</div>
                    </Link>
                    <Link href={"./contact-us"}>
                    <div className="contactHome">Contact</div>
                    </Link>
               </ul>
            </div>
        </div>
    )
}