const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 5500,
        category: "electronics",
        description: "High-quality wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.",
        images: [
            "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.8,
        reviews: 156,
        inStock: true,
        features: ["Noise Cancellation", "30-hour Battery", "Quick Charge", "Bluetooth 5.0"]
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 15699,
        category: "electronics",
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and smart notifications. Track your health and stay connected.",
        images: [
            "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.6,
        reviews: 243,
        inStock: true,
        features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day Battery"]
    },
    {
        id: 3,
        name: "Casual Cotton T-Shirt",
        price: 899,
        category: "clothing",
        description: "Comfortable 100% cotton t-shirt perfect for everyday wear. Available in multiple colors and sizes.",
        images: [
            "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.4,
        reviews: 89,
        inStock: true,
        features: ["100% Cotton", "Pre-shrunk", "Machine Washable", "Multiple Colors"]
    },
    {
        id: 4,
        name: "Designer Leather Jacket",
        price: 2600,
        category: "clothing",
        description: "Premium leather jacket with modern design. Perfect for casual and semi-formal occasions.",
        images: [
            "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/31896866/pexels-photo-31896866.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.7,
        reviews: 67,
        inStock: true,
        features: ["Genuine Leather", "Multiple Pockets", "Water Resistant", "Premium Lining"]
    },
    {
        id: 5,
        name: "Modern Coffee Table",
        price: 29999,
        category: "home",
        description: "Sleek and modern coffee table made from high-quality wood. Perfect centerpiece for your living room.",
        images: [
            "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.5,
        reviews: 34,
        inStock: true,
        features: ["Solid Wood", "Scratch Resistant", "Easy Assembly", "Modern Design"]
    },
    {
        id: 6,
        name: "Ergonomic Office Chair",
        price: 22499,
        category: "home",
        description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.",
        images: [
            "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.6,
        reviews: 128,
        inStock: true,
        features: ["Lumbar Support", "Adjustable Height", "360° Swivel", "Breathable Mesh"]
    },
    {
        id: 7,
        name: "Smartphone 12 Pro",
        price: 74999,
        category: "electronics",
        description: "Latest smartphone with advanced camera system, fast processor, and long-lasting battery.",
        images: [
            "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.9,
        reviews: 512,
        inStock: true,
        features: ["Triple Camera", "5G Ready", "All-day Battery", "Face ID"]
    },
    {
        id: 8,
        name: "Running Shoes",
        price: 1500,
        category: "clothing",
        description: "Professional running shoes with advanced cushioning and breathable design. Perfect for athletes and fitness enthusiasts.",
        images: [
            "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.3,
        reviews: 91,
        inStock: true,
        features: ["Advanced Cushioning", "Breathable Material", "Lightweight", "Durable Sole"]
    },
    {
        id: 9,
        name: "Decorative Plant Pot",
        price: 1000,
        category: "home",
        description: "Beautiful ceramic plant pot with drainage holes. Perfect for indoor plants and home decoration.",
        images: [
            "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.2,
        reviews: 23,
        inStock: true,
        features: ["Ceramic Material", "Drainage Holes", "Various Sizes", "Weather Resistant"]
    },
    {
        id: 10,
        name: "Wireless Bluetooth Speaker",
        price: 7999,
        category: "electronics",
        description: "Portable Bluetooth Speaker with excellent sound quality and long battery life. Perfect for outdoor activities.",
        images: [
            "https://images.pexels.com/photos/14309805/pexels-photo-14309805.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.4,
        reviews: 76,
        inStock: true,
        features: ["Bluetooth 5.0", "12-hour Battery", "Water Resistant", "Compact Design"]
    },
    {
        id: 11,
        name: "Denim Jeans",
        price: 5249,
        category: "clothing",
        description: "Classic denim jeans with comfortable fit and durable construction. A wardrobe essential for any style.",
        images: [
            "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.1,
        reviews: 145,
        inStock: true,
        features: ["100% Cotton Denim", "Classic Fit", "Reinforced Stitching", "Multiple Sizes"]
    },
    {
        id: 12,
        name: "Dining Table Set",
        price: 44999,
        category: "home",
        description: "Elegant dining table set with 4 chairs. Perfect for family meals and entertaining guests.",
        images: [
            "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ],
        rating: 4.6,
        reviews: 42,
        inStock: true,
        features: ["Solid Wood Table", "4 Matching Chairs", "Easy Assembly", "Scratch Resistant"]
    }
];

const categories = [
    {
        id: "electronics",
        name: "Electronics",
        description: "Latest gadgets and electronic devices",
        image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: "clothing",
        name: "Clothing",
        description: "Fashion and apparel for all occasions",
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: "home",
        name: "Home & Garden",
        description: "Everything for your home and garden",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: "sports",
        name: "Sports & Outdoors",
        description: "Gear for your active lifestyle",
        image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
];

function getProducts() {
    return products;
}

function getCategories() {
    return categories;
}

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

function filterProductsByPrice(products, minPrice, maxPrice) {
    return products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );
}

function getCategoryById(id) {
    return categories.find(category => category.id === id);
}

function getRelatedProducts(productId, categoryId, limit = 4) {
    return products
        .filter(product => product.id !== productId && product.category === categoryId)
        .slice(0, limit);
}