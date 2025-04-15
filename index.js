const obj1 = {
    fname: 'piyush',
    lname: 'Garg',
    getfullname: function (){
        if(this.lname !== undefined)
        return `${this.fname} ${this.lname}`;
    return this.fname
    },
};



const obj2 = {
    fname: 'vansh',
    lname: 'tyagi',
    getfullname: function (){
        if(this.lname !== undefined)
            return `${this.fname} ${this.lname}`;
        return this.fname
    },
}


// DRY - do not repeat yourself 

console.log(obj1.getfullname());// Independent memeory allocation 
console.log(obj2.getfullname());// Different memory allocation in both of the object 

