import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  private holdTimoutId: any;
  private isTouchEvent: boolean; // set to true if the button press is registered as touch event
  private isTouchMoveTriggered: boolean; // set to true if the button move event is triggered
  private stopHold$ = new Subject<void>();

  @Input() value!: string;
  @Input() title!: string;

  @ViewChild('button') element!: ElementRef;

  constructor() {}

  contextMenu(event: any) {
    console.log('contextmenu');
    event.preventDefault();
  }
  touchDown(event: TouchEvent) {
    console.log('touchdown');
  }
  touchUp(event: TouchEvent) {}
  touchLeave(event: TouchEvent) {}
  mouseDown(event: MouseEvent) {
    console.log('mousedown');
  }
  mouseUp(event: MouseEvent) {
    console.log('mouseup');
  }
  mouseLeave(event: MouseEvent) {}
  pointerDown(event: PointerEvent) {
    console.log('pointerdown');
    timer(5000)
      .pipe(takeUntil(this.stopHold$))
      .subscribe({
        next: () => console.log('Button held'),
        complete: () => console.log('Button hold cancelled'),
      });
  }
  pointerLeave(event: PointerEvent) {
    console.log('pointerleave');
    this.stopHold$.next();
  }
  pointerOut(event: PointerEvent) {
    //console.log('pointerout');
  }
  pointerUp(event: PointerEvent) {
    console.log('pointerup');
  }

  ngAfterViewInit() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.stopHold$.next();
  }
}
