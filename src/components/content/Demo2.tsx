export const Demo2 = () => {
  return (
    <article className="demo2">
      <section>
        <span className="text-regular-semi-bold">
          <span>Simplify</span>
        </span>
        <h2>Customize Your Social Media Graphics Effortlessly</h2>
        <p>
          Logo365.AI is an AI-powered platform that allows small businesses to
          automatically generate customized social media graphics for national
          observances. Celebrate relevant national days, weeks, and months with
          your audience, enhancing brand engagement and visibility on different
          social media platforms.
        </p>
        <div className="list">
          <div className="list-item">
            <img
              src="/assets/iconrelumei141-nrxb.svg"
              alt="IconRelumeI141"
              className="icon-relume"
            />
            <span className="text11">
              <span>Streamline Marketing</span>
            </span>
            <span className="TextRegularNormal">
              <span>
                Effortlessly celebrate national observances with customized
                social media graphics.
              </span>
            </span>
          </div>
          <div className="list-item1">
            <img
              src="/assets/iconrelumei141-nrxb.svg"
              alt="IconRelumeI141"
              className="icon-relume1"
            />
            <span className="text10">
              <span>Enhance Engagement</span>
            </span>
            <span className="text-regular-normal">
              <span>
                Increase brand engagement and visibility on social media
                platforms with personalized graphics.
              </span>
            </span>
          </div>
        </div>
        <a href="/pricing" className="button white-button">
          Learn More
        </a>
        <a href="/login" className="button white-button">
          Sign Up
        </a>
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
