import { serialize, deserialize } from 'borsh';

class Test {
    variant;
    playerId;
    constructor({
        variant,
        playerId
    }: {
        variant: number
        playerId: number
    }) {
        this.variant = variant;
        this.playerId = playerId;
    }
}

const value = new Test({ variant: 2, playerId: 1435 });
const schema = new Map([
    [
        Test,
        {
            kind: 'struct',
            fields: [
                ['variant', 'u8'],
                ['playerId', 'u16'],
            ],
        },
    ],
]);
const buffer = serialize(schema, value);
const recovered = deserialize(schema, Test, Buffer.from(buffer));
console.log(buffer);
console.log(recovered);
