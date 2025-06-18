export interface LogoData {
  name: string;
  slug: string;
  img: string;    // Large image URL
  thumb: string;  // 40x40 thumbnail URL
}

export const LOGOS: LogoData[] = [
  {
    name: 'Toyota',
    slug: 'toyota',
    img: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  },
  {
    name: 'Mercedes',
    slug: 'mercedes',
    img: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  },
  {
    name: 'BMW',
    slug: 'bmw',
    img: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  },
  {
    name: 'Audi',
    slug: 'audi',
    img: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  }
];