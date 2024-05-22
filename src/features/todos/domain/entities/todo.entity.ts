// src\features\todos\domain\entities\todo.entity.ts

import { ValidationError, ZERO } from '../../../../core';

export class TodoEntity {
	constructor(
		public id: number,
		public text: string,
		public isCompleted: boolean = false
	) {}

	public static fromJson(obj: Record<string, unknown>): TodoEntity {
		const { id, text, isCompleted = false } = obj;
		if (!id) throw new ValidationError([{ constraint: 'id is required', fields: ['id'] }]);
		if (!text || (text as string).length === ZERO) {
			throw new ValidationError([{ constraint: 'text is required', fields: ['text'] }]);
		}
		return new TodoEntity(id as number, text as string, isCompleted as boolean);
	}
}
