import '../App.css';

function CustomersSay() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      comment: 'The Greek Salad was so fresh and delicious! Definitely coming back for more.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      comment: 'Authentic Mediterranean flavors that reminded me of my travels. The service was excellent too!',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      comment: 'Lovely atmosphere and the lemon desserts are to die for! A hidden gem in Chicago.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    }
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Customers Say</h2>
      
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-content">"{testimonial.comment}"</p>
            <div className="customer-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <p className="customer-name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;