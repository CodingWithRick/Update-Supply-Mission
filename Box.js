class Box {
    constructor(x, y, w, h) {
        var box_options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, w, h, box_options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}