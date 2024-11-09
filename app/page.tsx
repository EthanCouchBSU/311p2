

import { PrismaClient} from '@prisma/client'
import Link from "next/link";





let curKnown = 0;
let curId = 0;
let curText = "";
let curCorAns = 0;
let selKnown = 0;

const prisma = new PrismaClient();






function getRandomInt(min:number,max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//add the current dif value to the cards known val and update
function chooseAnswer(chosenAnswer:number){
  if (chosenAnswer == curCorAns){
    curKnown+= selKnown
  }else{
    curKnown-= selKnown
  }
  updateCardVar(curKnown)
  
}
//get id of current card and update its known value
async function updateCardVar(ammountKnown:number) {
  await prisma.cards.update({
    where: {id: curId},
    data: {known: ammountKnown}
  })
  

}

function chooseDif(chosenDif:number){
  selKnown = chosenDif
}

async function updateQuestion() {
  /*algorithm for retrieving next question. Sorts list by ammount known
  then randomly picks a question in bottom 2/3rd of list (non known), 
  or a question in top 1/3rd of list (known)

  */
  
  const cardsSortByKnown = await prisma.cards.findMany({
    orderBy: [{known:'asc'}]
  })
  let curCardRoll
  const curSegRoll = getRandomInt(0,2)
  
  //get known card 1/3 of time
  if (curSegRoll == 0){
    curCardRoll = getRandomInt(Math.floor(cardsSortByKnown.length*(2/3)),cardsSortByKnown.length) 
  }else{
    //else get card in bottom half of list
    curCardRoll = getRandomInt(0,Math.floor(cardsSortByKnown.length*(2/3)))
  }
  
  
  curText = cardsSortByKnown[curCardRoll].question;
  curId = cardsSortByKnown[curCardRoll].id;
  curCorAns = cardsSortByKnown[curCardRoll].is_true;
  curKnown = cardsSortByKnown[curCardRoll].known

}
function trial(){
  
  
  return {__html: curText};
  
}
export default async function Home() {
  updateQuestion()
  
  return (

   <div className="memoryContainer">
    <div className="difButtonsContainer">
    <form // Buttons to select points assigned to correct answers
      action={async () => {
      "use server";
      await chooseDif(1);
      }}>
      <button className="ansButton">Easy</button>
    </form>
    <form
      action={async () => {
      "use server";
      await chooseDif(2);
      }}>
      <button className="ansButton">Medium</button>
    </form>
    <form
      action={async () => {
      "use server";
      await chooseDif(3);
      }}>
      <button className="ansButton">Hard</button>
    </form>
          </div>
    
    <div id = "questionContainer" className="QuestionContainer" 
    dangerouslySetInnerHTML={trial()}>
    
    </div>

    <div className="answerButtonsContainer">
    <form //buttons to pick true or false
      action={async () => {
      "use server";
      await chooseAnswer(1);
      }}>
      <button className="ansButton">True</button>
    </form>

    <form
      action={async () => {
      "use server";
      await chooseAnswer(0);
      }}>
      <button className="ansButton">False</button>
    </form>

      <Link href='/'>Next Question</Link>
    </div>

    
    
   </div>
  );
}
