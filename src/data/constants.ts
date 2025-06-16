import { ProductData, NavItem } from '../components/product-options/types';

export const GALLERY = [
  "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
  "https://images.pexels.com/photos/892673/pexels-photo-892673.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
  "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
  "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
  "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1",
  "https://images.pexels.com/photos/10843646/pexels-photo-10843646.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1"
];

export const PRODUCT: ProductData = {
  id: "toyota-case-001",
  name: "Автокейс Toyota",
  designs: [
    { id: 1, image: "https://images.pexels.com/photos/4348084/pexels-photo-4348084.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1" },
    { id: 2, image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1" },
    { id: 3, image: "https://images.pexels.com/photos/4348083/pexels-photo-4348083.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1000&dpr=1" },
  ],
  price: 2090,
  sizes: [
    { id: "S", label: "S", details: "40 × 30 × 30 см" },
    { id: "M", label: "M", details: "50 × 30 × 30 см" },
    { id: "L", label: "L", details: "60 × 30 × 30 см" },
    { id: "XL", label: "XL", details: "80 × 30 × 30 см" },
  ],
  fixationOptions: [
    { id: "floor", label: "на дні 0 ₴" },
    { id: "wall", label: "на стінці 0 ₴" },
    { id: "both", label: "дно + стінка 80 ₴" },
  ],
  logoOptions: ["без лого", "Toyota 200 ₴", "Mercedes 200 ₴"],
  productCode: "Case.Toyota.L.Carzo2.0.Dnostinka"
};

export const NAV_ITEMS = [
  { label: "Головна сторінка", href: "#" },
  { label: "Автокейси", href: "#" },
  { label: "Накидки в салон", href: "#" },
  { label: "Автокилимки", href: "#" },
  { label: "Контакти", href: "#" },
];