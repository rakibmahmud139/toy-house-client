import React from 'react';
import GallerySection from '../../../share/gallerySection/GallerySection';
import ShopByCategory from '../shopByCategory/ShopByCategory';
import ToyReview from '../../../share/otheerSections/toyReview';
import OurCustomer from '../../../share/otheerSections/OurCustomer';

const Home = () => {
    return (
        <div>
            <div className='relative mb-16'>
                <img className='w-full lg:h-[660px] rounded-xl ' src="https://i.ibb.co/TW9XW3y/pexels-eva-bronzini-5501994.jpg" alt="" />
                <div className='absolute rounded-xl h-full  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] space-y-6 '>

                    <h3 className='ml-4 mt-4 lg:mt-48 lg:ml-24 lg:mr-[782px] text-5xl font-bold'>Development and sale  of children's car toys</h3>

                    <p className='ml-4 lg:ml-24'>Welcome to Car Toys, your ultimate destination <br /> for all things related to toy cars! Our website is a virtual wonderland for car enthusiasts, <br /> kids, and collectors alike.  Step into a world where imagination meets automotive fascination, and let the adventure begin!</p>
                    <button className='btn btn-outline btn-accent ml-4 lg:ml-24'>All Toys</button>
                </div>
            </div>
            <GallerySection />
            <ShopByCategory />
            <ToyReview />
            <OurCustomer />
        </div>
    );
};

export default Home;