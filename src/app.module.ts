import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [CommentModule, ReportModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
