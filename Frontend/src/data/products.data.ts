export interface Product {
      id: number;
      title: string;
      description: string;
      image: string;
      price: number;
      note: number;
}

export const allProducts: Product[] = [
      {
            id: 1,
            title: "PlayStation 5 Pro",
            description: "Nouvelle génération de console avec graphismes 8K, SSD ultra-rapide et manette DualSense.",
            image: "https://m.media-amazon.com/images/I/71JqkO8FfpL._AC_SL1500_.jpg",
            price: 699.99,
            note: 5,
      },
      {
            id: 2,
            title: "Samsung Galaxy S24 Ultra",
            description: "Smartphone haut de gamme avec capteur photo 200MP et processeur Snapdragon 8 Gen 3.",
            image: "https://m.media-amazon.com/images/I/71dV3iZy5GL._AC_SL1500_.jpg",
            price: 1299.99,
            note: 5,
      },
      {
            id: 3,
            title: "MacBook Pro M3 14 pouces",
            description: "Puissant ordinateur portable Apple avec puce M3 Pro, écran Liquid Retina XDR et autonomie record.",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202310",
            price: 2399.99,
            note: 4,
      },
      {
            id: 4,
            title: "LG OLED C3 55\"",
            description: "Téléviseur OLED 4K avec Dolby Vision, 120Hz, HDMI 2.1 et support HDR10+.",
            image: "https://m.media-amazon.com/images/I/71H7N3r4EjL._AC_SL1500_.jpg",
            price: 1499.99,
            note: 5,
      },
      {
            id: 5,
            title: "Logitech MX Master 3S",
            description: "Souris sans fil ergonomique avec défilement magnétique, USB-C et support multi-appareils.",
            image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
            price: 99.99,
            note: 4,
      },
      {
            id: 6,
            title: "Casque Sony WH-1000XM5",
            description: "Casque Bluetooth à réduction de bruit active, autonomie 30h, son haute-fidélité.",
            image: "https://m.media-amazon.com/images/I/61dB9-3C4gL._AC_SL1500_.jpg",
            price: 399.99,
            note: 5,
      },
      {
            id: 7,
            title: "Apple Watch Series 9",
            description: "Montre connectée avec écran Always-On Retina, suivi santé et intégration Siri améliorée.",
            image: "https://m.media-amazon.com/images/I/71yk9bHkWBL._AC_SL1500_.jpg",
            price: 499.99,
            note: 4,
      },
      {
            id: 8,
            title: "Nintendo Switch OLED",
            description: "Console hybride avec écran OLED 7 pouces, meilleure autonomie et support amélioré.",
            image: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
            price: 349.99,
            note: 5,
      },
      {
            id: 9,
            title: "Dell XPS 13 Plus",
            description: "Laptop ultra-fin avec processeur Intel i7, 16Go RAM, SSD 1To et clavier haptique.",
            image: "https://m.media-amazon.com/images/I/61m1fM2eU-L._AC_SL1500_.jpg",
            price: 1799.99,
            note: 4,
      },
      {
            id: 10,
            title: "JBL Charge 5",
            description: "Enceinte Bluetooth portable étanche avec basses puissantes et 20h d’autonomie.",
            image: "https://m.media-amazon.com/images/I/81Lr3B+2u2L._AC_SL1500_.jpg",
            price: 179.99,
            note: 4,
      },
      {
            id: 11,
            title: "ASUS ROG Strix RTX 4080",
            description: "Carte graphique hautes performances pour gaming 4K et création de contenu.",
            image: "https://m.media-amazon.com/images/I/71D4eZcfEWL._AC_SL1500_.jpg",
            price: 1699.99,
            note: 5,
      },
      {
            id: 12,
            title: "Canon EOS R7",
            description: "Appareil photo hybride APS-C 32.5MP avec autofocus Dual Pixel et 4K60.",
            image: "https://m.media-amazon.com/images/I/61Tw1X5bqLL._AC_SL1500_.jpg",
            price: 1499.99,
            note: 4,
      },
];