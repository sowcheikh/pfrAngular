import {ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: User[] = [];
  headElements = ['id', 'avatar', 'nom', 'prenom', 'email', 'profile', 'action'];

  searchText = '';
  previous: string;

  users: User[];

  maxVisibleItems = 6;

  constructor(private cdRef: ChangeDetectorRef, private userService: UserService,
              private router: Router) {}

  // tslint:disable-next-line:typedef
  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    for (let i = 1; i <= 25; i++) {
      // tslint:disable-next-line:max-line-length
      this.userService.getAllUser().subscribe(
        (res) => {
         // this.elements = res;
          this.mdbTable.setDataSource(res);
          this.elements = this.mdbTable.getDataSource();
          // console.log(res);
        }
      );
    }

    console.log(this.elements);
    this.previous = this.mdbTable.getDataSource();
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  // tslint:disable-next-line:typedef
  addNewRow() {
    this.mdbTable.addRow({
      id: this.elements.length.toString(),
      first: 'nom ' + this.elements.length,
      last: 'prenom ' + this.elements.length,
      email: 'email@ ' + this.elements.length
    });
    this.emitDataSourceChange();
  }

  // tslint:disable-next-line:typedef
  removeLastRow() {
    this.mdbTable.removeLastRow();
    this.emitDataSourceChange();
    this.mdbTable.rowRemoved().subscribe((data: any) => {
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  removeRow() {
    this.mdbTable.removeRow(1);
    this.mdbTable.getDataSource().forEach((el: any, index: any) => {
      el.id = (index + 1).toString();
    });
    this.emitDataSourceChange();
    this.mdbTable.rowRemoved().subscribe((data: any) => {
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  emitDataSourceChange() {
    this.mdbTable.dataSourceChange().subscribe((data: any) => {
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();

    this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    });
  }

  // tslint:disable-next-line:typedef
  updateUser(user: User) {
    window.localStorage.removeItem('editUserId');
    window.localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }

  deleteUser(user: User): void {
    this.userService.delete(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }
}
