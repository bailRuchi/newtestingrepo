import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { SubheaderService } from '../../../../../core/services/layout/subheader.service';
import { field } from '../../../../../../assets/builderComponent'
import { userJson } from '../../../../../../assets/userJsonData'
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataToResolverService } from '../../../../../core/services/get-data-to-resolver.service'
import { TranslationService } from '../../../../../core/services/translation.service';
import { ApiService } from '../../../../../core/services/api.service';
import { LayoutConfigService } from '../../../../../core/services/layout-config.service';
declare var $: any;
import { Field_Hi, Form_Hi, Button_Hi } from '../../../../../config/i18n/component_hi';
import { Field_En, Form_En, Button_En } from '../../../../../config/i18n/component_en';
import { Formio } from 'formiojs';
import { Location } from '@angular/common';
import './uploadLogo';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
	selector: 'm-form',
	templateUrl: './form-builder.component.html',
	styleUrls: ['./form-builder.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormCreateComponent implements OnInit, AfterViewInit {
	@ViewChild('json') jsonElement?: ElementRef;
	selectedView = 'mobile';
	FormjsonData;
	isValue: boolean;
	disableData: any;
	view = 'phoneview';
	public form: Object = {}
	public config: any;
	formTemplate = {};
	buttonTitle = "Save Form";
	imageBase64:string;
	constructor(
		private router: Router,
		private configService: LayoutConfigService,
		private subheaderService: SubheaderService,
		private translate: TranslateService,
		private route: ActivatedRoute,
		private formDataService: GetDataToResolverService,
		private translationService: TranslationService,
		private apiService: ApiService,
		private location: Location
	) {
		if (this.route.snapshot.params.id) {
			this.buttonTitle = "Update Form";
		}
	}
	async ngOnInit() {
		this.translationService.updateLang.subscribe(res => {
			this.setToolbarInComponentListAndTranslate(res);
		})

		try {
			// if (this.route.snapshot.data) {
			// 	this.FormjsonData = this.route.snapshot.data;
			// 	this.form['components'] = JSON.parse(this.FormjsonData.message);
			// }
			if (this.route.snapshot.params.id) {
				if (localStorage.getItem('canActivate')) {
					this.FormjsonData = userJson;
					console.log(this.FormjsonData, "!!!!");
					this.form['components'] = this.FormjsonData.userData;
				}
			}
		}
		catch (e) { }
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.selectedView = 'mobile';
			this.changeView();
			this.setToolbarInComponentListAndTranslate(localStorage.getItem('language'));
		})
	}

	setToolbarInComponentListAndTranslate(lang) {
		$('span[id^=builder]').each(function () { // to add title to formio icon (the thing we see when we hover over the icon)
			// console.log(" $(this).text()", $(this).prop('id'));

			if (lang == 'en') {
				var id = `#${$(this).prop('id')}`;
				var getHtmlOnCurrentId = $(`#${$(this).prop('id')}`).html();
				var getDataToAppand = (getHtmlOnCurrentId.split('</i>'));
				var title = Field_En.basicComponent[`#${$(this).prop('id')}`];
				$(this).attr('title', title);
				$(id).html(`${getDataToAppand[0]}</i>${title}`);
			} else {
				var id = `#${$(this).prop('id')}`;
				var getHtmlOnCurrentId = $(`#${$(this).prop('id')}`).html();
				var getDataToAppand = (getHtmlOnCurrentId.split('</i>'));
				var title = Field_Hi.basicComponent[`#${$(this).prop('id')}`];
				$(this).attr('title', title);
				$(id).html(`${getDataToAppand[0]}</i>${title}`);
			}
		});

		$('div[id^=group-panel]').each(function () {
			if (lang == 'en') {
				let title = $(this).prop('id');
				if (Button_En[title.trim()]) {
					$(this).find('button').text(Button_En[title]);
				}
			} else {
				let title = $(this).prop('id');
				if (Button_Hi[title.trim()]) {
					$(this).find('button').text(Button_Hi[title]);
				}
			}
		})
		this.changeComponentList();
	}
	async onChange(event) {
		this.translateForm(localStorage.getItem('language'));
		try {
			this.jsonElement.nativeElement.innerHTML = '';
			this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
			this.formDataService.setFormRenderData(JSON.stringify(event.form['components'], null, 4))
			this.formTemplate = JSON.stringify(event.form['components'], null, 4);
			localStorage.setItem("event", JSON.stringify(event.form.components, null, 4))
		}
		catch (e) {

		}
	}

	saveForm() {
		$('.fa-cog').click();
		$('.formio-dialog-overlay').click();
	}
	editForm() {
	}
	reset() {
		this.form = {};
	}
	translateForm(lang) {
		$('label[class^=control-label]').each(function () {
			let title = $(this).text().trim();
			if (lang == 'en') {
				if (Form_En['data'][title]) {
					$(this).text(Form_En['data'][title])
				}
			} else {
				if (Form_Hi['data'][title]) {
					$(this).text(Form_Hi['data'][title])
				}
			}
		})
	}

	// Change Layout mobile,i-pad,-desktop
	changeView() {
		const formioBuilder = $(".form-io-altered").find(".formarea.drag-container");
		if (this.selectedView == 'mobile') {
			if ($(".form-io-altered").find(".form-io-Ipad").length) {
				formioBuilder.unwrap();
			}
			formioBuilder.wrap('<div class="form-io-mobile col-xs-8 col-sm-9 col-md-10"></div>');
			// formioBuilder.wrap('<div class=""><img  src="../../../../../../assets/img/Mann-India-logo-new.png"></div>');
		} else if (this.selectedView == "i-pad") {
			if ($(".form-io-altered").find(".form-io-mobile").length) {
				formioBuilder.unwrap();
			}
			formioBuilder.wrap('<div class="form-io-Ipad col-xs-8 col-sm-9 col-md-10"></div>');
		} else {
			formioBuilder.unwrap();
		}
	}
	// Change formComponent icon or grid
	gridIcon() {
		this.isValue = false;
		$('.formcomponents').removeClass('icon-view');
	}
	icon() {
		this.isValue = true;
		$('.formcomponents').addClass('icon-view');
	}

	formRender() {
		this.router.navigate(["/form-render"])
	}

	changeComponentList() {
		const data = field.basicComponent.filter(e => {
			if (e.show == false) {
				$(e.id).addClass("formcomponentsDisplay");
			}
		})
	}


}