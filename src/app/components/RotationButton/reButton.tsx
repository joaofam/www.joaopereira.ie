import React, { useState } from 'react';

const ReButton = () => {

    return (
        <div className="w-32 h-4">
            <button className="relative z-10 flex h-full w-full items-center justify-center text-foreground">
                {/* Tiny Square div in line with test and at a 45 degree angle */}
                <div 
                    className="h-2 w-2 bg-foreground rounded-sm transform -translate-y-1/2 -translate-x-1/2 rotate-45  transition-all duration-300 ease-in-out"
                >

                </div>
                test
            </button>
        </div>
    );
};

export default ReButton;