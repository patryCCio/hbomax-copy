const Devices = () => {
  return (
    <section className="section devices">
      <div className="text-center">
        <h2>Oglądaj na tych urządzeniach</h2>
        <div className="device-wrapper">
          <div className="device">
            <div className="img">
              <img
                src="https://hbomax-images.warnermediacdn.com/2021-10/device-module-tv-desktop.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266"
                alt="tv-icon"
              />
            </div>
            <h3>Telewizory</h3>
            <hr className="pink" />
            <div className="device-flex">
              <p>Apple TV</p>
              <p>Android TV</p>
              <p>Chromecast</p>
              <p>Samsung TV</p>
              <p>LG</p>
            </div>
          </div>
          <div className="device">
            <div className="img">
              <img
                src="https://hbomax-images.warnermediacdn.com/2021-10/device-module-computer-desktop.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266"
                alt="computer-icon"
              />
            </div>
            <h3>Komputery</h3>
            <hr className="pink" />
            <div className="device-flex">
              <p>Chrome OS</p>
              <p>MacOS</p>
              <p>Windows PC</p>
            </div>
          </div>
          <div className="device">
            <div className="img">
              <img
                src="https://hbomax-images.warnermediacdn.com/2021-10/device-module-console-desktop.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266"
                alt="gamepad-icon"
              />
            </div>
            <h3>Konsole</h3>
            <hr className="pink" />
            <div className="device-flex">
              <p>PS5</p>
              <p>PS4</p>
              <p>Xbox Series X|S</p>
              <p>Xbox One</p>
            </div>
          </div>
          <div className="device">
            <div className="img">
              <img
                src="https://hbomax-images.warnermediacdn.com/2021-10/device-module-tablet-desktop.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=266"
                alt="tab-icon"
              />
            </div>
            <h3>Telefony i tablety</h3>
            <hr className="pink" />
            <div className="device-flex">
              <p>IPhone i Ipad</p>
              <p>Telefony i tablety z systemem Android</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
