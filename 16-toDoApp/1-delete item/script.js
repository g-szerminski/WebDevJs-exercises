const removeTask = (e) => {
    // console.log(e.target.textContent);
    // e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = 'line-through';
    // e.target.remove();
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
    console.log(event.target);
};

document.querySelectorAll('li').forEach(item => 
    item.addEventListener('click', removeTask));