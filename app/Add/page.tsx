export default function Home() {
    return (
    <div className="questionaire">
        <label htmlFor = "questionText">Please Enter the Question: </label>
        <input id= "questionText" type="text" placeholder="Enter the question"></input>

        <br></br>
        <label htmlFor = "trueButton">True</label>
        <input name = "answer" id = "trueButton" type="radio" value = "True"/>
        <label htmlFor = "falseButton">false</label>
        <input name = "answer" id = "FalseButton" type="radio"value = "False" />
        <br></br>
      
        <button type="submit">Submit</button>
    </div>
    );
  }