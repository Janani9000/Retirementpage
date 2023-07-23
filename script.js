// Function to toggle the side navbar
function toggleSideNavbar() {
    const sideNav = document.querySelector('.side-nav');
    sideNav.classList.toggle('active');
}

// Event listener for toggling the navbar when clicking on a link
const navLinks = document.querySelectorAll('.side-nav a');
for (const link of navLinks) {
    link.addEventListener('click', () => {
        toggleSideNavbar();
    });
}


// Sample data for the bar graph
const employerData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
const employeeData = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const totalInterestData = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];

// Generate labels for the x-axis (assuming 5 units from 20)
const xLabels = Array.from({
    length: 13
}, (_, i) => 20 + i * 5);

// Create a function to generate colors for bars
function getColors(color, alpha) {
    return `rgba(${color}, ${alpha})`;
}

// Create the chart
const ctx = document.getElementById('contributionChart').getContext('2d');
const contributionChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xLabels,
        datasets: [{
            label: 'Employer',
            data: employerData,
            backgroundColor: getColors('54, 10, 139', 0.8), // navyblue
        }, {
            label: 'Employee',
            data: employeeData,
            backgroundColor: getColors('130,  70, 235', 0.5), // normal blue
        }, {
            label: 'Total Interest',
            data: totalInterestData,
            backgroundColor: getColors('135, 206, 235', 0.7), // sky blue
        }]
    },
    options: {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stacked: true,
                title: {
                    display: true,
                    text: 'Contribution in $',
                },
                ticks: {
                    stepSize: 100, // $100 units on the y-axis
                },
            },
        },
        responsive: true,
    }
});

function toggleSideNavbar() {
    const sideNav = document.querySelector('.side-nav');
    sideNav.classList.toggle('active');
}


const nav = document.querySelectorAll('.side-nav a');
for (const link of navLinks) {
    link.addEventListener('click', () => {
        toggleSideNavbar();
    });
}