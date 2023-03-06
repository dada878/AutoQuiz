(() => {
    const problems = document.querySelectorAll('div[ng-repeat="q in qt.qlist"]:not([style="float: left;"]):is(.ng-scope)');
    const btns = document.querySelectorAll('.btn:is(.ng-binding):not(.ng-hide):not([id*="sendAns"])');
    let wrongCount = 0;
    const problemsWriten = [];
    const failedWriten = [];
    const leftAnswerTable = {};
    const editDistance = function(word1, word2) {
        let dp = Array(word1.length+1).fill(null).map(() => (Array(word2.length + 1).fill(0)));
        for (let i = 0; i < dp.length; i++) dp[i][0] = i
        for (let i = 0; i < dp[0].length; i++) dp[0][i] = i
        for (let i = 1; i < dp.length; i++) {
            for (let j = 1; j < dp[0].length; j++) {
                dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + (word1[i-1] != word2[j-1] ? 1 : 0 ));
            }
        }
        return dp[dp.length - 1][dp[0].length - 1];
    }
    const writeAnswer = function(problem, defaultDescription = null) {
        const description = defaultDescription ?? problem.querySelector('p[ng-bind-html="q.q | trustedHtml"]').innerHTML;
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
            } catch(e) {}
        }
        if (!flag) {
            wrongCount ++;
            let minDistance = Number.MAX_SAFE_INTEGER;
            let minDistanceElement = null;
            for (let opt of options) {
                try {
                    for (let ansOpt of answer[description]) {
                        let distance = editDistance(ansOpt, opt.innerHTML);
                        if (distance < minDistance) {
                            minDistance = distance;
                            minDistanceElement = opt;
                        }
                    }
                } catch(e) {
                    errorCount++;
                }
            }
            if (minDistanceElement) {
                flag = true;
                minDistanceElement.click();
            }
        }
        if (!flag) failedWriten.push(problem);
        else problemsWriten.push(description);
    }
    for (let problem of problems) writeAnswer(problem);
    for (const key of Object.keys(answer)) {
        if (!problemsWriten.includes(key)) leftAnswerTable[key] = answer[key];
    }
    for (const problem of failedWriten) {
        const description = problem.querySelector('p[ng-bind-html="q.q | trustedHtml"]').innerHTML;
        let minDistance = Number.MAX_SAFE_INTEGER;
        let minDistanceDescription = null;
        for (const answerDescription of Object.keys(leftAnswerTable)) {
            let distance = editDistance(answerDescription, description);
            if (distance < minDistance) {
                minDistance = distance;
                minDistanceDescription = answerDescription;
            }
        }
        writeAnswer(problem, minDistanceDescription);
    }
    if (wrongCount) alert(`填入完畢 共有 ${wrongCount} 題作答可能錯誤！`)
    for (const btn of btns) btn.click();
})();
