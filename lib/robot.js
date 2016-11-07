'use strict';

// function Robot(orient) {
//   var directions = [ 'east', 'west', 'north', 'south' ];
//   this.orient = function (direction){
//     if (direction.includes(direction)){
//       return direction
//     }else{
//       console.error("Invalid Robot Bearing")
//     };
//   }
// }

var directions = ['east', 'west', 'north', 'south'];

class Robot {
constructor(bearing, coordinates = [0, 0]){
  this.bearing = bearing
  this.coordinates = coordinates
}

orient(bearing){
  if (directions.includes(bearing)){
    this.bearing = bearing
  }else{
    throw new Error ("Invalid Robot Bearing")
  };
}
turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east";
    } else if (this.bearing === "east") {
      this.bearing = "south";
    } else if (this.bearing === "south") {
      this.bearing = "west";
    } else if (this.bearing === "west") {
      this.bearing = "north";
    }
 }
 turnLeft() {
   if (this.bearing === "north") {
     this.bearing = "west";
   } else if (this.bearing === "west") {
     this.bearing = "south";
   } else if (this.bearing === "south") {
     this.bearing = "east"
   } else if (this.bearing === "east") {
     this.bearing = "north";
   }
 }

 advance() {
   if (this.bearing === "north") {
     this.coordinates[1] += 1;
   } else if (this.bearing === "east") {
     this.coordinates[0] += 1;
   } else if (this.bearing === "south") {
     this.coordinates[1] -= 1;
   } else if (this.bearing === "west") {
     this.coordinates[0] -= 1;
   }
 }


 at(x,y) {
  this.coordinates = [x, y]
 }

 instructions(command){
   var commands = command.split("")

    return commands.map((letter) => {
      if (letter === "L"){
      return "turnLeft"
    } else if (letter === "R"){
      return "turnRight"
    } else if (letter === "A"){
      return "advance"
    }
  });

 }

place(object){
  var x = object["x"]
  var y = object["y"]
  var where = object["direction"]

  this.at(x,y)

  this.orient(where)

  // {x: 0, y: 0, direction: "north"}
}

evaluate(command){
  var orders = this.instructions(command)

  for (var i = 0; i < orders.length; i++){
    var order = orders[i]
    if (order === "turnLeft"){
      this.turnLeft()
    }else if (order === "turnRight"){
      this.turnRight()
    }else if (order === "advance"){
      this.advance()
    }
  }
}


}
