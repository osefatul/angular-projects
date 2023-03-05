import { EmailService } from './../email.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs';
import { Email } from "../email";


@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent {
  email!: Email;

  constructor(private route: ActivatedRoute, private emailService :EmailService) {
    // this.email = this.route.snapshot.data['email'];
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {

    // this.route.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       console.log(id)
    //       return this.emailService.getEmail(id);
    //     })
    //   )
    //   .subscribe(email => {
    //     console.log(email)
    //     this.email = email;
    //   });

    // this.route.params.subscribe(({id}) =>{
    //   this.emailService.getEmail(id).subscribe(email => {
    //     console.log(email)
    //   })
    // })

    // console.log(this.route.snapshot.params['id'])
  }
}
