import React from 'react';

const ItemsTable = ({ items, selectedCategory }) => (
    <section>
        <span>Items in Category: ({selectedCategory})</span>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

export default ItemsTable;
