const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Warsaw",
    image: "https://randomuser.me/portraits/men/34.jpg"
  },
  {
    name: "Lilly Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "Poznan",
    image: "https://randomuser.me/portraits/women/22.jpg"
  },
  {
    name: "Cindy Mine",
    age: 24,
    gender: "female",
    lookingFor: "male",
    location: "Krakow",
    image: "https://randomuser.me/portraits/women/87.jpg"
  },
  {
    name: "Derek Mane",
    age: 25,
    gender: "male",
    lookingFor: "female",
    location: "London",
    image: "https://randomuser.me/portraits/men/11.jpg"
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// next event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `
    document.getElementById("imageDisplay").innerHTML = `<img src="${currentProfile.image}">`
    } else {
      // reload
      window.location.reload();
  }
}

// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}