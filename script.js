window.CerimData = (() => {
    const cartKey = "cerim_cart";
    const legacyCartKey = "cart";

    const properties = [
        {
            id: "villa-imperiale",
            title: "Villa Impériale Côte Sauvage",
            type: "Villa de Luxe",
            transaction: "Achat",
            badge: "Verified Listing",
            price: 480000000,
            priceLabel: "480.000.000 FCFA",
            city: "Pointe-Noire",
            district: "Côte Sauvage",
            location: "Côte Sauvage, Pointe-Noire",
            address: "Avenue de la Côte Sauvage, Quartier Haut de la Ville, Pointe-Noire, Congo",
            bedrooms: 5,
            livingRooms: 2,
            bathrooms: 4,
            surface: 520,
            land: 1200,
            ceiling: "3,5 m",
            terrace: 150,
            pool: 40,
            garage: 80,
            description: "Cette villa exceptionnelle offre une vue panoramique sur l'océan Atlantique. Construite pour une vie familiale haut de gamme, elle associe volumes généreux, matériaux nobles, domotique complète et espaces extérieurs pensés pour recevoir.",
            features: [
                ["pool", "Piscine privée"],
                ["ac_unit", "Climatisation intégrée"],
                ["security", "Système de sécurité"],
                ["yard", "Jardin aménagé"],
                ["directions_car", "Garage double"],
                ["bolt", "Domotique"],
                ["visibility", "Vue sur mer"],
                ["movie", "Salle cinéma"]
            ],
            images: [
                "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Jean Dupont",
                role: "Expert immobilier luxe",
                phone: "+242061234567",
                email: "jean.dupont@cerim.cg"
            }
        },
        {
            id: "appartement-horizon",
            title: "Appartement Horizon Fleuve",
            type: "Appartement Premium",
            transaction: "Location",
            badge: "New Build",
            price: 1200000,
            priceLabel: "1.200.000 FCFA / mois",
            city: "Brazzaville",
            district: "Centre-ville",
            location: "Centre-ville, Brazzaville",
            address: "Quartier Centre-ville, face au fleuve Congo, Brazzaville",
            bedrooms: 3,
            livingRooms: 1,
            bathrooms: 2,
            surface: 165,
            land: null,
            ceiling: "3 m",
            terrace: 28,
            pool: null,
            garage: 24,
            description: "Un appartement lumineux en étage élevé, pensé pour les cadres et expatriés qui veulent rester proches du centre tout en profitant d'une vue dégagée sur le fleuve. La suite parentale, la cuisine équipée et la terrasse créent une expérience simple, nette et confortable.",
            features: [
                ["elevator", "Ascenseur sécurisé"],
                ["local_parking", "Parking couvert"],
                ["ac_unit", "Climatisation"],
                ["security", "Contrôle d'accès"],
                ["balcony", "Terrasse vue fleuve"],
                ["kitchen", "Cuisine équipée"],
                ["wifi", "Fibre optique"],
                ["concierge", "Conciergerie"]
            ],
            images: [
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Sandrine Koyo",
                role: "Conseillère location premium",
                phone: "+242066414180",
                email: "sandrine.koyo@cerim.cg"
            }
        },
        {
            id: "villa-lumineuse-kintele",
            title: "Villa Lumineuse du Complexe",
            type: "Villa Moderne",
            transaction: "Achat",
            badge: "New Build",
            price: 250000000,
            priceLabel: "250.000.000 FCFA",
            city: "Kintélé",
            district: "Zone résidentielle",
            location: "Kintélé, Brazzaville",
            address: "Zone résidentielle neuve, Kintélé, Congo",
            bedrooms: 4,
            livingRooms: 1,
            bathrooms: 3,
            surface: 340,
            land: 780,
            ceiling: "3,2 m",
            terrace: 64,
            pool: null,
            garage: 48,
            description: "Villa familiale récente avec de grands vitrages, un jardin facile à entretenir et une distribution intérieure fluide. Elle convient autant à une résidence principale qu'à une acquisition patrimoniale dans une zone en développement.",
            features: [
                ["yard", "Jardin privé"],
                ["security", "Résidence sécurisée"],
                ["directions_car", "Garage"],
                ["water_drop", "Réserve d'eau"],
                ["ac_unit", "Préinstallation climatisation"],
                ["deck", "Terrasse couverte"]
            ],
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Cédric Malonga",
                role: "Spécialiste résidences neuves",
                phone: "+242055293018",
                email: "cedric.malonga@cerim.cg"
            }
        },
        {
            id: "duplex-emeraude-total",
            title: "Duplex Émeraude Total",
            type: "Duplex",
            transaction: "Achat",
            badge: "Offered At",
            price: 380000000,
            priceLabel: "380.000.000 FCFA",
            city: "Pointe-Noire",
            district: "Total",
            location: "Total, Pointe-Noire",
            address: "Quartier Total, proche commerces, Pointe-Noire",
            bedrooms: 4,
            livingRooms: 2,
            bathrooms: 3,
            surface: 290,
            land: 520,
            ceiling: "3,1 m",
            terrace: 52,
            pool: null,
            garage: 36,
            description: "Duplex élégant situé à proximité des commerces et des axes principaux. Les espaces de vie sont ouverts, les chambres restent bien séparées et la terrasse arrière apporte une vraie respiration au quotidien.",
            features: [
                ["storefront", "Commerces à proximité"],
                ["directions_car", "Garage"],
                ["deck", "Terrasse"],
                ["security", "Portail sécurisé"],
                ["kitchen", "Cuisine équipée"],
                ["weekend", "Deux salons"]
            ],
            images: [
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Jean Dupont",
                role: "Expert immobilier",
                phone: "+242061234567",
                email: "jean.dupont@cerim.cg"
            }
        },
        {
            id: "residence-djiri",
            title: "Résidence Haut Standing Djiri",
            type: "Appartement",
            transaction: "Location",
            badge: "Valuation",
            price: 850000,
            priceLabel: "850.000 FCFA / mois",
            city: "Brazzaville",
            district: "Djiri",
            location: "Djiri, Brazzaville",
            address: "Arrondissement 9, Djiri, Brazzaville",
            bedrooms: 2,
            livingRooms: 1,
            bathrooms: 2,
            surface: 130,
            land: null,
            ceiling: "2,9 m",
            terrace: 18,
            pool: null,
            garage: 18,
            description: "Appartement haut standing dans un secteur calme de Djiri. Il offre une belle pièce de vie, deux chambres bien proportionnées et des finitions sobres adaptées à un usage quotidien confortable.",
            features: [
                ["security", "Gardiennage"],
                ["local_parking", "Parking"],
                ["ac_unit", "Climatisation"],
                ["balcony", "Balcon"],
                ["water_drop", "Réserve d'eau"],
                ["bolt", "Groupe électrogène"]
            ],
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Sandrine Koyo",
                role: "Conseillère location",
                phone: "+242066414180",
                email: "sandrine.koyo@cerim.cg"
            }
        },
        {
            id: "villa-panoramique-ocean",
            title: "Villa Panoramique Vue Océan",
            type: "Villa Prestige",
            transaction: "Achat",
            badge: "Verified Listing",
            price: 510000000,
            priceLabel: "510.000.000 FCFA",
            city: "Pointe-Noire",
            district: "OCH",
            location: "OCH, Pointe-Noire",
            address: "Quartier OCH, Pointe-Noire",
            bedrooms: 6,
            livingRooms: 2,
            bathrooms: 5,
            surface: 600,
            land: 1400,
            ceiling: "3,6 m",
            terrace: 180,
            pool: 55,
            garage: 96,
            description: "Grande villa ouverte sur l'océan, avec de multiples suites, de vastes terrasses et des espaces de réception généreux. Une adresse rare pour les familles qui recherchent intimité et présence architecturale.",
            features: [
                ["visibility", "Vue océan"],
                ["pool", "Piscine"],
                ["yard", "Grand jardin"],
                ["security", "Sécurité renforcée"],
                ["directions_car", "Garage 3 véhicules"],
                ["outdoor_grill", "Cuisine extérieure"]
            ],
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1613553420145-7d4a66c9e01e?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Cédric Malonga",
                role: "Spécialiste villas côtières",
                phone: "+242055293018",
                email: "cedric.malonga@cerim.cg"
            }
        },
        {
            id: "villa-emeraude",
            title: "Villa Emeraude - Design Contemporain",
            type: "Villa Contemporaine",
            transaction: "Achat",
            badge: "Verified Listing",
            price: 450000000,
            priceLabel: "450.000.000 FCFA",
            city: "Kinshasa",
            district: "La Gombe",
            location: "La Gombe, Kinshasa",
            address: "Avenue Colonel Lukusa, La Gombe, Kinshasa",
            bedrooms: 4,
            livingRooms: 2,
            bathrooms: 4,
            surface: 320,
            land: 860,
            ceiling: "3,4 m",
            terrace: 90,
            pool: 36,
            garage: 54,
            description: "Villa contemporaine aux lignes nettes, avec une façade ouverte sur le jardin et une circulation intérieure très fluide. Le bien privilégie la lumière naturelle, les pièces de réception et une suite parentale isolée.",
            features: [
                ["pool", "Piscine"],
                ["yard", "Jardin paysager"],
                ["security", "Sécurité privée"],
                ["directions_car", "Garage"],
                ["ac_unit", "Climatisation"],
                ["kitchen", "Cuisine équipée"]
            ],
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Xw62vJpLhwD3M8Sx8ffgdUdxjKFXKDwYqTzgXncO9KgXoYRcfuiJPNKJ-dENYGmpBMJzjdsLNzC9NBhYzuxo0pSIktYYE32A4XrplPr0xBwvtFzliA889BAXG3pxuTyhf0Tdt4moHwq9s7FpIzyrbed5yRPIt546P6yerLAwLzz-BxTx60q7Eu8-n_0q4lKSvY7HZCYwhgfQddm6aTs6X_7DQ9oq4xx4-fzYb5lMujMFbHNvW8KOFb1f_Pd9Eedu4eP03nbHQPs",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Cédric Malonga",
                role: "Spécialiste luxe",
                phone: "+243812445901",
                email: "cedric.malonga@cerim.cg"
            }
        },
        {
            id: "appartement-capitole",
            title: "Appartement Le Capitole",
            type: "Appartement Urbain",
            transaction: "Location",
            badge: "New Build",
            price: 1500000,
            priceLabel: "1.500.000 FCFA / mois",
            city: "Brazzaville",
            district: "Ouenzé",
            location: "Ouenzé, Brazzaville",
            address: "Avenue de la Paix, Ouenzé, Brazzaville",
            bedrooms: 2,
            livingRooms: 1,
            bathrooms: 2,
            surface: 110,
            land: null,
            ceiling: "2,9 m",
            terrace: 14,
            pool: null,
            garage: 16,
            description: "Appartement compact et très bien fini, idéal pour une personne active ou un couple. L'espace de vie s'ouvre sur un balcon, les chambres sont séparées et l'immeuble propose un accès contrôlé.",
            features: [
                ["elevator", "Ascenseur"],
                ["security", "Accès sécurisé"],
                ["balcony", "Balcon"],
                ["local_parking", "Parking"],
                ["ac_unit", "Climatisation"],
                ["kitchen", "Cuisine équipée"]
            ],
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvKF1rLXaRHgwltVDVZ1wce7EjWWhBrXRJ9PqRPhiOsyT6Lj-M833mB07c5ehfk1OY-dfiuBwfMXg-rI3BrDVmWZ4HYqwiC2WGoz_WS8jDrH_TmUWx9nryoB0nVDxp9lTB1P-MQZ5zeVQh3qmXflbEKkYwII_9-Qf8NrJI40g4xTTJSOxCLu-_Ng3r3j4-n3xOFba1cWi4qCsNrhKbUou6-I1UmNhnMuLjXzvo_YlMTvZUM2dBFShZ8NR6Dp5LYnYJzIgGeqtWRw",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Sandrine Koyo",
                role: "Conseillère location",
                phone: "+242066414180",
                email: "sandrine.koyo@cerim.cg"
            }
        },
        {
            id: "palais-ocean",
            title: "Palais de l'Océan - Front de Mer",
            type: "Villa Front de Mer",
            transaction: "Achat",
            badge: "Offered At",
            price: 800000000,
            priceLabel: "800.000.000 FCFA",
            city: "Pointe-Noire",
            district: "Front de mer",
            location: "Front de mer, Pointe-Noire",
            address: "Boulevard de l'Atlantique, Pointe-Noire",
            bedrooms: 6,
            livingRooms: 3,
            bathrooms: 6,
            surface: 540,
            land: 1600,
            ceiling: "3,8 m",
            terrace: 210,
            pool: 70,
            garage: 110,
            description: "Résidence de prestige face à la mer, conçue pour recevoir et pour vivre avec une séparation nette entre espaces privés et réceptions. Les volumes sont spectaculaires, la terrasse devient une extension naturelle des salons.",
            features: [
                ["visibility", "Vue mer"],
                ["pool", "Piscine miroir"],
                ["deck", "Grande terrasse"],
                ["security", "Poste de sécurité"],
                ["wine_bar", "Cave à vin"],
                ["directions_car", "Garage 4 véhicules"]
            ],
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAa5ZS2Z6J8zzPn9lzfHpGpinnahXZm4NDvf9MNq_zn9HoFfOCZWiaFB77dBRNGOzPAKIVDQyNcxgVR-CNYDkPKYy5ew0xBfcAVZIj_RzzciJrZac4ZymuHOV1z5A8Md8GtMPz-yZ9-mBfMiSyRlP7O3ps6r0P9RXeJ1R9R5BcDrtM2NsN1F-qDyrivaJv4SKRAJ3yt5aLgcy0Xl78ZB0Gz_aOSVNwebslV704AvmPGvHAdOwlRjIELlsdCggO_A2yTowkpAGd-oSc",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=85"
            ],
            agent: {
                name: "Jean Dupont",
                role: "Expert biens d'exception",
                phone: "+242061234567",
                email: "jean.dupont@cerim.cg"
            }
        }
    ];

    const byId = new Map(properties.map((property) => [property.id, property]));

    function formatNumber(value) {
        return new Intl.NumberFormat("fr-FR").format(value).replace(/\s/g, ".");
    }

    function formatPrice(value, suffix = "FCFA") {
        return `${formatNumber(value)} ${suffix}`;
    }

    function getProperty(id) {
        return byId.get(id) || properties[0];
    }

    function getPropertyFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return getProperty(params.get("id") || "villa-imperiale");
    }

    function readCart() {
        let saved = JSON.parse(localStorage.getItem(cartKey) || "[]");

        if (!saved.length) {
            const legacy = JSON.parse(localStorage.getItem(legacyCartKey) || "[]");
            saved = legacy.map((item) => item.id).filter(Boolean);
        }

        const ids = saved.map((item) => (typeof item === "string" ? item : item.id));
        return [...new Set(ids)].map((id) => byId.get(id)).filter(Boolean);
    }

    function writeCart(propertiesToSave) {
        const ids = propertiesToSave.map((property) => property.id);
        localStorage.setItem(cartKey, JSON.stringify(ids));
    }

    function addToCart(id) {
        const property = getProperty(id);
        const cart = readCart();

        if (cart.some((item) => item.id === property.id)) {
            return { added: false, cart };
        }

        cart.push(property);
        writeCart(cart);
        return { added: true, cart };
    }

    function removeFromCart(id) {
        const cart = readCart().filter((property) => property.id !== id);
        writeCart(cart);
        return cart;
    }

    function cartTotal(cart = readCart()) {
        return cart.reduce((total, property) => total + property.price, 0);
    }

    function initials(name) {
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    }

    return {
        properties,
        formatNumber,
        formatPrice,
        getProperty,
        getPropertyFromUrl,
        readCart,
        writeCart,
        addToCart,
        removeFromCart,
        cartTotal,
        initials
    };
})();
