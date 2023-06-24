export function Home() {
  return (
      <div className = "home-page">
        <img src="https://assets.cntraveller.in/photos/618e82491af22a472dbf4f9e/4:3/w_1792,h_1344,c_limit/Cafe%20Duco%20Interiors-10.jpg" alt="restaurant image" className="cafe" />
        <h1 className = "image-text"> Ready to serve you.</h1>
        <button type="submit" className="second-button">Order Online</button>
        <img src="https://b.zmtcdn.com/data/pictures/9/20571879/6bbacbecf776cade9100813838a7157d.jpg" alt="restaurant image" className="second-image" />
        <p className= "second-paragraph"> Offers a quiet space with comfy armchairs, a large farm 
        table for groups, a wall-side bar and café tables. Outdoor seating is available weather
        permitting and we certainly encourage taking one's espresso and croissants outside on a gorgeous day! </p>
      </div>
  );
}
