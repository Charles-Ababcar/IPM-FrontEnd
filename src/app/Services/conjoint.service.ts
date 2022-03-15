import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Conjoint } from '../Models/Conjoint';
import { Employe } from '../Models/Employe';

@Injectable({
  providedIn: 'root'
})
export class ConjointService {

  constructor(private http:HttpClient) {
   }

   public AjoutConjoint(conjoint){
    console.log(conjoint);
    return this.http.post(environment.URL+'conjoint',conjoint,{responseType: 'text' as 'json'})
  }
  listeConjoint(idemp: number) : Observable<any>{
    return this.http.get<any>(environment.URL+'getconjointByid/'+idemp);
  }
  public getConjoint(){
     return this.http.get(environment.URL+'conjoint');
  }
   public getEmploye():Observable<Employe[]>{
     return this.http.get<Employe[]>(environment.URL+'employe');
   }
  public getConjointById(idconj: number):Observable<Conjoint>{
    return this.http.get<Conjoint>(environment.URL+'conjoint/'+idconj) 
   
  }

  // uploadFile(file:File):Observable<any>{
  //   const formData: any= new FormData();
  //   // console.log("file.name :"+file.name) 
  //   // console.log("file.size :"+file.size) 
  //   formData.append('image', file,file.name);
  //   return this.http.post(environment.URL+"upload/",formData);

  // }
  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}
