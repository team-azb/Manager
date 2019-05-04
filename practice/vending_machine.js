let state = 0;
let counter = {"水":0, "お茶":0, "コーラ":0, "RedBull":0, "💩":0};
let buy = false; // 一個でも買ったら購入履歴を表示するためのフラグ

const putMoney = (m) => {
    state += m;
    showState();
    const ele = document.getElementById("message");
    ele.innerHTML = "<br>" + (m <= 500 ? (m + "円投入！") : "<font color=\"Red\"> 3億円事件</font>😱");
}

const spendMoney = (m, str) => {
    const ele = document.getElementById("message");
    if (state >= m) {
        if(!buy) buy = true;
        state -= m;
        counter[str] += 1;
        ele.innerHTML = "<br> <font color=\"Blue\">" + str + "ゲット！！！</font>";
    } else {
        ele.innerHTML = "<br> <font color=\"Red\"> 金ねえなら帰れ。</font>";
    }
    showState();
}

const showState = (res=false, change=0) => {
    const ele1 = document.getElementById("state"), ele2 = document.getElementById("counter");
    ele1.innerHTML = "<br> 投入金額：" + state + "円" + (res ? "<br><br> おつり："  + change + "円 " : "");
    let countStr = res ? "<br> 戦利品：" : "<br> 購入履歴："
    if (buy) 
        for (const key of Object.keys(counter))
            countStr += "<br>" + key + ":" + counter[key] + (key === "💩" ? "コ" : "本");
    else countStr += "なし";
    ele2.innerHTML = countStr;
}

const reSet = () => {
    let change = state;
    state = 0;
    showState(true, change);
    buy = false;
    for (const key of Object.keys(counter))
        counter[key] = 0;
    const ele = document.getElementById("message");
    ele.innerHTML = "<br> ばいばああああい";
}
// test