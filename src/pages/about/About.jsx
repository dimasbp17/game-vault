import React from 'react';
import gta from '../../../public/assets/images/gta.jpg';

const About = () => {
  return (
    <>
      <div className="w-full mt-10">
        <div className="grid grid-cols-12">
          <div className="pr-5 col-span-full md:col-span-6">
            <h1 className="mb-5 text-3xl font-bold text-orange-500">
              Game Vault
            </h1>
            <h3 className="text-justify">
              Your ultimate destination for all things gaming! Explore a
              comprehensive database of games from around the globe, covering a
              wide variety of platforms such as PC, consoles, mobile, and more.
              Stay updated with the latest news, detailed game reviews,
              trailers, walkthroughs, and release dates. <br /> <br /> Whether
              you're a casual player or a hardcore gamer, our platform offers
              something for everyone. With intuitive navigation, multi-language
              support, and in-depth search functionality, finding your favorite
              games has never been easier. <br /> <br /> Join a global community
              of gamers, participate in forums, and discover trending games
              across different genres. The website is designed to deliver a
              seamless experience with accurate and up-to-date gaming
              information tailored for enthusiasts worldwide.
            </h3>
          </div>
          <div className="md:pl-5 col-span-full md:col-span-6">
            <img
              src={gta}
              alt="GTA V"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
