import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[activeDirective]'
})
export class ActiveDirective implements OnChanges {
  @Input('activeDirective') isActive: boolean;
  @HostBinding('class.active') activeBinding: boolean;
  
  ngOnChanges() {
	this.activeBinding = this.isActive;
  }

  constructor() { }

}
