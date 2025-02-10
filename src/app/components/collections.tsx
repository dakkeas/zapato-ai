import React from 'react';

const Collections = () => {
    const placeholders = [
        { id: 1, color: 'bg-red-500' },
        { id: 2, color: 'bg-green-500' },
        { id: 3, color: 'bg-blue-500' },
        { id: 4, color: 'bg-yellow-500' },
        { id: 5, color: 'bg-purple-500' },
        { id: 6, color: 'bg-pink-500' },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Collections</h2>
            <div className="grid grid-cols-3 gap-4">
                {placeholders.map((placeholder) => (
                    <div key={placeholder.id} className={`w-full h-48 ${placeholder.color} rounded-lg`}></div>
                ))}
            </div>
        </div>
    );
};

export default Collections;
