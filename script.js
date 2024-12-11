<<<<<<< HEAD
const moodContainer = document.getElementById('mood-container'); 

   const addMoodButton = document.getElementById('add-mood'); 

   const moods = ['😊', '😐', '😢', '😡', '😴']; 

 

   addMoodButton.addEventListener('click', () => { 

       const randomMood = moods[Math.floor(Math.random() * moods.length)]; 

       const moodElement = document.createElement('span'); 

       moodElement.textContent = randomMood; 

       moodContainer.appendChild(moodElement); 

   }); 
=======
const moodContainer = document.getElementById('mood-container'); 

   const addMoodButton = document.getElementById('add-mood'); 

   const moods = ['😊', '😐', '😢', '😡', '😴']; 

 

   addMoodButton.addEventListener('click', () => { 

       const randomMood = moods[Math.floor(Math.random() * moods.length)]; 

       const moodElement = document.createElement('span'); 

       moodElement.textContent = randomMood; 

       moodContainer.appendChild(moodElement); 

   }); 
>>>>>>> be8aaccbed24cd8fcb41c08a0de3a8e5cb4304b0
   