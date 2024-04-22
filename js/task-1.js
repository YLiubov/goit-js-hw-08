const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(category => {
    const titleElement = category.querySelector('h2');
    const title = titleElement.textContent;
    const count = category.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Number of categories: ${count}`);

    category.style.display = 'flex';
    category.style.padding = '16px';
    category.style.flexDirection = 'column';
    category.style.alignItems = 'flex-start';
    category.style.gap = '16px';
    category.style.borderRadius = '8px';
    category.style.background = '#f6f6fe';
    category.style.width = '100%';
    category.style.color = '#2e2f42';
    category.style.fontFamily = 'Montserrat';
    category.style.fontSize = '16px';
    category.style.fontStyle = 'normal';
    category.style.fontWeight = '400';
    category.style.lineHeight = '1.5';
    category.style.letterSpacing = '0.04em';

    titleElement.style.color = '#2e2f42';
    titleElement.style.fontFamily = 'Montserrat';
    titleElement.style.fontSize = '24px';
    titleElement.style.fontStyle = 'normal';
    titleElement.style.fontWeight = '600';
    titleElement.style.lineHeight = '1.33';
    titleElement.style.letterSpacing = '0.25em';
    titleElement.style.margin = '0';

    const listItems = category.querySelectorAll('li');
    listItems.forEach(li => {
        li.style.listStyle = 'none';
        li.style.alignItems = 'start';
        li.style.paddingLeft = '16px';
        li.style.paddingTop = '8px';
        li.style.marginBottom = '8px';
        li.style.borderRadius = '4px';
        li.style.border = '1px solid #808080';
        li.style.width = '360px';
        li.style.height = '40px';
    });
});