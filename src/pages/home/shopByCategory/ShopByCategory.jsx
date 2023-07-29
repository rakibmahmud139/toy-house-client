import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='mb-16 mt-24'>
            <h2 className='text-4xl text-center mb-12 uppercase text-accent'>Shop By Category</h2>
            <Tabs>
                <TabList>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <Tab><h3 className='text-2xl'>Racing Cars</h3></Tab>
                        <Tab><h3 className='text-2xl'>Monster Trucks</h3></Tab>
                        <Tab><h3 className='text-2xl'>Farm Vehicles</h3></Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://i.ibb.co/RQPgQ1b/download-10.jpg" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://i.ibb.co/3423sMs/download-12.jpg" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Whistle Racing</p>
                                <p className='text-gray-800'>Price: $368</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://i.ibb.co/4tV0FGj/download-13.jpg" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Monster Truck</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://i.ibb.co/8sPjFT6/download-14.jpg" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Monsto Truck</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://i.ibb.co/ZfmncqM/download-15.jpg" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Farm Truck</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://i.ibb.co/j491mJP/images-20.jpg" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Micro Flatbed</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;