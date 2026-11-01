const headerJob = document.querySelector('#headerJob');
const headerIcon = document.querySelector('#headerIcon');
const headerText = document.querySelector('#headerText');
const footerDescription = document.querySelector('#footerDescription');
const footerText = document.querySelector('.footer-text');
const footerSkills = document.querySelector('.footer-skills');


const user = {
    jobs:[
        ['🔥', 'Motivational Speaker'],
        ['🔥', 'Motivator'],
        ['💻', 'Programmer'],
        ['📖', 'Instructor'],
        ['🌱', 'Educator'],
        ['📁', 'Content Creator']
    ],
    skills:[
        'react', 'numpy', 'javascript', 'node', 'mongodb',
        'html', 'python'
    ]
};

 const colors = [
  '#df5080', '#21d99b', '#e5e936', '#9b59b6',
  '#f1c40f', '#2ecc71', '#3498db', '#e67e22',
  '#1abc9c', '#95a5a6', '#ff6b6b', '#a3cb38',
  '#6c5ce7', '#fd79a8', '#00cec9', '#b2bec3'
];


let lastIndex = -1
let lastColorIndex = -1
let lastJobIndex = -1

const getUserJob = () =>{

    let random;

    //random job that is different from the last one
    do{
        random = Math.floor(Math.random() * user.jobs.length);
    } while(random === lastIndex){
        lastIndex = random
    }

    headerIcon.textContent = user.jobs[random][0];
    headerText.textContent = user.jobs[random][1];

    headerJob.classList.remove('slide-in');
    void headerJob.offsetWidth; // forces the browser to apply the removal, so the animation can restart
    headerJob.classList.add('slide-in');

}
getUserJob();                    
setInterval(getUserJob, 3000);

const getRandomColorAndJob = () =>{

        let randomJob;
        let randomColor;
 
    do{
        randomJob = Math.floor(Math.random() * user.jobs.length);
    } while(randomJob === lastJobIndex){
        lastJobIndex = randomJob
    }

    do{
        randomColor = Math.floor(Math.random() * colors.length);
    } while(randomColor === lastColorIndex){
        lastColorIndex = randomColor
    }
    

    footerText.innerHTML = 'The technologies I teach';
    footerSkills.innerHTML = user.skills[randomJob];
    footerSkills.style.color = colors[randomColor];

    footerDescription.classList.remove('slide-in');
    void footerDescription.offsetWidth; 
    footerDescription.classList.add('slide-in');
} 
getRandomColorAndJob();                    
setInterval(getRandomColorAndJob, 3000);


