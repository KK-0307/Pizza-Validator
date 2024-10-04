import { validatePizza } from '../src/validatePizza';

describe('validatePizza Function Tests', () => {
  // Valid Pizza Test
  it('should validate a correct pizza object', () => {
    const validPizza = {
      size: 12,
      crust: 'normal',
      toppings: ['cheese', 'tomato']
    };
    const validationResult = validatePizza(validPizza);

    if (validationResult.isPizza) {
      expect(validationResult.pizza).toEqual(validPizza);
    } else {
      fail('Expected valid pizza to pass validation');
    }
  });

  // Invalid Pizza Test
  it('should invalidate an incorrect pizza object', () => {
    const invalidPizza = {
      size: 16,
      crust: 'normal',
      toppings: ['cheese', 'nails'] // Invalid topping
    };
    const validationResult = validatePizza(invalidPizza);

    if (!validationResult.isPizza) {
      expect(validationResult.errors).toBeDefined();
    } else {
      fail('Expected invalid pizza to fail validation');
    }
  });

  it('should validate a deep dish pizza', () => {
    const deepDishPizza = {
      size: 14,
      crust: 'normal',
      isDeepDish: true,
      toppings: ['pepperoni', 'mushrooms']
    };
    const validationResult = validatePizza(deepDishPizza);
    expect(validationResult.isPizza).toBe(true);
  });

  it('should invalidate a pizza with an invalid topping (bolts)', () => {
    const validationResult = validatePizza({
      size: 12,
      crust: 'normal',
      toppings: ['tomato', 'bolts']
    });
    expect(validationResult.isPizza).toBe(false);
  });

  it('should invalidate a pizza with wrong type for size', () => {
    const validationResult = validatePizza({ size: 'large', crust: 'normal' });
    expect(validationResult.isPizza).toBe(false);
  });

});
