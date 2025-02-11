import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";

const ContactUs = () => {
    return (
        <section className="max-w-7xl mx-auto" id="contact">
            <div className="my-20">
                <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
                    Contact Us
                </h2>
                <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
                    {CONTACT_INFO.text}
                </p>
                <div className="flex flex-col lg:flex-row justify-around mx-4"> {/* Fixed className */}
                    <div className="flex mb-8 lg:mb-8">
                        <RiPhoneLine className="text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">
                                {CONTACT_INFO.phone.label}
                            </p>
                            <p className="text-white">
                                {CONTACT_INFO.phone.value}
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-8 lg:mb-8">
                        <RiMailLine className="text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">
                                {CONTACT_INFO.email.label}
                            </p>
                            <p className="text-white">
                                  heatoo@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-8 lg:mb-8">
                        <RiMapPinLine className="text-3xl mr-4" />
                        <div>
                            <p className="text-lg font-semibold">
                                {CONTACT_INFO.address.label}
                            </p>
                            <p className="text-white">
                                {CONTACT_INFO.address.value}
                            </p>
                        </div>
                    </div>
                </div> {/* Corrected misplaced closing div */}
            </div>
        </section>
    );
};

export default ContactUs;
