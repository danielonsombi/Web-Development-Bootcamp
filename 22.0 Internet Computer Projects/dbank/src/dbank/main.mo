import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
    stable var currentValue: Float = 300; 
    //currentValue := 100;

    let id = 09765;

    stable var startTime = Time.now();
    Debug.print(debug_show(startTime));

    public func topUp(amount: Float) {
        currentValue += amount;
        Debug.print(debug_show(currentValue))
    };

    public func withdraw(amount: Float) {
        let tempValue: Float = currentValue - amount; //This makes the data type clear as opposed to the earlier that was inferred.

        if (tempValue >= 0) {
            currentValue -= amount;
            Debug.print(debug_show(currentValue))
        } else {
            Debug.print("You can not withraw more than your current balance");
            Debug.print(debug_show(currentValue));
        }
    };

    public query func checkBalance(): async Float {
        return currentValue;
    };

    public func compound() {
        let currentTime = Time.now();

        //Get time elapsed in Nano seconds
        let timeElapsedNS = currentTime - startTime;

        //Get the time elapsed in Seconds by diving NS by 1billion:
        let timeElapsedS = timeElapsedNS / 1000000000;

        //We can then use the compound interest formula to calculate the current value (r = 1):
        currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));

        startTime := currentTime
    }
}