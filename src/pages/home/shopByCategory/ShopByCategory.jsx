import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='mb-16 mt-24'>
            <h2 className='text-4xl text-center mb-12 underline uppercase'>Shop By Category</h2>
            <Tabs>
                <TabList>
                    <Tab><h3 className='text-2xl'>Racing Cars</h3></Tab>
                    <Tab><h3 className='text-2xl'>Monster Trucks</h3></Tab>
                    <Tab><h3 className='text-2xl'>Farm Vehicles</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://images.unsplash.com/photo-1581277868137-9dc9f38abc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cyUyMHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://media.istockphoto.com/id/479116981/photo/old-metal-scale-model-of-a-public-bus.webp?b=1&s=170667a&w=0&k=20&c=UE9RZoOuB0ma7SByx5bfwkQQYXbiTQxByuTwzuisJ4Y=" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
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
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://images.unsplash.com/photo-1607948471279-7b616a5cdcc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJ1Y2slMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://images.unsplash.com/photo-1658490261482-185ef4add566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRydWNrJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
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
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://images.unsplash.com/photo-1505003098838-83ce5356c228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhaW4lMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
                                <p className='text-gray-800'>Price: $152</p>
                                <p className='text-gray-800'>4 Star</p>
                                <button className='btn btn-accent shadow-2xl'>View Details</button>
                            </div>
                        </div>
                        <div className="card w-96 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 shadow-xl mt-12">
                            <figure><img className='p-4 w-80 h-80 shadow-xl rounded-3xl' src="https://plus.unsplash.com/premium_photo-1684795780124-1bef9f5f398b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhaW4lMjB0b3lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                            <div className="card-body shadow">
                                <p className='text-3xl text-gray-800'>Mini-Jeep</p>
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