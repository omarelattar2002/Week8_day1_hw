// Question #1:
type CTStudent = {
    readonly id: string,
    name: string,
    age:number,
    isTired:boolean,
    projectsCompleted: string[],
    pet:string
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
    pet: 'cat'
}


let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

// Question #2:
type Fruit={
    color:string,
    shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}


function mainfruit(fruit:Fruit): string | null{
    if (fruit){
        return fruit.color ;
    }else{
        return 'You ate my fruit already';
    }
}


// console.log(mainfruit(apple))
// console.log(mainfruit(eaten))

// Question #3:
type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}

type Ebook = Book&DigitalBook

let book1: Ebook = {
    isbn:'hello world',
    title:"book1",
    author:"grrm",
    fileType:'kejqb'
}

// Question #4:
enum Size {
    small = 'small',
    medium = 'medium',
    large = 'large'
}

type ShopItem = {
    readonly id:number,
    price:number,
    description: string,
    color?:string,
    size: Size
    keywords?:string[]
}

const shoe: ShopItem = {
    id: 1,
    price: 20,
    description: "Nike air max",
    color:'black',
    size: Size.medium,
    keywords: ['Nike', 'Air', 'Max']
}

const tshirt: ShopItem= {
    id: 2,
    price: 10,
    description: "Batman Tshirt",
    color:'white',
    size:Size.small,
    keywords:['Dc', 'Bat', 'superhero']
}

const pants: ShopItem= {
    id: 3,
    price: 40,
    description: "Jeans",
    size:Size.small
}