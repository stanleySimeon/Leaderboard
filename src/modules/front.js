class Front {
  constructor() {
    this.listContainer = document.querySelector('.listContainer');
    this.user = document.getElementById('username');
    this.score = document.getElementById('score');
    this.space = document.getElementById('space');
  }

  arrayToFront(array) {
    this.listContainer.innerHTML = '';
    array = array.sort((x, y) => y.score - x.score);
    array.forEach((element) => {
      const item = document.createElement('li');
      item.className = 'item';
      this.listContainer.appendChild(item);
      item.innerHTML += `${element.user} : ${element.score}`;
    });
  }

  inputCleaner() {
    this.user.value = '';
    this.score.value = '';
  }
}
export default Front;