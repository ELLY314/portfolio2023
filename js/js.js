// Function to create progress bar
function progressBar(selector, gauge, color){
    var bar = new ProgressBar.Line(selector, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: color,
        trailColor: '#eee',
        trailWidth: 3,
    });
    bar.animate(gauge);
    return bar; // Return the progress bar instance
}

// Create an intersection observer
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(item){
        if (item.isIntersecting) {
            // Start the progress bars when the "skill" section comes into view
            bar1.animate(0.5);
            bar2.animate(1.0);
            bar3.animate(0.8);
            bar4.animate(0.8);
            bar5.animate(0.8);
            bar6.animate(0.8);
            bar7.animate(0.8);
            bar8.animate(0.8);
        } else {
            // Reverse the progress bars when the "skill" section is out of view
            bar1.animate(0);
            bar2.animate(0);
            bar3.animate(0);
            bar4.animate(0);
            bar5.animate(0);
            bar6.animate(0);
            bar7.animate(0);
            bar8.animate(0);
        }
    });
}, { threshold: 0.5 });

// Select the "skill" section
const skillSection = document.querySelector('.skill');

// Start the progress bars with initial values
let bar1 = progressBar(".pro1", 0 ,"#000");
let bar2 = progressBar(".pro2", 0, "#ddd");
let bar3 = progressBar(".pro3", 0, "#000");
let bar4 = progressBar(".pro4", 0, "#000");

let bar5 = progressBar(".pro5", 0);
let bar6 = progressBar(".pro6", 0);
let bar7 = progressBar(".pro7", 0);
let bar8 = progressBar(".pro8", 0);

// Observe the "skill" section
observer.observe(skillSection);