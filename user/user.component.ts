import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { Inject, Injectable } from '@angular/core';
import { OrderDetailComponent } from 'app/order/orderDetail.component';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/common';
import { ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms';
import { EncryptionService } from '@shared/services/encryption.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public users = [];
  gender: string
  dob: string;
  redeemableCoins: number = 0;
  totalCoins: number = 0;
  User_id: string
  FirstName: string
  Dob: string
  City: string
  State: string
  ContactNumber: number
  Email: string
  LastName: string
  Age: number
  Country: string
  HouseNo: string
  TotalBets: number
  image: string
  genderImage: string
  inputvalue: number



  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService, private _EncryptionService: EncryptionService) { }

  ngOnInit() {
    this.userService.fUser()
      .subscribe(data => this.users = data)



    document.getElementById("user").style.display = "none";
    // document.getElementById("red-inp").style.display = "none";
    this.inputvalue = (<HTMLInputElement>document.getElementById("red-inp")).valueAsNumber;
  }
  fetchUser() {


    for (var i in this.users) {

      var inputValue = (<HTMLInputElement>document.getElementById("contact")).value;
      if (this.users[i].ContactNumber == inputValue) {
        //console.log(this.users[i].ContactNumber);
        this.redeemableCoins = this.users[i].RedeemableCoins;
        this.totalCoins = this.users[i].TotalCoins;
        this.FirstName = this.users[i].FirstName;
        this.LastName = this.users[i].LastName;
        this.Email = this.users[i].Email;
        this.State = this.users[i].State;
        this.City = this.users[i].City;
        this.User_id = this.users[i].User_id;
        this.Age = this.users[i].Age;
        this.Country = this.users[i].Country;
        this.HouseNo = this.users[i].HouseNo;
        this.TotalBets = this.users[i].TotalBets;
        this.ContactNumber = this.users[i].ContactNumber;
        this.Dob = this.users[i].Dob;
        this.gender = this.users[i].Gender;
        this.image = "https://www.pngkey.com/png/detail/230-2301779_best-classified-apps-default-user-profile.png";
        document.getElementById("user").style.display = "block";
        document.getElementById("basic-addon2").style.backgroundColor = "#1a8cff";
        if (this.gender == 'MALE') {
          this.genderImage = "https://image.flaticon.com/icons/svg/291/291208.svg";
        }
        else {
          this.genderImage = "https://image.flaticon.com/icons/svg/291/291209.svg";
        }
        break;
      }
    }

  }

  update() {
    this.totalCoins = this.totalCoins + this.redeemableCoins;
    this.redeemableCoins = 0;
  }

  add() {
    this.inputvalue = (<HTMLInputElement>document.getElementById("red-inp")).valueAsNumber;
    //document.getElementById("red-inp").style.display = "block";
    this.redeemableCoins += this.inputvalue
    this.totalCoins += this.inputvalue;

  }
  sub() {
    //document.getElementById("red-inp").style.display = "block";
    this.inputvalue = (<HTMLInputElement>document.getElementById("red-inp")).valueAsNumber;
    this.redeemableCoins -= this.inputvalue
    this.totalCoins -= this.inputvalue;

  }
  addT() {
    this.inputvalue = (<HTMLInputElement>document.getElementById("red-inpT")).valueAsNumber;

    this.totalCoins += this.inputvalue;
  }
  subT() {
    this.inputvalue = (<HTMLInputElement>document.getElementById("red-inpT")).valueAsNumber;

    this.totalCoins -= this.inputvalue;
  }

}
