import { Component, OnInit } from '@angular/core';
import { SucessoService } from './services/sucesso.service';
import { ActivatedRoute } from '@angular/router';
import { Sorteio } from './models/sorteio.module';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrl: './sucesso.component.css'
})
export class SucessoComponent implements OnInit{

sorteioId :any[] = [];

constructor(
  private sucessoService: SucessoService,
  private activateRouter: ActivatedRoute
){}

  ngOnInit(){
    this.sucessoService.findAllSorteios().subscribe((data)=>{
      this.sorteioId = data['response'];
    })
  }

}
