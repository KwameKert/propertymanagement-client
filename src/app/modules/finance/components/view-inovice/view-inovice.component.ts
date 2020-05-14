import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-inovice',
  templateUrl: './view-inovice.component.html',
  styleUrls: ['./view-inovice.component.css']
})
export class ViewInoviceComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<ViewInoviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }


}
