import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-2">Latest Listings</h1>
        <img
          src="https://www.visitnorthwestillinois.com/wp-content/uploads/2023/08/vacation-rental-hero-new.webp"
          alt="Listing 1"
          className="img-fluid w-10 py-4"
        />
        <div className="container py-4">
          <h2 className="fw-bold">Cozy Loft in the City Center</h2>
          <small className="text-muted">
            Entire loft · 2 guests · 1 bedroom · 1 bed · 1 bath
          </small>
          <p className="mt-2">
            Enjoy your stay in this stylish loft apartment located in the heart
            of the city. Close to restaurants, shops, and attractions, it's the
            perfect base for exploring the city.
          </p>
          <p className="fw-semibold">$120 per night</p>
        </div>
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/531451301.jpg?k=0a20376b4ae576d3d0dd23a40bd6c0f551e62bf545eb7f9af65c722cff6e12c6&o="
          alt="Listing 2"
          className="img-fluid w-100 py-4"
        />
        <div className="container py-4">
          <h2 className="fw-bold">Beachfront Villa with Stunning Views</h2>
          <small className="text-muted">
            Entire villa . 6 guests . 3 bedrooms . 3 bed . 2 baths
          </small>
          <p className="mt-2">
            Relax and unwind in this beautiful beachfront villa. Wake up to
            panoramic ocean views, take a dip in the private pool, and enjoy
            seamless indoor-outdoor living.
          </p>
          <p className="fw-semibold">$300 per night</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
