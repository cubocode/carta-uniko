/** Contenido alineado con "Copia de Nueva carta de uniko.pdf" (6 páginas). */

export const CARTA_TOTAL_PAGES = 6;

export const cartaPages = [
  {
    sheetHeading: {
      title: "CAFETERÍA",
      subtitle: "Consultá opciones de leche vegetal y descafeinado",
    },
    blocks: [
      { kind: "sectionTitle", text: "Expresso" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Ristretto",
            desc: "Expresso corto, concentrado y con cuerpo.",
            price: "$3.300",
          },
          {
            name: "Expresso",
            desc: "Balance entre acidez y amargor",
            price: "$3.500",
          },
          { name: "Lungo", desc: "Más largo, mayor amargor", price: "$3.300" },
          {
            name: "Americano",
            desc: "Expresso + agua caliente",
            price: "$4.500",
          },
        ],
      },
      { kind: "sectionTitle", text: "Con leche" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Macchiatto",
            desc: "Expresso con espuma de leche",
            price: "$3.300",
          },
          { name: "Cortado", desc: "Expresso con leche", price: "$3.500" },
          { name: "Cortado en jarrita", price: "$4.000" },
          {
            name: "Cappuccino",
            desc: "Expresso + leche + espuma",
            price: "$4.100",
          },
          {
            name: "Latte macchiato",
            desc: "Leche + expresso servido en capas",
            price: "$4.500",
          },
          { name: "Flat white", price: "$5.500" },
        ],
      },
      { kind: "sectionTitle", text: "Chocolate y especiales" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Submarino",
            desc: "Leche caliente + chocolate",
            price: "$4.400",
          },
          {
            name: "Mocaccino",
            desc: "Café expreso, chocolate y leche texturizada.",
            price: "$5.000",
          },
          { name: "Chocolatada", price: "$4.400" },
          {
            name: "Café bombón",
            desc: "Expresso + leche condensada",
            price: "$5.000",
          },
        ],
      },
      { kind: "sectionTitle", text: "Fríos" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Milkshake",
            desc: "Espresso + leche condensada",
            price: "$4.500",
          },
          { name: "Café frappé", price: "$4.500" },
        ],
      },
      
      { kind: "sectionTitle", text: "Mate — té" },
      {
        kind: "menuRows",
        rows: [
          { name: "Mate — té", price: "$3.500" },
          { name: "Mate — té con hierbas", price: "$4.600" },
        ],
      },
      { kind: "sectionTitle", text: "Filtrados" },
      {
        kind: "menuRows",
        rows: [
          { name: "Filtrado", desc: "Consultar por filtrado" },
          
        ],
      },
    ],
  },
  {
    sheetHeading: {
      title: "DESAYUNO Y MERIENDA",
    
    },
    blocks: [
     
      { kind: "sectionTitle", text: "Combos" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Clásico",
            desc: "Infusión + 2 medialunas o 2 tortillas",
            price: "$7.000",
          },
          {
            name: "Liviano",
            desc:
              "Infusión + jugo de naranja + tostadas de pan con semillas + queso crema + mermelada.",
            price: "$8.000",
          },
          {
            name: "Del Valle",
            desc:
              "Infusión + jugo de naranja + tostadas de pan de campo + manteca + dulce de leche.",
            price: "$8.000",
          },
          {
            name: "Saludable",
            desc:
              "Infusión + 2 panqueques (avena o sarraceno) + miel + frutas + yogurt con granola.",
            price: "$12.000",
          },
          {
            name: "Mafalda",
            desc: "Infusión + 2 medialunas de jamón y queso.",
            price: "$9.000",
          },
        ],
      },
      { kind: "sectionTitle", text: "Proteicos" },
      {
        kind: "menuRows",
        rows: [
          
          {
            name: "Proteico 1",
            desc:
              "Infusión + tostadas de pan proteico + queso crema + huevos revueltos + jamón y queso.",
            price: "$9.000",
          },
          {
            name: "Proteico 2",
            desc:
              "Infusión + tostadas de pan proteico + queso crema + huevos revueltos + jamón y queso.",
            price: "$9.000",
          },
        ],
      },
      { kind: "sectionTitle", text: "Sin harina" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Opción 1",
            desc: "Infusión + Omelette de jamón y queso",
            price: "$9.000",
          },
          {
            name: "Opción 2",
            desc: "Infusión + Omelette de queso y tomate",
            price: "$9.000",
          },
          {
            name: "Opción 3",
            desc:
              "Infusión + Dos rodajas de jamón y queso, revuelto con semilla",
            price: "$9.000",
          },
        ],
      },
      { kind: "sectionTitle", text: "Pastelería" },
      {
        kind: "menuRows",
        rows: [
          
          { name: "Tortas — Porción", price: "$8.000" },
          { name: "Tartas — Porción", price: "$7.000" },
          { name: "Alfajores", price: "$4.000" },
          { name: "Brownie", price: "$4.000" },
          { name: "Budín", price: "$4.000" },
          { name: "Scon Dulce", price: "$3.000" },
        ],
      },
      { kind: "sectionTitle", text: "Opciones de croissant" },
      {
        kind: "menuRows",
        rows: [
          { name: "Croissant", price: "$4.000" },
          { name: "Croissant + Nutella", price: "$5.000" },
          { name: "Croissant + Nutella + banana", price: "$5.500" },
          { name: "Croissant + Jamón y queso", price: "$6.500" },
        ],
      },
      { kind: "sectionTitle", text: "Agregados" },
      {
        kind: "menuRows",
        rows: [
          { name: "Medialuna", price: "$1.800" },
          { name: "Tortilla", price: "$1.400" },
          {
            name: "Bowl de Yogur natural, granola y miel",
            price: "$6.000",
          },
          {
            name: "Porción de mermelada o dulce de leche, queso crema o manteca",
            price: "$1.300",
          },
        ],
      },
    ],
  },
  {
    sheetHeading: {
      title: "SANDWICHES",
    },
    blocks: [
      
      { kind: "sectionTitle", text: "Focaccia" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Mortadela con pistacho",
            desc: "Lechuga + cherry",
            price: "$9.000",
          },
          {
            name: "Mediterráneo",
            desc:
              "Jamón crudo + queso + pasta de tomates secos + aceitunas + rúcula.",
            price: "$10.000",
          },
  
        ],
      },
      { kind: "sectionTitle", text: "Pan árabe" },
      {
        kind: "menuRows",
        rows: [
          { name: "Jamón y queso", price: "$7.000" },
          { name: "Ternera y queso", price: "$9.000" },
          { name: "Cantimpalo y queso", price: "$9.000" },
        ],
      },
      { kind: "sectionTitle", text: "Ciabatta" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Vegetariano",
            desc:
              "Queso + rúcula + queso crema + tomates cherry + palta.",
            price: "$9.000",
          },
          {
            name: "Vegano",
            desc:
              "Tofu + rúcula + mayonesa vegetal + tomates cherry + palta.",
            price: "$9.000",
          },
          { name: "Agregado de tomate", price: "$1.000" },
        ],
      },
      { kind: "sectionTitle", text: "LICUADOS", tier: "major" },
      { kind: "note", text: "Agua o leche", centered: true }, 
      {
        kind: "menuRows",
        rows: [
          { name: "Banana", price: "$4.400" },
          { name: "Durazno", price: "$4.400" },
          { name: "Frutilla", price: "$4.400" },
          { name: "Tuti Frutti", price: "$4.400" },
          {
            name: "Agregado de leche de coco o almendras",
            price: "$1.800",
          },
        ],
      },
    ],
  },
  {
    sheetHeading: {
      title: "BEBIDAS",
      
    },
    blocks: [
      
      
      { kind: "sectionTitle", text: "Jugos y Limonadas" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Jugo de naranja exprimido",
            price: "$5.000",
          },
          {
            name: "Limonada con menta y jengibre",
            desc: "Vaso",
            price: "$4.000",
          },
          {
            name: "Limonada con menta y jengibre",
            desc: "Jarra de 1 litro",
            price: "$8.000",
          },
        ],
      },
      { kind: "sectionTitle", text: "Sin alcohol" },
      {
        kind: "menuRows",
        rows: [
          { name: "Gaseosas", price: "$3.500" },
          { name: "Agua con o sin gas 500cc", price: "$3.500" },
          { name: "Agua saborizada", price: "$3.500" },
        ],
      },
      { kind: "sectionTitle", text: "Con alcohol" },
      {
        kind: "menuRows",
        rows: [
          { name: "Stella Artois" },
          { name: "Corona 710cc" },
          { name: "Andes 473cc" },
          { name: "Patagonia 473cc" },
        ],
      },
    ],
  },
  {
    sheetHeading: {
      title: "TÉS INTI ZEN",
      subtitle:
        "Infusiones orgánicas inspiradas en la energía de los Andes y la Patagonia. Cada sorbo es un viaje de calma y vitalidad. Preparados con agua a 85–95°C, reposo 4–6 minutos.",
    },
    blocks: [
      {
        kind: "menuRows",
        rows: [
          {
            name: "Golden Chai",
            desc:
              "Té negro de la India con cúrcuma, jengibre y canela y clavo de olor. Calienta el cuerpo, estimula y energiza con su aroma envolvente y acción antioxidante.",
          },
          {
            name: "Silencio Andino",
            desc:
              "Mezcla sutil de té verde con Cedrón y cáscaras de Naranjas. Equilibra cuerpo, mente y espíritu.",
          },
          {
            name: "Iluminé",
            desc: "Té negro clásico. Perfecto para el despertar.",
          },
          {
            name: "Patagonia Bee",
            desc:
              "Té negro con miel, Vainilla y Cacao. La comunión de sus ingredientes sirve para suavizar las palabras.",
          },
          {
            name: "Patagonia Rooibos",
            desc:
              "Infusión de Rooibos con frutos rojos. Infusión misteriosa para endulzar los sentidos.",
          },
          {
            name: "Inti Matcha",
            desc: "Té verde de Japón, Matcha, Yuzu cítrico y Limón.",
          },
          {
            name: "Chai Tea",
            desc:
              "Clásico chai indio con canela, clavo y cardamomo negro. Especiado y robusto, eleva el ánimo y favorece la digestión en tardes frías.",
          },
          {
            name: "Be Orange Rooibos",
            desc:
              "Rooibos vibrante con naranja y cáscara de cítricos. Refrescante y sin cafeína, ideal para desconectar con su dulzor soleado y calmante.",
          },
        ],
      },
    ],
  },
  {
    sheetHeading: {
      title: "PASTELERÍA",
     
    },
    
    blocks: [
      { kind: "sectionTitle", text: "Tortas" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Matilda",
            desc: "Bizcochuelo Genoise con ganache de Chocolate.",
          },
          {
            name: "Chajá",
            desc: "Bizcochuelo Genoise de Vainilla con crema Chantilly, durazno y tropezones de merengue secos.",
          },
          {
            name: "Dacquoise",
            desc: "Disco de merengue francés con polvo de Almendras, crema Chantilly y colchón de frutas.",
          },
          {
            name: "Rogel",
            desc: "Finas capas de masa crocante con dulce de leche y nueces.",
          },
          {
            name: "Carrot Cake",
            desc: "Bizcochuelo de Zanahoria y nuez, relleno de frosting de manteca y crema.",
          },
          
        ],    
      },
      
      { kind: "sectionTitle", text: "Tartas" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Tarta de Estación",
            desc:
              "Crocante masa Sucré con crema de chocolate blanco y yogurt natural con cubierta de frutas de estación.",
          },
          {
            name: "Gio",
            desc:
              "Crocante masa Sucré con suave crema de Naranja, cubierta con ganache de chocolate.",
          },
          {
            name: "La Negra",
            desc: "Masa de Cacao, mousse de chocolate y ganache de chocolate.",
          },
          {
            name: "Lemon Pie",
            desc:
              "Crocante masa Sucré con una delicada crema de limón y merengue italiano.",
          },
          {
            name: "Ricota",
            desc:
              "Crocante masa Sucré con delicioso relleno de ricota y ralladura de Limón.",
          },
          {
            name: "La Pera",
            desc:
              "Masa de almendras con colchón de peras especiadas y Crumble.",
          },
        ],
      },
      { kind: "sectionTitle", text: "Alfajores" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Chocolate y Naranja",
            desc: "Masa de chocolate y Naranjas relleno de dulce de Leche.",
          },
          {
            name: "Chocolate",
            desc:
              "Masa de chocolate y Naranja relleno de crema de yogurth natural, limón y chocolate blanco.",
          },
          {
            name: "Maicena",
              desc: "Masa de Maicena con relleno de dulce de leche.",
          },
        ],
      },
      { kind: "sectionTitle", text: "Budines" },
      {
        kind: "menuRows",
        rows: [
          {
            name: "Budín de coco",
            
          },
          {
            name: "Budín de amapola con limón",
        
          },
          {
            name: "Budín de frutos secos",
          
          },
          {
            name: "Budín de arándanos y yogurt",
        
          },
        ],
      },
    ],
  },
];
