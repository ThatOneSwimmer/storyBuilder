import image1 from '../images/abstract.jpg';

export function Display() {
    return (
        <main class="main">
        <div class="main">
          <div class="display-page">
            <section class="left-side">
              <div class="chat">
                <h3>Chat</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </section>
            <section class="play">
              <div class="info">
                <h3>Now Playing...</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div class="display-buttons">
                  <button type="button" class="display-b">Home</button>
                  <button type="button" class="display-b">Redo</button>
                  <button type="button" class="display-b">Start Newtesting</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
}