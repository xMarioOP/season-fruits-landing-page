import { Card } from "../Card/Card";
import "./Styles.scss"

const ProductList = ({ filteredFruits, currentCards, onSeeMore, isLoading }) => {
    return (
        <main>
            <div className="product-list">
                {!isLoading ? (
                    filteredFruits.slice(0, currentCards).map((fruit) =>
                        <Card
                            key={fruit.id}
                            fruit={fruit} />
                    )
                ) : (
                    <div className="loader-container"><div className="loader"></div></div>
                )}
            </div>
            <div className="button-container">
                {currentCards < filteredFruits.length && (
                    <button className="see-more btn btn-dark" onClick={onSeeMore}>
                        SEE MORE
                    </button>
                )}
            </div>
        </main>
    );
};

export { ProductList };