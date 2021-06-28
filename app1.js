'use strict';
let Tokyo = {
    location: "Tokyo1",
    min: 3,
    max: 24,
    avg: 1.2,
    hours:['9am' , '10am' , '11am', '12pm' , '1pm' , '2pm' , '3pm' ,'4pm' , '5pm' ,'6pm' , '7pm'], 
    CustomerPerHour: function (minimum,maximum) {
        return Math.floor(Math.random() * (maximum - minimum +1) + minimum);

    },
    TotalCookiesperHour: [],

    totalcookies : 0,

render : function(){
    let personelemantary = document.getElementById('personelemantary');
    let ulelemantary = document.createElement('ulElemantary');
    ulelemantary.textContent ="Tokyo";
    personelemantary.appendChild(ulelemantary);

    for(let i=0; i<hours.length; i++){
        this. TotalCookiesperHou.push(Math.floor(this.CustomerPerHour(this.minimum,this .maximum) *  this.avg ));

    }

for(let i =0; i<TotalCookiesperHour.length; i++){
    let lielemantary = document.createElement('li')
    window.li2=lielemantary;
    lielemantary.textContent= hours(i)+':'+this.TotalCookiesperHour[i];
    ulelemantary.appendChild(lielemantary);
    this.totalcookies= this.totalcookies + this.TotalCookiesperHour[i];
    console.log(this.totalcookies);

}
}

}

Tokyo.render();