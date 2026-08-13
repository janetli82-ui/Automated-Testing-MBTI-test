import {render, screen} from '@testing-library/react'
import ProgressBar from '../components/ProgressBar'

test("Displays the progress bar on the screen?", () => {
    render(<ProgressBar currentNumber={0} />)

    const progressBarElement = screen.getByRole("progressbar")
    expect(progressBarElement).toBeInTheDocument()
})

test("Calculates and applies the correct width percentage based on currentNumber", () => {
    const {rerender} = render(<ProgressBar currentNumber={0}/>)

    const renderProgressBar = screen.getByRole("progressbar")
    expect(renderProgressBar).toHaveStyle("width:25%")

    rerender(<ProgressBar currentNumber={1} />)
    expect(renderProgressBar).toHaveStyle("width:50%")
})