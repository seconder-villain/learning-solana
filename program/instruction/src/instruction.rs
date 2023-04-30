use borsh::{BorshDeserialize};
use solana_program::{program_error::ProgramError};


pub enum IntroInstruction {
    InitUserInput {
        name: String,
        message: String,
    }
}

#[derive(BorshDeserialize, Debug)]
struct StudentIntroPayload {
    name: String,
    message: String,
}

impl IntroInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (variant, rest) = input.split_first().ok_or(ProgramError::InvalidInstructionData)?;
        let payload = StudentIntroPayload::try_from_slice(rest).unwrap();

        Ok(match variant {
            0 => Self::InitUserInput {
                name: payload.name,
                message: payload.message
            },
            _ => return Err(ProgramError::InvalidInstructionData),
        })
    }
}

pub enum MovieInstruction {
    AddMovieReview {
        title: String,
        rating: u8,
        description: String,
    },
}

#[derive(BorshDeserialize, Debug)]
struct MovieReviewPayload {
    title: String,
    rating: u8,
    description: String,
}

impl MovieInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input
            .split_first()
            .ok_or(ProgramError::InvalidInstructionData)?;
        Ok(match variant {
            0 => {
                let payload = MovieReviewPayload::try_from_slice(rest).unwrap();
                Self::AddMovieReview {
                    title: payload.title,
                    rating: payload.rating,
                    description: payload.description,
                }
            },
            _ => return Err(ProgramError::InvalidInstructionData),
        })
    }
}