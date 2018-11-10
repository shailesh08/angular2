import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import { FactsComponent } from './facts/facts.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


const routes : Routes = [
  {path:'',redirectTo:'/Home',pathMatch:"full"},
  {path:'Home',component:BannerSliderComponent},
  {path:'About',component:AboutComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Portfolio',component:PortfolioComponent},
  {path:'Features',component:FeatureComponent},
  {path:'Team',component:TeamComponent},
  {path:'Pricing',component:PricingComponent},
  {path:'Contact',component:ContactComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
