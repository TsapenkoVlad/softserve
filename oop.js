class Circle {
    constructor (x,y,R) {
        this.x = x;
        this.y = y;
        this.R = R;
        
    }
     getLength(){
        const L = 2 * Math.PI * this.R 
        console.log(Math.floor(L));
    }
    static showLength(R) {
        return Math.floor(2 * Math.PI * R ) 
    }
    getCircle(){
        return new Circle(this.x, this.y, this.R)
    }
    static createCircle(x,y,R) {
        return new Circle(x,y,R)
    }
    isPointInside(x, y) {
        const distance = Math.sqrt(x ** 2 + y ** 2);
        return distance <= this.R;
    }
    toString(){
       return `центр кола: ${this.x},${this.y} радиус: ${this.R}`
    }
}

