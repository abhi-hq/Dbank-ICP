import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank{
  stable var currentVal:Float=300; //stable variable to gain orthogonal persistence i.e value persists
  currentVal:=300;
  let id=152638;//not changeable cuz const 

  stable var startTime=Time.now();
  startTime:=Time.now();
  public func TopUp(count:Float){
    currentVal+=count;
  Debug.print(debug_show(currentVal));
  };
  
  public func Withdrawl(count:Float){
    if((currentVal-count):Float>=0)
    {currentVal-=count;
    Debug.print(debug_show(currentVal));}  // this is changing state slowly takes time unlike query
    else
    Debug.print("Error");
  };

  public query func checkBal():async Float{ // faster load
    return currentVal;
  };

  public func compound(){
    let currentTime=Time.now();
    let ElapsedTime=(currentTime-startTime)/1000000000;//nano seconds to seconds
    currentVal:=currentVal*(1.01**Float.fromInt(ElapsedTime));
    startTime:=currentTime;
  }
  // TopUp();
}
