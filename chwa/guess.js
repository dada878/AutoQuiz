(() => {
    const problems = document.querySelectorAll('div[ng-repeat="q in qt.qlist"]:not([style="float: left;"]):is(.ng-scope)');
    for (let problem of problems) {
        const description = problem.querySelector('p[ng-bind-html="q.q | trustedHtml"]');
        const options = problem.querySelectorAll('span[ng-click="qt124Sel(option.value)"]');
        options[Math.floor(Math.random()*(3-0+1))+0].click();
    }
    for (const btn of document.querySelectorAll('.btn:is(.ng-binding):not(.ng-hide):not([id*="sendAns"])')) btn.click();
})();
