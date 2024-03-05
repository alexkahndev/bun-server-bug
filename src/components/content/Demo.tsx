
export const Demo = () => {
  return (
    <article className="demo">
      <section>
        <h1>Medium length hero heading goes here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis
          cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.
        </p>
        <a href="/pricing" className="button black-button">Get Started</a>
        <a href="/login" className="button white-button">Subscribe Now</a>
      </section>
      <video autoPlay muted loop>
        <source src="/assets/ElysiaJS.mp4" type="video/mp4" />
        Your browser does not support the video tag. This is a demo video for
        Awesome.Social that goes over how we can help you maximize your social
        media presence and how you can get your Awesome Social Strategy.
      </video>

    </article>
  );
};
