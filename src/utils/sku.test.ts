import { buildSku, calculatePrice } from './sku';

describe('buildSku', () => {
  test('should generate SKU without logo and with combined fixation', () => {
    const result = buildSku({
      designName: 'Carzo',
      designVersion: '1.0',
      size: 'L',
      logoMaterial: 'none',
      logoBrand: '',
      fixVariant: 'both'
    });
    
    expect(result).toBe('арт. Carzo 1.0-L-без лого-фікс-дно+стінка');
  });

  test('should generate SKU with steel logo and no fixation', () => {
    const result = buildSku({
      designName: 'Carzo',
      designVersion: '1.0',
      size: 'M',
      logoMaterial: 'steel',
      logoBrand: 'bmw',
      fixVariant: 'none'
    });
    
    expect(result).toBe('арт. Carzo 1.0-M-лого.метал.bmw-без фіксації');
  });

  test('should generate SKU with brass logo and floor fixation', () => {
    const result = buildSku({
      designName: 'Carzo',
      designVersion: '1.0',
      size: 'S',
      logoMaterial: 'brass',
      logoBrand: 'audi',
      fixVariant: 'floor'
    });
    
    expect(result).toBe('арт. Carzo 1.0-S-лого.латунь.audi-фікс-на-дні');
  });

  test('should generate SKU with wall fixation', () => {
    const result = buildSku({
      designName: 'Carzo',
      designVersion: '1.0',
      size: 'XL',
      logoMaterial: 'steel',
      logoBrand: 'mercedes',
      fixVariant: 'wall'
    });
    
    expect(result).toBe('арт. Carzo 1.0-XL-лого.метал.mercedes-фікс-на-стінці');
  });

  test('should generate SKU without logo and no fixation', () => {
    const result = buildSku({
      designName: 'Carzo',
      designVersion: '1.0',
      size: 'L',
      logoMaterial: 'none',
      logoBrand: '',
      fixVariant: 'none'
    });
    
    expect(result).toBe('арт. Carzo 1.0-L-без лого-без фіксації');
  });

  test('should handle Toyota brand correctly', () => {
    const result = buildSku({
      designName: 'Carzo',
      designVersion: '1.0',
      size: 'M',
      logoMaterial: 'brass',
      logoBrand: 'Toyota',
      fixVariant: 'floor'
    });
    
    expect(result).toBe('арт. Carzo 1.0-M-лого.латунь.toyota-фікс-на-дні');
  });
});

describe('calculatePrice', () => {
  const basePrice = 2090;

  test('should calculate base price without add-ons', () => {
    const result = calculatePrice(basePrice, 'none', 'none');
    expect(result).toBe(2090);
  });

  test('should calculate price with steel logo', () => {
    const result = calculatePrice(basePrice, 'steel', 'none');
    expect(result).toBe(2090 + 280);
  });

  test('should calculate price with brass logo', () => {
    const result = calculatePrice(basePrice, 'brass', 'none');
    expect(result).toBe(2090 + 200);
  });

  test('should calculate price with combined fixation', () => {
    const result = calculatePrice(basePrice, 'none', 'both');
    expect(result).toBe(2090 + 80);
  });

  test('should calculate price with steel logo and combined fixation', () => {
    const result = calculatePrice(basePrice, 'steel', 'both');
    expect(result).toBe(2090 + 280 + 80);
  });

  test('should calculate price with brass logo and combined fixation', () => {
    const result = calculatePrice(basePrice, 'brass', 'both');
    expect(result).toBe(2090 + 200 + 80);
  });

  test('should not add price for floor or wall fixation', () => {
    const floorResult = calculatePrice(basePrice, 'none', 'floor');
    const wallResult = calculatePrice(basePrice, 'none', 'wall');
    
    expect(floorResult).toBe(2090);
    expect(wallResult).toBe(2090);
  });
});