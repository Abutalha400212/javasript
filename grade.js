
let grade = 35;
    switch(true){
    case grade >=80:
        console.log('You Got A+');
        break;
        case grade >=70 && grade <80 :
            console.log('You Got A');
            break;
        case grade >=60 && grade <70 :
            console.log('You Got A-');
            break;
            
        case grade >=50 && grade <60 :
            console.log('You Got B');
            break;
        case grade >=40 && grade <50 :
            console.log('You Got C');
            break;
            
        case grade >=33 && grade <40 :
            console.log('You Got D');
            break;
            
        default:
            console.log('You Got F')

}
