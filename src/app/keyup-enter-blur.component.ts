import {Component} from '@angular/core';

@Component({
    selector: 'key-up4',
    template: `
        <input #box
            (keyup.enter)="values=box.value"
            (blur)="values=box.value" />
        <p>{{values}}</p>
    `
})

export class KeyUpComponent_4 {
    values: string = '';
}
