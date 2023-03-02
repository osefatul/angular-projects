import { Directive, ElementRef, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";
import { map, filter } from "rxjs/operators";


@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective implements OnInit{

  constructor(
    private el: ElementRef,
    private controlName: NgControl
    ){ 
    console.log(this.el.nativeElement)
  }


  ngOnInit(): void {
    //to access the actual FormControl and not FormControlName.
    // console.log(this.controlName.control)

    //access the parent of FormControl which is the actual FormGroup we wanted to access.
    this.controlName.control?.parent?.valueChanges
    .pipe(
      map(({a, b, answer}) =>{
        return Math.abs((a+b - answer)/(a+b))
    }))
    .subscribe(value =>{
      // console.log(value)

      if(value<0.2){
        this.el.nativeElement.classList.add("close")
      }else{
        this.el.nativeElement.classList.remove("close")
      }
    })
  }
}
