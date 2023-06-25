import {z} from 'zod';

export const createCarSchema = z.object({
    platenumber: z.string({
        required_error: 'PlateNumber is required'
    }),
    brand: z.string({
        required_error: 'Brand is required'
    }),
    state: z.string({
        required_error: 'State is required'
    }),
    dailyvalue: z.string({
        required_error: 'DailyValue is required'
    }),
});