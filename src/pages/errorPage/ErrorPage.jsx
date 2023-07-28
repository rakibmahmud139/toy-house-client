import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className=''>
            <div className='relative flex flex-col items-center justify-center px-5 mx-auto'>
                <img className='w-[1224px] h-[724px]' src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
                <div className='max-w-md text-center absolute top-16 left-12'>
                    <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-outline btn-accent'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default ErrorPage;