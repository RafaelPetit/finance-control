import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/signIn.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}
    
    async signIn  (signInDto: SignInDto) : Promise<any>{
        const user = await this.userService.findByEmail(signInDto.email)
        if(!user) throw new NotFoundException('User not found');
        console.log(user)

        const passwordMatch = await bcrypt.compare(signInDto.password, user.password)
        if(!passwordMatch) throw new UnauthorizedException('Invalid Credentials');

        const payload = {sub: user.id}

        return {access_token: await this.jwtService.signAsync(payload)}
    }
}
