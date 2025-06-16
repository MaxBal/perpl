import React from 'react';
import { ProductData } from './types';
import { Badge } from './ui/Badge';

interface Props {
  product: ProductData;
}

const BADGES = [
  { label: 'L Carzo 2.0',         variant: 'light', withIcon: false },
  { label: 'Logo Toyota',         variant: 'dark',  withIcon: true  },
  { label: 'Фіксація на стінці',  variant: 'dark',  withIcon: true  },
];

const ProductHeader: React.FC<Props> = ({ product }) => (
  <>
    <h1 className="text-[32px] font-semibold leading-tight">
      Автокейс з&nbsp;лого&nbsp;Toyota
    </h1>
    <div className="flex flex-wrap gap-2 mt-3">
      {BADGES.map(({ label, variant, withIcon }) => (
        <Badge key={label} label={label} variant={variant as any} withIcon={withIcon}/>
      ))}
    </div>
  </>
);

export default ProductHeader;