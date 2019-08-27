var btnLoad = document.querySelector('#load');
// 読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', function(event) {
    // XMLHttpRequestオブジェクトのインスタンスを生成
    var xmlHttpRequest = new XMLHttpRequest();
    // 通信状態の変化を監視するイベントハンドラを設定
    xmlHttpRequest.onreadystatechange = function() {
        // レスポンスの受信が正常に完了した時
        if (this.readyState == 4 && this.status == 200) {
            // 受信したデータをコンソールに出力する
            console.log(this.readyState, this.response);
        }
    };
    // レスポンスの形式を指定する
    xmlHttpRequest.responseType = 'json';
    // リクエストメソッドと読み込むファイルのパスを指定する
    xmlHttpRequest.open('GET', 'products.json');
    // リクエストを送信する（非同期通信を開始する）
    xmlHttpRequest.send();
})