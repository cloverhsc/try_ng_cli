import { Component }    from '@angular/core';

@Component({
    selector: 'key-up1',
    templateUrl: './keyup.component.html'
})

export class KeyUpComponent_1 {
    values = '';

    // without strong typing
    onKey(event: any) {
        this.values += event.currentTarget.value + '|';
    }
}
