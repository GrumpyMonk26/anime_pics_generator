const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

btnEl.addEventListener('click', async function () {
  try {
    btnEl.disabled = true;
    btnEl.textContent = 'Loading...';
    animeNameEl.textContent = 'Updating...';
    animeImgEl.src = 'spinner.svg';
    const response = await fetch('https://api.catboys.com/img');
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.textContent = 'Get Anime';
    console.log(data);
    animeContainerEl.style.display = 'block';
    animeImgEl.src = data.url;
    animeNameEl.textContent = data.artist;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.textContent = 'Get Anime';
    animeNameEl.textContent = 'An Error Happened, Please Try Later';
  }
});
