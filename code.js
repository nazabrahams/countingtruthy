addBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value) {
      if (!values.includes(value)) {
        values = [...values, value];
      }
      input.value = '';
      error.textContent = '';
      input.focus();
    } else {
      error.textContent = 'Enter a value';
    }
  });
  
  countBtn.addEventListener('click', () => {
    const truthy = values.filter(Boolean);
    result.textContent = `Number of truthy values: ${truthy.length}`;
    Container.innerHTML = '';
    truthy.forEach((value) => {
      const para = document.createElement('p');
      para.textContent = value;
      Container.appendChild(para);
    });
  });