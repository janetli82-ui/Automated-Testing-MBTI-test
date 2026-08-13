import { fireEvent, render, screen} from '@testing-library/react'
import QA from '../components/QA'

test ("Displays the current question number", () => {
    render(<QA currentNumber={0} selectAnswer={() => {}} />)

    const questionNumberElement = screen.getByText(/QUESTION 1/i)
    expect(questionNumberElement).toBeInTheDocument()
})

test("Displays the current question?", () => {
    render(<QA currentNumber={0} selectAnswer={() => {}} />)

    const questionEelement = screen.getByText(/When you have free time on the weekend, what do you usually do?/i)
    expect(questionEelement).toBeInTheDocument()
})

test("renders the question heading element", () => {
    render(<QA currentNumber={0} selectAnswer={() => {}} />)

    const headingEelement = screen.getByRole("heading", {level:2})
    expect(headingEelement).toBeInTheDocument()
})

test("Displays two answers options for the current question?", () => {
    render(<QA currentNumber={0} selectAnswer={() => {}} />)
    
    const optionButton = screen.getAllByRole("button")
    expect(optionButton).toHaveLength(2)
})

test("Displays previous button?", () => {
    render(
        <QA 
        currentNumber={1} 
        onPrev={() => {}} 
        selectAnswer={()=>{}}
        />)

    const previousButton = screen.getByRole("button", {name:/previous/i})
    expect(previousButton).toBeInTheDocument()
})

test("Does not display previous button on the first question", () => {
    render(<QA currentNumber={0} selectAnswer={() => {}} onPrev={() => {}} />)

    const prevButton = screen.queryByRole("button",{name:/previous/i})
    expect(prevButton).toBeNull()
})

test("calls selectAnswer function when an option button is clicked", () => {
    const handleSelectMock = jest.fn()
    render(<QA currentNumber={0} selectAnswer={handleSelectMock}/>)

    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])

    expect(handleSelectMock).toHaveBeenCalledTimes(1)
})

test("Does not display result text during quiz", () => {
    render(<QA currentNumber={0} selectAnswer={()=>{}} />)

    const resultTitle = screen.queryByText(/Your Result/i);

    expect(resultTitle).toBeNull();
})



