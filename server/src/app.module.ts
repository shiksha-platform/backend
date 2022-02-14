import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService, dbConfigService } from './app.service';
import { AttendanceModule } from './Attendance/attendance.module';
import { ConfigurationModule } from './configs/configuration.module';
import { HolidayModule } from './holiday/holiday.module';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';
import { TeacherModule } from './teacher/teacher.module';
import { TimetableModule } from './Timetable/timetable.module';
import { GroupModule } from './group/group.module';
import { SchoolModule } from './school/school.module';
import { GroupMembershipModule } from './groupMembership/groupMembership.module';
import { AdminConfigModule } from './adminConfig/adminConfig.module';
import * as typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(),
    StudentModule,HolidayModule,ConfigurationModule,AttendanceModule,TimetableModule,TeacherModule,SchoolModule,GroupModule,GroupMembershipModule,AdminConfigModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
