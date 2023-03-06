var answer = {};
(() => {
    const btns = document.querySelectorAll('.btn:is(.ng-binding):not(.ng-hide):not([id*="sendAns"])');
    const problems = document.querySelectorAll('div[ng-repeat="q in qt.qlist"]:not([style="float: left;"]):is(.ng-scope)');
    for (const pronlem of problems) {
        const description = pronlem.querySelector('p[ng-bind-html="q.q | trustedHtml"]').innerHTML;
        const answerOptionElements = pronlem.querySelectorAll('.rightOption');
        answer[description] = [];
        for (let opts of answerOptionElements) {
            answer[description].push(opts.innerHTML);
        }
    }
    alert(`紀錄成功 共 ${Object.keys(answer).length} 題！`);
})();
