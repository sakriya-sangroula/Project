let bookList = ["Pride and Prejudice by Jane Austen",
  "Frankenstein by Mary Shelley",
  "Moby Dick by Herman Melville",
  "Jane Eyre by Charlotte Brontë",
  "The Count of Monte Cristo by Alexandre Dumas",
  "Crime and Punishment by Fyodor Dostoevsky",
  "Anna Karenina by Leo Tolstoy",
  "Great Expectations by Charles Dickens",
  "To Kill a Mockingbird by Harper Lee",
  "1984 by George Orwell",
  "The Great Gatsby by F. Scott Fitzgerald",
  "One Hundred Years of Solitude by Gabriel García Márquez",
  "Brave New World by Aldous Huxley",
  "The Catcher in the Rye by J.D. Salinger",
  "Beloved by Toni Morrison",
  "Slaughterhouse-Five by Kurt Vonnegut",
  "The Stranger by Albert Camus",
  "Things Fall Apart by Chinua Achebe",
  "The Lord of the Rings by J.R.R. Tolkien",
  "Dune by Frank Herbert",
  "The Hitchhiker's Guide to the Galaxy by Douglas Adams",
  "A Wizard of Earthsea by Ursula K. Le Guin",
  "Neuromancer by William Gibson",
  "The Handmaid's Tale by Margaret Atwood",
  "Foundation by Isaac Asimov",
  "Kindred by Octavia E. Butler",
  "Parable of the Sower by Octavia E. Butler",
  "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
  "The Diary of a Young Girl by Anne Frank",
  "Man's Search for Meaning by Viktor Frankl",
  "A Brief History of Time by Stephen Hawking",
  "The Immortal Life of Henrietta Lacks by Rebecca Skloot",
  "Educated by Tara Westover",
  "In Cold Blood by Truman Capote",
  "Thinking, Fast and Slow by Daniel Kahneman",
  "Between the World and Me by Ta-Nehisi Coates",
  "The Kite Runner by Khaled Hosseini",
  "Life of Pi by Yann Martel",
  "The Secret History by Donna Tartt",
  "Never Let Me Go by Kazuo Ishiguro",
  "The God of Small Things by Arundhati Roy",
  "Wolf Hall by Hilary Mantel",
  "Americanah by Chimamanda Ngozi Adichie",
  "Circe by Madeline Miller",
  "The Poisonwood Bible by Barbara Kingsolver",
  "And Then There Were None by Agatha Christie",
  "The Big Sleep by Raymond Chandler",
  "The Silence of the Lambs by Thomas Harris",
  "Gone Girl by Gillian Flynn",
  "The Girl with the Dragon Tattoo by Stieg Larsson"]
let studentId=[]
let count = 0
let borrowedBooks = {}
let currentStudent=null
const studentid_input= document.querySelector(".std_id_input")
const studentid_btn=document.querySelector(".std_id_btn")
const id_form=document.querySelector(".form_id")
const book_form = document.querySelector(".book_form")
const book_input = document.querySelector(".book_input")
const book_btn = document.querySelector(".book_btn")
const back_btn = document.querySelector(".back_btn")
studentid_btn.addEventListener("click",function(event){
event.preventDefault()
    let id = studentid_input.value
    if (id==""||id<1||id>5000){
        alert("Enter a valid id" )
         return}
        studentid_input.value=""
        count++
        for (let i=0;i<count;i++){
           if(studentId[i]==id){
            alert("Duplicate ID!!!")
            return
           }
        }
         studentId.push(id)
         borrowedBooks[id] = borrowedBooks[id] || []
         currentStudent=id
         
         id_form.classList.add("hide")
         book_form.classList.remove("hide")
         
    })
    book_btn.addEventListener("click",function(event){
        event.preventDefault() 
    
        let bookname = book_input.value
        book_input.value=""
            if (borrowedBooks[currentStudent].length >= 5) {
      alert("Book limit reached for this student")
      return
    }
    let bookFound=false
        for (i=0;i< bookList.length;i++){
            if(bookList[i]==bookname){
                borrowedBooks[currentStudent].push(bookname)
            let bookdata= {
                student:currentStudent,
                book:bookname,
                DOT:Date(),
                fine:"RS 100 perday after 45 days "}
                console.log(bookdata)
                bookList.splice(i,1)
                bookFound=true
                break
            }
        }
        if(bookFound==false){
          alert("book unavilable")
        }
    })
    back_btn.addEventListener('click', function (event) {
  event.preventDefault();
  book_form.classList.add("hide");
  id_form.classList.remove("hide");

  currentStudent = null;
});