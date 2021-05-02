@Component({
  selector: 'app-icon',
  template: '',
  styleUrls: ['./example-tel-input-example.css'],
  providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }]
})
export class MyTelInput implements MatFormFieldControl<MyTel> {
}