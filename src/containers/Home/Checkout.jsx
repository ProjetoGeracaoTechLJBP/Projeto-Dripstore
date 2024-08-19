import React from 'react';

const styles = {
    checkout: {
        padding: '20px',
        maxWidth: '600px',
        margin: '50px',
    },
    productList: {
        padding: '10px',
        marginBottom: '20px',
    },
    productItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        border: '1px solid #ddd',
        padding: '5px',
        cursor: 'pointer',
        margin: '0 5px',
        backgroundColor: 'yellow',
    },
    summary: {
        marginTop: '20px',
    },
};

function Checkout({ products, onQuantityChange }) {
    const getTotal = () => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handleIncrement = (id) => {
        onQuantityChange(id, 1);
    };

    const handleDecrement = (id) => {
        onQuantityChange(id, -1);
    };

    return (
        <div style={styles.checkout}>
            <p className='resumo'>Resumo do Pedido</p>
            <div style={styles.productList}>
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} style={styles.productItem}>
                            <span>{product.name}</span>
                            <div style={styles.quantityControls}>
                                <button
                                    style={styles.button}
                                    onClick={() => handleDecrement(product.id)}
                                    disabled={product.quantity <= 1}
                                >
                                    -
                                </button>
                                <span>{product.quantity}</span>
                                <button
                                    style={styles.button}
                                    onClick={() => handleIncrement(product.id)}
                                >
                                    +
                                </button>
                            </div>
                            <span>Preço: R${product.price.toFixed(2)}</span>
                        </div>
                    ))
                ) : (
                    <p>Nenhum produto no carrinho.</p>
                )}
            </div>
            <div style={styles.summary}>
                <h2>Total: R${getTotal().toFixed(2)}</h2>
            </div>
        </div>
    );
}

// Produtos para teste
const sampleProducts = [
    { id: 1, name: 'Tênis', quantity: 1, price: 100 },
    { id: 2, name: 'Calças', quantity: 2, price: 150 },
];

function App() {
    const [products, setProducts] = React.useState(sampleProducts);

    const handleQuantityChange = (id, change) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: Math.max(1, product.quantity + change) }
                    : product
            )
        );
    };

    return <Checkout products={products} onQuantityChange={handleQuantityChange} />;
}

export default App;
