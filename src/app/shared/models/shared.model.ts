/**
 * Shared models for the application
*/

interface IUserDto {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePictureUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    roles: string[];
}

export type { 
    IUserDto 
}; 