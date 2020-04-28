const categories = [
    {
      id: "plants",
      name: "Plants",
      tags: ["products", "inspirations"],
      count: 147,
      image: require("../assets/Plants.png")
    },
    {
      id: "seeds",
      name: "Seeds",
      tags: ["products", "shop"],
      count: 16,
      image: require("../assets/Seeds.png")
    },
    {
      id: "flowers",
      name: "Flowers",
      tags: ["products", "inspirations"],
      count: 68,
      image: require("../assets/Flowers.png")
    },
    {
      id: "sprayers",
      name: "Sprayers",
      tags: ["products", "shop"],
      count: 17,
      image: require("../assets/Sprayers.png")
    },
    {
      id: "pots",
      name: "Pots",
      tags: ["products", "shop"],
      count: 47,
      image: require("../assets/Pots.png")
    },
    {
      id: "fertilizers",
      name: "fertilizers",
      tags: ["products", "shop"],
      count: 47,
      image: require("../assets/Fertilizers.png")
    }
  ];
  
  const products = [
    {
      id: 1,
      name: "16 Best Plants That Thrive In Your Bedroom",
      description:
        "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
      tags: ["Interior", "27 m²", "Ideas"],
      images: [
        
        require("../assets/Images/plants_1.png"),
        require("../assets/Images/plants_2.png"),
        require("../assets/Images/plants_3.png"),
        // showing only 3 Images, show +6 for the rest
        require("../assets/Images/plants_1.png"),
        require("../assets/Images/plants_2.png"),
        require("../assets/Images/plants_3.png"),
        require("../assets/Images/plants_1.png"),
        require("../assets/Images/plants_2.png"),
        require("../assets/Images/plants_3.png")
      ]
    }
  ];
  
  const explore = [
    // Images
    require("../assets/Images/explore_1.png"),
    require("../assets/Images/explore_2.png"),
    require("../assets/Images/explore_3.png"),
    require("../assets/Images/explore_4.png"),
    require("../assets/Images/explore_5.png"),
    require("../assets/Images/explore_6.png")
  ];
  

  
  export { categories, explore, products };