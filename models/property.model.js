const properties = [
  {
    id: "1",
    title: "Modern Downtown Apartment",
    address: "123 Main St, Downtown",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1773-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1789-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1814-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1831-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1833-scaled.jpg",
    ],
    description:
      "This beautiful modern apartment is located in the heart of downtown, offering easy access to shops, restaurants, and public transportation. With spacious living areas and contemporary finishes, it is perfect for urban living.",
  },
  {
    id: "2",
    title: "Cozy Suburban Home",
    address: "456 Elm St, Suburbia",
    price: 350000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7915.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7923.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A77971706.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78071716-Modifier.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78101719.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78151724.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78271733.jpg",
    ],
    description:
      "This charming home features a large backyard, perfect for family gatherings and outdoor activities. Located in a friendly neighborhood, it offers a peaceful retreat from the hustle and bustle of city life.",
  },
  {
    id: "3",
    title: "Luxury Beachfront Condo",
    address: "789 Ocean Drive, Beach City",
    price: 850000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2000,
    type: "sale",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1773-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1789-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1814-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1831-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1833-scaled.jpg",
    ],
    description:
      "Enjoy stunning ocean views and direct beach access from this luxurious condo. With high-end finishes and spacious living areas, it is the perfect getaway for those who appreciate coastal living.",
  },
  {
    id: "4",
    title: "Charming Victorian House",
    address: "101 Maple Ave, Historic District",
    price: 600000,
    bedrooms: 4,
    bathrooms: 2,
    sqft: 2500,
    type: "sale",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7923.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A77971706.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78071716-Modifier.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78101719.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78151724.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78271733.jpg",
    ],
    description:
      "This beautifully restored Victorian home combines historic charm with modern amenities. Located in a picturesque neighborhood, it features intricate woodwork and spacious rooms, making it a perfect family home.",
  },
  {
    id: "5",
    title: "Spacious Family Home",
    address: "202 Oak St, Family Town",
    price: 400000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3000,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1773-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1789-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1814-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1831-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1833-scaled.jpg",
    ],
    description:
      "Ideal for families, this spacious home features a large garden and play area. With ample bedrooms and living space, it is perfect for creating lasting memories with loved ones.",
  },
  {
    id: "6",
    title: "Modern Loft in the City",
    address: "303 Pine St, Urban Center",
    price: 500000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 900,
    type: "sale",
    status: "available",
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7923.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A77971706.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78071716-Modifier.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78101719.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78151724.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78271733.jpg",
    ],
    description:
      "This stylish loft features high ceilings and large windows, providing an abundance of natural light. Located in the heart of the urban center, it is perfect for those who enjoy a vibrant city lifestyle.",
  },
  {
    id: "7",
    title: "Rustic Cabin in the Woods",
    address: "404 Cedar Rd, Nature Valley",
    price: 250000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1773-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1789-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1814-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1831-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1833-scaled.jpg",
    ],
    description:
      "Escape to nature in this cozy cabin surrounded by trees. Perfect for weekend getaways or year-round living, it offers a peaceful retreat with rustic charm and modern comforts.",
  },
  {
    id: "8",
    title: "Elegant Townhouse",
    address: "505 Birch St, City Center",
    price: 700000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7915.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7923.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A77971706.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78071716-Modifier.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78101719.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78151724.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78271733.jpg",
    ],
    description:
      "This modern townhouse features luxury finishes and an open floor plan, making it perfect for entertaining. Located in the city center, it offers convenience and style in one package.",
  },
  {
    id: "9",
    title: "Chic Studio Apartment",
    address: "606 Walnut St, Downtown",
    price: 300000,
    bedrooms: 0,
    bathrooms: 1,
    sqft: 600,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1769-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1773-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1789-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1814-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1831-scaled.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A1833-scaled.jpg",
    ],
    description:
      "Perfect for singles or couples, this chic studio apartment is close to amenities and features modern design elements. It offers a cozy yet stylish living space in a vibrant neighborhood.",
  },
  {
    id: "10",
    title: "Grand Estate",
    address: "707 Palm St, Luxury Area",
    price: 2000000,
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5000,
    type: "sale",
    status: "available",
    images: [
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7915.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A7923.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A77971706.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78071716-Modifier.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78101719.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78151724.jpg",
      "https://www.smaartvacation.com/wp-content/uploads/2020/03/9N1A78271733.jpg",
    ],
    description:
      "This magnificent estate features sprawling grounds and luxurious living spaces. Perfect for entertaining, it offers a blend of elegance and comfort in a prestigious neighborhood.",
  },
  {
    id: "11",
    title: "Contemporary Bungalow",
    address: "808 Spruce St, Quiet Neighborhood",
    price: 375000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This modern bungalow features an open floor plan and is situated in a quiet neighborhood. It is perfect for families looking for a comfortable and stylish home.",
  },
  {
    id: "12",
    title: "Penthouse Suite",
    address: "909 Skyview Rd, City Skyline",
    price: 1200000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 2500,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This luxury penthouse offers panoramic city views and high-end finishes. With spacious living areas and a prime location, it is perfect for those who appreciate the finer things in life.",
  },
  {
    id: "13",
    title: "Historic Farmhouse",
    address: "1010 Country Rd, Rural Area",
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This charming farmhouse features a large plot of land and historic details. It is perfect for those looking for a peaceful rural lifestyle with modern conveniences.",
  },
  {
    id: "14",
    title: "Stylish Duplex",
    address: "1111 Main St, Urban Area",
    price: 550000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This modern duplex features a private backyard and stylish interiors. Located in an urban area, it offers the perfect blend of comfort and convenience for city living.",
  },
  {
    id: "15",
    title: "Charming Cottage",
    address: "1212 Lakeview Dr, Lakeside",
    price: 325000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 900,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This cozy cottage offers lake access and a charming atmosphere. Perfect for weekend getaways or year-round living, it is a delightful retreat for nature lovers.",
  },
  {
    id: "16",
    title: "Urban Warehouse Conversion",
    address: "1313 Industrial Rd, City Center",
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 2200,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This unique living space in a converted warehouse features high ceilings and modern design. Located in the city center, it is perfect for those who appreciate industrial chic aesthetics.",
  },
  {
    id: "17",
    title: "Luxury Villa",
    address: "1414 Sunset Blvd, Coastal Area",
    price: 3500000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 6000,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This exquisite villa offers ocean views and a private pool. With luxurious amenities and spacious living areas, it is perfect for those seeking a lavish lifestyle by the coast.",
  },
  {
    id: "18",
    title: "Affordable Starter Home",
    address: "1515 First St, New Town",
    price: 275000,
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1200,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This great starter home is perfect for first-time buyers. With a cozy layout and a friendly neighborhood, it offers an excellent opportunity to enter the housing market.",
  },
  {
    id: "19",
    title: "Elegant Ranch Style Home",
    address: "1616 Ranch Rd, Countryside",
    price: 480000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2500,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This spacious ranch-style home features a large yard and an open floor plan. It is perfect for families looking for comfort and space in a serene countryside setting.",
  },
  {
    id: "20",
    title: "Modern Family Home",
    address: "1717 Family Ln, Suburbia",
    price: 525000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "sale",
    status: "available",
    images: [],
    description:
      "This perfect family home features modern amenities and a spacious layout. With a large backyard and close proximity to schools, it is ideal for families looking to settle down.",
  },
];

module.exports = properties;
