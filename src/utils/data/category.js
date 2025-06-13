import { Camera, Laptop, Smartphone, Tablet, Tv, Watch } from "lucide-react";

const productCategories = [
  {
    name: "Laptop",
    icon: Laptop,
  },
  {
    name: "Mobile",
    icon: Smartphone,
  },
  {
    name: "Tablet",
    icon: Tablet,
  },
  {
    name: "Watch",
    icon: Watch,
  },
  {
    name: "Camera",
    icon: Camera,
  },
  {
    name: "TV",
    icon: Tv,
  },
];

const categorySectionData = [
  {
    title: "Computer & Laptop",
    image: "/images/laptop.jpg",
    quantity: 20,
  },
  {
    title: "Camera & Videos",
    image: "/images/camera.jpg",
    quantity: 30,
  },
  {
    title: "Smart Television",
    image: "/images/tv.jpg",
    quantity: 15,
  },
  {
    title: "Smartwatches",
    image: "/images/watch.jpg",
    quantity: 25,
  },
  {
    title: "Music & Gaming",
    image: "/images/laptop.jpg",
    quantity: 12,
  },
  {
    title: "Mobiles & Tablets",
    image: "/images/laptop.jpg",
    quantity: 32,
  },
  {
    title: "Headphones",
    image: "/images/headphone.jpg",
    quantity: 11,
  },
  {
    title: "Accessories",
    image: "/images/acc.jpg",
    quantity: 14,
  },
  {
    title: "Portable Speakers",
    image: "/images/speaker.jpg",
    quantity: 24,
  },
  {
    title: "Home Appliances",
    image: "/images/homeapp.jpg",
    quantity: 28,
  },
];

export { categorySectionData, productCategories };
