import React from 'react';

// Inline styles for the Products component
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    productsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    productCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    productCardTitle: {
        fontSize: '1.5em',
        color: '#333',
    },
    price: {
        fontSize: '1.2em',
        color: '#e67e22',
        margin: '10px 0',
    },
    specsList: {
        listStyleType: 'none',
        padding: 0,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontSize: '2em',
        margin: '20px 0',
        color: '#333',
    },
    relatedContainer: {
        marginTop: '40px',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
    },
    relatedTitle: {
        textAlign: 'center',
        fontSize: '1.8em',
        color: '#333',
        marginBottom: '15px',
    },
    relatedItemsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    relatedCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '180px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    relatedCardTitle: {
        fontSize: '1.4em',
        color: '#333',
    },
    relatedPrice: {
        fontSize: '1.1em',
        color: '#e67e22',
        margin: '10px 0',
    },
    footer: {
        marginTop: '40px',
        padding: '15px',
        textAlign: 'center',
        backgroundColor: '#063970',
        color: '#fff',
        fontSize: '1em',
        borderRadius: '5px',
    },
};

const products = [
    { id: 1, name: 'Mountain Bike', price: '$450', specs: { type: 'Mountain', color: 'Red', gears: '21-speed' } },
    { id: 2, name: 'Road Bike', price: '$550', specs: { type: 'Road', color: 'Blue', gears: '18-speed' } },
    { id: 3, name: 'Hybrid Bike', price: '$500', specs: { type: 'Hybrid', color: 'Green', gears: '24-speed' } },
    { id: 4, name: 'Cruiser Bike', price: '$350', specs: { type: 'Cruiser', color: 'Pink', gears: 'Single-speed' } },
];

const relatedProducts = [
    { id: 1, name: 'Electra Townie Go! 7D', price: '$1,799' },
    { id: 2, name: 'Trek FX 3 Disc', price: '$849' },
    { id: 3, name: 'Giant Escape 3', price: '$530' },
    { id: 4, name: 'Specialized Sirrus', price: '$1,150' },
];

const Products = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Products</h1>
            <div style={styles.productsContainer}>
                {products.map(product => (
                    <div key={product.id} style={styles.productCard}>
                        <h2 style={styles.productCardTitle}>{product.name}</h2>
                        <p style={styles.price}>{product.price}</p>
                        <ul style={styles.specsList}>
                            <li>Type: {product.specs.type}</li>
                            <li>Color: {product.specs.color}</li>
                            <li>Gears: {product.specs.gears}</li>
                        </ul>
                    </div>
                ))}
            </div>

            {/* Related Products Section */}
            <div style={styles.relatedContainer}>
                <h2 style={styles.relatedTitle}>Related Products</h2>
                <div style={styles.relatedItemsContainer}>
                    {relatedProducts.map(product => (
                        <div key={product.id} style={styles.relatedCard}>
                            <h3 style={styles.relatedCardTitle}>{product.name}</h3>
                            <p style={styles.relatedPrice}>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <footer style={styles.footer}>
                © {new Date().getFullYear()} EliteCycles - All Rights Reserved
            </footer>
        </div>
    );
};

export default Products;
