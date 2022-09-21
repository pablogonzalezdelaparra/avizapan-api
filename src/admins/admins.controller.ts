import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(private readonly Adminservice: AdminsService) { }

    /* Get all admins */
    @Post()
    async sayAdminAllowed(@Body() body) {
        var admin = await this.Adminservice.returnAdminAllowed(body.username, body.password);
        if (admin){
            return admin.id;
        } else{
            return null
        }
    }
}
