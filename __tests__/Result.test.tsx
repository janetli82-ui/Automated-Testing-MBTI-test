import { fireEvent, render, screen} from '@testing-library/react'
import Result from '@/components/Result'

const mockResultData = {
        title:"Strategic Architect",
        description: "Thoughtful planner with a clear strategy for everything."
    }

test("Displays the result title and description", () => {
    render(
        <Result resultData={mockResultData} reStart={() =>{}} />)

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

