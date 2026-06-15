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

      {services.map((service) => (
        <p key={service}>{service}</p>
      ))}
    </section>
  );
}

export default Services;