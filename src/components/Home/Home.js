import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://i.picsum.photos/id/225/200/300.jpg?hmac=HoopVmaDuZW8v_8n33eWQvN3hdmFj9gP2m3AWvybT8s"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
        <Card
          src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
        <Card
          src="https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.picsum.photos/id/14/200/300.jpg?hmac=FMdb1SH_oeEo4ibDe66-ORzb8p0VYJUS3xWfN3h2qDU"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
          price="£70/night"
        />
        <Card
          src="https://i.picsum.photos/id/10/200/300.jpg?hmac=94QiqvBcKJMHpneU69KYg2pky8aZ6iBzKrAuhSUBB9s"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
          price="£70/night"
        />
        <Card
          src="https://i.picsum.photos/id/12/200/300.jpg?hmac=H975kfBbjoaBk4vHQpqpz-uxYLeRtC67xb6WSe_wPkk"
          title="Online Experiences"
          description="Unique activites we can do together, led by a world of hosts."
          price="£70/night"
        />
      </div>
    </div>
  );
}

export default Home;
