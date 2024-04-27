

const FAQ = () => {
    return (
        <section className="">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 ">
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">How do I care for my clay-made pottery?</summary>
                    <div className="px-4 pb-4">
                        <p> Hand wash with mild soap and water. Avoid sudden temperature changes to prevent cracking. Not suitable for microwave or dishwasher use.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">What makes stoneware different from other types of pottery?</summary>
                    <div className="px-4 pb-4">
                        <p>Stoneware is fired at higher temperatures, resulting in a denser and more durable finish, making it ideal for everyday use.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Can I use porcelain pottery in the microwave or oven?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>Yes, porcelain pottery is microwave and oven-safe. However, avoid sudden temperature changes to prevent thermal shock.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Is terra cotta pottery suitable for outdoor use?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>Yes, terra cotta pottery is often used outdoors due to its durability and ability to withstand varying weather conditions.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">What types of architectural ceramics do you offer?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>Our architectural ceramics include custom tiles, decorative panels, and sculptural elements crafted to enhance interior and exterior spaces.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer customization options for home decor pottery?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p> Yes, we offer customization services for home decor pottery. Contact us to discuss your specific requirements and preferences.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">How can I place an order for your products?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>You can place an order directly through our website or contact us via email or phone for personalized assistance with your purchase.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline"> Do you ship internationally?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>Yes, we offer international shipping. Shipping rates and delivery times may vary depending on the destination. Please refer to our Shipping Information page for details.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">  What is your return policy?</summary>
                    <div className="px-4 pb-4 space-y-2">
                        <p>We offer a 30-day return policy for unused and undamaged items. Please refer to our Returns & Exchanges page for detailed instructions.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>
    );
};

export default FAQ;