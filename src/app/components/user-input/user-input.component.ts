import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput } from '../../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<investmentInput>();
  enteredInitialInvestiment = '0';
  enteredAnnualInvestiment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestiment,
      annualInvestment: +this.enteredAnnualInvestiment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
    });
  }
}
