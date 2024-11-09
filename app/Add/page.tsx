import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


async function truncate(){
    
    'use server'
    
    await prisma.cards.deleteMany({where: {}})
}


//add card to database, convert t/f sting to int, and id is auto increment
async function addCard(formData:FormData){
    
    'use server'
    const value = parseInt(formData.get("answer"), 10)
    
    await prisma.cards.create({
        data:{
            
            question: formData.get("qAnswer"),
            is_true: value,
            known: 0
        }

    })

}


export default async function Home() {
    return (
    <div className="questionaire">
        
        <form action= {addCard}>
        <label className= "addPrompt"htmlFor = "questionText">Please Enter the Question: </label>
        <input name = "qAnswer" id= "questionText" type="text" placeholder="Enter the question"></input>

        <br></br>
        <label className= "addPrompt" htmlFor = "trueButton">True </label>
        <input name = "answer" id = "trueButton" type="radio" value = "1"/>
        <label className= "addPrompt" htmlFor = "falseButton"> False </label>
        <input name = "answer" id = "FalseButton" type="radio"value =  "0"/>
        <br></br>
      
        <button className= "addButton" id="addPageSubmit"type="submit">Submit</button>
        </form>

        <form action = {truncate}>
            <button className= "addButton" id ="addPageTruncate" type="submit">Truncate List</button>
        </form>
        
    </div>
    );
  }

  