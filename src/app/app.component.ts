import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProposComponent } from './propos/propos.component';
import { AccueilleComponent } from './accueille/accueille.component';
import { ProduitsComponent } from './produits/produits.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,ProposComponent,AccueilleComponent,ProduitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'projet-angular';
}
