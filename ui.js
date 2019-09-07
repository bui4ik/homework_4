// обертка для всего приложения
const drawWrapper = () =>{
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.id = 'wrapper';
    document.getElementById('body').appendChild(wrapper);
};

// контейнер для каждого типа структур
const drawContainer = (names, parentNode) => {
    const wrapper = document.getElementById(parentNode);
    names.map(el => {
        const container = document.createElement('div');
        container.className = 'container';
        container.id = `container-${el}`;
        wrapper.appendChild(container);
    });
};

// кнопка для каждого типа структур
const drawButton = (names, app) =>{
    names.map(el => {
        const parentNode = document.getElementById(`container-${el}`);
        const button = document.createElement('button');
        button.className = 'button-ui';
        button.id = `${el}-button`;
        button.innerText = el;
        button.onclick = () => app.createForm(parentNode);
        parentNode.append(button);
    })
};

// форма
const drawForm = (parentNode, id) => {
    const form = document.createElement('div');
    form.className = 'form';
    form.id = `form-${id}`;
    parentNode.appendChild(form);
};

// кнопка удаления формы
const drawCloseButton = (id) => {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-button';
    closeBtn.id = `close-btn-${id}`;
    closeBtn.innerText = 'x';
    closeBtn.onclick = () =>{
        document.getElementById(`form-${id}`).remove()
    };
    document.getElementById(`form-${id}`).appendChild(closeBtn);
};

// область отрисовки структуры данных
const drawContentArea = (id) => {
    const content = document.createElement('div');
    content.className = 'content';
    content.id = `content-${id}`;
    document.getElementById(`form-${id}`).appendChild(content);
};

//инпут для значения элемента в структуре
const drawInput = (id) =>{
    const input = document.createElement('input');
    input.className = 'input';
    input.id = `input-${id}`;
    document.getElementById(`form-${id}`).appendChild(input);
};

// кнопка добавления элемента
const drawPlusButton = (id) => {
    const plusBtn = document.createElement('button');
    plusBtn.className = 'small-button';
    plusBtn.id = `plus-btn-${id}`;
    plusBtn.innerText = '+';
    const value = document.getElementById(`input-${id}`).value;
    plusBtn.onclick = () => app.pushToStack(id,value);
    document.getElementById(`form-${id}`).appendChild(plusBtn);
};

// кнопка удаления элемента
const drawMinusButton = (id) => {
    const minBtn = document.createElement('button');
    minBtn.className = 'small-button';
    minBtn.id = `minus-btn-${id}`;
    minBtn.innerText = '-';
    minBtn.onclick = () => app.popFromStack(id);
    document.getElementById(`form-${id}`).appendChild(minBtn);
};
