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

interface LabelConfigType {
    name: string;
    image?: string;
    type: LabelEnumType;
    widthInput?: string;
}

interface ButtonConfigType {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    widthInput?: string;
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
    LabelConfigType,
    ButtonConfigType
}; 

//Export enums for use in other parts of the application
export { LabelEnumType };