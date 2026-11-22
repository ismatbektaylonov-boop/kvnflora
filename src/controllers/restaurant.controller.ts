import { Request, Response } from 'express'
import { MemberType } from '../libs/enums/member.enum'
import { T } from '../libs/types/common'
import { LoginInput, MemberInput } from '../libs/types/member'
import MemberService from '../models/Member.service'

const restauntController: T = {}

restauntController.goHome = (req: Request, res: Response) => {
	try {
		console.log('Home Page')
		res.render('home')
	} catch (err) {
		console.log('Error, goHome:', err)
	}
}

restauntController.getLogin = (req: Request, res: Response) => {
	try {
		console.log('Login Page')
		res.render('login')
	} catch (err) {
		console.log('Error, getLogin:', err)
	}
}

restauntController.getSignup = async (req: Request, res: Response) => {
	try {
		console.log('Signup Page')
		res.render('signup')

		const newMember: MemberInput = req.body
		newMember.memberType = MemberType.RESTAURANT

		const memberService = new MemberService()
		const result = await memberService.processSignup(newMember)

		res.send(result)
	} catch (err) {
		console.log('Error, getSignup:', err)
	}
}

restauntController.processLogin = async (req: Request, res: Response) => {
	try {
		console.log('process Login')
		console.log('body:', req.body)
		const input: LoginInput = req.body

		const memberService = new MemberService()
		const result = await memberService.processLogin(input)

		res.send(result)
	} catch (err) {
		console.log('Error, processLogin:', err)
		res.send(err)
	}
}

restauntController.processSignup = (req: Request, res: Response) => {
	try {
		console.log('process Signup')
		res.send('DONE')
	} catch (err) {
		console.log('Error, processSignup:', err)
		res.send(err)
	}
}

export default restauntController
