import { Log } from '../repository/Log';
import type { IRepository } from '../interfaces/IRepository';

const repository: IRepository = {
	logs: new Log()
};

export default repository;