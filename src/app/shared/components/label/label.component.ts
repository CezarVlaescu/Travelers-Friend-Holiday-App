import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { LabelConfigType, LabelEnumType } from '../../models/shared.model';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  public readonly outputLabelValue: OutputEmitterRef<string> = output<string>();
  public readonly labelConfiguration: InputSignal<LabelConfigType> = input<LabelConfigType>({
    name: 'Select your country',
    image: 'assets/images/flags/flag.png',
    type: LabelEnumType.Text
  });

  protected handleLabelInput(event: Event): void {
    void this.outputLabelValue.emit((event.target as HTMLInputElement).value);
  }
}
