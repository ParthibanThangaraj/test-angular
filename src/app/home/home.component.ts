import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {

  property: string;
  opration: string;
  value: string;


}
const ELEMENT_DATA: PeriodicElement[] = [
  {property: "", opration: "", value: "", },



];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['property',  'opration','value',];
  dataSource = ELEMENT_DATA;
  base64File: any;
  filename: any;
  states: string[] = [
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]
   adaptor: string[] = [
    "",
  "Account",
  "Accruals",
  "AcctImport",
  "Administrator_Maintenance",
  "ADOWrapper",
  "Advantage",
  "Allocation",
  "ALTPATHS",
  "AppServers",
  "AR",
  "Archive",
  "Authorization",
  ];

  tablArray:string[]=[
    "AppServers",
  "AR",
  "Archive",
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader()
      fReader.readAsDataURL(file)
      fReader.onloadend = (_event: any) => {
        this.filename = file.name;
        this.base64File = _event.target.result;
      }
    } catch (error) {
      this.filename = null;
      this.base64File = null;
      console.log('no file was selected...');
    }
  }
  someMethod(value: any, element: any) {
    console.log("selected value", value);
    console.log("selected element", element);
    element.symbol = value;
  }
}
