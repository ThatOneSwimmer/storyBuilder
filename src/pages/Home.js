export function Home() {
  return (
    <div className="home-page">
      <div className="first-image">
        <img src="https://assets.cntraveller.in/photos/618e82491af22a472dbf4f9e/4:3/w_1792,h_1344,c_limit/Cafe%20Duco%20Interiors-10.jpg" alt="restaurant image" className="cafe" />
        <h1 className="image-text">Ready to serve you.</h1>
        <button type="submit" className="second-button">Order Online</button>
      </div>

    {/* icons section starts */}

      <section className="icons-container">
        <div className="icons">
          <a target="_blank" href="https://icons8.com/icon/W0WxeRWNnaTt/deliver-food">
            <img src="https://img.icons8.com/?size=512&id=W0WxeRWNnaTt&format=png" alt="Truck Icon" />
          </a>
          <div className="info">
            <h3>Catering</h3>
            <span>Elevate your event with our catering options.</span>
          </div>
        </div>

        <div className="icons">
          <a target="_blank" href="https://icons8.com/icon/set/gift/pulsar-line">
            <img src="https://img.icons8.com/?size=512&id=qqZAPn8x7MDl&format=png" alt="Gift Icon" />
          </a>
          <div className="info">
            <h3>Offer & Gifts</h3>
            <span>Check out our new coupons and gift cards.</span>
          </div>
        </div>

        <div className="icons">
          <a target="_blank" href="https://icons8.com/icon/eKCdBcCj5bWv/reserve">
            <img src="https://img.icons8.com/?size=512&id=eKCdBcCj5bWv&format=png" alt="Reservation Icon" />
          </a>
          <div className="info">
            <h3>Reservation</h3>
            <span>Reserve your spot to avoid waiting in line.</span>
          </div>
        </div>
      </section>

      <div className="second-image">
        <img src="https://b.zmtcdn.com/data/pictures/9/20571879/6bbacbecf776cade9100813838a7157d.jpg" alt="restaurant image" className="second-image" />
      </div>
      <p className="second-paragraph">Offers a quiet space with comfy armchairs, a large farm table for groups, a wall-side bar, and café tables. Outdoor seating is available weather permitting, and we certainly encourage taking one's espresso and croissants outside on a gorgeous day!</p>
    </div>
  );
}