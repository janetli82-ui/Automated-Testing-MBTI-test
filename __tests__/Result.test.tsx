import { fireEvent, render, screen} from '@testing-library/react'
import Result from '@/components/Result'

const mockResultData = {
        title:"Strategic Architect",
        description: "Thoughtful planner with a clear strategy for everything."
    }

test("Displays the result title and description", () => {
    render(
        <Result resultData={mockResultData} reStart={() =>{}} />)
  //feedback:
  //since the header already uses <h1>, the Result component should NOT use <h1> as well. It can be changed to <h3> because the QA component already uses <h2>
  //expect(screen.getByRole("heading",{level:3 })).toHaveTextContent("Strategic Architect")
    expect(screen.getByRole("heading",{level:1 })).toHaveTextContent("Strategic Architect")
    expect(screen.getByText(/Thoughtful planner with a clear strategy for everything/i)).toBeInTheDocument()
})

test("calls reStart function when 'Test again' button is clicked", () => {
    const handleRestartMock = jest.fn()
    render(<Result resultData={mockResultData} reStart={handleRestartMock} />)

    const reStartButton = screen.getByRole("button", {name:/test again/i})
    fireEvent.click(reStartButton)

    expect(handleRestartMock).toHaveBeenCalledTimes(1)
})

