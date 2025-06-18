export interface LogoItem {
  slug: string;
  name: string;        // 'Mercedes'
  imgBrass: string;    // велике фото «латунь»
  imgSteel: string;    // велике фото «сталь»
  thumb: string;       // маленька мініатюра (40×40) — ЗБЕРІГАЄМО!
}

export const LOGOS: LogoItem[] = [
  {
    name: 'Toyota',
    slug: 'toyota',
    imgBrass: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgSteel: 'https://images.pexels.com/photos/892673/pexels-photo-892673.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  },
  {
    name: 'Mercedes',
    slug: 'mercedes',
    imgBrass: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgSteel: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  },
  {
    name: 'BMW',
    slug: 'bmw',
    imgBrass: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgSteel: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  },
  {
    name: 'Audi',
    slug: 'audi',
    imgBrass: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    imgSteel: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=40&h=40'
  }
];