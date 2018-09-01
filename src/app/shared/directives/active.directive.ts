import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[activeDirective]'
})
export class ActiveDirective implements OnChanges {
  @Input('activeDirective') isActive: boolean;
  @HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.color') color: string;
  
  ngOnChanges() {
	if(this.isActive) {
		this.backgroundColor = '#3498db';
		this.color = 'white';
	} else {
		this.backgroundColor = 'transparent';
		this.color = 'black';
	}
  }

  constructor() { }

}
