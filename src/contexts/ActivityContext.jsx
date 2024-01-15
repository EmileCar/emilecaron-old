import React, { createContext, useState } from 'react';
import Home from '../pages/Home';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
    const [activity, setActivity] = useState();

    // Define any other state or functions you need

    return (
        <ActivityContext.Provider value={{ activity, setActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};
