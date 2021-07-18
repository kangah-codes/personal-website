import { Terminal } from "termy-the-terminal";
import { exampleFileSystem } from "../data/data";

export const clear = {
	exec: ({ structure, history, cwd }, command) => {
		return { structure, cwd, history: [] };
	},
};

const MyTerminal = () => {
	return (
		<Terminal
			fileSystem={exampleFileSystem}
			inputPrompt="pygd0d@kangah.codes$"
		/>
	);
};

export default MyTerminal;
