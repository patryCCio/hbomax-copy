const Info = () => {
  return (
    <section className="section info">
      <div className="info-box">
        <div className="img">
          <img
            src="https://hbomax-images.warnermediacdn.com/2021-09/CRM_AbandonCart_Icon_3Devices_v2.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=295"
            alt="computer-icon"
          />
        </div>
        <div className="text-center">
          <h2>Jednoczesne oglądanie</h2>
          <hr className="pink" />
          <p>Oglądaj na 3 różnych urządzeniach w tym samym czasie.</p>
        </div>
      </div>
      <div className="info-box">
        <div className="img">
          <img
            src="https://hbomax-images.warnermediacdn.com/2021-09/CRM_AbandonCart_Icon_CustomSpaces_v2.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=295"
            alt="users-icon"
          />
        </div>
        <div className="text-center">
          <h2>Dopasowane profile</h2>
          <hr className="pink" />
          <p>
            Utwórz aż do 5 profili dla dzieci i dorosłych ze specjalnie
            dobieranymi treściami.
          </p>
        </div>
      </div>
      <div className="info-box">
        <div className="img">
          <img
            src="https://hbomax-images.warnermediacdn.com/2021-09/CRM_AbandonCart_Icon_OfflineViewing_v2_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=295"
            alt="wifi-icon"
          />
        </div>
        <div className="text-center">
          <h2>Pobieraj i oglądaj w drodze</h2>
          <hr className="pink" />
          <p>Oglądaj, co chcesz, gdzie chcesz.</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
