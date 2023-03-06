var problems = document.querySelectorAll('div[ng-repeat="q in qt.qlist"]:not([style="float: left;"]):is(.ng-scope)');
var btns = document.querySelectorAll('.btn:is(.ng-binding):not(.ng-hide):not([id*="sendAns"])');
var errorCount = 0;
for (let problem of problems) {
    const description = problem.querySelector('p[ng-bind-html="q.q | trustedHtml"]').innerHTML;
    const options = problem.querySelectorAll('span[ng-click="qt124Sel(option.value)"]');
    let flag = false;
    for (let opt of options) {
        try {
            for (let ansOpt of answer[description]) {
                if (ansOpt == opt.innerHTML) {
                    opt.click();
                    flag = true;
                }
            }
        } catch {}
    }
    errorCount += !flag;
}
if (errorCount) alert(`共有 ${errorCount} 題無法成功做答！`)
for (const btn of btns) btn.click();
