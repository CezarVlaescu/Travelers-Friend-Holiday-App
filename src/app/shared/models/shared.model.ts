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

type LabelConfigType = {
    name: string;
    image?: string;
    type: LabelEnumType;
}

enum LabelEnumType {
    Text = 'text',
    Email = 'email',
    Password = 'password',
    Number = 'number',
    Date = 'date'
}

// Export interfaces and types for use in other parts of the application
export type { 
    IUserDto,
    LabelConfigType 
}; 

//Export enums for use in other parts of the application
export { LabelEnumType };