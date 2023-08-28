function numReverso(num) {
    let reverso = 0;
    while(num != 0) {
      reverso = reverso * 10;
      reverso = reverso + num%10;
      num = Math.trunc(num/10); 
    }
    return reverso;
  }
  console.log(numReverso(100)) 
  console.log(numReverso(5872)) 