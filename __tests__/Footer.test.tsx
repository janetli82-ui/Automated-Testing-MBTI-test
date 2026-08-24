import {render, screen} from '@testing-library/react'
import Footer from '@/components/Footer'

test("Displays the Footer on the screen", () => {
    render(<Footer />)

    const footerPElement = screen.getByText(/Dobeen Kim/i)
    expect(footerPElement).toBeInTheDocument()
    // feedback:
    // This test confirms that the text exists, but it does not verify
    // that the text is inside an actual footer element.
    //
    // const footerElement = screen.getByRole("contentinfo");
    // expect(footerElement).toBeInTheDocument();
  
    // feedback:
    // It could also test the complete footer text instead of only
    // searching for the creator's name.
    //
    // const footerElement = screen.getByRole("contentinfo");
    // expect(footerElement).toHaveTextContent("Personality Test by Dobeen Kim");

})