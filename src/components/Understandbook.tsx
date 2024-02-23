import Image from 'next/image';

const features = [
    {
        src: '/packs/static/main-features-section/images/main-features/headphones-28aa1d78a527f060d122.svg',
        alt: 'Read or listen',
        headline: 'Read or listen',
        subheadline: 'Get the key ideas from nonfiction bestsellers in minutes, not hours.'
    },
    {
        src: '/packs/static/main-features-section/images/main-features/bulb-aeeefecd48fdf887973a.svg',
        alt: 'Find your next read',
        headline: 'Find your next read',
        subheadline: 'Get book lists curated by experts and personalized recommendations.'
    },
    {
        src: '/packs/static/main-features-section/images/main-features/mic-a5dc78b6c06e05cabacb.svg',
        alt: 'Shortcasts',
        headline: 'Shortcasts',
        subheadline: 'We’ve teamed up with podcast creators to bring you key insights from podcasts.'
    }
];

const MainFeatures = () => {
    return (
        <div className="main-features py-6 m:py-8 l:py-12 ">
            <div className="main-features__container container">
                <div className="grid">
                    <h2 className="main-features__headline grid__el--xs-12 text-center"> Understand books &amp; podcasts in 15 minutes </h2>
                </div>
                <div className="main-features__features grid">
                    {features.map((feature, index) => (
                        <div key={index} className="main-features__feature   grid-cols-2 grid-flow-row">
                            <section className="main-feature">
                                <Image src={feature.src} alt={feature.alt} width={60} height={60} className="main-feature__icon" />
                                <div className="main-feature__content">
                                    <h3 className="main-feature__headline-container">
                                        <span className="main-feature__headline">{feature.headline}</span>
                                    </h3>
                                    <div className="main-feature__subheadline">{feature.subheadline}</div>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainFeatures;