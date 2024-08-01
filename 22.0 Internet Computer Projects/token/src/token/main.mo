import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";

actor Token {
    var owner: Principal = Principal.fromText("sfz6a-n45nk-ntaie-rpwz4-xczrn-zblee-wkci6-2njcy-m36le-kdgrl-xae");
    var totalSupply : Nat = 1000000000;
    var symbol: Text = "DAN";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    }

}