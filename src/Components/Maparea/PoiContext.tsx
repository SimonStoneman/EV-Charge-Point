import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PlaceResult {
    name?: string;
    geometry: {
        location: google.maps.LatLng;
    };
    rating?: number;
}

interface PoiContextType {
    data: PlaceResult[];
    setData: React.Dispatch<React.SetStateAction<PlaceResult[]>>;
}

const PoiContext = createContext<PoiContextType | undefined>(undefined);

export const usePoiContext = () => {
    const context = useContext(PoiContext);
    if (!context) {
        throw new Error('usePoiContext must be used within a PoiProvider');
    }
    return context;
};

interface PoiProviderProps {
    children: ReactNode;
}

export const PoiProvider: React.FC<PoiProviderProps> = ({ children }) => {
    const [data, setData] = useState<PlaceResult[]>([]);
    return (
        <PoiContext.Provider value={{ data, setData }}>
            {children}
        </PoiContext.Provider>
    );
};
