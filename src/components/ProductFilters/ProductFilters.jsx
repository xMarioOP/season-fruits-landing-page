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
        handleSearch(e.target.value)
    };

    const handleFilterByChange = (e) => {
        handleCategoryChange("filterBy", e.target.value)
    }

    const handleSortChange = () => {
        const newOrder = filters.orderAZ === "asc" ? "desc" : "asc"
        handleCategoryChange("orderAZ", newOrder)
    }

    const renderFilterOptions = (values, key) => {
        return values.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ));
    };

    let filterOptions = []
    let filterLabel = ''

    switch (filters.filterBy) {
        case "family":
            filterOptions = familyValues
            filterLabel = "Filter by family"
            break
        case "genus":
            filterOptions = genusValues
            filterLabel = "Filter by genus"
            break
        case "order":
            filterOptions = orderValues
            filterLabel = "Filter by order"
            break
        default:
            filterOptions = []
            break
    }
    return (
        <aside>
            <div className="filters-container">
                <div className="filter-container">
                    <select onChange={handleFilterByChange}>
                        <option value="">Filter by:</option>
                        <option value="family">Family</option>
                        <option value="genus">Genus</option>
                        <option value="order">Order</option>
                    </select>
                </div>

                {filterOptions.length > 0 && (
                    <div className="filter-container">
                        <select onChange={(e) => handleCategoryChange(filters.filterBy, e.target.value)}>
                            <option value="">{filterLabel}</option>
                            {renderFilterOptions(filterOptions)}
                        </select>
                    </div>
                )}

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
                        Order {filters.orderAZ === "asc" ? "A-Z" : "Z-A"}
                    </button>
                </div>
            </div>
        </aside>
    )
}

export { ProductFilters };
