import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    title: string,
    message: string
}

@Component({
    selector: 'app-message-dialog',
    templateUrl: './message-dialog.component.html',
    styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent {

    constructor(public dialogRef: MatDialogRef<MessageDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}