function filterProducts(products, filters) {
    let filteredProducts = [...products];

    
    if (filters.category && filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === filters.category
        );
    }

    
    if (filters.priceRange && filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
        filteredProducts = filteredProducts.filter(product => {
            if (max === undefined) {
                return product.price >= min;
            }
            return product.price >= min && product.price <= max;
        });
    }

    
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    
    if (filters.minRating) {
        filteredProducts = filteredProducts.filter(product => 
            product.rating >= filters.minRating
        );
    }

    
    if (filters.inStock) {
        filteredProducts = filteredProducts.filter(product => product.inStock);
    }

    return filteredProducts;
}

function sortProducts(products, sortBy) {
    const sortedProducts = [...products];

    switch (sortBy) {
        case 'name-asc':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'rating':
            return sortedProducts.sort((a, b) => b.rating - a.rating);
        case 'reviews':
            return sortedProducts.sort((a, b) => b.reviews - a.reviews);
        case 'newest':
            return sortedProducts.sort((a, b) => b.id - a.id);
        default:
            return sortedProducts;
    }
}

function getPriceRange(products) {
    if (products.length === 0) return { min: 0, max: 0 };
    
    const prices = products.map(product => product.price);
    return {
        min: Math.min(...prices),
        max: Math.max(...prices)
    };
}

function getCategoriesFromProducts(products) {
    const categories = [...new Set(products.map(product => product.category))];
    return categories.map(category => ({
        id: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        count: products.filter(product => product.category === category).length
    }));
}

function getAvailableFilters(products) {
    return {
        categories: getCategoriesFromProducts(products),
        priceRange: getPriceRange(products),
        ratings: [5, 4, 3, 2, 1]
    };
}


function filterByMultipleCategories(products, categories) {
    if (!categories || categories.length === 0) return products;
    return products.filter(product => categories.includes(product.category));
}

function filterByPriceRange(products, minPrice, maxPrice) {
    return products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
}

function filterByRatingRange(products, minRating, maxRating = 5) {
    return products.filter(product => 
        product.rating >= minRating && product.rating <= maxRating
    );
}

function filterByFeatures(products, features) {
    if (!features || features.length === 0) return products;
    
    return products.filter(product => {
        if (!product.features) return false;
        return features.some(feature => 
            product.features.some(productFeature => 
                productFeature.toLowerCase().includes(feature.toLowerCase())
            )
        );
    });
}


function paginateProducts(products, page = 1, itemsPerPage = 12) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
        products: products.slice(startIndex, endIndex),
        totalPages: Math.ceil(products.length / itemsPerPage),
        currentPage: page,
        totalProducts: products.length,
        hasNextPage: endIndex < products.length,
        hasPrevPage: page > 1
    };
}


function searchProducts(products, query) {
    if (!query || query.trim() === '') return products;
    
    const searchTerm = query.toLowerCase().trim();
    const searchWords = searchTerm.split(' ');
    
    return products.filter(product => {
        const searchText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
        
        
        return searchWords.every(word => searchText.includes(word));
    });
}


function fuzzySearchProducts(products, query, threshold = 0.6) {
    if (!query || query.trim() === '') return products;
    
    const searchTerm = query.toLowerCase().trim();
    
    return products.filter(product => {
        const productText = `${product.name} ${product.description}`.toLowerCase();
        const similarity = calculateSimilarity(searchTerm, productText);
        return similarity >= threshold;
    });
}

function calculateSimilarity(str1, str2) {
    
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    
    let matches = 0;
    words1.forEach(word => {
        if (words2.some(w => w.includes(word) || word.includes(w))) {
            matches++;
        }
    });
    
    return matches / words1.length;
}