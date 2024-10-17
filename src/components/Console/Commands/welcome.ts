export const getWelcomeMessage = (): string => {
    return `
Welcome to the JTerm Console!
   __  _____                    
   \\ \\/__   \\___ _ __ _ __ ___  
    \\ \\ / /\\/ _ \\ '__| '_ \` _ \\ 
 /\\_/ // / |  __/ |  | | | | | |
 \\___/ \\/   \\___|_|  |_| |_| |_|
                                    
Available commands:
- help: Display available commands
- ls: List files and directories
- cd: Change directory
- cat: View file contents
- suprise: Suprise!
- clear: Clear the terminal screen
- exit: Close the terminal

Type a command and press Enter to execute.

    `.trim();
};
