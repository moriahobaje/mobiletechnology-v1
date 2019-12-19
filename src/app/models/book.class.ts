export class Books {

      private title: string = ''; 
      private firstName: string = '';
      private lastName: string = '';
      private author: string = ''; 
      private isbn: string = ''; 
      department?: string = ''; 

      set Title(value:string)
      {
        this.title = value; 
      }

      get Title()
      {
        return this.title; 
      }
      
      get Author() {
          // return this.firstName + ' ' + this.lastName;
          return `${this.firstName} ${this.lastName}`;
        }

        set FirstName(value: string) {
          if (!value) {
            this.firstName = value;
            return;
          }

          let name = value.toLocaleLowerCase();
          name = name[0].toLocaleUpperCase() + name.substr(1);

          this.firstName = name;
        }

        get FirstName() {
          return this.firstName;
        }

        set LastName(value: string) {
          if (!value) {
            this.lastName = value;
            return;
          }

          let name = value.toLocaleLowerCase();
          name = name[0].toLocaleUpperCase() + name.substr(1);

          this.lastName = name;

          this.lastName = value;
        }

        get LastName() {
          return this.lastName;
        }

      set ISBN(value:string)
      {
        this.isbn = value; 
      }

      get ISBN()
      {
        return this.isbn; 
      }

      set Department(value:string)
      {
        this.department = value; 
      }
      
      get Department()
      {
        return this.department;  
      }

}