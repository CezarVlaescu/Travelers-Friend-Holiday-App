/**
 * This file contains global constants used throughout the application.
 * Use this file to define values that are reused in multiple places, such as:
 * - Theme settings (e.g., light or dark mode)
 * - Pagination options (e.g., items per page)
 * - API endpoints or base URLs
 * - Application-wide configuration flags
 * Keeping constants here helps maintain consistency and makes it easier to update values in one place.
 * Define constants, then export them using the export statment in the end of the file.
*/

import { ButtonConfigType, LabelConfigType, LabelEnumType } from "../../shared/models/shared.model";

const GLOBAL_THEMES: string[] = ['light', 'dark'];
const BUTTON_DEFAULT_CONFIG: ButtonConfigType = { label: 'Button', onClick: () => console.log('Button clicked'), disabled: false };
const LABEL_DEFAULT_CONFIG: LabelConfigType = { name: 'Select your country', image: 'assets/images/flags/flag.png', type: LabelEnumType.Text };

export const GLOBAL_CONSTS = { 
    GLOBAL_THEMES, 
    BUTTON_DEFAULT_CONFIG, 
    LABEL_DEFAULT_CONFIG
};