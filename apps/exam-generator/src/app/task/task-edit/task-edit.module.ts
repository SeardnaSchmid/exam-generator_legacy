import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskEditComponent } from "./task-edit.component";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ExamSubTaskComponent } from "./exam-sub-task/exam-sub-task.component";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { ImageModule } from "primeng/image";
import { RippleModule } from "primeng/ripple";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../../shared/shared.module";
import { EditorModule } from "primeng/editor";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  declarations: [TaskEditComponent, ExamSubTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ChipsModule,
    ImageModule,
    RippleModule,
    ConfirmPopupModule,
    BrowserAnimationsModule,
    SharedModule,
    EditorModule,
    DropdownModule,
  ],
  providers: [ConfirmationService],
})
export class TaskEditModule {}
