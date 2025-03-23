import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent {
  agendamento = {
    cliente: '',
    data: '',
    horario: ''
  };

  onSubmit() {
    console.log('Atendimento agendado:', this.agendamento);
  }
}
