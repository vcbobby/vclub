var ProgressBar = require('progressbar.js')

var semiBar = new ProgressBar.SemiCircle('#semi-container', {
    color: '#1D85FF',
    strokeWidth: 2.5,
    trailWidth: 2.5,
    trailColor: '#eaebec',
    easing: 'bounce',
    strokeLinecap: 'round',
})

semiBar.animate(0.75, {
    duration: 3000,
})

function createProgressBar(containerSelector, progress) {
    const bar = new ProgressBar.Line(containerSelector, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1D85FF',
        trailColor: '#eaebec',
        trailWidth: 4,
        svgStyle: { width: '100%', height: '100%' },
    })

    bar.animate(progress) // Progress value from 0.0 to 1.0
}

// Call the function with different containers and progress values
createProgressBar('.line-container-1', 0.8)
createProgressBar('.line-container-2', 0.4)
createProgressBar('.line-container-3', 0.4)
createProgressBar('.line-container-4', 0.4)
createProgressBar('.line-container-5', 0.4)
