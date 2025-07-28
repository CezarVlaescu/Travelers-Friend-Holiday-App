import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { LabelConfigType } from '../../models/shared.model';
import { GLOBAL_CONSTS } from '../../../core/constants/global.consts';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  public readonly outputLabelValue: OutputEmitterRef<string> = output<string>();
  public readonly labelConfiguration: InputSignal<LabelConfigType> = input<LabelConfigType>(GLOBAL_CONSTS.LABEL_DEFAULT_CONFIG);

  protected handleLabelInput(event: Event): void {
    void this.outputLabelValue.emit((event.target as HTMLInputElement).value);
  }
}
