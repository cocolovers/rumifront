import type { ILogRepository } from './repository/ILogRepository';

export interface IRepository {
	logs: ILogRepository;
}