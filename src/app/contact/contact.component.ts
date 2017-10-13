import { Component, OnInit } from '@angular/core';

import { ContactService } from '../services/contact.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
})


export class ContactComponent {  
    model: any = {};
    loading = false;
 
    constructor(
        private contactService: ContactService,
        private alertService: AlertService) { }
 
    register() {
        this.loading = true;
        this.contactService.addItem(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Send comment successful', true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}