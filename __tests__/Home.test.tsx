import {fireEvent, render, screen} from '@testing-library/react'
import Home from '@/app/page'


test("Is there first question and progress bar", () => {
    render(<Home/>)

    const questionElement = screen.getByText(/question 1/i)
    expect(questionElement).toBeInTheDocument()

    const progressBarElement = screen.getByRole("progressbar")
    expect(progressBarElement).toHaveStyle("width:25%")
})

test("Does the question go to the next question and the progress bar change to 50% when the user clicks an answer", () => {
    render(<Home />)

    const buttons = screen.getAllByRole("button")
    fireEvent.click(buttons[0])

    expect(screen.getByText (/question 2/i)).toBeInTheDocument()
    expect(screen.getByRole("progressbar")).toHaveStyle("width:50%")
})


test("Dose result display after quiz?", () => {
    render(<Home  />)

    for(let i=0; i < 4; i++) {
        const optionButton= screen.getAllByRole("button")
        fireEvent.click(optionButton[0])
    }

    const resultTitle = screen.getByText(/Your Result/i)
    expect(resultTitle).toBeInTheDocument()
})

