let n = 5;
    for (let i = 1; i <= n; i++) {
        let j = 1;
        while (j <= n + 3) {
            console.log(j);
            if (i === j) {
                console.log('**');
                j += 2;
            }
            j += 1;
        }
        console.log('');
    }