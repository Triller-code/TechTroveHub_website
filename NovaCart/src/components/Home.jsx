import React from "react";



function Home() {
  return (
    <div className="home-container" >
      <div className="mainhome">
        
    </div>
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home Appliances</div>
        </div>
      </section>
      <section className="cta">
        <h2>Get the Best Deals Now!</h2>
        <button>Shop Now</button>
      </section>
    </div>
  );
}

export default Home;

