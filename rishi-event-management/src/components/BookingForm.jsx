import { useState } from "react";

function BookingForm({selectedPackage,setSelectedPackage}) {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Booking Submitted!

Name: ${name}
Event: ${eventType}
Package: ${selectedPackage}
Date: ${eventDate}
    `);
  };

  const checkAvailability = () => {
    if (eventDate) {
      alert(`Checking availability for ${eventDate}`);
    } else {
      alert("Please select a date first");
    }
  };

  return (
    <section 
      id="booking-form"
      className="booking-section">
      <h2>Book Your Event</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        {/* Event Type */}
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">Select Event</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Corporate">Corporate</option>
        </select>

        <br />
        <br />

        {/* Package Type */}
        <select
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          <option value="">Select Package</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>

        <br />
        <br />

        {/* Date */}
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />

        <br />
        <br />

        {/* Buttons */}
        <button type="button" onClick={checkAvailability}>
          Check Availability
        </button>

        <br />
        <br />

        <button type="submit">
          Submit Booking
        </button>
      </form>

      <hr />

      {/* Booking Summary */}
      <h3>Booking Summary</h3>

      <p>Name: {name}</p>
      <p>Event: {eventType}</p>
      <p>Package: {selectedPackage}</p>
      <p>Date: {eventDate}</p>
    </section>
  );
}

export default BookingForm;