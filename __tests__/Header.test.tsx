import {render, screen} from '@testing-library/react'
import Header from '@/components/Header'

test("Displays the header on the screen", () => {
    render(<Header />)

    const headerH1Element = screen.getByText(/personality test/i)
    //feedback: 
    //it should test that there is only one H1 on the page
    //const headerH1Element = screen.getByRole("heading", {level:1, name:/personality test/i})
    expect(headerH1Element).toBeInTheDocument()

    const headerPElement = screen.getByText(/by dobeen kim/i)
    expect(headerPElement).toBeInTheDocument()
})

test("Displays the brain icon in the header", () => {
    render(<Header />)

    const iconElement = screen.getByTestId("brain-icon")
    expect(iconElement).toBeInTheDocument()
    //feedback:
    //If it is image, I use getByRole because the image has an accessible name through its alt attribute, which makes the test closer to how a user interacts with the UI.
    // const iconElement = screen.getByRole("img")
    // expect(iconElement.getAttribute("src")).toBe("./brain.png")
    // expect(iconElement.getAttribute("alt")).toBe("brain")
    //If it is import <Brain /> from lucide, it correct to use getByTestId
})

