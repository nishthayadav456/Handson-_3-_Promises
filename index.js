//1-

     function sayHello(){
      console.log("Hello")
    }
    function add(num1,num2,callback){
      console.log(num1+num2);
      callback();
    }
    add(10,20,sayHello);
    
//2-
    function login(){
           function searchitem(){
               function mobileitem(){
                   function payment(){
                       function dropmessage(){
                           console.log("thanks for shopping")
                       }
                   }
               }
           }
        }
        setTimeout(()=>{
           console.log("1")
            setTimeout(()=>{
              console.log("2")
               setTimeout(()=>{
                   console.log("3")
                  setTimeout(()=>{
                    console.log("4")
                      setTimeout(()=>{
                        console.log("5")
                           setTimeout(()=>{
                              console.log("6")
                                  setTimeout(()=>{
                                     console.log("7")
        },7000);
        },6000);
        },5000);
        },4000) ;         
        },3000);
        },2000);
        },1000);

//3-
function printNumberswithDelay(){
    let number=1;
    function printNumber(){
        return new Promise (resolve=>{
            setTimeout(()=>{
                console.log(number);
                resolve();
            },number*1000);
        });

    }
    function iterate(){
        if(number<=7){
            printNumber()
            .then(()=>{
                number++;
                iterate();

            });
        }
    }
    iterate();
}
printNumberswithDelay();

//4-
        let variable="yes"
function promiseFun(p){
    return new Promise((a,b)=>{
        if (p==="yes"){
            a('promise resolve succesfully')
        }
        else{
            b('promise reject')
        }
    })
}
promiseFun(variable)
.then((item)=>console.log(item))
  .catch((err)=>console.log(err));

  //5-
  function sum(a, b) {
      console.log(a + b)
    }
    
    function Mee(num1, num2, callback) {
      callback(num1, num2)
    }
    
    Mee(6, 5, sum)
    //6-
    setTimeout(() => {
        console.log('1')
        setTimeout(() => {
          console.log('2')
          setTimeout(() => {
            console.log('3')
            setTimeout(() => {
              console.log('4')
              setTimeout(() => {
                console.log('5')                        
                setTimeout(() => {
                  console.log('6')
                  setTimeout(() => {
                    console.log('7')
                    
                  }, 7000);
                }, 6000);
              }, 5000);
            }, 4000);
          }, 3000);
        }, 2000);
      }, 1000);

    //7-
    const myPromise = new Promise((resolve, reject) => {
         
          setTimeout(() => {
            
            resolve("Promise resolved!");
          }, 2000);
        });
        
        
        myPromise.then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
//8-
  const getData = async() => {
    let y = await "Hello World";
    console.log(y);
}
 
     console.log(1);
      getData();
    console.log(2);

        
//9-
        const promises = [
              new Promise((resolve) =>
                setTimeout(() => 
                  resolve("Promise 1 resolved!"), 
                           2000)),
              new Promise((resolve) => 
                setTimeout(() =>
                  resolve("Promise 2 resolved!"), 
                           1000)),
              new Promise((resolve) =>
                setTimeout(() =>
                  resolve("Promise 3 resolved!"),
                           1500))
            ];
            
            // Using Promise.all to resolve multiple promises
            Promise.all(promises)
              .then((results) => {
                console.log(results);
              })
              .catch((error) => {
                console.log(error);
              });