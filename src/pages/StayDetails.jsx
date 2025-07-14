import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StayDetails = () => {
  const stayId = useParams();
  const stays = [
    {
      id: 1,
      title: "Cozy Cottage Retreat",
      type: "Cottage",
      location: "Mountain View, CA",
      rating: 4.8,
      bio: "Escape to a charming cottage nestled in the mountains",
      amenities: ["Kitchen", "Wifi", "Parking"],
      price: 150,
    },
    {
      id: 2,
      title: "Beachfront Paradise Villa",
      type: "Villa",
      location: "Maui, Hawaii",
      rating: 4.9,
      bio: "Experience luxury in a stunning beachfront villa",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: 500,
    },
    {
      id: 3,
      title: "Urban Loft in the City",
      type: "Apartment",
      location: "New York City, NY",
      rating: 4.5,
      bio: "Live in style in a modern loft apartment in the heart of the city",
      amenities: ["Downtown Location", "Gym Acess", "24/7 Security"],
      price: 250,
    },
    {
      id: 4,
      title: "Rustic Cabin the Woords",
      type: "Cottage",
      location: "Maui, Hawaii",
      rating: 4.6,
      bio: "Experience luxury in a stunning beachfront villa",
      amenities: ["Private Pool", "Ocean View", "Fitness Center"],
      price: 400,
    },
  ];

  const stayData = stays.find((stay) => stay.id == stayId.stayId);
  return (
    <>
      <Header />
      <div className="container">
        <h2 className="display-2">{stayData.title}</h2>
        <main className="container py-4">
          <p>Type: {stayData.type}</p>
          <p>Location: {stayData.location}</p>
          <p>Rating: {stayData.rating}</p>
          <p>{stayData.bio}</p>

          <hr className="w-90 mx-auto my-4" />
          <h3>Amenities</h3>
          <ul>
            {stayData.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <p>Price: ${stayData.price}/night</p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default StayDetails;
