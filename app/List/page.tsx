
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
function valToText(val:number){
    if(val == 1){
        return "True"
    }
        
    else{
        return "False"
    }
    


}

export default async function Home() {
    const cardsl = await prisma.cards.findMany();
    const cardEl = cardsl.map((cards) => <li>ID:{cards.id} - {cards.question} Answer: {valToText(cards.is_true)} Known Value: {cards.known}</li>)
    return (
    <main>
        {cardEl}
    </main>
    );
}