var problems = document.querySelectorAll('div[ng-repeat="q in qt.qlist"]:not([style="float: left;"]):is(.ng-scope)');
for (let problem of problems) {
    const description = problem.querySelector('p[ng-bind-html="q.q | trustedHtml"]').innerHTML;
    const options = problem.querySelectorAll('span[ng-click="qt124Sel(option.value)"]');
    for (let opt of options) {
        try {
            for (let ansOpt of answer[description]) {
                if (ansOpt == opt.innerHTML) {
                    opt.click();
                }
            }
        } catch {}
    }
}
