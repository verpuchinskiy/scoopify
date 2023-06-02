import Link from "next/link";
import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <div className="aboutHero">
        <h1>Make every day an ice cream day!</h1>
        <div className="infoHero">
          <div className="left">
            <span className="info">
              Handcrafted delights that instantly brighten up your day
            </span>
            <Link href="/products">
              <button>Go to Shop!</button>
            </Link>
          </div>
          <div className="right">
            <img src="/about-hero.png" />
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="left">
          <img src="/mission.png"></img>
        </div>
        <div className="right">
          <p>
            Our mission is to bring joy to every scoop by creating innovative
            flavors and using only the freshest ingredients available.
          </p>
          <br />
          <p>
            All of our ice cream is made in-house using locally sourced, organic
            dairy and seasonal fruits.
          </p>
        </div>
      </div>
      <div className="location">
        <h2>
          Premier destination for delicious, handcrafted ice cream in Copenhagen
        </h2>
        <div className="row">
          <div className="column">
            <h3>Fresh Ingredients</h3>
            <p>
              We use only the freshest and finest ingredients to make our ice
              cream. Our milk and cream come from local farms, and we source our
              fruits and nuts from trusted suppliers. You can taste the
              difference in every scoop!
            </p>
          </div>
          <div className="column">
            <h3>Homemade Waffle Cones</h3>
            <p>
              Our waffle cones are made fresh in-house every day. We use a
              secret recipe that combines just the right amount of crunch and
              sweetness. They're the perfect complement to our creamy ice cream.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>Creative Flavors</h3>
            <p>
              Our ice cream flavors are inspired by classic and modern taste
              combinations. From the rich and decadent Chocolate Fudge Brownie
              to the refreshing and tangy Lemon Raspberry, there's something for
              everyone. We also offer vegan and dairy-free options.
            </p>
          </div>
          <div className="column">
            <h3>Friendly Service</h3>
            <p>
              We believe that great ice cream should come with a smile. Our
              friendly and knowledgeable staff will help you find the perfect
              flavor and make your experience at our shop a memorable one.
            </p>
          </div>
        </div>
      </div>
      <div className="cafe">
        <img src="/cafe.png"></img>
        <span>
          Our shop is conveniently located in the heart of Copenhagen, making it
          the perfect stop for locals and tourists alike. Come visit us and
          experience the joy of handmade ice cream in a cozy and welcoming
          atmosphere.
        </span>
      </div>
    </div>
  );
}
