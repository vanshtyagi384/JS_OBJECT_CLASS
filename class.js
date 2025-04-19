class person {
   constructor(fname,lname){
    this.fname = fname;
    this.lname = lname;
     
   }
   getfullname(){
    return `${this.fname} ${this.lname}`
   }
}


// Syntax sugar (cheeni)


const p1 = new person('piyush','Garg')
const p2 = new person('vansh','kandla')


console.log(p1.getfullname());

console.log(p2.getfullname());
   