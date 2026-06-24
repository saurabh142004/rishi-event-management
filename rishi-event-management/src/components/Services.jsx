function Services() {
  const services = [
    "Wedding Planning",
    "Birthday Events",
    "Corporate Events",
    "Catering Services",
  ];

  return (
    <section>
      <h2>Our Services</h2>

      <div className="cards">
        {services.map((service) => (
          <div className="card" key={service}>
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;