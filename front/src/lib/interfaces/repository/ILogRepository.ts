type TMessageLog = (message: string) => void;

export interface ILogRepository {
	log: TMessageLog;
	debug: TMessageLog;
	error: TMessageLog;
}