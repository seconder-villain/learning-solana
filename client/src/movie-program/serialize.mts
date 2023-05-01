import { serialize } from 'borsh';

export class AddMovieReviewInstruction {
    variant = 0;
    title: string;
    rating: number;
    description: string;
    constructor({
        title,
        description,
        rating
    }: {
        title: string;
        rating: number;
        description: string;
    }) {
        this.title = title;
        this.rating = rating;
        this.description = description;
    }
}
class UpdateMovieReviewInstruction {
    variant = 1;
    title: string;
    rating: number;
    description: string;
    constructor({
        title,
        description,
        rating
    }: {
        title: string;
        rating: number;
        description: string;
    }) {
        this.title = title;
        this.rating = rating;
        this.description = description;
    }
}
class AddCommentInstruction {
    variant = 2;
    comment: string;
    constructor({
        comment,
    }: {
        comment: string;
    }) {
        this.comment = comment;
    }
}

export const serializeAddMovieReviewInstructionData = (instruction: AddMovieReviewInstruction) => {
    const schema = new Map([
        [
            AddMovieReviewInstruction,
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
    return Buffer.from(serialize(schema, instruction));
}


export const serializeAddCommentInstructionData = (instruction: AddCommentInstruction) => {
    const schema = new Map([
        [
            AddCommentInstruction,
            {
                kind: 'struct',
                fields: [
                    ['variant', 'u8'],
                    ['comment', 'string'],
                ],
            },
        ],
    ]);
    return Buffer.from(serialize(schema, instruction));
}

export const serializeUpdateMovieReviewInstructionData = (instruction: UpdateMovieReviewInstruction) => {
    const schema = new Map([
        [
            UpdateMovieReviewInstruction,
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
    return Buffer.from(serialize(schema, instruction));
}