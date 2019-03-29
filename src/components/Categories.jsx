import React from 'react';

const Categories = ({ options, getItems }) => (
    <nav>
        <span>Menu Category</span>
        <ul>
            {options.map(item => (
                <li key={item.id} onClick={() => { getItems(item) }}>{item.name} - ({item.short_name})</li>
            ))}
        </ul>
    </nav>
);

export default Categories;