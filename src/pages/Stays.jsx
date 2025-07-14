import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Stays() {
  return (
    <>
      <Header />
      <div className="mt-4 container">
        <h1 className="display-3 container">Featured Stays</h1>
        {/* Card 1 */}
        <div className="card mb-3" style={{ maxWidth: "900px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/19737818/pexels-photo-19737818/free-photo-of-walkway-to-the-cabana-raposo-inn.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="img-fluid rounded-start"
                alt="Apartment"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Luxurious Taj Mahal View Apartment
                </h5>
                <p className="card-text">
                  Wake up to a breathtaking view of the Taj Maha; from this
                  luxurious apartment. Explore the rich history and beauty of
                  this iconic monument right from your window.
                </p>
                <p className="card-text">
                  <small className="text-muted">Lat updated 3 mins ago</small>
                </p>
                <Link to={"/stays/1"} className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mb-3" style={{ maxWidth: "900px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1685133856065-a32643cc56d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8"
                className="img-fluid rounded-start"
                alt="Moutain"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cozy Retreat in the Mountains</h5>
                <p className="card-text">
                  Escape to nature with this cozy mountain retreat. Enjoy
                  tranquility and stunning views while being surrounded by lush
                  forests and fresh mountain air.
                </p>
                <p className="card-text">
                  <small className="text-muted">Lat updated 10 mins ago</small>
                </p>
                <Link to={"/stays/2"} className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mb-3" style={{ maxWidth: "900px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://cdn.sanity.io/images/fud515dx/production/df63bb97a42ea6b0188b8db3c82da1fa7bb468a0-640x427.jpg?q=80"
                className="img-fluid rounded-start"
                alt="Villa"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Seaside Villa with Private Beach Access
                </h5>
                <p className="card-text">
                  Indulge in luxury with this stunning seaside villa. Relax on
                  pristine beaches, take a dip in the private pool and soak up
                  the sun in this exclusive coastal retreat.
                </p>
                <p className="card-text">
                  <small className="text-muted">Lat updated 15 mins ago</small>
                </p>
                <Link to={"/stays/3"} className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card mb-3" style={{ maxWidth: "900px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHFjfGVufDB8fDB8fHww"
                className="img-fluid rounded-start"
                alt="Loft"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Modern Loft in the City Center</h5>
                <p className="card-text">
                  Experience urban living at its finest with this modern loft.
                  Convinently located in the city center, it offers style,
                  comfort, and easy access to dining and entertainment options.
                </p>
                <p className="card-text">
                  <small className="text-muted">Lat updated 20 mins ago</small>
                </p>
                <Link to={"/stays/4"} className="btn btn-primary">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
