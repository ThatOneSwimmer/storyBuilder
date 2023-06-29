export function Menu() {
    return (
   <div className = "menu-page">
        <div className = "search-bar">
                <form id="form">
                    <input type="search" id="query" name="q" placeholder="Search by ingredient or recipe" />
                    <button className = "search-button">
                    <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                    </button>
                </form>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/1739748/pexels-photo-1739748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="restaurant image" className="bakery" />
        </div>
            <img src="https://images.pexels.com/photos/6534617/pexels-photo-6534617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="croissants" />
            <img src="https://cdn.discordapp.com/attachments/1113663834310316112/1121986836017991730/tomatoes-1603599_1280.jpg" className="quiches" />
            <div>
                <img src="https://images.pexels.com/photos/8176276/pexels-photo-8176276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="pastries" />
            </div>
        <div className = "captions">
            <p1> 
                Our recipe guarantees buttery, fluffy, and flaky croissants
                which has made it the most popular item on the menu.
            </p1>
            <p2> 
                Our French tarts consist of pastry crust filled with savoury
                custard and pieces of cheese, meat, seafood or vegetables.
            </p2>
        </div>
    </div>
  )
  }