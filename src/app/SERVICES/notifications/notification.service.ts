import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showSuccess(message:string, title:string) :void{
    console.log('Success: ${{title}} - ${message}');
  }
  showError(message:string, title:string) :void{
    console.log('Error: ${{title}} - ${message}');
  }
  showInfo(message:string, title:string) :void{
    console.log('Info: ${{title}} - ${message}');
  }


  
}
