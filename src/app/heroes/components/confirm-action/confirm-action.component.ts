import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Hero } from '../../typings/Hero';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styles: [],
})
export class ConfirmActionComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly hero: Hero,
    private readonly dialogRef: MatDialogRef<ConfirmActionComponent>
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  removeHero(): void {
    this.dialogRef.close(true);
  }
}
