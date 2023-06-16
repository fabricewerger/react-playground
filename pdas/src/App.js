import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="blablabla blabla bla"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana404"
                image={CortanaImage}
                description="blablabla blabla bla bla"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="siri"
                handle="@siri21"
                image={SiriImage}
                description="blabla blabla bla"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
