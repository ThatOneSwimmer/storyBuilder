import image1 from '../images/abstract.jpg';

export function Display() {
    return (
    <div className="display-page">
        <section className= "left-side">
        <div className= "chat"> 
            <h3> Chat </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <div className= "cam">
            <div className = "info">
                <h3> cam </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    </section>
    <section className= "right-side">
    <div className= "play">
            <div className = "info">
                <h3> cam </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    </section>
    </div>
       
    );
}