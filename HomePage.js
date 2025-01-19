import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for styles

function HomePage() {
  
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-overlay">
          <h1>Welcome to Home2U</h1>
          <p>Your perfect home starts here</p>
          <Link to="/products" className="btn btn-primary hero-btn">Shop Now</Link>
        </div>
      </div>

      {/* Product Categories */}
      <section className="container mt-5">
        <h2 className="text-center">Shop by Category</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/products/living-room">
                <img src="images\livingroom.jpeg" alt="Living Room" className="img-fluid" />
                <h5 className="text-center">Living Room</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/products/bedroom">
                <img src="images\bedroom.png" alt="Bedroom" className="img-fluid" />
                <h5 className="text-center">Bedroom</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/products/kitchen">
                <img src="images\kitchen.webp" alt="Kitchen" className="img-fluid" />
                <h5 className="text-center">Kitchen</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <Link to="/products/office">
                <img src="images\office.jpg" alt="Office" className="img-fluid" />
                <h5 className="text-center">Office</h5>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Furniture Section with Hover Effect */}
      <section className="container mt-5">
        <h2 className="text-center">Featured Furniture</h2>
        <div className="furniture-grid">
          {/* Furniture 1 */}
          <div className="furniture-item">
            <Link to="/product/1">
              <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                <div className="furniture-name">Comfort Sofa</div>
              </div>
            </Link>
          </div>

          {/* Furniture 2 */}
          <div className="furniture-item">
            <Link to="/product/2">
              <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                <div className="furniture-name">Dining Table</div>
              </div>
            </Link>
          </div>

          {/* Furniture 3 */}
          <div className="furniture-item">
            <Link to="/product/3">
              <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                <div className="furniture-name">Wooden Bookshelf</div>
              </div>
            </Link>
          </div>

          {/* Furniture 4 */}
          <div className="furniture-item">
            <Link to="/product/4">
              <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                <div className="furniture-name">Modern Chair</div>
              </div>
            </Link>
          </div>

          {/* Furniture 5 */}
          <div className="furniture-item">
            <Link to="/product/5">
              <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                <div className="furniture-name">Office Desk</div>
              </div>
            </Link>
          </div>

          {/* Furniture 6 */}
          <div className="furniture-item">
            <Link to="/product/6">
              <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                <div className="furniture-name">Table Lamp</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Furniture Display Section with Hover Effect */}
      <section className="container mt-5">
        <h2 className="text-center">Featured Furniture</h2>
        <div className="row">
          {/* Furniture 1 */}
          <div className="col-md-4 mb-4">
            <div className="furniture-card">
              <Link to="/product/1">
                <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                  <div className="furniture-name">Comfort Sofa</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Furniture 2 */}
          <div className="col-md-4 mb-4">
            <div className="furniture-card">
              <Link to="/product/2">
                <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                  <div className="furniture-name">Dining Table</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Furniture 3 */}
          <div className="col-md-4 mb-4">
            <div className="furniture-card">
              <Link to="/product/3">
                <div className="furniture-img" style={{ backgroundImage: 'url(images/placeholder1280x720.webp)' }}>
                  <div className="furniture-name">Wooden Bookshelf</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Clickable Image Areas */}
      <section className="container mt-5">
        <h2 className="text-center">Shop by Style</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="category-card">
              <Link to="/products/modern">
                <img src="images/placeholder1280x720.webp" alt="Modern Style" className="img-fluid" />
                <h5 className="text-center">Modern Style</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="category-card">
              <Link to="/products/traditional">
                <img src="images/placeholder1280x720.webp" alt="Traditional Style" className="img-fluid" />
                <h5 className="text-center">Traditional Style</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="category-card">
              <Link to="/products/minimalist">
                <img src="images/placeholder1280x720.webp" alt="Minimalist Style" className="img-fluid" />
                <h5 className="text-center">Minimalist Style</h5>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Furniture Section */}
      <section className="container mt-5">
        <h2 className="text-center">Featured Furniture</h2>
        <div className="row">
          {/* Furniture 1 */}
          <div className="col-md-4 mb-4">
            <div className="card product-card shadow-sm">
              <img src="images/placeholder1280x720.webp" className="card-img-top" alt="Sofa" />
              <div className="card-body">
                <h5 className="card-title">Comfort Sofa</h5>
                <p className="card-text">A comfortable sofa perfect for any living room. Available in various colors.</p>
                <p className="card-text"><strong>$250</strong></p>
                <Link to="/product/1" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
          {/* Furniture 2 */}
          <div className="col-md-4 mb-4">
            <div className="card product-card shadow-sm">
              <img src="images/placeholder1280x720.webp" className="card-img-top" alt="Dining Table" />
              <div className="card-body">
                <h5 className="card-title">Dining Table</h5>
                <p className="card-text">A stylish dining table that fits perfectly in any home.</p>
                <p className="card-text"><strong>$500</strong></p>
                <Link to="/product/2" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
          {/* Furniture 3 */}
          <div className="col-md-4 mb-4">
            <div className="card product-card shadow-sm">
              <img src="images/placeholder1280x720.webp" className="card-img-top" alt="Bookshelf" />
              <div className="card-body">
                <h5 className="card-title">Wooden Bookshelf</h5>
                <p className="card-text">A sturdy bookshelf for your home office or living room.</p>
                <p className="card-text"><strong>$150</strong></p>
                <Link to="/product/3" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
