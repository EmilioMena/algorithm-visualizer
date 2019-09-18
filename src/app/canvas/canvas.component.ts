import { Component, OnInit } from '@angular/core';
import { Rectangle } from "../rectangle"
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements OnInit {
  REC: Rectangle[] = [
  ]

  createCanvas;

    createRectangles(num: number) {
      for(var _i =0; _i< num; _i++){
        let maxHeight = 300;
        let maxWidth = 1300;
        let height = Math.random() *298 + 3;
        let width = 45;
        let totalW = num*width + (num-1)*5;
        var center = maxWidth - totalW;
        var transX = 50*_i + center/2;
        var transY= maxHeight - height;
        var translate = `translate(${transX}, ${transY})`;
        this.REC.push({height:stringify(height), width:stringify(width), style:"rgb(173, 216, 230)", x: transX, y: transY, transform: translate});
      }
    }

    randomize() {
      this.createCanvas = false;
      this.REC  = [];
      this.createRectangles((Math.random() * 16 + 5));
    }

    switch() {
      var x1 = this.REC[0].x;
      var x2 = this.REC[1].x;
      console.log(x1);
      console.log(x2);    
      this.REC[0].x = x2;
      this.REC[1].x = x1;
      console.log(this.REC[0].x);
      console.log(this.REC[1].x);
      
      
    }

  constructor() {
    
   }

  ngOnInit() {
    this.createRectangles(6);
  }

}
