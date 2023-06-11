import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { User } from '@prisma/client'

export const Currentuser = createParamDecorator((data: keyof User, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()
	const user = request.User

	return data ? user[data] : user
})
