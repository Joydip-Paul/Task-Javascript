// https://github.com/Joydip-Paul/Task-Javascript



//kilometerToMeter
function kilometerToMeter(distance){
    if(distance<0){
        return "distance cannot be negetive value";
    }
    else{
        var meter = distance*1000;
        return meter;
    }
}
var result = kilometerToMeter(7);
console.log(result);

//budgetCalculator
function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        return "Enter Postive Value";
    }
    else{
        var totalvalue = (watch*50)+(phone*100)+(laptop*500);
        return totalvalue;
    }
}
var result2 = budgetCalculator(1,3,2);
console.log(result2);

//hotelCost
function hotelCost(days){
    var FirstPackage = 100;
    var SecondPackage = 80;
    var ThirdPackage = 50;
    if(days<0){
        return "Days connot be negative";
    }
    if(days>=1 && days<=10){
        var package = days*FirstPackage;
        return package;
    }
    if(days>=11 && days<=20){
        var restvalue = days-10;
        var p2 = restvalue*SecondPackage;
        var package2 = p2+(10*FirstPackage);
        return package2;
    }
    if(days>=21){
        var restValue2 = days-20;
        var p3 = restValue2*ThirdPackage;
        var package3 = p3+(10*FirstPackage)+(10*SecondPackage);
        return package3;
    }
}
var result3 = hotelCost(43);
console.log(result3);


//megaFriend
function megaFriend(friends){
    var maxname = friends[0];

    for(var i=0;i<friends.length;i++){
        if(friends[i]==""){
            return "String cannot be empty";
        }
            var element = friends[i];
            if(element.length>maxname.length){
            maxname = element;
        }
    }
    return maxname;
}
var result4 = megaFriend(['joydip','jishu','Nipa','Indrajit','karim','Rahim']);
console.log(result4);