import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto } from './dto/signIn.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService){}
    
    @Post('/signIn')
    @HttpCode(HttpStatus.OK)
    siginIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto)
    }
}
