import { Component, input, InputSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-option-box',
  imports: [MatIconModule],
  templateUrl: './option-box.component.html',
  styleUrl: './option-box.component.scss'
})
export class OptionBoxComponent {
  public readonly iconName: InputSignal<string> = input<string>('home');
}
