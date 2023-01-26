function isString(value) {
    return typeof value === 'string';
  }
  function isNumber(value) {
    return Number.isInteger(value);
  }
  function isObject(value) {
    return typeof value === 'object';
  }




class Dealer {
    #title;
    #vehicles = [];
    constructor(title, vehicles) {
        if (isString(title) && isObject(vehicles)) {
          this.#title = title;
          this.#vehicles = vehicles;
        } else {
          throw new Error('Please, check your values again');
        }
}
get title() {
    return this.#title;
  }
  set title(newTitle) {
    if (isString(newTitle)) {
      this.#title = newTitle;
    } else {
      throw new Error('title must be a string');
    }
  }

  get vehicles() {
    return this.#vehicles;
  }
  set vehicles(newVehicles) {
    if (isObject(newVehicles)) {
      this.#vehiclese = newVehicles;
    } else {
      throw new Error('vehicles must be a Object');
    }
  }

  addVehicle(vehicle){
    const check = this.#vehicles.findIndex((value) => value.vin===vehicle.vin)
    if (vehicle instanceof Vehicle && check === -1){
        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve( this.#vehicles=this.#vehicles.push(vehicle)), 1000);
             });
              return promise
            }else {
          throw new Error('unsuitable vehicle');
        }
    }
    sellVehicle(vehicle){
        const check = this.#vehicles.findIndex((value) => value.vin===vehicle.vin)
        if (check === -1){
            throw new Error('unsuitable vehicle');
        }
        else{
            const sell = this.#vehicles.indexOf(vehicle)
            let promise = new Promise(function(resolve, reject) {
                setTimeout(() => resolve( this.#vehicles=this.#vehicles.splice(2,sell)), 1000);
                 });
                  return promise
        }
    }
    findTruck(Weight, color){
        let check = 0;
        this.#vehicles.forEach((el) => {
         if (el instanceof Truck && el.color===color && el.carryWeight===Weight){
             check++
                return el;
               
         }
       
        } )
        if(check == 0 ){
            throw new Error('there is no such'); 
        }
    }
    paintBus(vin,color){
        let check = 0;
        this.#vehicles.forEach((el) => {
            if (el instanceof Bus && el.vin===vin){
               el.color=color
               check++
            }
    })
    if(check == 0 ){
        throw new Error('there is no such'); 
    }
  }
  countVehiclesWithColor(color){
    let check = 0;
    this.#vehicles.forEach((el) => {
        if (el.color===color){
           check++
        }
})
return check;
  }

}

 
  
class Vehicle {
    #vin;
    #color;
    constructor(vin, color) {
        if (isNumber(vin) && isString(color)) {
          this.#vin = vin;
          this.#color = color;
        } else {
          throw new Error('Please, check your values again');
        }
}
get vin() {
    return this.#vin;
  }
  set vin(newvin) {
    if (isNumber(newvin)) {
      this.#vin = newvin;
    } else {
      throw new Error('vin must be a number');
    }
  }
  get color() {
    return this.#color;
  }
  set color(newcolor) {
    if (isNumber(newcolor)) {
      this.#color = newcolor;
    } else {
      throw new Error('color must be a string');
    }
  }
}

class Truck extends Vehicle{
    #carryWeight;
    constructor(carryWeight) {
        if (isNumber(carryWeight)) {
          this.#carryWeight = carryWeight;
        } else {
          throw new Error('Please, check your values again');
        }
}
get carryWeight() {
    return this.#carryWeight;
  }
  set carryWeight(newcarryWeight) {
    if (isNumber(newcarryWeight)) {
      this.#carryWeight = newcarryWeight;
    } else {
      throw new Error('carryWeight must be a number');
    }
  }
}

class Bus extends Vehicle{
    #maxPassengers;
    constructor(maxPassengers) {
        if (isNumber(maxPassengers)) {
          this.#maxPassengers = maxPassengers;
        } else {
          throw new Error('Please, check your values again');
        }
}
get maxPassengers() {
    return this.#maxPassengers;
  }
  set maxPassengers(newmaxPassengers) {
    if (isNumber(newmaxPassengers)) {
      this.#maxPassengers = newmaxPassengers;
    } else {
      throw new Error('maxPassengers must be a number');
    }
  }
}
const DATABASE = {
    dealer: {
        title: 'Trucks & Buses Vilnius LTD'
    },
    trucks: [
        {
            vin: 1112,
            color: 'Red',
            carryWeight: 10
        },
        {
            vin: 2332,
            color: 'Yellow',
            carryWeight: 20
        },
        {
            vin: 5234,
            color: 'Green',
            carryWeight: 70
        }
    ],
    buses: [
        {
            vin: 1112,
            color: 'Green',
            maxPassengers: 50
        },
        {
            vin: 6543,
            color: 'Yellow',
            maxPassengers: 25
        }
    ]
}

const dealer = new Dealer(DATABASE.dealer.title);
const buses = DATABASE.buses.map(bus => {
    return new Bus(bus.vin, bus.color, bus.maxPassengers); 
});
