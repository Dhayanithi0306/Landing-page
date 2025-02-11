import { HERO_CONTENT } from '../constants';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 text-center" id="homey">
            <div className="flex flex-col items-center my-20 px-4">
                <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold text-white">
                   HEATOO
                </h1>
                <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter text-gray-300">
                    {HERO_CONTENT.subtitle}
                </p>
                <img src={HERO_CONTENT.image} className="w-full h-[65vh] object-cover rounded-2xl p-2" alt="Hero Image" />
            </div>
        </section>
    );
};

export default Hero;
