import tea from "../assets/images/tea.png";

const defaultImage = tea;

const categoryImages = {
    tea: tea,
    coffee: tea,
    mocktail: tea,
    shake: tea,
    pizza: tea,
    pasta: tea,
    noodles: tea,
    friedrice: tea,
};

const rawMenuItems = [
    /* TEA */
    { id: 1, category: "Tea", title: "Assam Tea", price: 110, desc: "Strong and refreshing classic Assam tea", type: "veg" },
    { id: 2, category: "Tea", title: "Green Tea", price: 110, desc: "Healthy antioxidant rich green tea", type: "veg" },
    { id: 3, category: "Tea", title: "Darjeeling Tea", price: 110, desc: "Premium aromatic Darjeeling tea", type: "veg" },
    { id: 4, category: "Tea", title: "Lemon Ice Tea", price: 219, desc: "Refreshing lemon flavored iced tea", type: "veg" },
    { id: 5, category: "Tea", title: "Passionate Peach", price: 229, desc: "Peach flavored iced tea", type: "veg" },
    { id: 6, category: "Tea", title: "Lychee Ruse", price: 229, desc: "Sweet lychee flavored tea", type: "veg" },
    { id: 7, category: "Tea", title: "Green Tea & Chia Seed", price: 229, desc: "Healthy green tea with chia seeds", type: "veg" },

    /* COFFEE */
    { id: 8, category: "Coffee", title: "Espresso", price: 139, desc: "Strong Italian style espresso shot", type: "veg" },
    { id: 9, category: "Coffee", title: "Macchiato", price: 139, desc: "Espresso with a dash of milk foam", type: "veg" },
    { id: 10, category: "Coffee", title: "Doppio", price: 159, desc: "Double espresso shot", type: "veg" },
    { id: 11, category: "Coffee", title: "Americano", price: 169, desc: "Espresso with hot water", type: "veg" },
    { id: 12, category: "Coffee", title: "Flat White", price: 179, desc: "Smooth espresso with steamed milk", type: "veg" },
    { id: 13, category: "Coffee", title: "Latte", price: 199, desc: "Creamy espresso with milk", type: "veg" },
    { id: 14, category: "Coffee", title: "Cappuccino", price: 209, desc: "Classic cappuccino with milk foam", type: "veg" },
    { id: 15, category: "Coffee", title: "Cafe Mocha", price: 229, desc: "Chocolate flavored espresso coffee", type: "veg" },

    /* MOCKTAIL */
    { id: 16, category: "Mocktail", title: "Classic Mojito", price: 219, desc: "Mint and lime refreshing drink", type: "veg" },
    { id: 17, category: "Mocktail", title: "Italian Smooch", price: 219, desc: "Fruity and refreshing mocktail", type: "veg" },
    { id: 18, category: "Mocktail", title: "Tiki Time", price: 219, desc: "Tropical fruit mocktail", type: "veg" },
    { id: 19, category: "Mocktail", title: "Virgin Pin Colada", price: 229, desc: "Creamy pineapple coconut mocktail", type: "veg" },

    /* SHAKE */
    { id: 20, category: "Shake", title: "Chocolate Shake", price: 200, desc: "Rich chocolate milkshake", type: "veg" },
    { id: 21, category: "Shake", title: "Strawberry Shake", price: 209, desc: "Fresh strawberry shake", type: "veg" },
    { id: 22, category: "Shake", title: "Mango Shake", price: 219, desc: "Sweet mango milkshake", type: "veg" },
    { id: 23, category: "Shake", title: "Brownie Shake", price: 229, desc: "Chocolate brownie blended shake", type: "veg" },
    { id: 24, category: "Shake", title: "Kitkat Shake", price: 229, desc: "Kitkat chocolate milkshake", type: "veg" },
    { id: 25, category: "Shake", title: "Oreo Shake", price: 229, desc: "Oreo biscuit milkshake", type: "veg" },

    /* PIZZA */
    { id: 26, category: "Pizza", title: "Margherita Pizza", price: 349, desc: "Classic cheese pizza", type: "veg" },
    { id: 27, category: "Pizza", title: "Exotic Veg Pizza", price: 369, desc: "Veg loaded pizza", type: "veg" },
    { id: 28, category: "Pizza", title: "Corn & Cheese Pizza", price: 369, desc: "Sweet corn cheese pizza", type: "veg" },
    { id: 29, category: "Pizza", title: "BBQ Chicken Pizza", price: 429, desc: "Barbecue chicken pizza", type: "non-veg" },
    { id: 30, category: "Pizza", title: "Peri Peri Chicken Pizza", price: 429, desc: "Spicy peri peri chicken pizza", type: "non-veg" },

    /* PASTA */
    { id: 31, category: "Pasta", title: "Spicy Arrabiata", price: 349, desc: "Tomato spicy pasta", type: "veg" },
    { id: 32, category: "Pasta", title: "Creamy Alfredo", price: 349, desc: "White sauce creamy pasta", type: "veg" },
    { id: 33, category: "Pasta", title: "Basil Pesto Pasta", price: 369, desc: "Italian basil pesto pasta", type: "veg" },
    { id: 34, category: "Pasta", title: "Mac & Cheese", price: 369, desc: "Cheesy creamy pasta", type: "veg" },

    /* NOODLES */
    { id: 35, category: "Noodles", title: "Veg Noodles", price: 229, desc: "Stir fried vegetable noodles", type: "veg" },
    { id: 36, category: "Noodles", title: "Egg Noodles", price: 249, desc: "Egg tossed noodles", type: "non-veg" },
    { id: 37, category: "Noodles", title: "Chicken Noodles", price: 269, desc: "Chicken stir fried noodles", type: "non-veg" },
    { id: 38, category: "Noodles", title: "Mix Noodles", price: 349, desc: "Mixed veg and chicken noodles", type: "non-veg" },

    /* FRIED RICE */
    { id: 39, category: "Friedrice", title: "Veg Fried Rice", price: 229, desc: "Classic vegetable fried rice", type: "veg" },
    { id: 40, category: "Friedrice", title: "Egg Fried Rice", price: 249, desc: "Egg fried rice", type: "non-veg" },
    { id: 41, category: "Friedrice", title: "Chicken Fried Rice", price: 269, desc: "Chicken fried rice", type: "non-veg" },
    { id: 42, category: "Friedrice", title: "Mix Fried Rice", price: 349, desc: "Mixed meat fried rice", type: "non-veg" },
];

export const menuItems = rawMenuItems.map((item) => ({
    ...item,
    image: item.image ?? categoryImages[item.category] ?? defaultImage,
}));
