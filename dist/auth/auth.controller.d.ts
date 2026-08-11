import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateAuthDto: UpdateAuthDto): any;
    remove(id: string): any;
}
