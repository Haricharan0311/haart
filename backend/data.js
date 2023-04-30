import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Haricharan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Ivory boxes',
      slug: 'ivory-box',
      category: 'Ivory',
      image: '/images/p1.jpg',
      price: 250,
      countInStock: 20,
      artist: 'Sundar',
      rating: 4.0,
      numReviews: 10,
      description: 'Box carved in premium quality ivory',
    },
    {
      //_id: '2',
      name: 'Wooden Elephant',
      slug: 'wood-elephant', //what you see in URL (url friendly)
      category: 'Woodwork',
      image: '/images/p2.jpg', // 679px × 829px
      price: 120,
      countInStock: 0,
      artist: 'Ram',
      rating: 4.5,
      numReviews: 10,
      description:
        'Intricate work of art, with embedded mirror work in wood, carved into the shape of an elephant.',
    },
    {
      //_id: '3',
      name: 'Madhubani Painted Vase',
      slug: 'madhubani-vase',
      category: 'madhubani',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      artist: 'Shivani',
      rating: 4.5,
      numReviews: 14,
      description: 'Detailed madhubani art on a vase',
    },
    {
      //_id: '4',
      name: 'Bronze Elephant',
      slug: 'bronze-elephant',
      category: 'bronze',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      artist: 'Devi',
      rating: 4.5,
      numReviews: 10,
      description: 'bronze elephant',
    },
  ],
};

export default data;
