import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AppMainService } from 'src/app/services/app-main.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls:[
    './modal.component.scss'
  ]
})
export class ModalComponent implements OnInit, AfterViewInit {
  closeResult = '';

  title: string = 'היי! אם זו פעם ראשונה שלך כאן, כדאי שתקרא\\י את ההערות הבאות...'

  text: string = '';

  closeBtnText: string = 'קראתי והבנתי';

  @ViewChild('content') content!: ElementRef<HTMLElement>;

  constructor(private modalService: NgbModal, private appMainService: AppMainService) {}

  ngOnInit(): void {
    this.appMainService.getReadmeFileText().subscribe(
      data => {
        data.text().then(
          text => {
            this.text = text;
          }
        );
      }
    )
  }

  ngAfterViewInit(): void {
    if (!sessionStorage.getItem('modalChecked')) {
      this.open();
    }
  }

  open() {
    this.modalService.open(this.content, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}