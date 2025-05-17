import '../App.css';

function Specials() {
  const specialItems = [
    {
      id: 1,
      title: 'Greek Salad',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1684&q=80'
    },
    {
      id: 2,
      title: 'Lemon Herb Chicken',
      price: '$16.99',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80'
    },
    {
      id: 3,
      title: 'Mediterranean Pasta',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <section className="specials">
      {/* Decorative floating elements */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      
      <h2 className="section-title">Today's Specials</h2>
      
      <div className="specials-grid">
        {specialItems.map(item => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <h3 className="special-title">{item.title}</h3>
            <p className="special-price">{item.price}</p>
            <a href="#" className="special-link">Order now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;