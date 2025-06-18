export interface ProductData {
  id: string;
  name: string;
  price: number;
  designs: { id: number; image: string }[];
  sizes: { id: string; label: string; details: string }[];
  fixationOptions: { id: string; label: string }[];
  logoOptions: string[];
  productCode: string;
}

export interface NavItem {
  label: string;
  image: string;
  href?: string;
}