// const a = true;
// const b = true;

// if(a && b){
//     console.log("this is true");
// } else{
//     console.log("this is false");
// }

// const todayDate = new Date();
// const backdatedDate = new Date(Date.now() - (3 * 24 * 60 * 60 * 1000));
// console.log(backdatedDate.toISOString('DD/MM/YYYY'));

const trafficData = {
  red: {
    isActive: false,
    color: "red",
    timeout: 5000,
    next: "yellow",
  },

  yellow: {
    isActive: false,
    color: "yellow",
    timeout: 2000,
    next: "green",
  },

  green: {
    isActive: false,
    color: "green",
    timeout: 7000,
    next: "red",
  },
};

const red = trafficData.red;
const nextYellow = trafficData.red.next;
const xxx = trafficData[nextYellow].next;

console.log(red);
console.log(nextYellow);
console.log(xxx);

const starLoop = document.querySelectorAll(".star");
const ratings = document.querySelector(".rating");
let selectedRating = -1;
for (let i = 0; i < starLoop.length; i++) {

    starLoop[i].addEventListener('mouseover',(e)=>{
        for (let j = 0; j <= i; j++) {
            starLoop[j].style.background = 'green'; // Highlight stars
          }
            })

            starLoop[i].addEventListener('mouseout', () => {
                for (let x = 0; x < starLoop.length; x++) {
                  if (x <= selectedRating) {
                    starLoop[x].style.background = 'green'; // Keep selected stars
                  } else {
                    starLoop[x].style.background = 'gold'; // Reset others
                  }
                }
              });

              starLoop[i].addEventListener("click", () => {
                selectedRating = i; // Set the clicked rating
                for (let j = 0; j <= i; j++) {
                  starLoop[j].style.background = 'green'; // Highlight stars
                }
                ratings.innerText = `${i + 1} star${i > 0 ? 's' : ''}`; // Show rating
              });
  
}

