import {fireEvent, render, screen} from '@testing-library/react'
import Home from '@/app/page'

//feedback:
//I will add an entire flow test to verify the complete user journey
//test("should allow users to complete the entire quiz process", () => {
//    render(<Home/>)
//use data-testId because so many another buttons in pages   
//     for (let i = 0; i < 4; i++) {
//       expect(screen.getByText(`QUESTION ${i + 1}`)).toBeInTheDocument()
//       const options = screen.getAllByTestId("option-button")
//       fireEvent.click(options[0]) 
//     }

//     expect(screen.getByText(/bold commander/i)).toBeInTheDocument()
//     expect(screen.getByText(/Imaginative and strong-willed leader, always finding a way./i)).toBeInTheDocument()

//     fireEvent.click(screen.getByText("Test again"))
//     expect(screen.getByText(/question 1/i )).toBeInTheDocument()
// })

test("Is there first question and progress bar", () => {
    render(<Home/>)
//feedback: This only tests the question title. Should also verify that all answer options are present
    const questionElement = screen.getByText(/question 1/i)
    expect(questionElement).toBeInTheDocument()
//use data-testId because so many another buttons in pages
// const options = screen.getAllByTestId("option-button")
// expect(options).toHaveLength(2) 
// expect(options[0]).toHaveTextContent("Contact friends and hang out together.")
// expect(options[1]).toHaveTextContent("Stay home alone to relax and recharge.")
    const progressBarElement = screen.getByRole("progressbar")
    expect(progressBarElement).toHaveStyle("width:25%")
})

test("Does the question go to the next question and the progress bar change to 50% when the user clicks an answer", () => {
    render(<Home />)
//use data-testId because so many another buttons in pages
//const buttons = screen.getAllByTestId("option-button")
    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])
//Question 1 → Question 2
    expect(screen.getByText (/question 2/i)).toBeInTheDocument()
//const secondQuestionOptions = screen.getAllByTestId("option-button")
//expect(secondQuestionOptions).toHaveLength(2) 
    expect(screen.getByRole("progressbar")).toHaveStyle("width:50%")
})


test("Does result display after quiz?", () => {
    render(<Home  />)  
//feedback: use data-testId because so many another buttons in pages
    for(let i=0; i < 4; i++) {
        expect(screen.getByText(`QUESTION ${i + 1}`)).toBeInTheDocument()
//const optionButton = screen.getAllByTestId("option-button")
        const optionButton= screen.getAllByRole("button")
        fireEvent.click(optionButton[0])
    }

     const resultTitle = screen.getByText(/Your Result/i)
     expect(resultTitle).toBeInTheDocument()
    //  expect(screen.getByText(/Imaginative and strong-willed leader, always finding a way./i)).toBeInTheDocument()
    //  const restartButton = screen.getByText("Test again")
    //  expect(restartButton).toBeInTheDocument()
})

