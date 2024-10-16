export const getWelcomeMessage = (): string => {
    return `
Welcome to the JTerm Console!

Available commands:
- help: Display available commands
- ls: List files and directories
- cd: Change directory
- cat: View file contents
- clear: Clear the terminal screen
- exit: Close the terminal


Type a command and press Enter to execute.
    `.trim();
};