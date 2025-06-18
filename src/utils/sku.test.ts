import { buildSku, calculatePrice } from './sku';

describe('buildSku', () => {
  test('should generate SKU without logo and fixation', () => {
    const result = buildSku({
      size: 'XL',
      logoMaterial: 'none',
      logoBrand: '',
      fixVariant: 'none'
    });
    
    expect(result).toBe('арт. XL2.0.без-лого.none.без-фіксації');
  });

  test('should generate SKU with steel logo and combined fixation', () => {
    const result = buildSku({
      size: 'L',
      logoMaterial: 'steel',
      logoBrand: 'toyota',
      fixVariant: 'both'
    });
    
    expect(result).toBe('арт. L2.0.лого-метал.toyota.дно+стінка');
  });

  test('should generate SKU with brass logo and floor fixation', () => {
    const result = buildSku({
      size: 'M',
      logoMaterial: 'brass',
      logoBrand: 'mercedes',
      fixVariant: 'floor'
    });
    
    expect(result).toBe('арт. M2.0.лого-латунь.mercedes.дно');
  });

  test('should generate SKU with wall fixation', () => {
    const result = buildSku({
      size: 'S',
      logoMaterial: 'steel',
      logoBrand: 'bmw',
      fixVariant: 'wall'
    });
    
    expect(result).toBe('арт. S2.0.лого-метал.bmw.стінка');
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