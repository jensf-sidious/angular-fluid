import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
}                                     from '@angular/forms';
import { MatDialogModule }            from '@angular/material/dialog';
import { MatFormFieldModule }         from '@angular/material/form-field';
import { MatButtonModule }            from '@angular/material/button';
import { MatInputModule }             from '@angular/material/input';
import { MatCardModule }              from '@angular/material/card';
import { MatToolbarModule }           from '@angular/material/toolbar';
import { MatIconModule }              from '@angular/material/icon';
import { MatTableModule }             from '@angular/material/table';
import { MatGridListModule }          from '@angular/material/grid-list';
import { MatRadioModule }             from '@angular/material/radio';
import { MatSelectModule }            from '@angular/material/select';
import { MatListModule }              from '@angular/material/list';
import { MatExpansionModule }         from '@angular/material/expansion';
import { MatTooltipModule }           from '@angular/material/tooltip';
import { MatSnackBarModule }          from '@angular/material/snack-bar';
import { MatSortModule }              from '@angular/material/sort';
import { MatCheckboxModule }          from '@angular/material/checkbox';
import { MatSidenavModule }           from '@angular/material/sidenav';
import { MatBottomSheetModule }       from '@angular/material/bottom-sheet';
import { MatMenuModule }              from '@angular/material/menu';
import { MatProgressSpinnerModule }   from '@angular/material/progress-spinner';
import { MatProgressBarModule }       from '@angular/material/progress-bar';
import { MatRippleModule }            from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSortModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule
  ],
  declarations: [],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSortModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule
  ]
})
export class MaterialModule {}
