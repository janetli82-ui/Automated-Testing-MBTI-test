import { fireEvent, render, screen } from "@testing-library/react";
import QA from "@/components/QA";

test("Displays the current question number", () => {
  render(<QA currentNumber={0} selectAnswer={() => {}} />);

  const questionNumberElement = screen.getByText(/QUESTION 1/i);
  expect(questionNumberElement).toBeInTheDocument();
});

test("Displays the current question?", () => {
  render(<QA currentNumber={0} selectAnswer={() => {}} />);

  const questionEelement = screen.getByText(
    /When you have free time on the weekend, what do you usually do?/i,
  );
  expect(questionEelement).toBeInTheDocument();
});

test("renders the question heading element", () => {
  render(<QA currentNumber={0} selectAnswer={() => {}} />);

  const headingEelement = screen.getByRole("heading", { level: 2 });
  expect(headingEelement).toBeInTheDocument();
});

//feedback: This test only shows that there are two buttons, but it doesn't verify what the button labels are, or whether they correspond to the current question.
test("Displays two answers options for the current question?", () => {
  render(<QA currentNumber={0} selectAnswer={() => {}} />);

  const optionButton = screen.getAllByRole("button");
  expect(optionButton).toHaveLength(2);
//expect(optionButton[0]).toHaveTextContent("Contact friends and hang out together.")
//expect(optionButton[1]).toHaveTextContent("Stay home alone to relax and recharge.")
});

//feedback: missing test state when you select option
//test("selects option and updates state", () => {
//   const mockSelectAnswer = jest.fn() 
//   const { rerender } = render(<QA currentNumber={0} selectAnswer={mockSelectAnswer} />)
//   expect(screen.getByText(/when you have free time on the weekend, what do you usually do/i)).toBeInTheDocument()
//   const buttons = screen.getAllByRole("button");
//   fireEvent.click(buttons[0])
//   expect(mockSelectAnswer).toHaveBeenCalledTimes(1)

//   rerender(<QA currentNumber={1} selectAnswer={mockSelectAnswer} />)
//   expect(screen.getByText(/when starting a new project, what is your approach/i)).toBeInTheDocument()
//   expect(screen.queryByText(/when you have free time on the weekend, what do you usually do/i)).not.toBeInTheDocument()
// })


test("Displays previous button?", () => {
  render(<QA currentNumber={1} onPrev={() => {}} selectAnswer={() => {}} />);

  const previousButton = screen.getByRole("button", { name: /previous/i });
  expect(previousButton).toBeInTheDocument();
});

test("Does not display previous button on the first question", () => {
  render(<QA currentNumber={0} selectAnswer={() => {}} onPrev={() => {}} />);

  const prevButton = screen.queryByRole("button", { name: /previous/i });
  expect(prevButton).toBeNull();
});

test("calls selectAnswer function when an option button is clicked", () => {
  const handleSelectMock = jest.fn();
  render(
    <QA currentNumber={0} selectAnswer={handleSelectMock} onPrev={() => {}} />,
  );

  const buttons = screen.getAllByRole("button");
  fireEvent.click(buttons[0]);

  expect(handleSelectMock).toHaveBeenCalledTimes(1);
});


test("Does not display result text during quiz", () => {
  render(<QA currentNumber={0} selectAnswer={() => {}} onPrev={() => {}} />);

  const resultTitle = screen.queryByText(/Your Result/i);

  expect(resultTitle).toBeNull();
});
