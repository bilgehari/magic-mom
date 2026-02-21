import kek from '../assets/kek.jpg';
import kek2 from '../assets/kek2.jpg';
import kurabiye from '../assets/kurabiye.jpg';
import kruvasan from '../assets/kruvasan.jpg';
import brownie from '../assets/brownie.jpg';

const products = [
    {
        id: 1,
        name: "Vanilyalı Kek",
        price: 250,
        category: "kek",
        description: "El yapımı, taze vanilyalı özel kekimiz.",
        image: kek2
      },
      {
        id: 2,
        name: "Çikolatalı Kek",
        price: 280,
        category: "kek",
        description: "Yoğun çikolata kremalı, ıslak kek.",
        image: kek
      },
  {
    id: 3,
    name: "Kurabiye Tabağı",
    price: 150,
    category: "kurabiye",
    description: "Tereyağlı, çıtır çıtır günlük kurabiyeler.",
    image: kurabiye
  },
  {
    id: 4,
    name: "Kruvasan",
    price: 80,
    category: "kruvasan",
    description: "Çıtır çıtır, tereyağlı Fransız kruvasanı.",
    image: kruvasan
  },
  {
    id: 5,
    name: "Çikolatalı Brownie",
    price: 120,
    category: "brownie",
    description: "Fudgy, yoğun çikolatalı ev yapımı brownie.",
    image: brownie
  }
];

export default products;