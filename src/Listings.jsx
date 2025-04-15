import React, { useState } from "react";
import { FaWhatsapp, FaTelegram, FaMapMarkerAlt, FaBed, FaHome, FaUser } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const listingsData = [
  {
    id: 1,
    name: "Adesh Chavan",
    location: "40 Feet Road near SNBP school",
    mapLink: "https://maps.google.com?q=40+Feet+Road+near+SNBP+school",
    rent: "₹13,000/month",
    bhk: "2 BHK",
    beds: "2 beds",
    gender: "Boys",
    images: ["/Living_Room.jpg", "/Kitchen.jpg", "/Bedroom.jpg", "/Bathroom.jpg"]
  },
  {
    id: 2,
    name: "Shivani More",
    location: "Near Datta Mandir, Wakad",
    mapLink: "https://maps.google.com?q=Datta+Mandir+Wakad",
    rent: "₹10,500/month",
    bhk: "1 BHK",
    beds: "1 bed",
    gender: "Girls",
    images: ["/Living_Room2.jpg", "/Kitchen2.jpg", "/Bedroom2.jpg", "/Bathroom2.jpg"]
  },
  {
    id: 3,
    name: "Ravi Patil",
    location: "Near IT Park, Hinjewadi",
    mapLink: "https://maps.google.com?q=IT+Park+Hinjewadi",
    rent: "₹15,000/month",
    bhk: "3 BHK",
    beds: "3 beds",
    gender: "Boys",
    images: ["/Living_Room3.jpg", "/Kitchen3.jpg", "/Bedroom3.jpg", "/Bathroom3.jpg"]
  },
  {
    id: 4,
    name: "Sushma Patil",
    location: "Near Balewadi Stadium",
    mapLink: "https://maps.google.com?q=Balewadi+Stadium",
    rent: "₹12,500/month",
    bhk: "2 BHK",
    beds: "2 beds",
    gender: "Girls",
    images: ["/Living_Room4.jpg", "/Kitchen4.jpg", "/Bedroom4.jpg", "/Bathroom3.jpg"]
  }
];

const Listings = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [popupType, setPopupType] = useState("");
  const [inputs, setInputs] = useState({});
  const [currentImage, setCurrentImage] = useState({});

  const handleInputChange = (id, value) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleSend = (id) => {
    alert(`${popupType === "message" ? "Message" : "Contact"} sent: ${inputs[id] || ""}`);
    setInputs(prev => ({ ...prev, [id]: "" }));
    setActivePopup(null);
  };

  const handleNextImage = (id, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % total || 1
    }));
  };

  const handlePrevImage = (id, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + total) % total || total - 1
    }));
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0020] text-white">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400">Available Room Listings</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {listingsData.map((listing) => {
          const index = currentImage[listing.id] || 0;
          return (
            <div
              key={listing.id}
              className="bg-gradient-to-br from-[#2c1a4f] to-[#382d67] rounded-xl shadow-xl border border-[#422c6e] p-5 relative"
            >
              {/* Top Header Section */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-pink-200">{listing.name}</h2>
                  <a
                    href={listing.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-300 mt-1 hover:underline"
                  >
                    <FaMapMarkerAlt className="mr-1" /> {listing.location}
                  </a>
                </div>
                <div className="text-right text-green-400 font-bold text-lg">{listing.rent}</div>
              </div>

              {/* Image Gallery with Swipe */}
              <div className="relative mt-4">
                <img
                  src={listing.images[index]}
                  alt={`Image ${index + 1}`}
                  className="w-full h-52 object-cover rounded-lg"
                />
                <button
                  onClick={() => handlePrevImage(listing.id, listing.images.length)}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                >
                  <IoIosArrowBack size={20} />
                </button>
                <button
                  onClick={() => handleNextImage(listing.id, listing.images.length)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                >
                  <IoIosArrowForward size={20} />
                </button>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                <div className="bg-white/10 rounded-md p-3 backdrop-blur-sm text-pink-100 flex items-center gap-2">
                  <FaHome /> {listing.bhk}
                </div>
                <div className="bg-white/10 rounded-md p-3 backdrop-blur-sm text-pink-100 flex items-center gap-2">
                  <FaBed /> {listing.beds}
                </div>
                <div className="bg-white/10 rounded-md p-3 backdrop-blur-sm text-pink-100 flex items-center gap-2">
                  <FaUser /> {listing.gender}
                </div>
              </div>

              {/* Message/Contact + Social */}
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setActivePopup(listing.id);
                      setPopupType("message");
                    }}
                    className="bg-white text-black px-4 py-2 text-sm rounded-md hover:bg-gray-200"
                  >
                    Message
                  </button>
                  <button
                    onClick={() => {
                      setActivePopup(listing.id);
                      setPopupType("contact");
                    }}
                    className="bg-[#5ecbff] px-4 py-2 text-sm rounded-md hover:bg-[#3fbfff] text-white"
                  >
                    Contact
                  </button>
                </div>
                <div className="flex gap-4">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full">
                    <FaWhatsapp size={20} />
                  </a>
                  <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-3 rounded-full">
                    <FaTelegram size={20} />
                  </a>
                </div>
              </div>

              {/* Pop-up */}
              {activePopup === listing.id && (
                <div className="absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm flex items-center justify-center rounded-xl z-10">
                  <div className="bg-[#220033] p-6 rounded-lg w-11/12 max-w-md">
                    <h3 className="text-xl mb-4 text-white">
                      {popupType === "message" ? "Send a Message" : "Contact the Owner"}
                    </h3>
                    <textarea
                      rows="4"
                      className="w-full p-2 rounded bg-white/10 text-white"
                      placeholder={popupType === "message" ? "Type your message..." : "Enter your contact info..."}
                      value={inputs[listing.id] || ""}
                      onChange={(e) => handleInputChange(listing.id, e.target.value)}
                    ></textarea>
                    <div className="flex justify-end mt-4 gap-2">
                      <button
                        onClick={() => setActivePopup(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSend(listing.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
