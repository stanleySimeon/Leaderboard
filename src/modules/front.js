class Front {
  constructor() {
    this.listContainer = document.querySelector('.listContainer');
    this.user = document.getElementById('username');
    this.score = document.getElementById('score');
  }

  arrayToFront(array) {
    this.listContainer.innerHTML = '';
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