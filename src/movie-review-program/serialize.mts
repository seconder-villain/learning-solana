import { serialize } from 'borsh';

export class Instruction {
    variant;
    title;
    description;
    rating;
    constructor({
        variant,
        title,
        description,
        rating
    }: {
        variant: number
        title: string
        description: string
        rating: number
    }) {
        this.variant = variant;
        this.title = title;
        this.description = description;
        this.rating = rating;
    }
}

export const serializeInstruction = (value: Instruction) => {
    const schema = new Map([
        [
            Instruction,
            {
                kind: 'struct',
                fields: [
                    ['variant', 'u8'],
                    ['title', 'string'],
                    ['rating', 'u8'],
                    ['description', 'string'],
                ],
            },
        ],
    ]);
    return Buffer.from(serialize(schema, value));
}