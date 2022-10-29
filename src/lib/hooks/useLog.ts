export const useLog = () => ({
	log: (tag: string, message: string) => console.log(tag, message),
	debug: (tag: string, message: string) => console.debug(tag, message),
	error: (tag: string, message: string) => console.error(tag, message)
});