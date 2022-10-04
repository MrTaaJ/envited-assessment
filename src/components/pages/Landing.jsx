import Button from "../Button"
import LandingLogo from "../../img/Landing page image.svg"

const Landing = () => {
  return (
    <div className="landing">
        <header>
            <div className="title">
                <p>Imagine if<br />
                <span className="snapchat">Snapchat</span><br />
                had events.</p>
            </div>
            <div className="subtitle">
                <p>Easily host and share events with your friends across any social media.</p>
            </div>
        </header>
        <div className="middle">
            <img src={LandingLogo} alt="landing-logo" />
        </div>
        <Button version='landing' text='Create my event'/>
    </div>
    

  )
}

export default Landing