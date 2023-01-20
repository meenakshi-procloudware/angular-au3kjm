import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() counterCount;
  @Output() onExecuteCount = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.counterCount);
  }

  EmitFunction() {
    this.onExecuteCount.emit(0);
  }
}
