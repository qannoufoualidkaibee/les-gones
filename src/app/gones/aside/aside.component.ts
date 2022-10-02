import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  @Input()
  isOpened = false;
  @Output()
  onClose = new EventEmitter<void>();

  close(): void {
    this.isOpened = false;
    this.onClose.emit();
  }
}
