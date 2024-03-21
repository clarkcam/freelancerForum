const names = [
    "Ava",
    "Liam",
    "Emma",
    "Noah",
    "Olivia",
    "William",
    "Sophia",
    "James",
    "Isabella",
    "Oliver",
    "Amelia",
    "Benjamin",
    "Mia",
    "Elijah",
    "Charlotte",
    "Lucas",
    "Harper",
    "Mason",
    "Evelyn",
    "Logan"
  ];

  const occupations = [
    "Software Developer",
    "Data Analyst",
    "Web Designer",
    "Project Manager",
    "Systems Administrator",
    "Network Engineer",
    "UX/UI Designer",
    "Digital Marketer",
    "Product Manager",
    "Quality Assurance Engineer",
    "Business Analyst",
    "Technical Writer",
    "DevOps Engineer",
    "Database Administrator",
    "Frontend Developer",
    "Backend Developer",
    "Full-stack Developer",
    "Cybersecurity Analyst",
    "Cloud Engineer",
    "AI/Machine Learning Engineer"
  ];

//now generating random freelancers
// const moreFreelancers = [
//     { name: "Dr. Slice", price: 25, occupation: "gardener" },
//     { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//     { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//     { name: "Prof. Prism", price: 81, occupation: "teacher" },
//     { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//     { name: "Prof. Spark", price: 76, occupation: "programmer" },
//     { name: "Dr. Wire", price: 47, occupation: "teacher" },
//     { name: "Prof. Goose", price: 72, occupation: "driver" },
//     { name: "Carol", price: 70, occupation: "programmer"},
//   ];

const availableFreelancers = [
    { name: "Alice", price: 30, occupation: "Writer"},
    { name: "Bob", price: 50, occupation: "Teacher"},
];


function displayFreelancer(freelancer) {
    const table = document.querySelector('#available')
    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const occupation = document.createElement('td');
    const price = document.createElement('td');

        name.append(freelancer.name);
        occupation.append(freelancer.occupation);
        price.append(`$${freelancer.price}`);
        tr.appendChild(name);
        tr.appendChild(occupation);
        tr.appendChild(price);
        table.appendChild(tr);
 

}

function updateAverage() {
    const average = document.getElementById('averagePrice');
    let sum = 0;
    let mean = 0;
    let text = '';

    availableFreelancers.forEach(person => {
        sum = sum + person.price;
    });
    mean = Math.round(sum / availableFreelancers.length);

    text = `The average starting price is: $${mean}`;
    average.innerText = text;

}

function addAvailable (available){
    availableFreelancers.unshift(generateFreelancer());
    displayFreelancer(availableFreelancers[0]);
    updateAverage();
}

//generate moreFreelancers by randomly combining names and occupations and generating a list
function generateFreelancer() {
    const freelancer = {};
    const minPrice = 25;
    const maxPrice = 100;
    const maxFreelancers = 10;
    let randomIndex = Math.floor(Math.random()* names.length);
    let randomPrice = Math.floor(Math.random()* (maxPrice-minPrice)+minPrice);

    freelancer.name = names[randomIndex];
    // names.splice(randomIndex,1); //I was experimenting with removing used occupations

    //update random number
    randomIndex = Math.floor(Math.random()* names.length);
    freelancer.occupation = occupations[randomIndex];
    // occupations.splice(randomIndex,1); //I was experimenting with removing used occupations

    freelancer.price = randomPrice;
    if(availableFreelancers.length == maxFreelancers-1){
        clearInterval(intervalTimer);
    }
    
    return freelancer;  
}

//display current available freelancers
availableFreelancers.forEach(freelancer => displayFreelancer(freelancer));
updateAverage();

const intervalTimer = setInterval(addAvailable, 2000);


 



