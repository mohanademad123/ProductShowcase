import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() title:string = "";
  @Input() data:any[] = [];
  @Input() all:boolean=true;
  @Input()select ='';
  @Output() selectedValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event:any) {
    this.selectedValue.emit(event)
  }
}
