const lighter1 = {
    name: "Awesome red lighter",
    img: "static/img/lighter.jpg",
    price: 300,
    weight: 200,
    color: "red",
    used: false,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, quaerat!",
};

const lighter2 = {
    name: "Perfect wooden lighter",
    img: "static/img/lighter2.jpg",
    price: 800,
    weight: 10,
    color: "brown",
    used: false,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, quaerat!",
};

const catalog = {
    items: [lighter1, lighter2],

    init() {
        window.addEventListener('DOMContentLoaded', (_event) => this.renderCatalog());
        document.addEventListener('click', (event) => this.clickHandler(event))
    },

    renderCatalog() {
        const parent = document.getElementById('catalog');
        for (let i = 0; i < this.items.length; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-card';
            itemDiv.style.border = "3px solid black";
            parent.appendChild(itemDiv);

            const h = document.createElement('h3');
            h.innerText = `${this.items[i].name} for only ${this.items[i].price} $`;
            itemDiv.appendChild(h);

            const img = document.createElement('img');
            img.setAttribute('src', this.items[i].img);
            img.style.width = '100px';
            itemDiv.appendChild(img)

        }
    },

    clickHandler(event) {

    },
}


catalog.init()
