import { Component, Input } from '@angular/core';
import { Branch } from 'src/app/shared/interface/branch';

@Component({
  selector: 'app-branch-shape',
  templateUrl: './branch-shape.component.html',
  styleUrls: ['./branch-shape.component.scss']
})
export class BranchShapeComponent {
  @Input() branch: Branch;
  onReturnLocation(latitude: number, longitude: number) {
   return 'https://www.google.com/maps/@' + latitude + ',' + longitude + ',18z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D';
  }
}

