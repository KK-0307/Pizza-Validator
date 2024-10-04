import { ZodError, z } from 'zod';

const pizzaSchema = z.object({
  size: z.number(),
  crust: z.union([z.literal('stuffed'), z.literal('normal')]),
  isDeepDish: z.boolean().optional(),
  toppings: z.array(z.string()).optional().refine(toppings => {
    const invalidToppings = ['screws', 'bolts', 'nails', 'pineapple'];
    return toppings === undefined || toppings.every(topping => !invalidToppings.includes(topping.toLocaleLowerCase()));
  }, {
    message: "Invalid toppings found"
  })
});

type Pizza = z.infer<typeof pizzaSchema>;

type ValidationResult = 
  | { isPizza: true; pizza: Pizza; }
  | { isPizza: false; errors: string; };

export function validatePizza(input: unknown): ValidationResult {
  try {
    const pizza = pizzaSchema.parse(input);
    return { isPizza: true, pizza };
  } catch (error) {
    if (error instanceof ZodError) {
        const errorMessages = error.errors.map(e => e.message).join(", ");
        return {isPizza: false, errors: errorMessages};
    }
    return {isPizza: false, errors: "An unknown error occured"};
  }
}
