import React from 'react';

function About() {
    return (
        <>
            <div className="text-white relative">
                <div className="bg-black">
                    <section id="features" className="relative block px-6 py-10 md:py-10 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
                        <div className="mx-[-10px] md:px-10 my-5">
                            <div className="flex pt-2 mb-10 justify-center text-4xl font-extrabold font-sans items-center">About Us</div>
                            <br />
                            <div className="text-center font-bold text-white">
                                &quot;Fueling Creativity, One Cup at a Time&quot;
                            </div>
                            <p className="p-4 text-gray-200 text-md text-center font-sans">
                                At Need Money, we are committed to fostering a vibrant community where developers, creators, and influencers can thrive. Our crowdfunding platform is designed to connect talented individuals with supporters who believe in their vision and want to help bring their projects to life. We understand that financial support is crucial for creativity and innovation, and we strive to make the process seamless and rewarding for both creators and backers.
                            </p>
                            <p className="p-4 text-gray-200 text-md text-center font-sans">
                                Our mission is to empower developers, content creators, artists, and influencers by providing them with the resources they need to succeed. Whether you're a developer working on the next groundbreaking app, a content creator producing engaging and informative videos, an artist creating stunning visual works, or an influencer sharing your unique perspective with the world, Need Money is here to support you every step of the way.
                            </p>
                            <p className="p-4 text-gray-200 text-md text-center font-sans">
                                We believe in the transformative power of community support and the magic that happens when people come together to champion a common cause. Our platform is more than just a crowdfunding site; it's a space where dreams can become reality, and innovative ideas can flourish. By providing a straightforward and user-friendly way for patrons to contribute, we aim to create a supportive ecosystem that nurtures creativity and drives progress.
                            </p>
                            <p className="p-4 text-gray-200 text-md text-center font-sans">
                                At Need Money, we take pride in helping creators reach their full potential. We are passionate about leveraging the power of technology to build a community that values and invests in creative endeavors. Join us on this exciting journey and be part of a movement that celebrates and sustains the talents of developers, creators, and influencers. Together, let's fuel creativity, one cup at a time.
                            </p>
                        </div>
                        <div className="absolute top-0 left-0 z-0 h-1/3 w-full" style={{ backgroundImage: 'linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
                        <div className="absolute top-0 right-0 z-0 h-1/3 w-full" style={{ backgroundImage: 'linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
                        <div className="bg-white h-1 opacity-10 my-20"></div>
                        <div className="relative mx-auto max-w-5xl text-center">
                            <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">Why Choose Us</span>
                            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">Support Creativity and Innovation</h2>
                            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                                At Need Money, we empower developers, creators, and influencers by connecting them with supporters to fund their projects. No technical skills required – our intuitive platform makes it easy to receive support and bring your visions to life.
                            </p>
                        </div>
                        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                                        <line x1="17" y1="17" x2="17" y2="17.01"></line>
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">Easy Customization</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    Personalize your campaign page's look and feel, from color schemes to fonts, to match your unique style.
                                </p>
                            </div>
                            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">High Performance</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    Our platform is optimized for fast performance, ensuring your supporters can access your campaign quickly and easily.
                                </p>
                            </div>
                            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border" style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                        <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                        <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                        <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                        <line x1="17" y1="16" x2="15.5" y2="17.5"></line>
                                    </svg>
                                </div>
                                <h3 className="mt-6 text-gray-400">Versatile Tools</h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                    We offer a range of tools and integrations to help you maximize your campaign's success, from analytics to social sharing.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default About;

export const metadata = {
    title: "Need Money - About page",
    description: "Need Money app provide a platform where your friends and followers helps you.",
};
