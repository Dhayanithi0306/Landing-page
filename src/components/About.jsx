import aboutImage from "../assets/about.webp";
const About = ()=>{
    return(
        <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about" > 
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4" >
            About Us
        </h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20" >
            <div className="mb-8 lg:mb-0" >
                <img src={aboutImage} alt="Image" className="w-full h-auto"/>
            </div>
            <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8" >
        
               Welcome to Heatoo, where innovation meets elegance in home renovation and interior design. With years of expertise,
    we specialize in transforming ordinary spaces into extraordinary living experiences, tailored to your unique style and needs.
    Whether it’s a modern makeover, a classic revamp, or a complete home transformation, our expert team ensures precision, creativity, 
    and functionality in every project. At VastuSpaze, we believe that every home has a story, and our mission is to bring that story
    to life with designs that reflect personality, comfort, and sophistication. Our commitment to qual
    ity craftsmanship, sustainability, and client satisfaction sets us apart, making us a trusted name in the industry.
  


            </p>
        </div>
         </section>
    )
}

export default About;