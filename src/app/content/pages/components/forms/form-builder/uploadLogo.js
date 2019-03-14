import BaseComponent from 'formiojs/components/base/Base';
import TableComponent from 'formiojs/components/table/Table';
import Components from 'formiojs/components/Components';

export default class UploadLogo extends BaseComponent {


	static schema() {
		return BaseComponent.schema({
			type: 'content',
			numRows: 1,
			label: "uploadImage",
			html: "",
			storage: "base64",
		});
	}

	/**
	 * Register this component to the Form Builder by providing the "builderInfo" object.
	 */
	static get builderInfo() {
		return {
			title: 'CheckMatrix',
			group: 'basic',
			icon: 'fa fa-table',
			weight: 70,
			schema: UploadLogo.schema()
		};
	}

	/**
	 * Tell the renderer how to build this component using DOM manipulation.
	 */
	build() {
		this.element = this.ce('input', {
			class: 'form-control'
		});
		this.createLabel(this.element);

		var uploadImage = 'div ';
		['striped', 'bordered', 'hover', 'condensed'].forEach(function (prop) {
			console.log(prop)
			if (this.component[prop]) {
				uploadImage += `div-${prop} `;
			}
		}.bind(this));

		var Div = this.ce('div', {
			class: uploadImage
		});
		// Build the body.
		var tbody = this.ce('tbody');
		this.inputs = [];
		this.checks = [];
		for (let i = 0; i < this.component.numRows; i++) {
			var tr = this.ce('tr');

			this.checks.push([]);
			for (let j = 0; j < this.component.numCols; j++) {
				var td = this.ce('td');
				this.checks[i] = this.ce('input', {
					type: 'textfield'
				});
				this.addInput(this.checks[i], td);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		Div.appendChild(tbody);
		this.element.appendChild(Div);
	}

	/**
	 * Provide the input element information. Because we are using checkboxes, the change event needs to be
	 * 'click' instead of the default 'change' from the BaseComponent.
	 *
	 * @return {{type, component, changeEvent, attr}}
	 */
	elementInfo() {
		const info = super.elementInfo();
		console.log(info, "info")
		info.changeEvent = 'click';
		return info;
	}

	/**
	 * Tell the renderer how to "get" a value from this component.
	 *
	 * @return {Array}
	 */
	getValue() {
		var value = [];
		this.checks.forEach((row, rowIndex) => {
			console.log(this.checks, "checks")
			value[rowIndex] = [];
			row.forEach((col, colIndex) => {
				value[rowIndex][colIndex] = !!col.checked;
			});
		});
		return value;
	}

	/**
	 * Tell the renderer how to "set" the value of this component.
	 *
	 * @param value
	 * @return {boolean}
	 */
	setValue(value) {
		console.log(value, "value")
		if (!value) {
			return;
		}
		this.checks.forEach((row, rowIndex) => {
			if (!value[rowIndex]) {
				return false;
			}
			row.forEach((col, colIndex) => {
				if (!value[rowIndex][colIndex]) {
					return false;
				}
				let checked = value[rowIndex][colIndex] ? 1 : 0;
				col.value = checked;
				col.checked = checked;
			});
		});
	}
}

// Use the table component edit form.
UploadLogo.editForm = TableComponent.editForm;

// Register the component to the Formio.Components registry.
Components.addComponent('UploadLogo', UploadLogo);
