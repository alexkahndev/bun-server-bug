export const Banner = () => {
    return (
      <article className="banner">
        <section className = "content1">
        <h6 className = 'text-regular-semi-bold'>Simplify</h6>
        <div className = "content">
        <h2>
        Streamline Your Social Media Marketing Efforts
        </h2>
        <p> 
            Logo365.AI is an AI-powered platform that helps small businesses
            save time and maintain brand consistency by automatically
            generating customized social media graphics for national
            observances. With our platform, you can effortlessly celebrate
            relevant national days, weeks, and months with your audience,
            increasing brand engagement and visibility on different social
            media platforms.
        </p>
        </div>
        </section>

        <section className = 'overallBanner'>
          <section className = 'column'>
          <article>
          <img src="/assets/iconrelumei141-nrxb.svg" alt="Business Growth Icon" />
            <h3>Save Time and Stay Consistent</h3>
            <p>
                Generate customized social media graphics for national
                observances with ease.
            </p>
          </article>

          <article>
          <img src="/assets/iconrelumei141-nrxb.svg" alt="Enhance Brand Engagement and Visibility" />
            <h3>Enhance Brand Engagement and Visibility</h3>
            <p>
                Celebrate relevant national days, weeks, and months with
                your audience.
            </p>
          </article>

          <article>
          <img src="/assets/iconrelumei141-nrxb.svg" alt="Awesome.Social Strategy Icon" />
            <h3>Boost Your Social Media Presence</h3>
            <p>
                Increase brand engagement and visibility on social media
                platforms.
            </p>
          </article>
          </section>

          <a href="/pricing" className="button white-button">Get Started</a>
          <a href="/login" className="button white-button">View Portal</a>
        </section>
      </article>
    );
  };