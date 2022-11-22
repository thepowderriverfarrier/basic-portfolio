import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Daniel</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineering and Web Development</p>
            <p className="text-base md:text-xl mb-3 font-medium">Certified Farrier</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Full stack open source software development for cloud, desktop and mobile devices.
            <br />
            <a href="https://www.youtube.com/watch?v=g9yDc5nckn0" target="_blank" className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600" rel="noreferrer noopener">thepowderriverfarrier</a>
            </p>
        </div>
    )
}

export default Intro;

