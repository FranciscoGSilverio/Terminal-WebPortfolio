import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import Terminal from "../components/Terminal";
import user from "@testing-library/user-event";

const commandInputs = {
  aboutCommand: "about",
  unknownCommand: "aaaaa",
};

describe("Terminal output", () => {
  beforeEach(() => {
    render(<Terminal />);
  });

  it("should display the about component", async () => {
    const input = getInput();
    await user.type(input, commandInputs.aboutCommand);

    const form = getForm();
    fireEvent.submit(form);

    await waitFor(() => {
      expect(getOutput(commandInputs.aboutCommand)).toBeInTheDocument();
    });
  });

  it("should display the unknown command component", async () => {
    const input = getInput();
    await user.type(input, commandInputs.unknownCommand);

    const form = getForm();
    fireEvent.submit(form);

    await waitFor(() => {
      expect(getOutput(commandInputs.unknownCommand)).toBeInTheDocument();
    });
  });
});

const getInput = () => {
  return screen.getByRole("textbox");
};

const getForm = () => {
  return screen.getByTestId("terminalForm");
};

const getOutput = (command: string) => {
  if (command === "about") {
    return screen.getByText(/my name is francisco silvério/i);
  } else if (command === "aaaaa") {
    return screen.getByText(/command not found!/i);
  }
  // return screen.findByTestId("About");
};
