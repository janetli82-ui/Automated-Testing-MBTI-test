import {render, screen} from '@testing-library/react'
import Header from '../components/Header'

test("Displays the header on the screen", () => {
    render(<Header />)

    const headerH1Element = screen.getByText(/personality test/i)
    expect(headerH1Element).toBeInTheDocument()

    const headerPElement = screen.getByText(/by dobeen kim/i)
    expect(headerPElement).toBeInTheDocument()
})

test("Displays the brain icon in the header", () => {
    render(<Header />)

    const iconElement = screen.getByTestId("brain-icon")
    expect(iconElement).toBeInTheDocument()
})

