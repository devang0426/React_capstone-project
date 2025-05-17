import '../App.css';

function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-container">
        <div className="chicago-content">
          <h2>Little Lemon Chicago</h2>
          <p>Little Lemon opened in 2010 by the Antonios family, bringing the authentic flavors of the Mediterranean to Chicago.</p>
          <p>Our recipes have been passed down through generations, preserving the rich culinary traditions of our homeland while incorporating modern techniques and local ingredients.</p>
          <p>We pride ourselves on creating a warm, inviting atmosphere where every guest feels like family.</p>
        </div>
        <div className="chicago-images">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Little Lemon Restaurant Interior" 
            className="chicago-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;