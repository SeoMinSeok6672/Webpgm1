const container = document.createElement('div');
container.className = 'container';

const heading = document.createElement('h1');
heading.textContent = '저를 소개합니다.';

const name = document.createElement('p');
name.innerHTML = '<strong>이름:</strong> 서민석';

const department = document.createElement('p');
department.innerHTML = '<strong>학과:</strong> 소프트웨어 학과';

const interests = document.createElement('p');
interests.innerHTML = '<strong>관심사:</strong> 축구, 게임, 프로그래밍';

container.appendChild(heading);
container.appendChild(name);
container.appendChild(department);
container.appendChild(interests);

document.body.appendChild(container);
