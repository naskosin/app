import styles from './gallery.module.css'

const Gallery = ()=>{
    return (

<section className={styles.section__main}>
  <article className="main">
    <div className="main__img__wrapper">
      <img
        className="main__img"
        src="assets/5ce826aedf29c86610716597.jpg"
        alt="No picture"
      />
    </div>
    <div className="main__div">
      <h1>Fishing is passion!</h1>
      <p>
        Fish early, and fish late. Many species of fish bite best right at dawn
        and dusk, in ambient sunlight. During the mid-day hours cloud cover can
        make for better fishing, and in direct sunlight (especially during the
        heat of summer) look for areas with shade. Fish often seek out shade
        when it’s hot and sunny and become more active during the cool hours of
        the day, just as you or I might.
      </p>
    </div>
  </article>
  <section className="section__second">
    <div >
      <ul>
        <app-gallery-item
          
        ></app-gallery-item>
      </ul>
    </div>

    <div className="no_fishes" >
      <p>
        <span>Ooops!</span> There's no fishes in the dock. Change your bait and
        try again!
      </p>
    </div>
  </section>
</section>

    );
}
export default Gallery;
