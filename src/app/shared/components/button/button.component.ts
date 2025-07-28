import { Component, input, InputSignal } from '@angular/core';
import { ButtonConfigType } from '../../models/shared.model';
import { GLOBAL_CONSTS } from '../../../core/constants/global.consts';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  protected readonly buttonConfig: InputSignal<ButtonConfigType> = input<ButtonConfigType>(GLOBAL_CONSTS.BUTTON_DEFAULT_CONFIG); 
}
