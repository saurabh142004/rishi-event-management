function Packages({ selectedPackage,setSelectedPackage, }) {
  const packages = [
    {
      name: "Basic",
      price: "₹10,000",
      features: ["Decoration", "Lighting"],
    },
    {
      name: "Standard",
      price: "₹25,000",
      features: ["Decoration", "Catering", "Photography"],
    },
    {
      name: "Premium",
      price: "₹50,000",
      features: [
        "Luxury Decoration",
        "Catering",
        "Photography",
        "Full Event Management",
      ],
    },
  ];

  return (
    <section>
      <h2>Our Packages</h2>

      <div className="cards">
        {packages.map((pkg) => (
          <div className="card" key={pkg.name}>
            <h3>{pkg.name}</h3>
            <h2>{pkg.price}</h2>

            {pkg.features.map((feature) => (
              <p key={feature}>✓ {feature}</p>
            ))}
           <button
            onClick={() => {
              setSelectedPackage(pkg.name);

              document
                .getElementById("booking-form")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
           {selectedPackage === pkg.name
            ? "Selected ✓"
            : "Choose Plan"}
          </button>
           
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;