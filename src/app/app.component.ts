import { Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorred ={
    color:"red"
  }
text:string = ""
  ngOnInit(): void {
    $(document).ready(function(){
      console.log("ksldfsfj")

     
    })
  }
  
  onsubmit(){
    console.log("gfhgfg")
    this.text = $('.user_text').val();
    this.pop()
  }
  pop(){
    console.log('popup called')
  this.colorred.color = "blue"
    $('.container_msgbox').css('display','flex')
    setTimeout(function() {
        $('.container_msgbox').css('display','none')
    }, 3000);
  }
}
