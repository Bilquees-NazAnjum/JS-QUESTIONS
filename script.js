
    //   Question # 1 ---------------------------------------------------
/* 
let a=6;
let b=7; 

    let result=a++ + b++ + ++a - ++b - ++a * a + b + a-- + --b * a;
               6  +  7  +   8  -  9  -  9  * 9 + 9 +  9  +  8  * 8 ;
                   21           - 9  -    81   +    18      +  64 ;
                        + 103        - 90
                                13
  
  
      document.write(result); 
   */
                

 //  Question # 2 ----------------------------------------------------------

    // Get user to input a number using prompt() if the number is a multiply of 5 or not?    

  /*  let num= +prompt("Enter Your Number");
   if(num % 5 === 0){
     document.write("Your number is Even")
   } else {
    document.write("Your number is Odd")
   }; */
    

   //   Question # 3----------------------------------------------------------

    // write a code whch can give grades to studends accouding to their scores?        
               
    /* let score=+prompt("Enter Your Score");
    let grade;
    if(score >=90 && score <=100){
        document.write("Your Grade is A+" + " " + score +"%")
    }else if (score >=80 && score <=89) {
        document.write("Your Grade is A" + " " + score + "%")
    }else if (score >=70 && score <=79) {
        document.write("Your Grade is B" + " " + score + "%")
    }else if (score >=60 && score <=69) {
        document.write("Your Grade is C" + " " + score + "%")
    }
    else{
        alert("invalid Data")
    }
    */


     //   Question # 4   Marksheet---------------------------------------------

     let Name=prompt("Enter Name")
     let Maths=+prompt("Enter Your Maths Marks")
     let English=+prompt("Enter Your English Marks")
     let Urdu=+prompt("Enter Your Urdu Marks")
     let Physics=+prompt("Enter Your Physics Marks")
     let Chemistery=+prompt("Enter Your Chemistery Marks")
      
     
     let total=Maths + English + Urdu + Physics + Chemistery
     let percentage=(total/500)*100
    //   document.write(percentage);
     if(percentage >=90 && percentage <=100){
        document.write(Name +" "+"Your Grade is A+" + " " + percentage +"%")
    }else if (percentage >=80 && percentage <=89) {
        document.write(Name +"Your Grade is A" + " " + percentage + "%")
    }else if (percentage >=70 && percentage <=79) {
        document.write(Name +" "+"Your Grade is B" + " " + percentage + "%")
    }else if (percentage >=60 && percentage <=69) {
        document.write(Name +" "+"Your Grade is C" + " " + percentage + "%")
    }else if (percentage >=50 && percentage <=59) {
        document.write(Name +" "+"Your Grade is D" + " " + percentage + "%")
    }else if (percentage >=40 && percentage <=49) {
        document.write(Name +" "+"Your Grade is E" + " " + percentage + "%")
    }
    else{
        document.write(Name +" "+"Your Result is Not Show" )
    }