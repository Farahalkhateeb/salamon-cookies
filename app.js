'use strict';
let hours=['9am' , '10am' , '11am', '12pm' , '1pm' , '2pm' , '3pm' ,'4pm' , '5pm' ,'6pm' , '7pm'];



let Seattle = {

    shopName:'seattle',
    mincus: 23,
    maxcus: 65,
    avgCookies: 6.3,
    randcust:[],
    avgcookiesph:[],
    calcrandCustomerPerHour: function (){


     let min = Math.ceil(this.mincus);
       let max = Math.floor(this.maxcus);
        let randcust=Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      
        for(let i=0;i<hours.length;i++){


            let min = Math.ceil(this.mincus);
            let max = Math.floor(this.maxcus);
             let randcust=Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive



            this.randcust.push();

        }
    },
    calAvgCookiesPerHour: function(){
        for(let i=0;i<hours.length;i++){

            this.avgcookiesph[i]=Math.floor?(this.randcust[i]*this.avgCookies)


        }

    }

    
}
console.log(Seattle);

Seattle.calcrandCustomerPerHour();
Seattle.calAvgCookiesPerHour();