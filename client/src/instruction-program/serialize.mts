import { serialize } from 'borsh';

export class Instruction {
    variant;
    name;
    message
    constructor({
        variant,
        name,
        message
    }: {
        variant: number
        name: string
        message: string
    }) {
        this.variant = variant;
        this.name = name;
        this.message = message;
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
                    ['name', 'string'],
                    ['message', 'string'],
                ],
            },
        ],
    ]);
    return Buffer.from(serialize(schema, value));
}