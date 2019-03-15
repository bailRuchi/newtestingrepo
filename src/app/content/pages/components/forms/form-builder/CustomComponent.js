import BaseComponent from 'formiojs/components/base/Base';
import TableComponent from 'formiojs/components/table/Table';
import Components from 'formiojs/components/Components';

export default class CustomComponent extends BaseComponent {

  static schema() {
    return BaseComponent.schema({
      type: 'textfield',
      input: 'true',
      key: "textField2",
      customClass: "abc",
    });
  }

  /**
   * Register this component to the Form Builder by providing the "builderInfo" object.
   */
  static get builderInfo() {
    return {
      title: 'textfield',
      group: 'basic',
      icon: 'fa fa-envelope-open',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#table',
      schema: CustomComponent.schema(),
    };
  }

  /**
   * Tell the renderer how to build this component using DOM manipulation.
   */
  build() {
    // this.element = this.ce('div', {
    //   class: 'table-responsive'
    // });
    // this.createLabel(this.element);

    // var tableClass = 'table ';
    // ['striped', 'bordered', 'hover', 'condensed'].forEach(function(prop) {
    //   if (this.component[prop]) {
    //     tableClass += `table-${prop} `;
    //   }
    // }.bind(this));

    // var table = this.ce('table', {
    //   class: tableClass
    // });

    // Build the body.
    // var tbody = this.ce('tbody');
    // this.inputs = [];

    // for (let i = 0; i < this.component.numRows; i++) {
    //   var tr = this.ce('tr');
    //   this.checks.push([]);
    //   for (let j = 0; j < this.component.numCols; j++) {
    //     var td = this.ce('td');
    //     this.checks[i][j] = this.ce('input', {
    //       type: 'checkbox'
    //     });
    //     this.addInput(this.checks[i][j], td);
    //     tr.appendChild(td);
    //   }
    //   tbody.appendChild(tr);
    // }
    // table.appendChild(tbody);
    // this.element.appendChild(table);
  }
}

// Use the table component edit form.
CustomComponent.editForm = TableComponent.editForm;
// Register the component to the Formio.Components registry.
Components.addComponent('input', CustomComponent);

