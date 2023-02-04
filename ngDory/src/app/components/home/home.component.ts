
import { Component } from '@angular/core';
import { DivingLog } from 'src/app/models/diving-log';
import { DivingLogService } from 'src/app/services/diving-log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selected : null | DivingLog = null;
  logs: DivingLog[] = [];
  editDivingLog: DivingLog | null = null;

  newDivingLog: DivingLog = new DivingLog();


   constructor(private divingLogService : DivingLogService){}

   ngOnInit() {
    this.reload();
   }

   getNumberofDives() {
    return (this.logs).length;
   }

   reload() {
    this.divingLogService.index().subscribe({
      next: (diveLogList) => {
        this.logs = diveLogList;
      },
      error: (err) => {
        console.error('Error loading diving log list: ');
        console.error(err);
      }
    })
   }

   displayLog(divingLog : DivingLog) {
    this.selected = divingLog;
   }

   displayTable() {
    this.selected = null;
  }

  addLog(log: DivingLog) {
    // this.todos = this.todoService.index();
    this.divingLogService.create(log).subscribe({
      next: (data) => {
        this.newDivingLog = new DivingLog();
        this.reload();
      },

      error: (nojoy) => {
        console.error('TodoListComponent.addTodo: Error creating todo');
        console.error(nojoy);
      }
    });
  }

  setEditDivingLog() {   this.editDivingLog = Object.assign({}, this.selected);
}
updateDivingLog(log: DivingLog, goToDetail = true): void {
  //const completedDate = this.datePipe.transform(Date.now(), 'shortDate'); // 8/24/1999
  this.divingLogService.update(log).subscribe({
    next: (updatedDivingLog) => {
      if (goToDetail) {
        this.selected = updatedDivingLog;
      }
      else {
        this.selected = null;
      }
      this.editDivingLog = null,
    this.reload();
    },
    error: (toobad) => {
      console.error('DivingLogListComponent.updateLog: error updating');
      console.error(toobad);
    }
  });
}
deleteLog(id:number) {
  this.divingLogService.destroy(id).subscribe({
    next: () => {
      this.reload();
    },

    error: (fail) => {
      console.error('DivingLogComponent.deleteTodo: error deleting:')
      console.error(fail);
    }
  });

}
}
