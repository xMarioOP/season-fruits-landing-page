import "./Styles.scss"

const ProductFilters = ({
    filters,
    familyValues,
    genusValues,
    orderValues,
    handleSearch,
    handleCategoryChange
}) => {

    const handleSearchChange = (e) => {
        handleSearch(e.target.value);
    };

    const handleSortChange = () => {
        const newOrder = filters.order === "asc" ? "desc" : "asc";
        handleCategoryChange("order", newOrder);
    }

    const renderFilterOptions = (values, key) => {
        return values.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ));
    };

    return (
        <aside>
            <div className="filters-container">
                <div className="filter-container">
                    <select onChange={(e) => handleCategoryChange("family", e.target.value)}>
                        <option value="">Filter by family</option>
                        {renderFilterOptions(familyValues, "family")}
                    </select>
                </div>
                <div className="filter-container">
                    <select onChange={(e) => handleCategoryChange("genus", e.target.value)}>
                        <option value="">Filter by genus</option>
                        {renderFilterOptions(genusValues, "genus")}
                    </select>
                </div>
                <div className="filter-container">
                    <select onChange={(e) => handleCategoryChange("order", e.target.value)}>
                        <option value="">Filter by order</option>
                        {renderFilterOptions(orderValues, "order")}
                    </select>
                </div>

                <div className="search-container">
                    <input
                        type="text"
                        id="searchInput"
                        className="form-control"
                        aria-describedby="searchHelp"
                        placeholder="Search"
                        value={filters.search}
                        onChange={handleSearchChange}
                    />
                    <i className="bi bi-search"></i>
                </div>


                <div className="btn-container">
                    <button onClick={handleSortChange}>
                        Order {filters.order === "asc" ? "A-Z" : "Z-A"}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export { ProductFilters };
