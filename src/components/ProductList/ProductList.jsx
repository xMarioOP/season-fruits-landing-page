import { Card } from "../Card/Card";
import "./Styles.scss"

const ProductList = ({ fruits, currentCards, onSeeMore }) => {
    return (
        <main>
            <div className="product-list">
                {fruits && fruits.length > 0 ? (
                    fruits.slice(0, currentCards).map((fruit) =>
                        <Card
                            key={fruit.id}
                            fruit={fruit} />
                    )
                ) : (
                    <div className="loader-container">
                        {fruits.length === 0 ? (
                            <div className="error-message">No products found.</div>
                        ) : (
                            <div className="loader"></div>
                        )}
                    </div>
                )}
            </div>

            <div className="button-container">
                {currentCards < fruits.length && (
                    <button className="see-more btn btn-dark" onClick={onSeeMore}>
                        SEE MORE
                    </button>
                )}
            </div>
        </main>
    );
};

export { ProductList };