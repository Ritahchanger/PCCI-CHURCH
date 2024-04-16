import "./About.scss";
const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <p className="section-headers">ABOUT</p>

        <div className="grid">
          <div className="card">
            <div className="box">
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1529988885170-6dc8ce34ce6d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <p className="card-title">Mission Statement</p>
              <p className="card-description">
                Empowered by the love of Christ, our mission is to passionately
                serve and transform lives, fostering spiritual growth and
                community engagement.
              </p>
            </div>
            <div className="box">
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1529988885170-6dc8ce34ce6d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <p className="card-title">Mission Statement</p>
              <p className="card-description">
                Empowered by the love of Christ, our mission is to passionately
                serve and transform lives, fostering spiritual growth and
                community engagement.
              </p>
            </div>
          </div>

          <div className="card">
            <p className="card-title">Church history</p>
            <p className="card-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cum
              ipsa a impedit recusandae et, sapiente rem magnam ratione, ipsam
              laborum laudantium quaerat adipisci nisi eos. Facere, vitae cumque
              repellat asperiores laudantium aliquid iste accusamus suscipit ea
              autem voluptas, reiciendis voluptatibus sapiente quaerat, ratione
              vel consequuntur temporibus quisquam delectus voluptate odio
              deserunt atque quos minima. Quas explicabo iste quae sapiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
