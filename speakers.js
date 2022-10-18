const speakers = [
  {
    name: 'Nifesola Kosoko',
    image: 'images/speakers/folashade.jpg',
    position:
      'President and founder, TPPS',
    bio: '"Now look at me. Kinda cute - kinda sexy, innit?"',
  },
  {
    name: 'Charles. K. Adams',
    image: 'images/speakers/johnMaxwell.jpg',
    position: 'Vice-President, TPPS',
    bio: '"I have two broken legs but I am definitely still gonna play football"',
  },
  {
    name: 'Nwangwu Chima',
    image: 'images/speakers/lesBrown.jpg',
    position:
      'PhD Clowning. Champagne Papi',
    bio: '"I sincerely apologize. I regret my actions"',
  },
  {
    name: 'Annete Hathaway',
    image: 'images/speakers/celine.jpg',
    position: 'Executive Director, FreeCodeCamp',
    bio: '"Life is too short, be focused"',
  },
  {
    name: 'Uhriri Etatuvie',
    image: 'images/speakers/susan.jpg',
    position: 'Samsung Ambassador',
    bio: 'God, Am I a potato?',
  },
  {
    name: 'Spiral Vortex',
    image: 'images/speakers/simonSinek.jpg',
    position: 'Software Engineer/Developer. Current TPPS Contest Champion',
    bio: 'There is something about me. There is something about the way I am, the way I was born. My mum said I am special.',
  },
];

const speakersWrapper = document.querySelector('.speakers-nav');
const showMore = document.querySelector('.more-button');
function addSpeakers() {
  for (let i = 0; i < speakers.length; i += 1) {
    const temp = document.createElement('temp');
    const speaker = speakers[i];
    temp.innerHTML = `<article class="speaker ${i > 1 ? 'expanded' : ''}">
    <img src="${speaker.image}" alt="speaker-image" />
    <div class="speaker-details">
      <p class="speaker-name">${speaker.name}</p>
      <p class="speaker-position">
      ${speaker.position}
      </p>
      <div>
        <hr class="speaker-hr">
        <p class="speaker-bio">
        ${speaker.bio ?? ''}
            </p>
      </div>
    </div>
  </article>`;
    speakersWrapper.appendChild(temp.firstChild);
  }
}
window.onload = addSpeakers();

let isExpanded = false;
const expandedSpeakers = document.querySelectorAll('.expanded');
showMore.addEventListener('click', () => {
  if (isExpanded) {
    expandedSpeakers.forEach((sp) => {
      sp.style.display = 'none';
    });
    showMore.children.item(0).innerHTML = 'MORE';
    showMore.children.item(1).src = 'images/arrow-down.svg';
    isExpanded = false;
  } else {
    expandedSpeakers.forEach((sp) => {
      sp.style.display = 'flex';
    });

    showMore.children.item(0).innerHTML = 'LESS';
    showMore.children.item(1).src = 'images/arrow-up.svg';
    isExpanded = true;
  }
});
