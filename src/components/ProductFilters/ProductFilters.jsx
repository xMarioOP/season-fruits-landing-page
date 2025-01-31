import "./Styles.scss"

const ProductFilters = ({ filterProducts, handleSearch, handleSort }) => {
    const handleCategoryChange = (e) => {
        const category = e.target.value
        console.log("Categoría seleccionada:", category);
        filterProducts(category)
    }

    const handleSearchChange = (e) => {
        handleSearch(e.target.value)
    }

    const handleSortChange = () => {
        handleSort()
    }

    return (
        <aside>
            <div className="filters-container">
                <div className="filter-container">
                    <select
                        className="form-select"
                        aria-label="Filter by category"
                        defaultValue=""
                        onChange={handleCategoryChange}
                    >
                        <option value="" disabled>Filter by:</option>
                        <option value="family">Family</option>
                        <option value="order">Order</option>
                        <option value="genus">Genus</option>
                    </select>
                </div>

                <div className="search-container">
                    <input
                        type="text"
                        id="searchInput"
                        className="form-control"
                        aria-describedby="searchHelp"
                        placeholder="Search"
                        onChange={handleSearchChange}
                    />
                    <i className="bi bi-search"></i>
                </div>

                <div className="btn-container">
                    <button onClick={handleSortChange}>Order A-Z</button>
                </div>
            </div>
        </aside>
    );
};

export { ProductFilters };