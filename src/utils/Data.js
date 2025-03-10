import { Camera, Laptop, Smartphone, Tablet, Tv, Watch } from 'lucide-react';

const services = [
    {
        "title": "Free Shipping",
        "tagline": "From all orders over $100",
        "image": "/images/service.png"
    },
    {
        "title": "Daily Surprise Offers",
        "tagline": "Save up to 25% off",
        "image": "/images/service-02.png"
    },
    {
        "title": "Support 24/7",
        "tagline": "Shop with an expert",
        "image": "/images/service-03.png"
    },
    {
        "title": "Affordable Prices",
        "tagline": "Get Factory direct price",
        "image": "/images/service-04.png"
    },
    {
        "title": "Secure Payments",
        "tagline": "100% Protected Payments",
        "image": "/images/service-05.png"
    },
]

const productCategories = [
    {
        "name" : "Laptop",
        "icon" : Laptop
    },
    {
        "name" : "Mobile",
        "icon" : Smartphone
    },
    {
        "name" : "Tablet",
        "icon" : Tablet
    },
    {
        "name" : "Watch",
        "icon" : Watch
    },
    {
        "name" : "Camera",
        "icon" : Camera
    },
    {
        "name": "TV",
        "icon" : Tv
    }
]

export { services, productCategories }