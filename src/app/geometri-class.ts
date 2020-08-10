export abstract class GeometriClass {


    _height: number;
    _width:  number;

    /**
     *
     */
    constructor(_height : number, _width: number) { 
            this._height = _height;
            this._width = _width;
    }


    Perimeter():number{
        return this._height * 2 + this._width *2;
    } 

    Area():number{
        return this._height * this._width;
    }

    


}



