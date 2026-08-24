import {render, screen} from '@testing-library/react'
import Footer from '@/components/Footer'

test("Displays the Footer on the screen", () => {
    render(<Footer />)

    const footerPElement = screen.getByText(/Dobeen Kim/i)
    expect(footerPElement).toBeInTheDocument()
})