import {Observable} from 'rxjs';
import {Company} from '../../models/company';
import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CompanyService} from "../company.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-edit',
  imports: [
    CommonModule,
    AsyncPipe,
    JsonPipe,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  standalone: true,
  templateUrl: './company-edit.html',
  styleUrl: './company-edit.css'
})
export class CompanyEdit implements OnInit {
  company$: Observable<Company> | undefined;

  constructor(private companyService: CompanyService,
              private snackBar: MatSnackBar,
              private router: Router // Inject the Router service
  ) {
  }

  ngOnInit() {
  }

}
