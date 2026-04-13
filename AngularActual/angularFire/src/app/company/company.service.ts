// src/app/company/company.service.ts
import {Injectable} from '@angular/core';
import {Company} from '../models/company';
import {Observable} from 'rxjs';
import {deleteDoc, doc, docData, Firestore, setDoc, updateDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  constructor(private db: Firestore) {
  }

  // A method to retrieve the document as an Observable
  getCompanyObservable(): Observable<Company | undefined> {
    return docData(this.getCompanyDocRef()) as Observable<Company>;
  }

  // A method to save the company document
  async saveCompany(company: Company) {
    // setDoc() is the modern function to save a document
    await setDoc(this.getCompanyDocRef(), company);
  }

  // A method to perform a partial update (non-destructive)
  async editCompany(company: any) {
    // updateDoc() is the modern function for a partial update.
    await updateDoc(this.getCompanyDocRef(), company);
  }


  // A helper to get the document reference
  private getCompanyDocRef() {
    return doc(this.db, 'companies/company');
  }
  // A method to delete a document
  async deleteCompany() {
    // deleteDoc() is the modern function for deleting a document.
    await deleteDoc(this.getCompanyDocRef());
  }
}