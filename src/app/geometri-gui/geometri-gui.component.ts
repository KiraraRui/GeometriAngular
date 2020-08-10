import { Component, OnInit } from '@angular/core';
import { GeometriClass} from '../geometri-class';
import { Rectangle} from '../Rectangle';
import { Square} from '../Square';


@Component({
  selector: 'app-geometri-gui',
  templateUrl: './geometri-gui.component.html',
  styleUrls: ['./geometri-gui.component.css']
})
export class GeometriGuiComponent implements OnInit {

  kiri = "Input data, Area 1st box and perimeter 2th box";
  ValueHeight : number = 0; 
  ValueWidth : number = 0;
  AreaCalculation : number = 0;
  PerimeterCalculation : number = 0;

  height(event: any){ this.ValueHeight = event.target.value };

  width(event: any){ this.ValueWidth = event.target.value };

  Calculate(){
    console.log("logged");
    
    let kiri = new Square(this.ValueWidth,this.ValueHeight);
    this.AreaCalculation = kiri.Area();
    this.PerimeterCalculation = kiri.Perimeter();
  }

  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
