import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})


export class QrCodeGeneratorComponent implements OnInit {
  @ViewChild('nameInput') imgcode: ElementRef | string = '';
  registerForm: FormGroup<any>;
  imagen:string = '';
  preValue:string = '';
  constructor(
    private fb: FormBuilder, 
    private router: Router) { 
    this.registerForm = this.fb.group({ 
      qrcode: ['', Validators.required]
    }); 
    const wrapper = document.querySelector(".wrapper");
    const generateBtn = document.querySelector("#generateBtn");
    const imgcode = document.querySelector("#imgcode");
    const qrcode = document.querySelector("#qrcode");
    let preValue="";
    generateBtn?.addEventListener("click", ()=> {
      let qrValue = qrcode?.textContent?.trim();
      if(!qrValue || preValue === qrValue) return; 
      preValue = qrValue;
      generateBtn.innerHTML = "Generating QR Code...";
      if(imgcode != null){
        //imgcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        this.imagen = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        imgcode.addEventListener("load", () => {
          wrapper?.classList.add("active");
          if(generateBtn != null)
            generateBtn.innerHTML = "Generating QR Code..."; 
        });
      }
      
    });

    
    qrcode?.addEventListener("keyup", () => {
      if(!qrcode.textContent?.trim()){
        wrapper?.classList.remove("active");

      }
    });
  }
  
  ngOnInit(): void {
  }

  keyFunc(x:any){
    const wrapper = document.querySelector(".wrapper");
    const qrcode = this.registerForm.getRawValue().qrcode;
    if(!qrcode.textContent?.trim()){
      wrapper?.classList.remove("active");
    }
  }

  generarQR(wrapper:any, generateBtn:any){
    if(!this.registerForm.valid){
      return;
    }
    console.log('entro')
    const qrcode = this.registerForm.getRawValue().qrcode;
    let qrValue = qrcode.trim();
    if(!qrValue || this.preValue === qrValue) return; 
    this.preValue = qrValue;
    generateBtn.innerHTML = "Generating QR Code...";
    
    console.log('imgcode')
    //imgcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    this.imagen = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    wrapper.classList.add("active");
    generateBtn.innerHTML = "Generating QR Code..."; 
      
  }

  
}
